function DisplayImage() {
  return (
    <div className="flex items-center justify-start pl-24 ">
      <div className="h-4/5 w-3/5 border-2 border-primary">
        <img
          className=" h-full w-full  object-cover"
          src="/front-pic.png"
          alt="img"
        />
      </div>
    </div>
  );
}

export default DisplayImage;
