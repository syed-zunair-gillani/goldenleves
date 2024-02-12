import { ReactNode } from "react";

const GoldenBorderWrapper = ({
  border = 1,
  borderRadius = 12,
  children,
  full
}: Readonly<{
  children: ReactNode;
  border?: number;
  borderRadius?: number;
  full: any
}>) => {
  return (
    <div
      style={{ borderRadius }}
      className={`inline-block golden-gradient-bg h-fit ${full && 'w-full'}`}
    >
      <div
        style={{ borderRadius, margin: border }}
        className={`bg-[#080808ff] shadow-md overflow-hidden`}
      >
        {children}
      </div>
    </div>
  );
};

export default GoldenBorderWrapper;
