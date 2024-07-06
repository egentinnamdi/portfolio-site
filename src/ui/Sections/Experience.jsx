function Experience() {
  return (
    <div className="grid h-4/5 w-3/4 grid-cols-2 grid-rows-1 bg-secondaryLight p-10  text-white">
      <div>
        <img src="/p-info.png" className="h-full" alt="p-info" />
      </div>
      <div className="space-y-4 pt-5">
        <h2 className="space-y-4 text-4xl font-bold capitalize">
          previous jobs
        </h2>
        <p className="border-b-2 border-secondaryLighter pb-5 text-justify text-lg leading-loose hover:border-b hover:border-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          dolores mollitia magni voluptas ex. Tenetur magni id aut, labore velit
          nobis ipsum hic quos
        </p>
        <div className="flex min-h-24 items-center justify-between border-b-2 border-secondaryLighter">
          <span className=" text-2xl font-bold text-primary">2023-2024</span>
          <h3 className=" text-xl capitalize">
            frontend developer <br />
            <span>junior developer</span>
          </h3>
        </div>
        <div className="flex min-h-24 items-center justify-between border-b-2 border-secondaryLighter">
          <span className="text-2xl font-bold text-primary">6 Months</span>
          <h3 className=" text-xl capitalize">
            full stack developer <br />
            <span>junior developer</span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Experience;
