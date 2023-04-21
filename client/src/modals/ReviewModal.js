import React, { useContext } from "react";
import { Modal } from "react-bootstrap";
import CustomButton from "../styles/Button";
import ReviewSummary from "../components/ReviewSummary";
import { UserContext } from "../context/User";

function ReviewModal({ setShow, show }) {
    const { user } = useContext(UserContext)
    const handleClose = () => setShow(false)

    const reviewedMovies = user.unique_movies.map((movie) => {
      return <ReviewSummary key= {movie} movie={movie} reviews= {user.reviews} />
    })


    return (
        <>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Reviews</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {reviewedMovies}
        </Modal.Body>
        <Modal.Footer>
          <CustomButton variant="secondary" onClick={handleClose}>
            Close
          </CustomButton>
          {/* <CustomButton variant="primary" onClick={handleClose}>
            Save Changes
          </CustomButton> */}
        </Modal.Footer>
      </Modal>
        </>
    )
}

export default ReviewModal;