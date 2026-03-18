import React from 'react';

const Card = ({ children, className = '' }) => {
  const hasBg = className.includes('bg-');
  return (
    <div className={`${!hasBg ? 'bg-white' : ''} border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

export default Card;
