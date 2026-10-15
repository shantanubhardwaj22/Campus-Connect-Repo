import React from 'react';
import { Outlet } from 'react-router-dom';

const NoNavFooterLayout = () => {
  return (
    <div className="w-full min-h-screen bg-black">
      <main className="w-full min-h-screen overflow-x-hidden bg-black">
        <div className="w-full min-h-screen bg-black">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default NoNavFooterLayout;