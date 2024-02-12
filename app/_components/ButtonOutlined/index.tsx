import { GoldenBorderWrapper } from "..";

const ButtonOutLined = ({ children, full, onClick = () => {}, ...rest }: any) => {
  return (
    <GoldenBorderWrapper borderRadius={8} full>
      <button
        {...rest}
        type="button"
        className="golden-gradient-text py-3 px-[34px] text-center"
      >
        {children}
      </button>
    </GoldenBorderWrapper>
  );
};

export default ButtonOutLined;
