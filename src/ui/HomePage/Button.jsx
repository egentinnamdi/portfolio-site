// import arrow from "/arrow.svg";

function Button({ text }) {
  return (
    <button className="btn   bg-secondaryLighter mt-10 flex w-fit rounded-xl px-8 py-5 text-lg font-bold uppercase tracking-widest   text-white transition-all duration-500 ease-in-out ">
      {text}
    </button>
  );
}

export default Button;