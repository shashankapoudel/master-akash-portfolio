import React, { useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi';


const Header = () => {
    const navigate = useNavigate();

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Blogs', path: '/blogs' },
        { name: 'Testimonials', path: '/testimonials' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
        // { name: 'Faq', path: '/faq' }
    ]
    const location = useLocation()
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState(location.pathname);

    useEffect(() => {
        setActive(location.pathname)
    }, [location])

    return (
        <div className='flex flex-col sticky top-0 z-50 shadow-md'>

            <div className='bg-[#a7594d] text-center p-2 '>
                <p className='text-xl lg:text-3xl font-marck-script text-white tracking-widest '>"Where you can feel the change"</p>
            </div>

            <div className='flex justify-between items-center bg-gray-100 text-[#606060] py-1 px-4 lg:py-4 lg:px-9  mx-2 lg:mx-8'>

                <div className='flex justify-center'>
                    <img
                        onClick={() => navigate('/')}
                        src="/Images/Logo_Icon.png"
                        alt="Company Logo"
                        className="lg:w-60 md:w-48 h-8 lg:h-16 md:h-16 w-24  transition-transform duration-300 hover:scale-105 mix-blend-multiply cursor-pointer"
                    />
                </div>

                <button
                    className="text-4xl lg:hidden p-4"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>

                <div className='hidden lg:flex  font-poppins gap-7 text-lg tracking-normal '>
                    {
                        navItems.map((item) => (
                            < NavLink to={item.path}
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
                        <ul className="flex flex-col gap-4 p-4 text-lg">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <NavLink
                                        onClick={() => setMenuOpen(false)}
                                        className={active === item.path ? 'text-[#a7594d] font-semibold md:text-xl text-lg hover:-translate-y-1' : 'text-[#606060] hover:text-[#a7594d] hover:-translate-y-1 md:text-xl text-lg'}
                                        to={item.path}
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
