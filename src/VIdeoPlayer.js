import React from 'react';
import ReactPlayer from 'react-player';
import './ss.css'
import TimeFrame from './TimeFrameSelect'

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'https://media.w3.org/2010/05/bunny/movie.ogv',
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
      arr3:[],
      timeLineWidth:1000
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
    if(this.state.ct && this.state.pl==false){
        this.setState({ currentTime: progress.playedSeconds });
        this.setState({ pl: true });
    }
    if(this.state.ct1 && this.state.pl==false){
        this.setState({ currentTime1: progress.playedSeconds });
        this.setState({ pl: true });
    }
    if(this.state.ct2 && this.state.pl==false){
        this.setState({ currentTime2: progress.playedSeconds });
        this.setState({ pl: true });
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
    // this.setState({playing:false})
    this.player.seekTo(parseFloat(e.target.value));
  };

  handleSeek1 = (e) => {
    this.setState({ct1:true})
    this.setState({ct:false})
    this.setState({ct2:false})
    this.setState({pl:false})
    // this.setState({playing:false})
    this.player.seekTo(parseFloat(e.target.value));
  };

  handleSeek2 = (e) => {
    this.setState({ct2:true})
    this.setState({ct1:false})
    this.setState({ct:false})
    this.setState({pl:false})
    // this.setState({playing:false})
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
  changeWidthOfTimelineZoom=(e)=>{
    console.log(e.target.value)
    this.setState({timeLineWidth:this.state.timeLineWidth+200})
  }

  changeWidthOfTimelineZoomOut=(e)=>{
    console.log(e.target.value)
    if(this.state.timeLineWidth>1000){
      this.setState({timeLineWidth:this.state.timeLineWidth-200})
    }
   
  }

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
      {/* ------------------------ */}  
<div style={{display:'flex'}}>    
<div style={{backgroundColor:'black'}} className='scroll'>  
        <div  style={{display:'flex',position:'relative', marginLeft:'2px',width:`${this.state.timeLineWidth}`}}>
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
{/* <div>sssssssssssss</div> */}

     
      {/* ------------------------ */}  
          <div style={{display:'flex', marginLeft:'2px'}}>
          {
           this.state.arr2 && this.state.arr2.map((v,i)=>{
            let x=v/duration*this.state.timeLineWidth  
            x=x-v/duration*5
              return(
                <div style={{height:'5px',width:'5px',backgroundColor:'red',position:'absolute',marginLeft:`${x}px`}}></div>
              )
            })
          }  
         </div>      
        <div style={{display:'flex'}}>
          <TimeFrame timeLineWidth={this.state.timeLineWidth} arr1={this.arr1} duration1={duration}></TimeFrame>
           {/* <span onClick={this.selectDot2} style={{height:'15px',  width:'15px', backgroundColor:'red',marginLeft:'2px'}}></span>
           <span onClick={this.deSelectFromArr2} style={{height:'15px',  width:'15px', backgroundColor:'black',marginLeft:'2px'}}></span> */}
        </div>

      <div style={{display:'flex', position:'relative'}}>
        <input className="slider" id="timelineSlider"
         style={{height: '4px', fontSize:'4px',background: '#ccc', width:`${this.state.timeLineWidth}px`, position: 'absolute',top:'-20px'}}
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
            let x=v/duration*this.state.timeLineWidth  
            x=x-v/duration*5
              return(
                <div style={{height:'5px',width:'5px',backgroundColor:'red',position:'absolute',marginLeft:`${x}px`}}></div>
              )
            })
          }  
         </div>  
       <div style={{display:'flex'}}>
         <TimeFrame timeLineWidth={this.state.timeLineWidth} style={{position: 'relative'}} duration1={duration}></TimeFrame>
         {/* <span onClick={this.selectDot3}  style={{height:'15px',  width:'15px', backgroundColor:'red',marginLeft:'2px'}}></span>
         <span onClick={this.deSelectFromArr3} style={{height:'15px',  width:'15px', backgroundColor:'black',marginLeft:'2px'}}></span> */}
        </div>
       
      <div style={{display:'flex', position:'relative'}}>
        <input className="slider" id="timelineSlider"
         style={{height: '4px', fontSize:'4px',background: '#ccc', width:`${this.state.timeLineWidth}px`, position: 'absolute',top:'-20px'}}
          type="range"
          min={0}
          max={duration}
          step="any"
          value={currentTime2}
          onChange={this.handleSeek2}
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
    <div onClick={this.show} style={{backgroundColor:'black', color:'white', width:'200px', padding:'4px'}}>Show Times</div>
      </div>
    );
  }
}

export default VideoPlayer;
