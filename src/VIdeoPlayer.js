import React from 'react';
import ReactPlayer from 'react-player';
// import { TimelineRangeSlider, TimelineRange } from '@artoonie/timeline-range-slider';
// import '../timeline-range-slider/slider.css'
import './ss.css'
import TimeFrame from './TimeFrameSelect'

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'https://media.w3.org/2010/05/bunny/movie.ogv', // Replace with your video URL
      playing: false,
      currentTime: 0,
      currentTime1: 0,
      currentTime2: 0,
      duration: 0,
      ct:false,
      ct1:false,
      ct2:false,
      pl:false,
      arr1:[],
      arr2:[],
      arr3:[]
    };
  }

  handlePlay = () => {
    this.setState({ playing: true });
    this.setState({ pl: true });
  };

  handlePause = () => {
    this.setState({ playing: false });
  };

  handleProgress = (progress) => {
    // alert('ss')
    if(this.state.ct && this.state.pl==false){
        this.setState({ currentTime: progress.playedSeconds });
    }
    if(this.state.ct1 && this.state.pl==false){
        this.setState({ currentTime1: progress.playedSeconds });
    }
    if(this.state.ct2 && this.state.pl==false){
        this.setState({ currentTime2: progress.playedSeconds });
    }
    
  };

  handleDuration = (duration) => {
    this.setState({ duration });
  };

  handleSeek = (e) => {
    this.setState({ct:true})
    this.setState({ct1:false})
    this.setState({ct2:false})
    this.setState({pl:false})
    this.setState({playing:false})
    this.setState({arr1:[...this.state.arr1,e.target.value]})
    this.player.seekTo(parseFloat(e.target.value));
  };

  handleSeek1 = (e) => {
    this.setState({ct1:true})
    this.setState({ct:false})
    this.setState({ct2:false})
    this.setState({pl:false})
    this.setState({playing:false})
    this.player.seekTo(parseFloat(e.target.value));
  };

  handleSeek2 = (e) => {
    this.setState({ct2:true})
    this.setState({ct1:false})
    this.setState({ct:false})
    this.setState({pl:false})
    this.setState({playing:false})
    this.player.seekTo(parseFloat(e.target.value));
  };
 


  render() {
    const { url, playing, currentTime, duration, currentTime1 ,currentTime2  } = this.state;
    console.log(currentTime,currentTime1, currentTime2);


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
        {/* <button style={{marginRight:'10px'}} onClick={this.handlePlay}>Start</button>
        <button onClick={this.handlePause}>Stop</button> */}
        <br></br> <br></br>


        <div style={{width:'1400px',height:'3px',backgroundColor:'blue',marginLeft:'2px', position: 'relative'}}></div>
        <div style={{display:'flex', marginLeft:'2px'}}>
        {

         this.state.arr1 && this.state.arr1.map((v)=>{
          let x=v/duration*1400
          console.log('x',x)
            return(
              <div style={{height:'5px',width:'1px',backgroundColor:'red',position:'absolute',marginLeft:`${x}px`}}>
                
              </div>
            )
          })
        }
        </div>
        <TimeFrame style={{position: 'relative'}} duration1={duration}></TimeFrame>
        <input className="slider" id="timelineSlider"
        style={{height: '4px', fontSize:'4px',background: '#ccc', width:'1400px',position: 'absolute',top:'500px'}}
          type="range"
          min={0}
          max={duration}
          step="any"
          value={currentTime}
          onChange={this.handleSeek}
        />


        <TimeFrame arr1={this.arr1} style={{position: 'relative'}} duration1={duration}></TimeFrame>
        <input className="slider" id="timelineSlider"
         style={{height: '4px', fontSize:'4px',background: '#ccc', width:'1400px', position: 'absolute',top:'532px'}}
          type="range"
          min={0}
          max={duration}
          step="any"
          value={currentTime1}
          onChange={this.handleSeek1}
        />
       
 
        <TimeFrame style={{position: 'relative'}} duration1={duration}></TimeFrame>
        <input className="slider" id="timelineSlider"
         style={{height: '4px', fontSize:'4px',background: '#ccc', width:'1400px', position: 'absolute',top:'563px'}}
          type="range"
          min={0}
          max={duration}
          step="any"
          value={currentTime2}
          onChange={this.handleSeek2}
        />


      </div>
    );
  }
}

export default VideoPlayer;
