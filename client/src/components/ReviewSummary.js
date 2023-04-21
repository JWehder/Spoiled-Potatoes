import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import StarRating from "./StarRating"

function ReviewSummary({movie, reviews}) {
    
    const filteredReviews = reviews.filter((review) => review.movie_id === movie.id)

    const releaseDate = movie.release_date.slice(7,11)

    const displayReviews = filteredReviews.map((filteredReview) => {
            const createdAt = filteredReview.created_at.slice(0, 10) + ' ' + filteredReview.created_at.slice(11,16)

        return (
            <div>
                <div style={{ display: "block", marginBottom: "0px"}}>
                    <div style={{float: "left"}}>
                        <StarRating rating={filteredReview.rating} />
                    </div>
                    <div style={{float: "right"}}>
                    <p style={{color: '#AEADAD'}}>{createdAt}</p>
                    </div>
                    <div style={{clear: "both"}}></div>
                </div>
                <p>{filteredReview.comment}</p>
            </div>
        )
    })

    return (
        <Container>
            <MovieContainer>
                <LinkStyle to={`/movies/${movie.id}`}>
                    <StyledImg src={movie.poster} alt={movie.title} />
                    <MovieTitle>
                        <b>{movie.title}</b>
                    </MovieTitle>
                    <span style={{color: '#AEADAD'}}>({releaseDate})</span>
                </LinkStyle>
            </MovieContainer>

            <ReviewsContainer>
                {displayReviews}
            </ReviewsContainer>
        </Container>
    )
}

const MovieContainer = styled.div`
    float: left;
    width: 50%;
    font-size: 12px;
`

const ReviewsContainer = styled.div`
    float: right;
    width: 50%;
    font-size: 10px;
`

const Container = styled.section`
    display: block;
    overflow: hidden;
    margin-top: 20px;
`

const LinkStyle = styled(Link)`
    text-decoration: none;
    color: inherit;
`

const StyledImg = styled.img`
    width: 52px;
    height: 75px;
    border: none;
    border-radius: 10px;

    &:hover {
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    }
`

const MovieTitle = styled.p`
        margin-top: 5px; 
        margin-right: 1px;
        margin-bottom: 0px;
        padding-right: 0px;
`



export default ReviewSummary;