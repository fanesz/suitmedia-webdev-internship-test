import { useEffect } from "react";
import banner from "../../assets/banner.jpg";

const Banner = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const bannerElement = document.querySelector(
        ".banner",
      ) as HTMLElement | null;
      if (bannerElement) {
        bannerElement.style.transform = `translateY(${scrollPosition * 0.8}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div>
        <img
          className="banner h-[100vh] w-full object-cover brightness-75"
          src={banner}
          alt="Gambar"
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
