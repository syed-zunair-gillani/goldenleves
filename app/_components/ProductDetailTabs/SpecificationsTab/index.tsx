const SpecificationsTab = ({data}:any) => {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: data?.acf?.specifications}}/>
    </>
  );
};

export default SpecificationsTab;
