export default function DesktopDropdown({
  children,
  direction = "left-0",
  topBorder = true,
  arrowPosition = "middle",
  arrowSpace = 2,
}: {
  children: React.ReactNode;
  direction?: string;
  topBorder?: boolean;
  arrowPosition?: "left" | "middle" | "right";
  arrowSpace?: number;
}) {
  const arrowPos =
    arrowPosition === "left"
      ? "left-[10%]"
      : arrowPosition === "middle"
      ? "left-1/2"
      : "left-[90%]";

  const arrowSpaceNum = `-top-${arrowSpace}`;

  return (
    <div
      className={`transition-opacity duration-300 opacity-0 pointer-events-none absolute top-full ${direction}`}
    >
      <div
        className={`relative mt-6 ${
          topBorder && "border-t-2"
        } border-neutral-100 bg-neutral-950/90`}
      >
        {/* Square */}
        <div
          className={`w-6 h-6 bg-neutral-100 absolute z-0 ${arrowSpaceNum} ${arrowPos} -translate-x-2/4`}
          style={{
            clipPath: "polygon(50% 0, 0 30%, 100% 30%)",
          }}
        ></div>

        {/* Dropdown */}
        {children}
      </div>
    </div>
  );
}
