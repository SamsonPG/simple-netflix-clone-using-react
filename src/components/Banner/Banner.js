
import React, { useEffect, useState } from 'react';
import './Banner.css';
import axios from 'axios';
import api from '../../api/api';

const Banner = () => {
  const [movies, setMovies] = useState([]);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API}${api.fetchNetflixOriginals}`);
        setMovies(response.data.results);
        return response;
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
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMovieIndex((prevIndex) =>
        prevIndex === movies.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); // Change banner every 10 seconds

    return () => {
      clearInterval(interval); // Clear interval on component unmount
    };
  }, [movies]);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  };

  const currentMovie = movies[currentMovieIndex];

  return (
    <header
      className='banner'
      style={{
        backgroundSize: 'cover',
        maxHeight: '600px',
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${currentMovie?.backdrop_path}")`,
        backgroundPosition: 'center top',
      }}
    >
      <div className='banner-contents'>
        <h1 className='banner-title'>{currentMovie?.title || currentMovie?.name || currentMovie?.original_name}</h1>

        <div className='banner-buttons'>
          <button className='banner-button'>Play</button>
          <button className='banner-button'>My List</button>
        </div>
        <h1 className='banner-description'>{truncate(currentMovie?.overview, 150)}</h1>
      </div>
      <div className='banner-fadeBottom'></div>
    </header>
  );
};

export default Banner;
