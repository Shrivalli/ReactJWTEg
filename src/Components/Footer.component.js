import React from 'react';

const FooterComponent = () => {
  return (
    <div className="p-10 bg-slate-900">
      <p className="text-lg text-slate-100">ABOUT INFO</p>
      <p className="text-sm text-slate-100 my-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod
        tempor inci ut labore et dolore.
      </p>
      <div>
        <p className="text-sm text-slate-100 mb-1">Addresss: 123 Pall Mall, London England</p>
        <p className="text-sm text-slate-100 mb-1">Email: hello@example.com</p>
        <p className="text-sm text-slate-100 mb-1">Phone: (012) 345 6789</p>
      </div>
    </div>
  );
};

export default FooterComponent;
