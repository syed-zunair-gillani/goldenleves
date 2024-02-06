"use client";
import { useState } from "react";
import { ButtonOutlined } from "..";
import DescriptionTab from "./DescriptionTab";
import SpecificationsTab from "./SpecificationsTab";
import ReviewsTab from "./ReviewsTab";
const tabs = ["Description", "Specifications", "Reviews"];

const Tabs = ({ tabs }: Readonly<{ tabs: string[] }>) => {
  const [activeTab, setActiveTab] = useState(0);
  const tabsObj: any = {
    0: <DescriptionTab />,
    1: <SpecificationsTab />,
    2: <ReviewsTab />,
  };
  return (
    <div>
      <div className="flex space-x-4 bg-[#111111] p-2">
        {tabs.map((tab, index) => (
          <div
            onClick={() => setActiveTab(index)}
            key={index}
            className="flex items-center gap-3 cursor-pointer"
          >
            {activeTab === index ? (
              <ButtonOutlined borderRadius={8}>{tab}</ButtonOutlined>
            ) : (
              <p className="px-5 py-2">{tab}</p>
            )}
          </div>
        ))}
      </div>
      <div className="mt-4">{tabsObj[activeTab]}</div>
    </div>
  );
};

const ProductDetailTabs = () => {
  return (
    <div className="px-[100px] py-10">
      <Tabs tabs={tabs} />
    </div>
  );
};

export default ProductDetailTabs;
