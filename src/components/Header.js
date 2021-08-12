import React from 'react'
import DehazeIcon from '@material-ui/icons/Dehaze';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Header() {
    return (
        <div>
            <div className="bg-red-600 px-12 py-1.5 text-white flex justify-between fixed w-screen z-20">
                <div className="flex items-center lg:w-1/3">
                    <DehazeIcon className="mx-1 text-xl hover:bg-red-400 cursor-pointer rounded"/>
                    <HomeIcon className="mx-1.5 text-xl hover:bg-red-400 cursor-pointer rounded"></HomeIcon>
                    <div className="bg-red-400 hover:bg-white hover:text-black rounded ml-2 px-1 py-0.5 transition-colors duration-100">
                        <SearchIcon className="text-xs"></SearchIcon>
                        <input className="bg-transparent outline-none text-white hover:text-black text-xs" placeholder="Search" type="text"/>
                    </div>
                </div>
                <div className="flex items-center">
                    <AddIcon className="mx-1.5 text-xl hover:bg-red-400 cursor-pointer rounded"></AddIcon>
                    <NotificationsNoneIcon className="mx-1.5 text-xl hover:bg-red-400 cursor-pointer rounded"></NotificationsNoneIcon>
                    <AccountCircleIcon className="mx-1.5 text-xl hover:bg-red-400 cursor-pointer rounded"></AccountCircleIcon>
                </div>
            </div>
        </div>
    )
}

export default Header
