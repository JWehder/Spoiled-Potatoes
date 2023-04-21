import React, { useContext, useState } from "react";
import NewsPane from "../components/NewsPane";
import { Redirect } from "react-router-dom";
import Navigation from "../components/Nav";
import { UserContext } from "../context/User";
import CategoryContainer from "../components/CategoryContainer";
import { MovieContext } from "../context/Movie";
import MovieCard from "../components/MovieCard";
import ReviewModal from "../modals/ReviewModal";

function HomePage() {
    const [show, setShow] = useState(false)

    const { user } = useContext(UserContext)
    const { isLoading, movies } = useContext(MovieContext)

    const categories = {popular: [], drama: [], comedy: [], documentary: []}

    if (movies) {
        movies.forEach((movie) => {
            if (movie.id) {
                categories.popular.push(movie)
            }
            if (movie.determine_category === "Drama") {
                categories.drama.push(movie)
            } else if (movie.determine_category === "Comedy") {
                categories.comedy.push(movie)
            } else if (movie.determine_category === "Documentary") {
                categories.documentary.push(movie)
            } 
        })
    }

    const categoryContainers = Object.keys(categories).map((category) => {
          const movies = categories[category];
          return (
          <CategoryContainer category= {category} key={category}>
            {movies.map((movie) => {
                return (
                <MovieCard overall_rating= {movie.overall_rating} id={movie.id} title={movie.title} poster={movie.poster} key={movie.title} />
                )
            })}
          </CategoryContainer>
          );
    })

    const userMovies = () => {
        return (
            <CategoryContainer show={show} setShow= {setShow} category= "movies you have reviewed" key="Reviewed Movies">
            {user.unique_movies.map((movie) => {
                return (
                <MovieCard overall_rating= {movie.overall_rating} id={movie.id} title={movie.title} poster={movie.poster} key={movie.title} />
                )
            })}
          </CategoryContainer>
        )
    }


    if (!user) return <Redirect to="/login" />

    if (isLoading) {
        return <div style={{textAlign: 'center'}}>Loading...</div>
    }

    return (
            <div style={{ width: '900px', textAlign: 'center', margin: '0 auto', backgroundColor: '#FFFAFA' }}>
                <Navigation />
                <NewsPane />
                <ReviewModal show={show} setShow= {setShow}/>
                {userMovies()}
                {categoryContainers}
            </div>
    )
}

export default HomePage;