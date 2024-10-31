"use client";

import Image from "next/image";
import CustomSelect from "./CustomSelect";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { useAppContext } from "@/contexts/AppContext";
import CreateRoomModal from "@/components/CreateRoomModal";
import { languageList, ProgrammingLanguage } from "@/constants/language-list";

const Header = () => {
  const pathname = usePathname();
  const [isLangDropdownVisible, setIsLangDropdownVisible] = useState<boolean>(false);
  const { selectedLanguage, setSelectedLanguage } = useAppContext();

  const handleLanguageChange = (value: string) => {
    if (value) {
      setSelectedLanguage(value as ProgrammingLanguage);
    }
  };

  useEffect(() => {
    const path = pathname.split("/").filter(item => item.length);
    if (path && path.length === 2 && path.includes("live")) {
      setIsLangDropdownVisible(true);
    }
  }, [pathname]);

  return (
    <div className='h-16 fixed w-full z-10 bg-black flex items-center justify-between px-6 py-2 border-b border-gray-700'>
      <div className='flex items-center gap-2'>
        <Image src={"/logo.svg"} alt='logo svg' width={36} height={36} className='object-contain' />
        <div className='bg-clip-text text-[38px] font-heading text-transparent bg-gradient-to-r from-primary to-purple-500'>
          L<span className='text-[24px]'>ive</span>C<span className='text-[24px]'>ode</span>
        </div>
      </div>

      <div className='flex items-center gap-6'>
        {isLangDropdownVisible ? (
          <CustomSelect
            itemList={languageList}
            value={selectedLanguage}
            placeholder='Language'
            selectLabelText='Select Language'
            onChangeFn={handleLanguageChange}
          />
        ) : (
          <CreateRoomModal>
            <Button className='bg-violet-700 font-poppins text-[15px] font-[600]'>Start Now</Button>
          </CreateRoomModal>
        )}
      </div>
    </div>
  );
};

export default Header;
