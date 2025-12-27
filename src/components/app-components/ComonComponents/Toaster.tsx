export default function Toaster({
  icon,
  className,
  message,
}: {
  icon: React.ReactNode;
  className: string;
  message: string;
}) {
  return (
    <div className={className + " flex items-center gap-2"}>
      {icon}
      <span>{message}</span>
    </div>
  );
}
