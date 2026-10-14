import React from 'react'
import { NavLink, Outlet } from 'react-router'

function Applayout() {
    return (
        <>
            <header className='text-4xl font-bold text-center mb-3'>Header</header>
            <nav className='w-full'>
                <ul className='max-w-300 mx-auto flex justify-around'>
                    <li>
                        <NavLink to={"/"}>Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/students"}>Student</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/teacher"}>Teacher</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/staff"}>Staff</NavLink>
                    </li>
                </ul>
            </nav>
            <main>
                <Outlet />
            </main>
            <footer className='text-4xl font-bold text-center mb-3'>Footer</footer>
        </>
    )
}

export default Applayout
