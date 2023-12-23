import { IdeaType } from "../../type/type";
import IdeaCard from "./IdeaCard";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import IdeaCardSkeleton from "./IdeaCardSkeleton";

const Content = (props: { ideas: IdeaType[]; isLoading: boolean }) => {
  return (
    <div>
      <SkeletonTheme baseColor="#DEDEDE" highlightColor="#ffffff">
        <div className="flex flex-wrap">
          {props.isLoading && <IdeaCardSkeleton cards={10} />}
          {props.ideas?.map((item, index) => (
            <IdeaCard key={index} {...item} />
          ))}
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default Content;
