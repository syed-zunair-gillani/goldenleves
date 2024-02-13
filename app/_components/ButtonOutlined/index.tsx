import { GoldenBorderWrapper } from "..";

const ButtonOutLined = ({ children, onClick = () => {}, ...rest }: any) => {
  return (
    <GoldenBorderWrapper borderRadius={8}>
      <button
        {...rest}
        type="button"
        className="w-full golden-gradient-text py-3 px-[34px]"
      >
        {children}
      </button>
    </GoldenBorderWrapper>
  );
};

export default ButtonOutLined;
