import { useEffect, useState } from "react";

const Search = ({ setParamsData, setPageIndex }) => {
  const [value, setValue] = useState("");

  const onSearchClick = (e) => {
    setParamsData(value);
    setPageIndex(1);
    e.stopPropagation();
  };
  useEffect(() => {
    if (value?.length === 0) {
      setParamsData("");
    }
  }, [value]);
  return (
    <div className="font-sans text-black  bg-white flex items-center justify-center">
      <div className="border rounded overflow-hidden flex">
        <input
          type="text"
          className="px-4 py-2"
          placeholder="Search..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button
          className="flex items-center justify-center px-4 border-l"
          onClick={(e) => onSearchClick(e)}
        >
          <svg
            className="h-4 w-4 text-grey-dark"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Search;
