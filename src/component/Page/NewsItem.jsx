import React from "react";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";

const NewsItem = ({ newsitem }) => {
  return (
    <div className="flex flex-col w-full h-auto gap-1 py-4">
      <NewsItemHeader newsitem={newsitem} />
      <NewsItemBody newsitem={newsitem} />
      <NewsItemFooter newsitem={newsitem} />
    </div>
  );
};

export default NewsItem;

const NewsItemHeader = ({ newsitem }) => {
  return (
    <div className="flex flex-row w-full h-auto justify-between items-center">
      <div className="flex flex-row h-auto items-center gap-1 text-tegami-500 text-base">
        <img
          className="w-4 h-4 rounded-sm overflow-hidden"
          src={
            window.location.origin + "/asset/blogicon/" + newsitem.source.avatar
          }
        />
        <p className="text-base " text-xs>
          {newsitem.source.blogname}
        </p>
      </div>
      <div>
        <IoEllipsisHorizontalSharp size={24} />
      </div>
    </div>
  );
};

const NewsItemBody = ({ newsitem }) => {
  console.log(newsitem.previewimage);
  return (
    <div className="flex flex-col sm:flex-row w-full h-auto gap-4 p">
        {/* Preview content */}
      <div className="flex flex-col w-full h-auto gap-1">
        <h2 className="w-full h-auto text-tegami-900 text-xl font-bold">
          {newsitem.title}
        </h2>
        <div className="flex flex-row text-base">
          <p>By&nbsp;</p>
          <p className="text-tegami-500">
            {" "}
            {" " + newsitem.source.authorname + " "}
          </p>
          <p>&nbsp;- {newsitem.date} </p>
        </div>
        <div className="w-full h-auto">
          <p className="text-tegami-900 text-base">{newsitem.description}</p>
        </div>
      </div>

      {/* preview image */}
      {newsitem.previewimage && (
        <div className="w-full sm:w-2/5 sm:flex-none rounded-[4px] overflow-hidden">
          <img
            className="w-full aspect-video object-cover"
            src={
              window.location.origin +
              "/asset/previewimage/" +
              newsitem.id +
              ".jpeg"
            }
          />
        </div>
      )}
    </div>
  );
};

const NewsItemFooter = ({ newsitem }) => {};
