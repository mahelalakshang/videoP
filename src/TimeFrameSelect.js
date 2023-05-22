import React from 'react';
import './pp.css'
const Timeline = ({ duration1, arr1, timeLineWidth }) => {
  const stripeCount = parseInt(duration1/10) // Number of stripes based on a 10-second interval
                                                    //arr1 in to INT
  const stripes = [];



  for (let i = 0; i <= stripeCount; i++) {
    stripes.push(<div key={i} className="stripe" ></div>);
      
      if(i!=stripeCount){
        for(let j=0;j<9;j++){
          stripes.push(<div key={Math.random()} className="stripeSmall" />);
        }
      }
      
  }
  return( 
    <div>

      <div style={{width:`${timeLineWidth}px`,marginLeft:'2px',marginBottom:'2px'}}  className="timeline">{stripes}
        
      </div>
    </div>

  );
};

export default Timeline;
