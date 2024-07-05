import MyExpItem from "./MyExpItem";

// const experience = [];

function MyExp() {
  return (
    <div className="flex justify-start">
      <div className=" grid h-full max-w-2xl grid-cols-2  grid-rows-2 gap-11 pb-7">
        {/* {experience.map((item) => (
          <MyExpItem key={item} num="num" text="text" />
        ))} */}
        <MyExpItem />
        <MyExpItem />
        <MyExpItem />
        <MyExpItem />
      </div>
    </div>
  );
}

export default MyExp;
