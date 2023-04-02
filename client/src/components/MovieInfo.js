import React, { useContext, useState } from "react";
import Wrapper from "../styles/Wrapper";
import styled from "styled-components";
import { MovieContext } from "../context/Movie";
import DataContent from "./DataContent";
import Description from "./Description";
import ReviewForm from "./ReviewForm";
import { Button } from "react-bootstrap";
import DisabledReviewForm from "./DisabledReviewForm";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/User";
import EditReviewForm from "./EditReviewForm";

function MovieInfo() {
    const { user } = useContext(UserContext)
    const { movieId } = useParams();
    const { updateMovie, movies } = useContext(MovieContext);
    const [showReviews, setShowReviews] = useState(false)

    if (movies.length === 0) {
        return <h1 style={{ textAlign: 'center' }}>Loading...</h1>
    }

    const movie = movies.find((movie) => movie.id == movieId) 

    const reviews = movie.reviews.map((review) => {
        if (review.user_id === user.id) {
            return <EditReviewForm key={review.id} movie={movie} rating={review.rating} comment={review.comment} id={review.id}/>
        } else {
            const foundUser = movie.users.find((user) => review.user_id === user.id)
            return <DisabledReviewForm key={review.id} rating={review.rating} comment={review.comment} user= {foundUser}/>
        }
    })

    console.log(movie)

    return (
        <>
        <Wrapper>
            <div style={{ textAlign: "center", marginBottom: "10px" }}>
            <StyledImg src={movie.poster} alt={movie.title} />
            </div>
            <TitleContent>
                <MovieTitle>{movie.title}</MovieTitle>
                <Rating>
                    <img src="/potato-5-32.png" alt="potato"/> 
                    <h4 style={{ marginLeft: "5px" }}>77%</h4>
                </Rating>
            </TitleContent>
            <DataContent movie={movie}/>
            <Description movie={movie}/>
        </Wrapper>  
        <div style={{ textAlign: "center" }}>
            <Button style={{ textDecoration:"none"}} variant="link" onClick={() => setShowReviews(!showReviews)}>{showReviews ? "Close Reviews" : `Show Reviews(${movie.reviews.length})`}</Button>
        </div>
        {showReviews ? reviews : ""}
        <ReviewForm movie={movie} updateMovie={updateMovie}/>
        </>
        
    )
}

const StyledImg = styled.img`
    width: 250px;
    height: 250px;
    border: none;
    border-radius: 10px;
`

const MovieTitle = styled.h3`
    text-align: center;
`

const TitleContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Rating = styled.span`
    display: flex;
    align-items: center;
    margin-left: 10px;
`

export default MovieInfo;