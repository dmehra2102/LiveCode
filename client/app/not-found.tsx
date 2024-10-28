"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center gap-3 min-h-[calc(100vh-164px)]">
      <Image
        src={"/not-found.svg"}
        alt="not-found-svg"
        width={160}
        height={160}
        className="object-contain"
      />
      <h2 className="font-heading text-5xl">Page Not Found</h2>
      <Button
        className="text-lg sm:text-xl mt-2 bg-violet-900"
        size={"2xl"}
        variant={"outline"}
        onClick={() => router.push("/")}
      >
        Back to HomePage
      </Button>
    </div>
  );
}
