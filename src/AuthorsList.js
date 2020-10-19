import React, { useState } from "react";
import { connect } from "react-redux";
import {fetchAuthors, fetchBookings, fetchBooks} from "./redux/actions"

// Components
import AddAuthorCard from "./AddAuthorCard";
import AuthorCard from "./AuthorCard";
import SearchBar from "./SearchBar";
import Loading from "./Loading";

const AuthorsList = ({ authors, loading, user, fetchAuthors, fetchBooks, fetchBookings }) => {
  const [query, setQuery] = useState("");

  const filterAuthors = () => {
    return authors.filter((author) => {
      return `${author.name} ${author.address}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });
  };

  if (loading) {
      fetchAuthors()
      fetchBooks()
      fetchBookings()
      return <Loading />;}

  const authorCards = filterAuthors().map((author) => (
    <AuthorCard
      key={author.id + author.name + author.address}
      author={author}
    />
  ));

  return (
    <div className="authors">
      <h3>GYMS</h3>
      <SearchBar onChange={setQuery} />
      <div className="row">
          {user && <AddAuthorCard/>}
        {authorCards}
      </div>
    </div>
  );
};

const mapStateToProps = ({ authors, user }) => ({
  authors,
  user,
  loading: !authors.length,
});
const mapDispatchToProps = dispatch => ({
    fetchAuthors: () => dispatch(fetchAuthors()),
    fetchBooks: () => dispatch(fetchBooks()),
    fetchBookings: () => dispatch(fetchBookings())
})
export default connect(mapStateToProps,mapDispatchToProps)(AuthorsList);
