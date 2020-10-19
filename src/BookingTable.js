import React from "react";

import BookingRow from "./BookingRow";

const BookingTable = ({ bookings }) => {
    const bookingRows = bookings.map(booking => (
        <BookingRow key={booking.id} booking={booking} />
    ));

    return (
        <table className="mt-3 table">
            <thead>
            <tr>
                <th>Gym</th>
                <th>Class</th>
                <th>Time</th>
            </tr>
            </thead>
            <tbody>{bookingRows}</tbody>
        </table>
    );
};

export default BookingTable;
