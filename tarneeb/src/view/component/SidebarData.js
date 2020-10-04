import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'



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

]