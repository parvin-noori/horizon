import { Card, Skeleton } from "@heroui/react";

export default function LoadingItems() {
  return (
    <Card className="p-3 h-full dark:bg-secondary" shadow="none">
      <Skeleton className="rounded-lg">
        <div className="h-32 rounded-lg bg-default-300" />
      </Skeleton>
      <div className="space-y-5 mt-2">
        <div className="flex justify-between items-center w-full">
          <div className="space-y-3 mt-2 w-full">
            <Skeleton className="w-3/5 rounded-lg h-3 bg-default-300" />
            <Skeleton className="w-2/5 rounded-lg h-3 bg-default-300" />
          </div>
          <div className="-space-x-3 mt-2 flex items-center">
            <Skeleton className="w-2/5 rounded-full size-10 bg-default-300" />
            <Skeleton className="w-2/5 rounded-full size-10 bg-default-300" />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <Skeleton className="w-2/5 rounded-lg h-3 bg-default-300" />
          <Skeleton className="w-2/5 rounded-full h-9 bg-default-300" />
        </div>
      </div>
    </Card>
  );
}
