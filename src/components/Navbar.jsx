import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { Burger, Input } from "@mantine/core";
import { UseCustomProvider } from "./Context/DarkModeContext";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const Navbar = () => {
  const [isOpened, setIsOpened] = useState(true);
  const [opened, { toggle, close }] = useDisclosure(true);
  const [searchValue, setSearchValue] = useState("");
  const label = opened ? "Open navigation" : "Close navigation";
  const location = useLocation();
  const nav = useNavigate();
  const { handleThemeSwitch, theme } = UseCustomProvider();

  // useEffect(() => {
  //   toggle(true);
  // }, [location]);

  useEffect(() => {
    close(); // close burger menu when navigating to new page
  }, [location]);

  useEffect(() => {
    setIsOpened(!opened);
  }, [opened]);

  useEffect(() => {
    if (isOpened) {
      setIsOpened(false);
    }
  }, [location]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    nav("/search", { state: { searchValue } });
    setSearchValue("");
  };
  return (
    <div className=" sticky top-0 z-50 dark:bg-[#212227]  bg-white/30 backdrop-blur-lg shadow-lg p-5">
      <div className="flex justify-around items-baseline md:items-center align-middle">
        <Link to={"/"}>
          <h1 className=" text-sm md:text-xl font-medium  text-orange-600 dark:text-orange-500">
            Cook's Corner
          </h1>
        </Link>
        <div className="flex gap-3 items-center">
          <div className="">
            <form onSubmit={onSubmitHandler} className="">
              <Input
                placeholder="Search Recipes.."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                styles={(theme) => ({
                  input: {
                    "&:focus-within": {
                      borderColor: theme.colors.orange[4],
                    },
                  },
                })}
                className="w-[130px] md:w-[400px]"
              />
            </form>
          </div>
          <div
            className={`${label === "Open navigation" ? "dropdown-open" : "" } flex flex-col items-center dropdown  dropdown-bottom dropdown-end`}
          >
            <Burger
              opened={opened}
              onClick={toggle}
              aria-label={label}
              color="white"
              className={`${theme === "dark" ? "block" : "hidden"}`}
            />
            <Burger
              opened={opened}
              onClick={toggle}
              aria-label={label}
              color=""
              className={`${theme === "dark" ? "hidden" : "block"}`}
            />
            <div
              className={`${
                isOpened === true ? "hidden" : "block"
              } z-50 dropdown-animate`}
            >
              <div className="dropdown-content dark:bg-gray-800 dark:text-white/80 bg-white shadow-lg rounded-xl w-40 h-28 flex flex-col items-center justify-center gap-1 p-2 tabIndex={0}">
                <Link to={"/"}>
                  <h3 className="">Home</h3>
                </Link>
                <Link to={"/recipes"}>
                  <h3 className="">Recipes</h3>
                </Link>
                <Link to={"/about"}>
                  <h3 className="">About</h3>
                </Link>
              </div>
            </div>
          </div>
          <button className="" onClick={handleThemeSwitch}>
            <p className={`${theme === "dark" ? "block" : "hidden"} `}>
              <BsFillMoonStarsFill className="text-xl text-white" />
            </p>
            <p className={`${theme === "dark" ? " hidden" : "block"} `}>
              <BsFillSunFill className="text-2xl text-yellow-400" />
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
