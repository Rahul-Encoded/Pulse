import Skeleton from "./skeleton";

export default function MediaSkeleton() {
  return (
    <div className="flex flex-col items-center gap-1">
      <Skeleton className="h-20 w-20 rounded-lg" />
      <Skeleton className="h-3 w-16" />
    </div>
  );
}
