import React, { useState } from "react";
import { connect } from "react-redux";

// Actions
import { postAuthor } from "./redux/actions";

const AuthorForm = ({ closeModal, postAuthor }) => {
  const [author, setAuthor] = useState({
    name: "",
    address: "",
  });

  const submitAuthor = (event) => {
    event.preventDefault();
    postAuthor(author, closeModal);
  };

  const onTextchange = (event) =>
    setAuthor({ ...author, [event.target.name]: event.target.value });

  return (
    <div className="mt-5 p-2">
      <form onSubmit={submitAuthor}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Name</span>
          </div>
          <input
            type="text"
            className="form-control"
            name="name"
            onChange={onTextchange}
          />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Address</span>
          </div>
          <input
            type="text"
            className="form-control"
            name="address"
            onChange={onTextchange}
          />
        </div>

        <input type="submit" />
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    postAuthor: (newAuthor, closeModal) =>
      dispatch(postAuthor(newAuthor, closeModal)),
  };
};

export default connect(null, mapDispatchToProps)(AuthorForm);
