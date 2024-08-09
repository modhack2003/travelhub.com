import React from 'react';
import ProgressBar from './ProgressBar';

function ProgressBarWrapper({ progress, total }) {
  const barWidth = `${(progress / total) * 100}%`;

  return (
    <div className="hidden md:block"> {/* Hidden on mobile, shown on medium screens and above */}
      <ProgressBar current={progress} total={total} barWidth={barWidth} />
    </div>
  );
}

export default ProgressBarWrapper;
