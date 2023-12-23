const Banner = () => {
  return (
    <div className="relative overflow-hidden">
      <div>
        <div
          className="banner bg-banner bg-fixed h-[100vh] w-full bg-cover brightness-75"
        />
      </div>
      <div className="font_roboto_condensed absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center text-white">
        <div>
          <div className="text-7xl">Ideas</div>
          <div className="text-xl">Where all our great things begin</div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
