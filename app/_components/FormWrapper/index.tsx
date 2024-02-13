import { ReactNode } from "react";

const FormWrapper = ({
  children,
  title,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className="p-4 md:p-8 bg-[#111111] rounded-2xl">
      <h3 className="golden-gradient-text font-normal text-[32px] leading-[42px] pb-6">
        {title}
      </h3>
      {children}
    </div>
  );
};

export default FormWrapper;
