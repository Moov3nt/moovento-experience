export default function Pause({
    size = "lg",
  }: {
    size?: "sm" | "md" | "lg";
  }) {
    const map = {
      sm: "h-16",
      md: "h-28",
      lg: "h-40",
    };
  
    return <div className={map[size]} />;
  }