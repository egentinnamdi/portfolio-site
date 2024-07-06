import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

function Contact() {
  return (
    <>
      <div
        id="contact"
        className="col-span-2 min-h-[60vh] bg-secondaryLight text-white"
      >
        <div className="h-1/5 pt-10 text-center">
          <h2 className=" text-7xl font-bold uppercase text-white">
            get in <span className="text-primary ">touch</span>
          </h2>
        </div>
        <div className="grid h-4/5 grid-cols-2 grid-rows-1">
          <div className="p-10">
            <span className="text-4xl capitalize text-primary">
              need a project?
            </span>
            <h2></h2>
          </div>
          <div className="space-y-6 p-10">
            <Label htmlFor="name">Username</Label>
            <Input
              type="text"
              placeholder="Username"
              className="bg-inherit w-3/4 p-2 "
              id="name"
            />{" "}
            <br />
            <Label htmlFor="name">Email</Label>
            <Input
              type="email"
              placeholder="Email"
              className="bg-inherit w-3/4"
              id="name"
            />
            <Textarea
              className="bg-inherit h-28 w-3/4 "
              placeholder="Your Message"
            />
            <Button className="bg-primary font-bold uppercase text-secondaryLighter">
              send message
            </Button>
          </div>
        </div>
      </div>
      ;
      <footer className="col-span-2 grid h-24 place-items-center bg-secondary text-xl capitalize text-white">
        copyright &copy; by egenti nnmadi 2024. all rights reserved.
      </footer>
    </>
  );
}

export default Contact;
