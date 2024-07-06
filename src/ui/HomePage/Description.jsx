// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Button from "./Button";

function Description() {
  return (
    <div className=" col-span-2  flex flex-col items-center justify-center space-y-11 bg-secondary">
      <p className="text-slate-300 w-3/4  text-center font-normal  leading-loose 2xl:text-xl ">
        I&lsquo;m a Nigerian-based web designer and full-stack developer deeply
        committed to crafting clean, intuitive, and user-friendly digital
        experiences. My passion lies in developing outstanding software
        solutions that not only meet but exceed expectations,ultimately
        enhancing the lives of those within my community and beyond. me.
      </p>
      <div className="flex w-3/4 justify-evenly">
        <div>
          <NavLink to="about">
            <Button text="about me" />
          </NavLink>
        </div>
        <div>
          <NavLink to="experience">
            <Button text="experience" />
          </NavLink>
        </div>
        <div>
          <NavLink to="education">
            <Button text="education" />
          </NavLink>
        </div>
        <div>
          <NavLink to="skills">
            <Button text="skills" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Description;
