import React from 'react'
import Sidebar from './Sidebar'
import TopBar from './TopBar'

const Layout = ({ children }) => {
    return (
        <div
            className='grid grid-cols-16 grid-rows-16 w-full h-screen max-h-screen bg-background font-poppins'
        >
            <Sidebar/>
            <TopBar/>
        </div>
    )
}

export default Layout