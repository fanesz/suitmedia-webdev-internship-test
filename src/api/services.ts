import api from ".";
import { IdeaType } from "../type/type";

type sortType = IdeaType["published_at"];
type appendType = "small_image" | "medium_image";

export const getIdeas = async (
  pageNumber: number,
  pageSize: number,
  append: appendType[],
  sort: sortType,
) => {
  const appendString = append.join("&append[]=");
  const response = await api.get(
    `/ideas?page[number]=${pageNumber}&page[size]=${pageSize}&append[]=${appendString}&sort=${sort}`,
  );
  return response.data;
};
