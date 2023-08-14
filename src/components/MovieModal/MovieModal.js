import React from 'react';
import './MovieModal.css';
import Youtube from 'react-youtube';

const MovieModal = ({ isOpen, onClose, movie , trailerKey}) => {
  if (!isOpen) return null;


  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className='modal-overlay'>
      <div className='modal-content'>
        <div className='modal-video'>
        {trailerKey && <Youtube videoId={trailerKey} opts={opts} />}
         </div>
    
        <button className='modal-close' onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default MovieModal;
