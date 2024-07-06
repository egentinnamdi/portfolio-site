function DisplayImage() {
  return (
    <div className="flex justify-center pb-10 2xl:items-center 2xl:justify-start 2xl:pl-24">
      <div className=" h-32 w-32 border-2 border-primary 2xl:h-4/5 2xl:w-3/5">
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
