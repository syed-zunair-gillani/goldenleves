const SpecificationsTab = ({data}:any) => {
  return (
    <div>
      <div className="px-0" dangerouslySetInnerHTML={{ __html: data?.acf?.specifications}}/>
    </div>
  );
};

export default SpecificationsTab;
