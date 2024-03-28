const SpecificationsTab = ({data}:any) => {
  return (
    <>
      <div className="specification" dangerouslySetInnerHTML={{ __html: data?.acf?.specifications}}/>
    </>
  );
};

export default SpecificationsTab;
