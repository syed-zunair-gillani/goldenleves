const ButtonContained = ({ children, onClick = () => {}, ...rest }: any) => {
  return (
    <button
      {...rest}
      type="button"
      className="py-3 px-[34px] golden-gradient-bg !text-black rounded-lg font-medium"
    >
      {children}
    </button>
  );
};

export default ButtonContained;
