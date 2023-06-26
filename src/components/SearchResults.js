import React from "react";
import "../styles/searchresults.css";

const SearchResults = ({ results }) => {
  if (!results.length) {
    return <p className="noresults">No results</p>;
  } else {
    return (
      <>
        <p className="title">Search Results</p>
        <div className="image-container">
          {results.map((image) => (
            <img className="card-image" src={image} alt="spaceImage" />
          ))}
        </div>
      </>
    );
  }
};

export default SearchResults;
