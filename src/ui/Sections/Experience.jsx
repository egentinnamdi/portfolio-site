import "lazysizes";
function Experience() {
  return (
    <div className="bg-secondaryLight text-white 2xl:grid 2xl:h-4/5 2xl:w-3/4 2xl:grid-cols-2 2xl:grid-rows-1 2xl:p-10">
      <div>
        <img
          data-src="/p-info.png"
          data-sizes="auto"
          className="lazyload h-full"
          alt="p-info"
        />
      </div>
      <div className="space-y-4 pt-5">
        <h2 className="space-y-4 font-bold capitalize 2xl:text-4xl">
          previous jobs
        </h2>
        <p className="border-secondaryLighter hover:border-primary border-b-2 pb-5 text-justify hover:border-b 2xl:text-lg 2xl:leading-loose">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          dolores mollitia magni voluptas ex. Tenetur magni id aut, labore velit
          nobis ipsum hic quos
        </p>
        <div className="border-secondaryLighter flex min-h-24 items-center justify-between border-b-2">
          <span className="text-primary font-bold 2xl:text-2xl">2023-2024</span>
          <h3 className="capitalize 2xl:text-xl">
            frontend developer <br />
            <span>junior developer</span>
          </h3>
        </div>
        <div className="border-secondaryLighter flex min-h-24 items-center justify-between border-b-2">
          <span className="text-primary font-bold 2xl:text-2xl">6 Months</span>
          <h3 className="capitalize 2xl:text-xl">
            full stack developer <br />
            <span>junior developer</span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Experience;
