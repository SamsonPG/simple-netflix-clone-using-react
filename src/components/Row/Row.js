
import React, { useEffect, useState, useRef } from 'react';
import './Row.css';
import axios from 'axios';
import MovieModal from '../MovieModal/MovieModal';
import movieTrailer from 'movie-trailer';

const base_url = 'https://image.tmdb.org/t/p/original';

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const rowRef = useRef(null);
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API}${fetchUrl}`);
        setMovies(response.data.results);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          console.error('Resource not found:', error);
          alert('Resource not found');
        } else {
          console.error('Network Error:', error);
          alert('Network Error');
        }
      }
    };

    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.name || '', { tmdbId: movie.id })
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
          openModal(movie); // Move openModal here
        })
        .catch((error) => console.log(error));
    }
  };
  

  const scrollLeft = () => {
    rowRef.current.scrollLeft -= 200;
  };

  const scrollRight = () => {
    rowRef.current.scrollLeft += 200;
  };

  const [selectedMovie, setSelectedMovie] = useState(null);

  const openModal = (movie) => {
    setSelectedMovie(movie);
  };

  const closeModal = () => {
    setSelectedMovie(null);
    setTrailerUrl('');
  };

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row-container'>
        <div className='row-posters' ref={rowRef}>
          <div className='row-arrow row-left-arrow' onClick={scrollLeft}>
            {'<'}
          </div>
          {movies &&
            movies.map((movie) => (
              <img
                onClick={() => handleClick(movie)}
                key={movie.id}
                className={`row-poster ${isLargeRow && 'row-posterLarge'}`}
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                alt={movie.name}
              />
            ))}
          <div className='row-arrow row-right-arrow' onClick={scrollRight}>
            {'>'}
          </div>
        </div>
      </div>
      <MovieModal isOpen={selectedMovie !== null} onClose={closeModal} movie={selectedMovie || {}}  trailerKey={trailerUrl}/>
    </div>
  );
};

export default Row;