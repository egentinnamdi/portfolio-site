import Generic from "../ui/Generic";
import BgImage from "../ui/HomePage/BgImage";
import Intro from "../ui/HomePage/Intro";
import Navbar from "../ui/Navbar";
import PortContainer from "../ui/Portfolio/PortContainer";
import Contact from "@/Contact/Contact";

function Home() {
  return (
    <div className=" min-h-[150vh] w-full 2xl:grid 2xl:grid-cols-2 2xl:grid-rows-[150px_1fr_3fr]">
      <BgImage />
      <Navbar color="white" />
      <Intro />
      <Generic />
      <PortContainer />
      <Contact />
    </div>
  );
}

export default Home;
