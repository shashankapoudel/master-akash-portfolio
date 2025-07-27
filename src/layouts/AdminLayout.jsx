import { useEffect, useState } from "react";
import { Outlet, NavLink, useLocation, useNavigate } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { FiChevronDown } from 'react-icons/fi';
import { CiLogout } from "react-icons/ci";

const AdminLayout = ({ setAdmin }) => {
    const location = useLocation();
    const [active, setActive] = useState(location.pathname);


    const navigate = useNavigate()


    const navItems = [
        { name: 'Blogs', route: '/admin/blogs' },

    ];

    useEffect(() => {
        setActive(location.pathname);
    }, [location]);

    const handleLogout = () => {
        setAdmin(false)
        navigate('/admin')
    }

    return (
        <div className="w-full bg-[#F7F7F7]">
            <div className="w-full bg-[#FFFFFF] p-4">
                <h2 className="text-xl font-semibold text-[#00B0A7]">Yogi Akash</h2>
            </div>

            <div className="flex">

                <div className="w-1/5 bg-[#FFFFFF] text-[#323232] min-h-screen p-5">
                    <div className="mt-5 gap-4 flex flex-col justify-between items-start p-2 w-full">


                        <div>
                            {
                                navItems.map((item) => (
                                    <div key={item.name}>
                                        <NavLink to={item.route}>
                                            {item.name}
                                        </NavLink>

                                    </div>
                                ))
                            }
                        </div>

                        <div className="w-full p-2">
                            <button
                                onClick={handleLogout}
                                className="text-start flex  items-center bg-[#CE2D000D] gap-2 w-full py-3 px-2 text-[#CE2D00]"><CiLogout />
                                Logout</button>
                        </div>

                    </div>
                </div>

                {/* Main part */}
                <div className="flex-1 m-4 bg-[#FFFFFF]">
                    <Outlet />
                </div>

            </div>
        </div>
    );
};

export default AdminLayout;