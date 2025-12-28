import Skeleton from "./skeleton";

export default function CapsSkeleton() {
  return (
    <div className="flex flex-col gap-1 items-end">
      <div className="flex gap-2 items-center">
        <Skeleton className="h-4 w-8" />
        <Skeleton className="h-4 w-12" />
      </div>
      <div className="flex gap-2 items-center">
        <Skeleton className="h-4 w-8" />
        <Skeleton className="h-4 w-12" />
      </div>
      <div className="flex gap-3 mt-1">
        <Skeleton className="h-3 w-10" />
        <Skeleton className="h-3 w-10" />
      </div>
    </div>
  );
}
