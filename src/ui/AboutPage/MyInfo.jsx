const info = [
  {
    key: "first name",
    value: "Nnamdi",
  },
  {
    key: "address",
    value: "nigeria",
  },
  {
    key: "last name",
    value: "egenti",
  },
  {
    key: "phone",
    value: "+2348172843959",
  },
  {
    key: "age",
    value: "18",
  },
  {
    key: "email",
    value: "egentinnamdi10@gmail.com",
  },
  {
    key: "nationality",
    value: "nigerian",
  },
  {
    key: "linkedin",
    value: "nil",
  },
  {
    key: "freelance",
    value: "available",
  },
  {
    key: "languages",
    value: "english, german",
  },
];

function MyInfo() {

  return (
    <div className="flex justify-end">
      <div className="border-secondary  mb-7  grid  max-w-2xl grid-cols-2 grid-rows-5 gap-11 rounded-xl  border  p-5 ">
        {info.map((item) => (
          <div
            key={item.value}
            className="text-secondary  text-center text-sm capitalize"
          >
            <span className="  font-medium ">{item.key}</span>
            <br />
            <span
              className={`font-black ${item.key === "email" ? "lowercase" : null}`}
            >
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyInfo;
