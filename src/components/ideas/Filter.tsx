import React from "react";
import { IdeaType, MetaType } from "../../type/type";
import { Select, Option } from "@material-tailwind/react";

interface props {
  className: string;
  pageItems: number;
  setPageItems: React.Dispatch<React.SetStateAction<number>>;
  sortBy: IdeaType["published_at"];
  setSortBy: React.Dispatch<React.SetStateAction<IdeaType["published_at"]>>;
  meta: MetaType;
}
const Filter = (props: props) => {
  const { className, pageItems, setPageItems, sortBy, setSortBy, meta } = props;

  const handleSetPageItems = (items: number) => {
    setPageItems(items);
  };
  const handleSetSortBy = (items: string) => {
    setSortBy(items);
  };

  return (
    <div className={`${className} justify-between px-5 md:flex`}>
      <div className="my-auto">
        Showing {meta.from} - {meta.to} of {meta.total}
      </div>

      <div className="mt-5 flex w-1/2 gap-3 md:mt-0 md:justify-end md:gap-7">
        <div className="">
          <Select
            value={pageItems.toString() + " Items"}
            label="Show per page"
            placeholder="Show per page"
          >
            {[10, 30, 50].map((item, index) => (
              <Option
                key={index}
                value={pageItems.toString()}
                onClick={() => handleSetPageItems(item)}
              >
                {item} Items
              </Option>
            ))}
          </Select>
        </div>
        <div className="">
          <Select
            value={sortBy === "-published_at" ? "Newest" : "Oldest"}
            label="Show per page"
            placeholder="Sort by"
          >
            {["-published_at", "published_at"].map((item, index) => (
              <Option
                key={index}
                value={sortBy}
                onClick={() => handleSetSortBy(item)}
              >
                {item === "-published_at" ? "Newest" : "Oldest"}
              </Option>
            ))}
          </Select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
