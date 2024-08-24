import "lazysizes";

function DisplayImage() {
  return (
    <div className="flex justify-center pb-10 2xl:items-center 2xl:justify-start 2xl:pl-24">
      <div className="bg-primary img-radius h-32 w-32 2xl:h-4/5 2xl:w-3/5">
        <img
          className="lazyload h-full w-full object-cover"
          data-src="/front-pic.png"
          data-sizes="auto"
          alt="img"
        />
      </div>
    </div>
  );
}

export default DisplayImage;
