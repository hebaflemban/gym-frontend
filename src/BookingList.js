import React, { useState } from "react";

// Components
import BookingTable from "./BookingTable";

// Route
import { useParams } from "react-router-dom";
import {connect} from "react-redux";

const BookingList = ({ bookings }) => {
    const bookingID = useParams().bookingID;
    let bookingsList = bookings;

    if (bookingID) {
        bookingsList = bookings.filter(booking => booking.id === +bookingID);
    }
    console.log("List", bookingsList)
    return (
        <div>
            <h3>Books</h3>
            <BookingTable bookings={bookingsList} />
        </div>
    );
};
const mapStateToProps = ({ bookings }) => {
    return {
        bookings,
    };
};

export default connect(mapStateToProps)(BookingList);
