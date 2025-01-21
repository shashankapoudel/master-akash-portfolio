import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi';
// import logo from './public/Images/logo1.jpg'

const Header = () => {

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Blogs', path: '/blogs' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Testimonials', path: '/testimonials' },
        { name: 'Contact', path: '/contact' }
    ]
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState(location.pathname);

    useEffect(() => {
        setActive(location.pathname)
    }, [location])

    return (
        <div className='flex flex-col'>

            <div className='bg-[#a7594d] text-center p-2 '>
                <p className='text-xl lg:text-3xl font-marck-script text-white tracking-widest '>"Where you can feel the change"</p>
            </div>

            <div className='flex justify-between  '>
                <div className='lg:w-1/4 w-1/3 flex  justify-center'>
                    <img
                        src="/Images/logo1.jpg"
                        alt="Company Logo"
                        className="lg:w-auto h-16 w-44 transition-transform duration-300 hover:scale-105 mix-blend-multiply"
                    />
                </div>
                <button
                    className="text-2xl md:hidden p-4"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>

                <div className=' hidden md:flex lg:w-3/4 w-2/3 bg-[#3c5551] font-playfair-display p-2 gap-12 ml-auto text-white'>
                    {
                        navItems.map((item) => (
                            <NavLink to={item.path}
                                key={item.name}
                                // className={active === item.path ? 'text-[#3F7A4C] font-semibold' : 'text-[#E2897F] hover:text-[#539C68]'}
                                className="text-2xl font-semibold tracking-widest hover:text-[#a7594d]"
                            >
                                {item.name}
                            </NavLink>
                        )
                        )
                    }
                </div>

            </div>

            {
                menuOpen && (
                    <div className="md:hidden bg-[#F6F8FA] p-2">
                        <ul className="flex flex-col gap-4 p-4">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <NavLink
                                        to={item.path}
                                    // className={active === item.path ? 'text-blue-600 font-bold' : 'text-gray-800 hover:text-blue-500'}
                                    >
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                )
            }

        </div>
    )
}
export default Header
