import React from 'react'
import MM from './mm'
import VideoPlayer from './VIdeoPlayer'
import TimeFrame from './TimeFrameSelect'

const App = () => {
  const videoLength = 100;
  return (
    <div>
     <h1>React Video Player</h1>
      <VideoPlayer />
      {/* <VideoPlayer /> */}
      {/* <TimeFrame duration={596.458333}></TimeFrame> */}
      {/* <KK src='https://media.w3.org/2010/05/bunny/movie.ogv'></KK> */}
    </div>
  )
}

export default App