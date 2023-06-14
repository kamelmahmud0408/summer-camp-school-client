import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaHome, FaWallet, FaUserShield, FaChalkboardTeacher,FaUser,FaBookOpen } from 'react-icons/fa';
import { motion } from 'framer-motion';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';

const Dashboard = () => {

    const [isAdmin] = useAdmin()

    const [isInstructor] = useInstructor()

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}

            >

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
                            {
                                isAdmin ? <>
                                    <li><NavLink to='/dashboard/manageclass'> <FaUserShield></FaUserShield> Manage Classes </NavLink></li>
                                    <li><NavLink to='/dashboard/manageuser'> <FaUserShield></FaUserShield>Manage Users</NavLink></li>
                                </> : isInstructor
                                    ? <><li><NavLink to='/dashboard/addclass'> <FaChalkboardTeacher></FaChalkboardTeacher> Add A Class</NavLink></li>
                                        <li><NavLink to='/dashboard/myclasses'> <FaChalkboardTeacher></FaChalkboardTeacher> My Classes</NavLink></li>
                                    </> : <>
                                        <li><NavLink to='/dashboard/myenrolledclass'> <FaUser></FaUser> My Enrolled Class</NavLink></li>
                                        <li><NavLink to='/dashboard/myselectedclass' > <FaUser></FaUser> My selected Class</NavLink></li>
                                        <li><NavLink to='/dashboard/history' > <FaWallet></FaWallet> Payment History</NavLink></li>
                                    </>
                            }


                            <div className="divider">OR</div>
                            <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
                            <li><NavLink to='/instructor'><FaChalkboardTeacher></FaChalkboardTeacher> Instructor</NavLink></li>
                            <li><NavLink to='/classes'><FaBookOpen></FaBookOpen> Classes</NavLink></li>
                        </ul>

                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default Dashboard;