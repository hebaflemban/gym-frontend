import React from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux";

const BookingRow = ({ booking }) => (
    <tr>
        <td>{booking.gym_class.gym.name}</td>
        <td>
            {/*{book.authors.map(author => (*/}
            {/*  <div key={author.name}>{author.name}</div>*/}
            {/*))}*/}
            {booking.gym_class.title}
        </td>
        <td>
            {booking.gym_class.date}
        </td>

    </tr>
);

export default BookingRow;
