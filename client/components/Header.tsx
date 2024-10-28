import React from "react";
import { Button } from "@/components/ui/button";
import CreateRoomModal from "@/components/CreateRoomModal";
import Image from "next/image";

const Header = () => {
  return (
    <div className="h-16 fixed w-full z-10 bg-black flex items-center justify-between px-6 py-2 border-b border-gray-700">
      <div className="flex items-center gap-3">
        <Image
          src={"/logo.svg"}
          alt="logo svg"
          width={34}
          height={34}
          className="object-contain"
        />
        <div className="bg-clip-text text-[34px] font-heading text-transparent bg-gradient-to-r from-primary to-purple-500">
          L<span className="text-[22px]">ive</span>C
          <span className="text-[22px]">ode</span>
        </div>
      </div>

      <div>
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
