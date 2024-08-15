import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
function SearchList({ data }) {
  const navigate = useNavigate();
  const handleClick = (word) => {
    navigate(`/word/${word}`);
  };
  return (
    <div>
      <li
        onClick={() => handleClick(data.word)}
        className="bg-gray-200 px-2 py-2 rounded-md"
      >
        {data.word}
      </li>
    </div>
  );
}

export default SearchList;
