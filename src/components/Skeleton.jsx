import { cn } from "../utils";

function Skeleton({ className, bgColor = "bg-muted", ...props }) {
  return (
    <div
      className={cn("animate-pulse rounded-md", bgColor, className)}
      {...props}
    />
  );
}

export default Skeleton;
