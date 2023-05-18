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
    // this.setState({arr1:[...this.state.arr1,e.target.value]})
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

  selectDot1=()=>{
    this.setState({arr1:[...this.state.arr1,this.state.currentTime]})
  }

  selectDot2=()=>{
    this.setState({arr2:[...this.state.arr2,this.state.currentTime1]})
  }
  
  selectDot3=()=>{
    this.setState({arr3:[...this.state.arr3,this.state.currentTime2]})
  }

  deSelectFromArr1=()=>{
    this.setState({arr1:[]})
  }

  deSelectFromArr2=()=>{
    this.setState({arr2:[]})
  }

  deSelectFromArr3=()=>{
    this.setState({arr3:[]})
  }

  show=()=>{
    console.log("start", this.state.arr1.sort())
    console.log("main", this.state.arr2.sort())
    console.log("end", this.state.arr3.sort())
  }
  timeLineWidth=1000

  render() {
    const { url, playing, currentTime, duration, currentTime1 ,currentTime2  } = this.state;
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

        <br></br> <br></br>

      {/* ------------------------ */}    
        <div style={{display:'flex', marginLeft:'2px'}}>
        {
         this.state.arr1 && this.state.arr1.map((v,i)=>{
          let x=v/duration*this.timeLineWidth 
          x=x-v/duration*2

            return(
              <div style={{height:'5px',width:'2px',backgroundColor:'red',position:'absolute',marginLeft:`${x}px`}}></div>
            )
          })
        }  
        </div>
        <div style={{display:'flex'}}>
          <TimeFrame timeLineWidth={this.timeLineWidth} duration1={duration}></TimeFrame>
          <span onClick={this.selectDot1} style={{height:'15px',  width:'15px', backgroundColor:'red',marginLeft:'2px'}}></span>
          <span onClick={this.deSelectFromArr1} style={{height:'15px',  width:'15px', backgroundColor:'black',marginLeft:'2px'}}></span>
        </div>
        
        <div style={{display:'flex', position:'relative'}}>
           <input className="slider" id="timelineSlider"
           style={{height: '4px', fontSize:'4px',background: '#ccc', width:`${this.timeLineWidth}px`,position: 'absolute',top:'-20px'}}
             type="range"
             min={0}
             max={duration}
             step="any"
             value={currentTime}
             onChange={this.handleSeek}
           />    
        </div>


      {/* ------------------------ */}   
          <div style={{display:'flex', marginLeft:'2px'}}>
          {
           this.state.arr2 && this.state.arr2.map((v,i)=>{
            let x=v/duration*this.timeLineWidth  
            x=x-v/duration*2
              return(
                <div style={{height:'4px',width:'2px',backgroundColor:'red',position:'absolute',marginLeft:`${x}px`}}></div>
              )
            })
          }  
         </div>      
        <div style={{display:'flex'}}>
          <TimeFrame timeLineWidth={this.timeLineWidth} arr1={this.arr1} duration1={duration}></TimeFrame>
           <span onClick={this.selectDot2} style={{height:'15px',  width:'15px', backgroundColor:'red',marginLeft:'2px'}}></span>
           <span onClick={this.deSelectFromArr2} style={{height:'15px',  width:'15px', backgroundColor:'black',marginLeft:'2px'}}></span>
        </div>

      <div style={{display:'flex', position:'relative'}}>
        <input className="slider" id="timelineSlider"
         style={{height: '4px', fontSize:'4px',background: '#ccc', width:`${this.timeLineWidth}px`, position: 'absolute',top:'-20px'}}
          type="range"
          min={0}
          max={duration}
          step="any"
          value={currentTime1}
          onChange={this.handleSeek1}
        />
      </div>

      {/* ------------------------ */}   
          <div style={{display:'flex', marginLeft:'2px'}}>
          {
           this.state.arr3 && this.state.arr3.map((v,i)=>{
            let x=v/duration*this.timeLineWidth  
            x=x-v/duration*2
              return(
                <div style={{height:'4px',width:'2px',backgroundColor:'red',position:'absolute',marginLeft:`${x}px`}}></div>
              )
            })
          }  
         </div>  
       <div style={{display:'flex'}}>
         <TimeFrame timeLineWidth={this.timeLineWidth} style={{position: 'relative'}} duration1={duration}></TimeFrame>
         <span onClick={this.selectDot3}  style={{height:'15px',  width:'15px', backgroundColor:'red',marginLeft:'2px'}}></span>
         <span onClick={this.deSelectFromArr3} style={{height:'15px',  width:'15px', backgroundColor:'black',marginLeft:'2px'}}></span>
        </div>
       
      <div style={{display:'flex', position:'relative'}}>
        <input className="slider" id="timelineSlider"
         style={{height: '4px', fontSize:'4px',background: '#ccc', width:`${this.timeLineWidth}px`, position: 'absolute',top:'-20px'}}
          type="range"
          min={0}
          max={duration}
          step="any"
          value={currentTime2}
          onChange={this.handleSeek2}
        />
      </div>

    <br></br> <br></br>
    <div onClick={this.show} style={{backgroundColor:'black', color:'white', width:'200px', padding:'4px'}}>Show Times</div>
      </div>
    );
  }
}

export default VideoPlayer;
