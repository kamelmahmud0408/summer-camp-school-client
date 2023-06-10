import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaHome, FaWallet } from 'react-icons/fa';

const Dashboard = () => {
    return (
        <>

        <div className="drawer lg:drawer-open">
            
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content space-y-2">
                    {/* Sidebar content here */}
                    <li><NavLink to='myselectedclass'> <FaHome></FaHome> My selected Class</NavLink></li>
                    <li><NavLink > <FaWallet></FaWallet> My Enrolled Class</NavLink></li>
                    <div className="divider">OR</div>
                    <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to='/instructor'>Instructor</NavLink></li>
                    <li></li>
                </ul>

            </div>
        </div>
        </>
    );
};

export default Dashboard;