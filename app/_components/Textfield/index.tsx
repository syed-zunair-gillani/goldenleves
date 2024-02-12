const Textfield = ({ className, ...props }: any) => {
  return (
    <div className={className}>
      {props?.label && (
        <label
          className="inline-block text-white font-normal pb-[6px]"
          htmlFor={props?.name}
        >
          {props?.label}
        </label>
      )}
      <input
        {...props}
        className={`bg-transparent border border-solid border-[#A1A1A1] rounded-lg h-[42px] px-3 py-2 text-white block w-full ${className}`}
      />
    </div>
  );
};

export default Textfield;
