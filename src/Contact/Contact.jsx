function Contact() {
  return (
    <>
      <div
        id="contact"
        className="bg-secondaryLight col-span-2 min-h-[60vh] text-white"
      >
        <div className="h-1/5 pt-10 text-center">
          <h2 className="text-7xl font-bold uppercase text-white">
            get in <span className="text-primary">touch</span>
          </h2>
        </div>
        <div className="grid h-4/5 grid-cols-2 grid-rows-1">
          <div className="p-10">
            <span className="text-primary text-4xl capitalize">
              need a project?
            </span>
            <h2></h2>
          </div>
          <div className="space-y-6 p-10"></div>
        </div>
      </div>
      <footer className="bg-secondary col-span-2 grid h-24 place-items-center text-xl capitalize text-white">
        copyright &copy; by egenti nnmadi 2024. all rights reserved.
      </footer>
    </>
  );
}

export default Contact;
