import React, { useState } from "react";

// Components
import SearchBar from "./SearchBar";
import BookTable from "./BookTable";

// Route
import { useParams } from "react-router-dom";
import {connect} from "react-redux";

const BookList = ({ books }) => {
  const [query, setQuery] = useState("");

  const filterBooks = () => {
    return books.filter(book =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );
  };

  const type = useParams().type;
  let classes = filterBooks();

  if (type) {
    classes = books.filter(book => book.type === type);
  }

  return (
    <div>
      <h3>Books</h3>
      <SearchBar onChange={setQuery} />
      <BookTable books={classes} />
    </div>
  );
};
const mapStateToProps = ({ books }) => {
  return {
    books,
  };
};

export default connect(mapStateToProps)(BookList);
