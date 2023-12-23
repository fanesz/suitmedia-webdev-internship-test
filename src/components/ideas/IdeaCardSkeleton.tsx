import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const IdeaCardSkeleton = (props: { cards: number }) => {
  return (
    <>
      {[...Array(props.cards)].map((_item, index) => (
        <div
          key={index}
          className="h-[28rem] w-full px-5 pb-12 md:w-1/3 xl:w-1/4"
        >
          <div className="h-full cursor-pointer rounded-lg border border-gray-200 border-opacity-60 pb-2 shadow-lg transition duration-500 ease-in-out hover:shadow-2xl">
            <div className="h-3/5">
              <Skeleton className="h-full w-full" />
            </div>

            <div className="px-6 pt-5">
              <div className="font_roboto_condensed text-xl font-medium text-gray-500 text-opacity-70">
                <Skeleton className="w-1/2" />
              </div>
              <div className="font_oswald line-clamp-3 whitespace-normal text-2xl leading-[1.85rem] text-gray-800">
                <Skeleton count={3} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default IdeaCardSkeleton;
