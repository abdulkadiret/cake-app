import React from "react";

const Search = props => {
  return (
    <div>
      <input type="text" placeholder="Search cake" onChange={props.onChange} />
    </div>
  );
};

export default Search;
