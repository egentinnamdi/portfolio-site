function Project({ img, textOne, textTwo }) {
  return (
    <div className="h-3/5 space-y-8">
      <div className="h-5/6  ">
        <img
          src={`/${img}.jpg`}
          className="h-full w-full rounded-2xl object-cover"
          alt={`${img}`}
        />
      </div>
      <div className="flex flex-col space-y-4 pl-2">
        <span className="text-2xl uppercase text-primary">{textOne}</span>
        <span className="text-3xl  font-semibold capitalize">{textTwo}</span>
      </div>
    </div>
  );
}

export default Project;
