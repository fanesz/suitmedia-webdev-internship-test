import { useNavigate } from "react-router-dom";
import { IdeaType } from "../../type/type";
import { dateFormatter } from "../../utils/utils";

const IdeaCard = (props: IdeaType) => {
  const navigate = useNavigate();

  return (
    <div className="h-[28rem] w-full px-5 pb-12 md:w-1/3 xl:w-1/4">
      <div
        className="h-full cursor-pointer rounded-lg border border-gray-200 border-opacity-60 pb-2 shadow-lg transition duration-500 ease-in-out hover:shadow-2xl"
        onClick={() => navigate("/ideas/" + props?.slug)}
      >
        <div className="h-3/5">
          <img
            className="h-full w-full rounded-t-md object-cover object-center"
            src={props?.medium_image[0]?.url}
            alt={props?.title}
          />
        </div>

        <div className="px-6 pt-5">
          <div className="font_roboto_condensed text-xl font-medium text-gray-500 text-opacity-70">
            {dateFormatter(props?.published_at)}
          </div>
          <div className="font_oswald line-clamp-3 whitespace-normal text-2xl leading-[1.85rem] text-gray-800">
            {props?.title}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaCard;
