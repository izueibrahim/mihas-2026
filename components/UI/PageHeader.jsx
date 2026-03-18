import React from 'react';

const PageHeader = ({ title, subtitle, breadcrumb }) => (
  <div className="bg-slate-900 text-white pt-32 pb-16 px-6">
    <div className="max-w-7xl mx-auto">
      {breadcrumb && <div className="text-orange-400 text-sm font-semibold mb-4 tracking-wider uppercase">{breadcrumb}</div>}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">{title}</h1>
      {subtitle && <p className="text-lg md:text-xl text-slate-300 max-w-3xl">{subtitle}</p>}
    </div>
  </div>
);

export default PageHeader;
