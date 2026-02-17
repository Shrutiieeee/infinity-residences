import React from 'react';

const Construction = ({ data }) => {
  return (
    <div className="bg-primary py-3 text-center text-[11px] tracking-[0.3em] font-bold text-white uppercase sticky top-0 z-50 border-b border-white/10 backdrop-blur-md bg-opacity-95">
      <span className="inline-block w-2 h-2 bg-accent rounded-full mr-3 animate-pulse"></span>
      {data.construction_label}
    </div>
  );
};

export default Construction;
