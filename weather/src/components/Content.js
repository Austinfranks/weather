import React, { useContext } from "react";

import Context from "../Context";

const Content = () => {
  // destructing the property api_call out of the main.js file
  const { api_call } = useContext(Context);
  return (
    <div className="content">
      <form onSubmit={api_call} className="searchForm">
        <input
          name="location"
          autoComplete="off"
          className="searchInput"
          type="text"
        />
        <div className="searchSubmit">
          <button className="submitbtn">&rarr;</button>
        </div>
      </form>
    </div>
  );
};

export default Content;
