import React from 'react'
import SideBarItem from './SideBarItem'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AssignmentIcon from '@material-ui/icons/Assignment';

function SideBar() {
    return (
        <div className="bg-white w-64 fixed h-full pt-20 pl-8 rounded sm:invisible md:visible">
            <SideBarItem icon={ <MailOutlineIcon /> } text="Inbox" />
            <SideBarItem icon={ <CalendarTodayIcon /> } text="Today" />
            <SideBarItem icon={ <AssignmentIcon /> } text="Upcoming" />
        </div>
    )
}

export default SideBar 
