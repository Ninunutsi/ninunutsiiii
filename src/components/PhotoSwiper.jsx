// PhotoSwiper.jsx
import React, { useRef, useEffect } from 'react';
import { useDetailedPageContext } from '../contexts/DetailedPageContextProvider';

const PhotoSwiper = ({ photos, id }) => {
  const containerRef = useRef(null);
  const {setMainPhoto} = useDetailedPageContext()

  useEffect(() => {
    const container = containerRef.current

    const handleMouseWheel = (event) => {
      container.scrollLeft += event.deltaY
      event.preventDefault()

      if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        container.scrollLeft = 320
      } else if (container.scrollLeft <= 0 && event.deltaY < 0) {
        container.scrollLeft = container.scrollWidth - container.clientWidth;
      }
    }

    if (container) {
      container.addEventListener('wheel', handleMouseWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleMouseWheel);
      }
    }
  }, [containerRef, setMainPhoto])

  const handleClick = (photo, id) => {
    setMainPhoto(photo)
  }

  return (
    <div className="photo-swiper-container" ref={containerRef}>
      {photos.map((photo, index) => (
        <img
          onClick={() => handleClick(photo, id)}
          key={index}
          className="detailed-slider-images"
          src={photo}
          alt={`${index + 1}`}
          style={{ marginRight: '10px' }}
        />
      ))}
    </div>
  );
};

export default PhotoSwiper;
