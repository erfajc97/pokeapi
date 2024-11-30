import React from "react";
import { Card, CardBody, CardHeader, Skeleton } from "@nextui-org/react";

const SkeletonCard = () => {
  return (
    <Card className="py-2 w-[800px] h-[500px]">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
        <Skeleton className="h-8 w-3/4 rounded-lg mb-2" />
        <div className="flex gap-2">
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
        </div>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <div className="flex flex-col items-center gap-6">
          <Skeleton className="rounded-lg">
            <div className="h-24 w-24 lg:h-80 lg:w-80 bg-slate-500" />
          </Skeleton>
          <div className="grid grid-cols-4 gap-4 w-full">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-2 rounded-lg"
              >
                <Skeleton className="h-4 w-16 rounded mb-2" />
                <Skeleton className="h-6 w-10 rounded" />
              </div>
            ))}
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default SkeletonCard;
