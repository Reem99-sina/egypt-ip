import { SearchBox } from "react-instantsearch";
import "./style-box.css";
import { CiSearch } from "react-icons/ci";
import { FormEventHandler } from "react";

const SearchBoxCustom = ({
  placeholder,
  onSubmit,
}: {
  placeholder: string;
  onSubmit: FormEventHandler<HTMLFormElement>;
}) => {
  return (
    <SearchBox
      placeholder={placeholder}
      onSubmit={onSubmit}
      submitIconComponent={() => <CiSearch className="text-blueCustom1" />}
    />
  );
};

export default SearchBoxCustom;
