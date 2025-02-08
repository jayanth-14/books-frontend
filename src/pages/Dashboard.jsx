import React from 'react'
import SideBar from '../components/seller/sidebar/SideBar';
import SellerHeader from '../components/seller/SellerHeader';
import Transactions from '../components/seller/transactions/Transactions';
import { Outlet } from 'react-router';

export default function DashBoard() {
  return (
<div>
  <SellerHeader />
  <div className="flex overflow-hidden bg-white pt-16">
    <SideBar />
    <div className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop" />
    <div id="main-content" className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
      <main>
        <div className="pt-6 px-4">
          <div className="w-full">
            {<Outlet />}
          </div>
          <div className="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          </div>
          <div className="grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4">
          </div>
        </div>
      </main>
     
    </div>
  </div>
</div>

  )
}
