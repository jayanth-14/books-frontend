import React from 'react'
import SideBarItem from './SideBarItem'
import { FaPlus } from 'react-icons/fa'
import { BiSolidDashboard } from 'react-icons/bi'
import { ImBooks } from 'react-icons/im'
import { TbTransactionRupee } from 'react-icons/tb'

export default function SideBar() {
  return (
    <aside id="sidebar" className="fixed hidden z-20 h-full top-14 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75" aria-label="Sidebar">
      <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex-1 px-3 bg-white divide-y space-y-1">
            <ul className="space-y-2 pb-2">
            <SideBarItem title={"dashboard"} to={"details"} icon={<BiSolidDashboard className="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75"/>} />
            <SideBarItem title={"Listed Books"} to={"mybooks"} icon={<ImBooks className="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75"/>} />
            <SideBarItem title={"Add New Book"} to={"addbook"} icon={<FaPlus className="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75"/>} />
            <SideBarItem title={"Seller Tranactions"} to={"transactions"} icon={<TbTransactionRupee className="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75"/>} />
            
            </ul>

          </div>
        </div>
      </div>
    </aside>
  )
}
