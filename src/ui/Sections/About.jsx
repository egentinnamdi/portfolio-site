function About() {
  return (
    <div className="grid h-4/5  w-3/4 grid-cols-2 grid-rows-1 bg-secondaryLight p-10 text-white">
      <div className="grid h-5/6 w-5/6 place-items-center">
        <img
          src="/displaypic.jpg"
          className="h-full w-full rounded-2xl"
          alt="img"
        />
      </div>
      <div className="space-y-4 pt-5">
        <h2 className="space-y-4 text-4xl font-bold capitalize">
          personal info
        </h2>
        <p className="text-lg leading-loose">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id commodi
          unde voluptatum reiciendis beatae veniam aperiam natus obcaecati
          cupiditate corrupti voluptatibus dolorum quasi tempora doloremque
          fugiat sit sed, quia
        </p>
        <div className="grid  grid-cols-2 grid-rows-2 gap-5 ">
          <div className="p-info">
            <span className="text-lg font-semibold capitalize">email</span>
            <span>egentinnamdi10@gmail.com</span>
          </div>
          <div className="p-info">
            <span className="text-lg font-semibold capitalize">phone</span>
            <span>+2348172843959</span>
          </div>
          <div className="p-info">
            <span className="text-lg font-semibold capitalize">address</span>
            <span className="capitalize">lagos, nigeria</span>
          </div>
          <div className="p-info">
            <span className="text-lg font-semibold capitalize">follow</span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
