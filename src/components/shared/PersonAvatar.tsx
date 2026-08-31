interface PersonAvatarProps {
  name: string;
  size?: "sm" | "lg";
}

export default function PersonAvatar({ name, size = "sm" }: PersonAvatarProps) {
  const initial = name.charAt(0).toUpperCase();
  const circleSize = size === "lg" ? "w-28 h-28" : "w-20 h-20";
  const textSize = size === "lg" ? "text-6xl" : "text-4xl";

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[oklch(0.16_0.055_253)]">
      <div
        className={`${circleSize} rounded-full border border-[oklch(0.65_0.1_73)]/30 flex items-center justify-center`}
      >
        <span
          className={`font-heading ${textSize} font-semibold text-[oklch(0.65_0.1_73)] select-none leading-none`}
        >
          {initial}
        </span>
      </div>
    </div>
  );
}
