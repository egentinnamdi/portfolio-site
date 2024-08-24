// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Button from "./Button";

function Description() {
  return (
    <div className="bg-secondary h-96 flex-col 2xl:flex 2xl:items-center 2xl:justify-center 2xl:space-y-11 2xl:p-10">
      <p className="w-3/4 font-light leading-loose tracking-widest text-white 2xl:text-justify 2xl:text-2xl">
        I&lsquo;m a Nigerian-based web designer and full-stack developer deeply
        committed to crafting clean, intuitive, and user-friendly digital
        experiences. My passion lies in developing outstanding software
        solutions that not only meet but exceed expectations,ultimately
        enhancing the lives of those within my community and beyond. me.
      </p>
      <div className="flex w-3/4 flex-col 2xl:flex-row 2xl:justify-evenly">
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
