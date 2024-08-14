import { useParams } from "react-router-dom";

function WordInfo() {
  const word = useParams().word;
  console.log(word);
  return <div>
    WordInfo</div>;
}

export default WordInfo;
