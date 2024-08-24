import "lazysizes";

function About() {
  return (
    <div className="bg-secondaryLight flex flex-col p-10 text-white 2xl:grid 2xl:h-4/5 2xl:w-3/4 2xl:grid-cols-2 2xl:grid-rows-1">
      <div className="hidden h-48 w-full 2xl:grid 2xl:h-5/6 2xl:w-5/6 2xl:place-items-center">
        <img
          data-src="/displaypic.jpg"
          data-sizes="auto"
          className="lazyload h-full w-full rounded-2xl object-cover"
          alt="img"
        />
      </div>
      <div className="2xl:space-y-4 2xl:pt-5">
        <h2 className="text-center text-2xl font-bold capitalize 2xl:space-y-4 2xl:text-left 2xl:text-4xl">
          personal info
        </h2>
        <p className="text-base leading-normal 2xl:text-justify 2xl:text-lg 2xl:leading-loose">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id commodi
          unde voluptatum reiciendis beatae veniam aperiam natus obcaecati
          cupiditate corrupti voluptatibus dolorum quasi tempora doloremque
          fugiat sit sed, quia
        </p>
        <div className="2xl:grid 2xl:grid-cols-2 2xl:grid-rows-2 2xl:gap-5">
          <div className="p-info">
            <span className="font-semibold capitalize 2xl:text-lg">email</span>
            <span>egentinnamdi10@gmail.com</span>
          </div>
          <div className="p-info">
            <span className="font-semibold capitalize 2xl:text-lg">phone</span>
            <span>+2348172843959</span>
          </div>
          <div className="p-info">
            <span className="font-semibold capitalize 2xl:text-lg">
              address
            </span>
            <span className="capitalize">lagos, nigeria</span>
          </div>
          <div className="p-info">
            <span className="font-semibold capitalize 2xl:text-lg">follow</span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
