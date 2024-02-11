const DescriptionTab = ({data}:any) => {
  return (
    <div>
      <h5 className="text-xl leading-[34px] golden-gradient-text pb-[6px]">
        Description
      </h5>
      <div dangerouslySetInnerHTML={{ __html: data?.description}}/>
    </div>
  );
};

export default DescriptionTab;
