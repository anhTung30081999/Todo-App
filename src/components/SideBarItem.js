import React from 'react'

function SideBarItem({icon, text}) {
    return (
        <div className="hover:bg-gray-200 rounded mr-2 px-3 py-1 cursor-pointer font-normal flex text-blue-400">
            {icon}
            <h1 className="ml-1 text-base font-extralight text-black">{text}</h1>
        </div>
    )
}

export default SideBarItem
