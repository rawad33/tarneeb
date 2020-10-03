import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as BiIcons from 'react-icons/bi'


export const SidebarData = [
    {
        title: 'Home',
        path: '/mainPage',
        icon: <AiIcons.AiFillHome />,
        cNam: 'nav-text'
    },
    {
        title: 'Games',
        path: '/games',
        icon: <FaIcons.FaGamepad />,
        cNam: 'nav-text'
    },
    {
        title: 'L-Out',
        path: '/',
        icon: <BiIcons.BiLogOutCircle />,
        cNam: 'nav-text'
    }
]