import Banner from "../../components/ideas/Banner";
import Content from "../../components/ideas/Content";
import { useState, useEffect } from "react";
import { getIdeas } from "../../api/services";
import { IdeaType, MetaType } from "../../type/type";
import Filter from "../../components/ideas/Filter";
import Pagination from "../../components/ideas/Pagination";

const Ideas = () => {
  const [ideas, setIdeas] = useState<IdeaType[]>([]);
  const [pageItems, setPageItems] = useState(0);
  const [sortBy, setSortBy] = useState<IdeaType["published_at"]>("");
  const [meta, setMeta] = useState<MetaType>({} as MetaType);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async (
    pageItems: number,
    sortBy: IdeaType["published_at"],
    page: number,
  ) => {
    const res = await getIdeas(
      page,
      pageItems,
      ["small_image", "medium_image"],
      sortBy,
    );
    setIdeas(res.data);
    setMeta(res.meta);
    setIsLoading(false);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const pageItems = Number(urlParams.get("pageItems")) || 0;
    const sortBy = urlParams.get("sort") || null;
    const page = Number(urlParams.get("page")) || 1;
    setPageItems(pageItems == 0 ? 10 : pageItems);
    const sortByValue = sortBy == "newest" ? "-published_at" : "published_at";
    setSortBy(sortBy == null ? "-published_at" : sortByValue);
    setPage(page);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    setIdeas([]);
    pageItems !== 0 && fetchData(pageItems, sortBy, page);
    window.history.pushState(
      {},
      "",
      `?page=${page}&pageItems=${pageItems}&sort=${sortBy === "-published_at" ? "newest" : "oldest"
      }`,
    );
  }, [pageItems, sortBy, page]);

  return (
    <div className="mb-28">
      <div>
        <Banner />
      </div>

      <div className="mx-auto mt-5 min-h-screen w-full max-w-[80rem]">
        <Filter
          className="mb-12"
          pageItems={pageItems}
          setPageItems={setPageItems}
          sortBy={sortBy}
          setSortBy={setSortBy}
          meta={meta}
        />
        <Content ideas={ideas} isLoading={isLoading} />
      </div>

      <div className="mt-10 flex">
        {Object.keys(meta).length !== 0 && (
          <Pagination page={page} setPage={setPage} meta={meta} />
        )}
      </div>
    </div>
  );
};

export default Ideas;
