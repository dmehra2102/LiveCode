import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import JoinRoomModal from "@/components/JoinRoomModal";
import CreateRoomModal from "@/components/CreateRoomModal";

const HomePage = () => {
  return (
    <div className='py-8 px-4 flex w-full flex-col items-center justify-center gap-4'>
      {/* Title and Description */}
      <div className='flex flex-col items-center justify-center w-full'>
        <h1 className='font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[90px] text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-300'>
          LiveCode
        </h1>
        <p className='text-lg font-heading sm:text-xl md:text-2xl lg:text-3xl xl:text-[44px] mt-2 text-foreground text-center'>
          Where Ideas Come to Life
        </p>
        <p className='max-w-[90%] sm:max-w-[750px] md:max-w-[850px] mt-4 font-medium text-center text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground'>
          A powerful, real-time code editor that brings your development workflow to life. Write, preview, and debug your code all in one
          place.
        </p>
      </div>

      {/* Buttons */}
      <div className='w-full flex mt-2 items-center gap-4 justify-center'>
        <CreateRoomModal>
          <Button className='font-poppins font-[500] text-lg sm:text-xl bg-violet-800' size={"2xl"} variant={"outline"}>
            Create a Room
          </Button>
        </CreateRoomModal>
        <JoinRoomModal>
          <Button className='font-poppins font-[500] text-lg sm:text-xl' size={"2xl"} variant={"outline"}>
            Join a Room
          </Button>
        </JoinRoomModal>
      </div>

      {/* Image */}
      <div className='flex items-center justify-center mt-8 w-full max-w-[95%] md:max-w-[850px] lg:max-w-[1000px] xl:max-w-[1224px]'>
        <Image
          src='https://code.visualstudio.com/assets/home/home-screenshot-copilot.png'
          alt='code-editor-image'
          className='object-contain'
          width={1224}
          height={700}
          priority
        />
      </div>
    </div>
  );
};

export default HomePage;
