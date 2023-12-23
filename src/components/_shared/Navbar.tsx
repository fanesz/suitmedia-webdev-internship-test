import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo_suitmedia.png";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    lastScrollY !== 0 && setShow(!(window.scrollY > lastScrollY));
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);

  const navLinks = [
    { title: "Work", path: "/work" },
    { title: "About", path: "/about" },
    { title: "Services", path: "/services" },
    { title: "Ideas", path: "/ideas" },
    { title: "Careers", path: "/careers" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <div
      className={`primary fixed z-10 w-full backdrop-blur-md ${
        show ? "animate-show" : "animate-hide"
      }`}
    >
      <div className="font_roboto mx-auto flex  w-full max-w-[90rem] justify-between py-5 font-medium">
        <div className="ms-3">
          <Link to="/">
            <img src={logo} alt="logo" className="w-32" />
          </Link>
        </div>
        <div className="font_roboto my-auto flex gap-3 text-white">
          {navLinks.map((item, index) => (
            <NavLink
              key={index}
              className={({ isActive }) =>
                isActive
                  ? "p-1.5 px-4 text-lg font-light underline decoration-4 underline-offset-[12px]"
                  : "p-1.5 px-4 text-lg font-light"
              }
              to={item.path}
            >
              {item.title}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
