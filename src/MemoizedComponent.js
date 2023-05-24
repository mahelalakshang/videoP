import React from "react";
import TimeFrame from './TimeFrameSelect'

export const MemoizedComponent = React.memo(TimeFrame, (prevProps, nextProps) => {

    return prevProps.timeLineWidth === nextProps.timeLineWidth;
});

