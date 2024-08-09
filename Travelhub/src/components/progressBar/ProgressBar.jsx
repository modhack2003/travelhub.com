import React from 'react';

function ProgressBar({ current, total, barWidth }) {
  return (
    <div className="flex flex-col px-5 max-w-[245px] w-[245px]">
      <div className="w-full text-3xl text-neutral-50">
        {current}<span className="text-neutral-500">/{total}</span>
      </div>
      <div className="flex flex-col justify-center items-start mt-2 w-full bg-white">
        <div className="shrink-0 bg-purple-800 h-[11px]" style={{ width: barWidth }} />
      </div>
    </div>
  );
}

export default ProgressBar;
