import MyExp from "../ui/AboutPage/MyExp";
import MyInfo from "../ui/AboutPage/MyInfo";
import Navbar from "../ui/Navbar";

function About() {
  return (
    <div className="animate-right grid h-screen  grid-cols-2 grid-rows-[150px_1fr_3fr] gap-x-11">
      <Navbar color="secondary" />
      <h3 className="col-span-2 flex items-center  justify-center pb-10 text-center text-7xl font-extrabold uppercase tracking-wide text-secondary">
        about <span className="ml-5 text-primary">me</span>
      </h3>
      <MyInfo />
      <MyExp />
    </div>
  );
}

export default About;
