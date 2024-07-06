import HamburgerMenu from "@/ui/HamburgerMenu";
import Generic from "../ui/Generic";
import BgImage from "../ui/HomePage/BgImage";
import Intro from "../ui/HomePage/Intro";
import Navbar from "../ui/Navbar";
import PortContainer from "../ui/Portfolio/PortContainer";
import Contact from "@/Contact/Contact";
import { useEffect, useState } from "react";

function Home() {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(function () {
    const handleResize = () => setInnerWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col 2xl:grid 2xl:min-h-[150vh] 2xl:w-full 2xl:grid-cols-2 2xl:grid-rows-[150px_1fr_3fr]">
      <BgImage />
      {innerWidth <= 768 ? <HamburgerMenu /> : <Navbar color="white" />}
      <Intro />
      <Generic />
      <PortContainer />
      <Contact />
    </div>
  );
}

export default Home;
