import React from "react";
import TimeFrame from './TimeFrameSelect'

export const MemoizedComponent = React.memo(TimeFrame, (prevProps, nextProps) => {
    // Only re-render if the specificState prop has changed
    console.log("ee1",prevProps, nextProps)
    console.log("ee2", nextProps)
    return prevProps.timeLineWidth === nextProps.timeLineWidth;
});

