import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const CodeEditorSkeleton = () => {
  return (
    <div>
      <Skeleton className="h-[calc(100vh-68px)] w-[98vw] mx-auto rounded-xl" />
    </div>
  );
};

export default CodeEditorSkeleton;
