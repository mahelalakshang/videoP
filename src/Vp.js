import React from 'react';
import ReactPlayer from 'react-player';
import './ss.css'
import TimeFrame from './TimeFrameSelect'

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'https://www.youtube.com/watch?v=JJmcL1N2KQs&t=44s',
      playing: false,
      currentTime: 0,

      duration: 0,
    };
  }
  // https://www.youtube.com/watch?v=JJmcL1N2KQs
  handlePlay = () => {
    this.setState({ playing: true });
    this.setState({ pl: true });
  };

  handlePause = () => {
    this.setState({ playing: false });
  };

  handleProgress = (progress) => {
        this.setState({ currentTime: progress.playedSeconds });
  };

  handleDuration = (duration) => {
    this.setState({ duration,timeLineWidth:4000/590*duration });
  };

  handleSeek = (e) => {
    this.setState({ct:true})
    this.setState({ct1:false})
    this.setState({ct2:false})
    this.setState({pl:false})
    // this.setState({playing:false})
    this.player.seekTo(parseFloat(e.target.value));
  };

  render() {
    const { url, playing, currentTime, duration } = this.state;


    return (
      <div>
        <ReactPlayer
          ref={(player) => {
            this.player = player;
          }}
          controls
          url={url}
          playing={playing}
          onPlay={this.handlePlay}
          onPause={this.handlePause}
          onProgress={this.handleProgress}
          onDuration={this.handleDuration}
        />

        <br></br> 
        {/* <input className="slider2"
          type="range"
          min={0}
          max={100}
          onChange={this.changeWidthOfTimeline}
        /> */}
        <div style={{display:'flex', marginBottom:'5px', marginLeft:'5px'}}>
          <div onClick={this.changeWidthOfTimelineZoom} style={{backgroundColor:'red', padding:'2px', width:'20px', paddingLeft:'10px',marginRight:'2px', cursor:'pointer'}}>+</div>
          <div onClick={this.changeWidthOfTimelineZoomOut} style={{backgroundColor:'black', color:'white', padding:'2px',width:'20px', paddingLeft:'15px', paddingBottom:'7px', cursor:'pointer'}}>-</div>
        </div>
        <br></br>
      {/* ------------------------ */}  
<div style={{display:'flex'}}>    
<div style={{backgroundColor:'black'}} className='scroll'>  
        <div  style={{display:'flex', marginTop:'10px',position:'relative', marginLeft:'2px',width:`${this.state.timeLineWidth}`}}>
        {
         this.state.arr1 && this.state.arr1.map((v,i)=>{
          let x=v/duration*this.state.timeLineWidth 
          x=x-v/duration*5
            console.log("I",i)
            return(
              <div style={{height:'5px',width:'5px',backgroundColor:'red',position:'absolute',marginLeft:`${x}px`}}></div>
            )
          })
        }  
        </div>
        <div  style={{display:'flex'}}>
          <TimeFrame timeLineWidth={this.state.timeLineWidth} duration1={duration}></TimeFrame>
          {/* <span onClick={this.selectDot1} style={{height:'15px',  width:'15px', backgroundColor:'red',marginLeft:'2px'}}></span>
          <span onClick={this.deSelectFromArr1} style={{height:'15px',  width:'15px', backgroundColor:'black',marginLeft:'2px'}}></span> */}
        </div>
        
        <div style={{display:'flex', position:'relative'}}>
           <input className="slider" id="timelineSlider"
           style={{height: '4px', fontSize:'4px',background: '#ccc', width:`${this.state.timeLineWidth}px`,position: 'absolute',top:'-20px'}}
             type="range"
             min={0}
             max={duration}
             step="any"
             value={currentTime}
             onChange={this.handleSeek}
           />    
        </div>

 
</div> 

<div >
         <div style={{display:'flex', marginTop:'4px'}}>
          <div onClick={this.selectDot1} style={{height:'15px',  width:'15px', backgroundColor:'red',marginLeft:'2px'}}></div>
          <div onClick={this.deSelectFromArr1} style={{height:'15px',  width:'15px', backgroundColor:'black',marginLeft:'2px'}}></div>
         </div>
         <div style={{display:'flex', marginTop:'17px'}}>
         <span onClick={this.selectDot2} style={{height:'15px',  width:'15px', backgroundColor:'red',marginLeft:'2px'}}></span>
         <span onClick={this.deSelectFromArr2} style={{height:'15px',  width:'15px', backgroundColor:'black',marginLeft:'2px'}}></span>
         </div>
         <div style={{display:'flex', marginTop:'17px'}}>
         <span onClick={this.selectDot3}  style={{height:'15px',  width:'15px', backgroundColor:'red',marginLeft:'2px'}}></span>
         <span onClick={this.deSelectFromArr3} style={{height:'15px',  width:'15px', backgroundColor:'black',marginLeft:'2px'}}></span>
    
         </div>
</div>

</div>  

    <br></br> <br></br>
      </div>
    );
  }
}

export default VideoPlayer;
