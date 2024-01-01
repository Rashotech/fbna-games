import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useSearchText = (initialState) => {
  const [searchText, setSearchText] = useState(initialState);
  const navigate = useNavigate();

  const onChange = (evt) => setSearchText(evt.target.value);

  const reset = () => setSearchText("");

  const onSubmit = () => {
    if (searchText.trim().length !== 0) {
      navigate(`/search?game=${encodeURIComponent(searchText)}`);
      reset();
    }
  };

  return {
    searchText,
    onChange,
    reset,
    onSubmit,
  };
};

export default useSearchText;
