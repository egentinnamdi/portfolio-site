import Project from "./Project";

function PortContainer() {
  return (
    <div className="col-span-2 flex min-h-screen w-full flex-col items-center space-y-16 bg-secondary capitalize text-white">
      <div className="space-y-5 text-center">
        <span className=" text-2xl font-medium text-primary">portfolio</span>
        <h2 className="text-6xl font-bold">selected standout projects</h2>
      </div>
      <div className="grid min-h-screen w-3/4 grid-cols-2 grid-rows-2  gap-x-12 ">
        {/* <Link to="https://weadex.netlify.app/weadex"> */}
        <Project img="weather" textOne="weather app" textTwo="weadex" />
        <Project img="travel" textOne="travel app" textTwo="worldwise" />
      </div>
    </div>
  );
}

export default PortContainer;
