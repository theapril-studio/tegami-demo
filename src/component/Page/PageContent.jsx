import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import NewsItem from "./NewsItem";
import { NewsPreviewData } from "./NewsPreviewData";

const PageContent = () => {
  return (
    <div className="flex flex-initial flex-col grow h:screen sm:h-screen max-w-[768px] lg:w-[768px] md:ease-in-out md:duration-300 ">
      <PageHeader />
      <PageBody />
    </div>
  );
};

export default PageContent;

const PageHeader = () => {
  return (
    <div className="sticky top-0 flex flex-none flex-row h-16 w-full justify-between px-4 gap-4  bg-tegami-100/90 backdrop-blur-sm">
      <div className="flex flex-none justify-center items-center">
        <h2 className="text-2xl text-tegami-800">Library</h2>
      </div>
      <div className="flex flex-initial justify-center py-3 w-1/2 lg:w-2/5">
        <div className="flex flex-row gap-3 h-auto w-full px-4 items-center border text-tegami-gray border-tegami-border rounded-full ">
          <div>
            <AiOutlineSearch size={24} />
          </div>
          <input
            className="w-full text-lg placeholder-tegami-gray text-tegami-900 border-hidden bg-transparent focus:outline-none"
            type="text"
            placeholder="Search your library"
          />
        </div>
      </div>
    </div>
  );
};

const PageBody = () => {
  return (
    <div className="flex flex-col w-full h-screen px-4 ">
      {NewsPreviewData.map((item, index) => {
        return <NewsItem key={index} newsitem={item} />;
      })}
    </div>
  );
};
