function PortContainer() {
  return (
    <div className="col-span-2 flex h-screen w-full flex-col items-center space-y-16 bg-secondary capitalize text-white">
      <div className="space-y-5 text-center">
        <span className=" text-2xl font-medium text-primary">portfolio</span>
        <h2 className="text-6xl font-bold">selected standout projects</h2>
      </div>
      <div className="grid h-full w-3/4 grid-cols-2 gap-12 overflow-scroll ">
        <div className="h-96 bg-primary">hi</div>
        <div className="h-96 bg-primary">hi</div>
        <div className="h-96 bg-primary">hi</div>
        <div className="h-96 bg-primary">hi</div>
        <div className="h-96 bg-primary">hi</div>
        <div className="h-96 bg-primary">hi</div>
        <div className="h-96 bg-primary">hi</div>
      </div>
    </div>
  );
}

export default PortContainer;
