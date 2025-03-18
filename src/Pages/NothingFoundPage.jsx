import { Link } from "react-router-dom";
import ErrorImage from "../assets/Images/404.png";

export default function NothingFoundPage() {
  return (
    <>
      <div className="justify-between flex flex-col items-center  h-full">
        <p>Something went wrong!</p>
        <img className="h-2/3" src={ErrorImage} alt="404 Error" />
        <p>
          Requested page can't be found! Please fallback to{" "}
          <Link className="text-blue-700" to="/">
            Home page
          </Link>
        </p>
      </div>
    </>
  );
}
