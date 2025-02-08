import React from 'react';
import SideBar from '../components/seller/sidebar/SideBar';
import SellerHeader from '../components/seller/SellerHeader';
import { Outlet } from 'react-router';

export default function DashBoard() {
  return (
    <div>
      <SellerHeader />
      <div className="flex bg-white pt-16">
        <SideBar />
        <div className="bg-gray-900 opacity-50 hidden fixed inset-0 z-0" id="sidebarBackdrop" />
        <div id="main-content" className="flex-1 min-h-screen bg-gray-50 p-6 lg:ml-64 overflow-y-auto">
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}