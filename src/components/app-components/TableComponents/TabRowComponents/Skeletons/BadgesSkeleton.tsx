import Skeleton from "./skeleton";

export default function BadgesSkeleton() {
  return (
    <div className="flex justify-between w-full items-center mt-1">
      <div className="flex items-center gap-2">
        <Skeleton className="h-6 w-16 rounded-full" />
        <Skeleton className="h-6 w-16 rounded-full" />
        <Skeleton className="h-6 w-16 rounded-full" />
        <Skeleton className="h-6 w-16 rounded-full" />
      </div>
      <Skeleton className="h-6 w-14 rounded-full" />
    </div>
  );
}
