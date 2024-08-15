import { useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Header from "../components/header";
import Body from "../components/Body";

function WordInfo({meaning}) {
  const word = useParams().word;
  console.log(word);
  return (
    <div className="flex flex-col">
      <a
        className="flex items-center gap-1 mt-4 ml-2 text-xl text-blue-500"
        href=""
      >
        <FaArrowLeft />
        <span>search</span>
      </a>
      <Header />
      <Body />
    </div>
  );
}

export default WordInfo;
