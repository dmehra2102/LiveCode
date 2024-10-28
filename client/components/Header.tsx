"use client";

import Image from "next/image";
import CustomSelect from "./CustomSelect";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { languageList } from "@/constants/language-list";
import CreateRoomModal from "@/components/CreateRoomModal";

const Header = () => {
  const pathname = usePathname();
  const [isLanguageDropdownVisible, setIsLanguageDropdownVisible] =
    useState<boolean>(false);

  useEffect(() => {
    const path = pathname.split("/").filter((item) => item.length);
    if (path && path.length === 2 && path.includes("live")) {
      setIsLanguageDropdownVisible(true);
    }
  }, [pathname]);

  return (
    <div className="h-16 fixed w-full z-10 bg-black flex items-center justify-between px-6 py-2 border-b border-gray-700">
      <div className="flex items-center gap-2">
        <Image
          src={"/logo.svg"}
          alt="logo svg"
          width={36}
          height={36}
          className="object-contain"
        />
        <div className="bg-clip-text text-[38px] font-heading text-transparent bg-gradient-to-r from-primary to-purple-500">
          L<span className="text-[24px]">ive</span>C
          <span className="text-[24px]">ode</span>
        </div>
      </div>

      <div className="flex items-center gap-6">
        {isLanguageDropdownVisible && (
          <CustomSelect
            itemList={languageList}
            placeholder="Language"
            selectLabelText="Select Language"
          />
        )}
        <CreateRoomModal>
          <Button className="bg-violet-700 font-code" size={"lg"}>
            Start Now
          </Button>
        </CreateRoomModal>
      </div>
    </div>
  );
};

export default Header;
