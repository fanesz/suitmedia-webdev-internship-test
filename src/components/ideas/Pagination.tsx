import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import { MetaType } from "../../type/type";
import { useState } from "react";

interface props {
  className?: string;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  meta: MetaType;
}
const Pagination = (props: props) => {
  const { className, page, setPage, meta } = props;

  const urlParams = new URLSearchParams(window.location.search);
  const tempPage = Number(urlParams.get("page")) || 1;

  const [pageNumber, setPageNumber] = useState<number[]>([
    tempPage,
    tempPage + 1,
    tempPage + 2,
    tempPage + 3,
  ]);

  const handleSetPage = (input: number) => {
    setPage(input);
  };

  const handleArrow = (input: number | string) => {
    if (input === "first") {
      setPageNumber([1, 2, 3, 4]);
      setPage(1);
    } else if (input === "last") {
      setPageNumber([
        meta.last_page - 3,
        meta.last_page - 2,
        meta.last_page - 1,
        meta.last_page,
      ]);
      setPage(meta.last_page);
    } else if (input === -1) {
      if (page - 1 < pageNumber[0] && page > 1) {
        setPageNumber((prev) => prev.map((item) => item - 1));
      }
      if (page > 1) {
        setPage(page + Number(input));
      }
    } else if (input === 1) {
      if (
        page + 1 > pageNumber[pageNumber.length - 1] &&
        page < meta.last_page
      ) {
        setPageNumber((prev) => prev.map((item) => item + 1));
      }
      if (page < meta.last_page) {
        setPage(page + Number(input));
      }
    }
  };

  return (
    <div className={`${className} mx-auto flex gap-2`}>
      <ChevronDoubleLeftIcon
        className={`${
          tempPage <= 1 && "cursor-default fill-gray-400"
        } my-auto h-6 w-6 cursor-pointer`}
        onClick={() => handleArrow("first")}
      />
      <ChevronLeftIcon
        className={`${
          tempPage <= 1 && "cursor-default fill-gray-400"
        } my-auto h-6 w-6 cursor-pointer`}
        onClick={() => handleArrow(-1)}
      />
      {pageNumber.map((item, index) => (
        <div
          key={index}
          className={`font_roboto_condensed mx-0.5 w-8 cursor-pointer rounded-md py-1 text-center font-medium ${
            page === item && "primary text-white"
          }`}
          onClick={() => handleSetPage(item)}
        >
          {item}
        </div>
      ))}
      <ChevronRightIcon
        className={`${
          tempPage >= meta?.last_page && "cursor-default fill-gray-400"
        } my-auto h-6 w-6 cursor-pointer`}
        onClick={() => handleArrow(1)}
      />
      <ChevronDoubleRightIcon
        className={`${
          tempPage >= meta?.last_page && "cursor-default fill-gray-400"
        } my-auto h-6 w-6 cursor-pointer`}
        onClick={() => handleArrow("last")}
      />
    </div>
  );
};

export default Pagination;
