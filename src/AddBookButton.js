import React, { useState } from "react";

import BookForm from "./BookForm";
import Modal from "react-responsive-modal";

const AddBookButton = ({ authorID }) => {
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);

  const closeModal = () => setOpen(false);

  return (
    <div>
      <Modal open={open} onClose={closeModal} center>
        <BookForm authorID={authorID} closeModal={closeModal} />
      </Modal>
      <input type="button" onClick={openModal} value="Add New Book!" />
    </div>
  );
};

export default AddBookButton;
