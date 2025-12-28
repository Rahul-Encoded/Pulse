import Skeleton from "./skeleton";

export default function InfoGridSkeleton() {
  return (
    <div className="flex flex-row gap-2 items-center">
      <Skeleton className="h-4 w-8" />
      <div className="flex gap-1">
        <Skeleton className="h-4 w-4 rounded-full" />
        <Skeleton className="h-4 w-4 rounded-full" />
        <Skeleton className="h-4 w-4 rounded-full" />
      </div>
      <Skeleton className="h-4 w-20" />
    </div>
  );
}
