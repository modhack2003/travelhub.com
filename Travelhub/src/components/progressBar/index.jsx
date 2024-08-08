import React from 'react';
import ProgressBar from './ProgressBar';

function ProgressBarWrapper() {
  return (
    <div className="hidden md:block"> {/* Hidden on mobile, shown on medium screens and above */}
      <ProgressBar current={1} total={8} barWidth="31px" />
    </div>
  );
}

export default ProgressBarWrapper;
