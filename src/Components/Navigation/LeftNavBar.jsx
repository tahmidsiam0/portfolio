import { Link } from "react-router-dom";
import { FacebookFill, GithubFill, LinkedinBoxFill } from "akar-icons";
import Logo from "../../assets/Images/Logo.png";

export default function LeftNavBar() {
  return (
    <aside className="w-45">
      <div className="w-45 flex justify-center">
        <Link className="hover:scale-102 transition-all" to="/">
          <img className="w-20" src={Logo} alt="Logo" />
        </Link>
      </div>
      <ul className="text-center flex flex-col bg-secondary rounded-e-xl h-90">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/work">Work</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/education">Education</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <div className="flex gap-1 justify-evenly">
            <a href="https://www.linkedin.com/in/tahmidhossen" target="blank">
              <LinkedinBoxFill size={20} fill="#0077B5" />
            </a>
            <a href="https://github.com/tahmidsiam0" target="blank">
              <GithubFill size={20} />
            </a>
            <a href="https://www.facebook.com/tahmidsiam0" target="blank">
              <FacebookFill size={20} fill="#007CF7" />
            </a>
          </div>
        </li>
      </ul>
    </aside>
  );
}
