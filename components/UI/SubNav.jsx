import React from 'react';

const SubNav = ({ items, activeItem, onSelect }) => (
  <div className="bg-white border-b border-slate-200 sticky top-[72px] md:top-[88px] z-30">
    <div className="max-w-7xl mx-auto px-4 flex overflow-x-auto hide-scrollbar">
      {items.map(item => (
        <button
          key={item.id}
          onClick={() => onSelect(item.id)}
          className={`px-6 py-4 font-bold text-[11px] uppercase tracking-wider whitespace-nowrap border-b-2 transition-colors ${
            activeItem === item.id 
              ? 'border-orange-600 text-orange-600 bg-orange-50/30' 
              : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-50'
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  </div>
);

export default SubNav;
