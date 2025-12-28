import Skeleton from "./skeleton";

export default function NameSkeleton() {
  return (
    <div className="flex items-center gap-2">
      <Skeleton className="h-5 w-24" />
      <Skeleton className="h-5 w-16" />
    </div>
  );
}
