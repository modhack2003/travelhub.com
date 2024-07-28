import React from 'react';
import ProgressBar from './ProgressBar';

function ProgressBarWrapper( ) {
  return <ProgressBar current={1} total={8} barWidth="31px"/>;
}

export default ProgressBarWrapper;