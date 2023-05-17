import React, { useState } from 'react';

const TimeMarker = ({ time, selected, onClick }) => {
  const markerStyle = {
    cursor: 'pointer',
    backgroundColor: selected ? 'blue' : 'red',
    borderRadius: '50%',
    width: '10px',
    height: '10px',
    margin: '0 2px',
  };

  return (
    <div style={markerStyle} onClick={() => onClick(time)}></div>
  );
};

const VideoPlayer = () => {
  const [selectedMarker, setSelectedMarker] = useState(null);

  const handleMarkerClick = (time) => {
    setSelectedMarker(time);
  };

  const markerTimes = [10, 20, 30, 40, 50]; // Example marker times, replace with your own data

  return (
    <div>
      <div style={{ marginBottom: '10px',  }}>
        {markerTimes.map((time) => (
          <TimeMarker
            key={time}
            time={time}
            selected={selectedMarker === time}
            onClick={handleMarkerClick}
          />
        ))}
      </div>
      <video
        src="https://media.w3.org/2010/05/bunny/movie.ogv"
        controls
        style={{ marginBottom: '20px' }}
      />
    </div>
  );
};

export default VideoPlayer;
