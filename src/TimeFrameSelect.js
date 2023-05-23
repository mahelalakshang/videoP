import React from 'react';
import './pp.css'
const Timeline = ({ duration1, arr1, timeLineWidth }) => {
  const stripeCount = parseInt(duration1/20) // Number of stripes based on a 10-second interval
                                                    //arr1 in to INT '%'
  console.log("WW", duration1)
  const margin=timeLineWidth/duration1*20
  
  const stripes = [];
 

  for (let i = 0; i <= stripeCount; i++) {

    if(i==0){
    stripes.push(<div key={i} className="stripe" ><div style={{fontSize:'10px',position:'relative',bottom:'13px', color:'white'}}>{i*20}</div></div>);
    }
    else{
    stripes.push(<div style={{marginLeft:`${margin}px`}} key={i} className="stripe" ><div style={{fontSize:'10px',position:'relative',bottom:'13px', color:'white'}}>{i*20}</div></div>);
    }

      // if(i==stripeCount){
      //   for(let j=0;j<reamin;j++){
      //     stripes.push(<div key={Math.random()} className="stripeSmall" />)
      //   }
      // }

      // if(i!=stripeCount){
      //   for(let j=0;j<19;j++){
      //     stripes.push(<div key={Math.random()} className="stripeSmall" />);
      //   }
      // }
      
  }


  return( 
    <div>

      <div style={{width:`${timeLineWidth}px`,marginLeft:'2px',marginBottom:'2px'}}  className="timeline">{stripes}
        
      </div>

    </div>

  );
};

export default Timeline;
