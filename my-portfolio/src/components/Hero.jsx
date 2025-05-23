import heroImg from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-emerald-100 py-24">
      <div className=" align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider"> I,m Erwin </h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            Front-end Developer
          </p>
          <p className="mt-2 text-lg text-slate-700  tracking-wide">
            Turning ideas into interactive reality
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="#">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="#">
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="#">
              <FaTwitterSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
          <div>
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 duration-300 w-28 mt-2"
            >
              <FaFileDownload className="h-5 w-5" />
              <span>Resume</span>
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  );
};

export default Hero;
