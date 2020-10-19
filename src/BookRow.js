import React from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import {postBooking} from "./redux/actions";

const BookRow = ({ book, postBooking }) => (
  <tr>
    <td>{book.title}</td>
    <td>
      {/*{book.authors.map(author => (*/}
      {/*  <div key={author.name}>{author.name}</div>*/}
      {/*))}*/}
        {book.gym.name}
    </td>
    <td>
        <Link to={`/books/${book.type}`}>
      <button className="btn">{book.type}</button>
        </Link>
    </td>
      <td>
          <button className="btn btn-info" onClick={() => postBooking({gym_class: book.id})}>Book</button>
      </td>
  </tr>
);
const mapStateToProps = ({ bookings, user }) => ({
    bookings,
    user,
    loading: !bookings.length,
});
const mapDispatchToProps = dispatch => ({
    postBooking: (userData) => dispatch(postBooking(userData))
})
export default connect(mapStateToProps, mapDispatchToProps)(BookRow);
