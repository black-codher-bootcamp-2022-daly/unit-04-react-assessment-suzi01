import React, { useState } from "react";

const Filter = ({ products, ...props }) => {
  // const options = ["All", "song", "tv-episode", "feature-movie"];

//   const [checkedName, setCheckedName] = useState("All");
  const [selectedValue, setSelectedValue] = useState("all");

  const handleFilterInput = (event) => {
    event.preventDefault()
    //    console.log(event.target.value)
    console.log(selectedValue);
    props.setCheckedName(event.target.value);
    let entity = event.target.value;
    // let value = event.target.value;
    setSelectedValue(entity);
    handleMediaSearch(event, entity);
    console.log(entity);
    console.log(props.term);
  };

  function handleMediaSearch(event, entity) {
    event.preventDefault();
    props.findProducts(props.term, entity);
  }

  return (
    <div className="radio-buttons">
      <div className="radio-btn">
        <input
          className="radio"
          onChange={handleFilterInput}
          name="all"
          id="all"
          type="radio"
          value="all"
          checked={props.checkedName === "all"}
        />
        <label htmlfor="All">All</label>
      </div>
      <div>
        <input
          className="radio"
          onChange={handleFilterInput}
          name="movie"
          id="movie"
          type="radio"
          value="movie"
          checked={props.checkedName === "movie"}
        />
        <label htlmfor="movie">Movie</label>
      </div>
      <div>
        <input
          className="radio"
          onChange={handleFilterInput}
          name="music"
          id="music"
          type="radio"
          value="song"
          checked={props.checkedName === "song"}
        />
        <label htmlfor="music">Music</label>
      </div>
      <div>
        <input
          className="radio"
          onChange={handleFilterInput}
          name="tv show"
          id="tv Show"
          type="radio"
          value="tvShow"
          checked={props.checkedName === "tv-Show"}
        />
        <label htmlfor="tv show">TV Show</label>
      </div>
      <div>
        <input
          className="radio"
          onChange={handleFilterInput}
          name="ebook"
          id="ebook"
          type="radio"
          value="ebook"
          checked={props.checkedName === "ebook"}
        />
        <label htmlfor="ebook">Ebook</label>
      </div>

      {/* <input key={index} name={option} type="radio" value={option} onChange={handleFilterInput} id="mediatypes" />

    ))} */}
    </div>
  );
};

export default Filter;
