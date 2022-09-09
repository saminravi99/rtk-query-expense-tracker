import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMatch, useNavigate } from "react-router-dom";
import { clearAllFilter, searched } from "../features/filter/filterSlice";

export default function Search() {
  const dispatch = useDispatch();
  const { search, type } = useSelector((state) => state.filter);
  const [input, setInput] = useState(search);

  useEffect(() => {
    if (search === "") {
      setInput("");
    }
  }, [search]);

  const match = useMatch("/");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searched(input));
  };

  const handleClearFilter = () => {
    dispatch(clearAllFilter());
    setInput("");
  }

  return (
    <form
    className="flex justify-around items-center"
     onSubmit={handleSubmit}>
      <label class="relative">
        <span class="sr-only">Search</span>
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
        </span>
        <input
          id="search"
          className="outline-none border-none mr-2"
          type="search"
          name="search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          class="placeholder:italic placeholder:text-slate-400 block bg-white w-56 border border-slate-300 rounded-md py-2 px-6 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Find your transactions....."
        />
      </label>

      {/* Clear filter button */}
      {(type || search) && (
        <span>
          <button 
          onClick={handleClearFilter}
          class="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            Clear Filter
          </button>
        </span>
      )}
    </form>
  );
}
