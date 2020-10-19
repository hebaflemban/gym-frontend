import React, { useState } from "react";
import { connect } from "react-redux";

// Actions
import { postBook } from "./redux/actions";

const BookForm = ({ authorID, postBook, closeModal }) => {
  const [book, setBook] = useState({
    title: "",
    type: "",
    date: "",
    time: "",
    is_free: "",
    capacity: 0,
    gym: authorID
  });

  const onTextChange = (event) =>
    setBook({ ...book, [event.target.name]: event.target.value });

  const onSubmit = (event) => {
    event.preventDefault();
    postBook(book, closeModal);
  };

  const colorOptions = [
    "Cardio",
    "Strength",
    "Kickboxing",
    "Swimming",
  ].map((color) => (
    <option key={color} value={color}>
      {color}
    </option>
  ));

  return (
    <div className="mt-5 p-2">
      <form onSubmit={onSubmit}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Title</span>
          </div>
          <input
            type="text"
            className="form-control"
            name="title"
            onChange={onTextChange}
          />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Color</span>
          </div>
          <select name="type" className="form-control" onChange={onTextChange}>
            <option value="">----</option>
            {colorOptions}
          </select>
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">date</span>
          </div>
          <input
              type="text"
              className="form-control"
              name="date"
              onChange={onTextChange}
          />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">time</span>
          </div>
          <input
              type="text"
              className="form-control"
              name="time"
              onChange={onTextChange}
          />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">is_free</span>
          </div>
          <input
              type="text"
              className="form-control"
              name="is_free"
              onChange={onTextChange}
          />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">capacity</span>
          </div>
          <input
              type="text"
              className="form-control"
              name="capacity"
              onChange={onTextChange}
          />
        </div>


        <input type="submit" value="Add Book" />
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    postBook: (book, closeModal) => dispatch(postBook(book, closeModal)),
  };
};

export default connect(null, mapDispatchToProps)(BookForm);
