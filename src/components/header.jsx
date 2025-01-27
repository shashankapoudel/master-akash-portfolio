import React, { useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi';
// import logo from './public/Images/logo1.jpg'

const Header = () => {
    const navigate = useNavigate();

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'About', path: '/about' },
        { name: 'Blogs', path: '/blogs' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' }
    ]
    const location = useLocation()
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

            <div className='flex justify-between items-center bg-gray-100 text-[#606060] py-2 px-4 lg:py-4 lg:px-8  mx-2 lg:mx-8'>

                <div className='flex justify-center'>
                    <img
                        src="/Images/LogoName.png"
                        alt="Company Logo"
                        className="lg:w-48 md:w-auto h-8 lg:h-16 w-24  transition-transform duration-300 hover:scale-105 mix-blend-multiply"
                    />
                </div>

                <button
                    className="text-4xl lg:hidden p-4"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>

                <div className='hidden lg:flex  font-poppins gap-10  text-lg tracking-wider '>
                    {
                        navItems.map((item) => (
                            <NavLink to={item.path}
                                key={item.name}
                                className={active === item.path ? 'text-[#a7594d] font-semibold hover:-translate-y-1' : 'text-[#606060] hover:text-[#a7594d] hover:-translate-y-1'}
                            >
                                {item.name}
                            </NavLink>
                        )
                        )
                    }
                </div>

                <button
                    onClick={() => navigate('/contact')}
                    className='border px-1  lg:px-8 py-3  bg-[#044F86] text-white text-sm bg-gradient-to-r from-[#044F86] to-[#0A6EB5]    shadow-lg hover:shadow-xl transition-transform duration-300  ease-out  hover:scale-105'>
                    Book Appointment
                </button>

            </div>

            {
                menuOpen && (
                    <div className="lg:hidden md:flex bg-[#F6F8FA] p-2">
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
