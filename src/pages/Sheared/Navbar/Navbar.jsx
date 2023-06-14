import React from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import useselectedCart from '../../../hooks/useselectedCart';

const Navbar = () => {
    const { logOut, user } = useContext(AuthContext)
    const [refetch, selectedData] = useselectedCart()

    const handleLogOut = () => {
        logOut()
            .then(result => {

            })
            .catch()
    }

    const navItem = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='instructor'>Instructor</NavLink></li>
        <li><NavLink to='classes' >Classes</NavLink></li>



        {
            user ? <div>{
                user && <span className='text-white flex flex-col lg:flex-row lg:items-center gap-4'>
                    <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
                    <li > <div className='tooltip text-start' data-tip={user.displayName}  ><img className='w-10 h-10 rounded-full tooltip' src={user.photoURL} alt="" /></div></li> <li className={({ isActive }) => (isActive ? 'text-orange-500 font-semibold' : 'text-white font-semibold')}><NavLink onClick={handleLogOut} to='/login'>LogOut</NavLink></li> </span>
            }</div> : <li><NavLink to='/login'>Login</NavLink></li>
        }

    </>

    return (

        <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 space-x-6">
                        {navItem}
                    </ul>
                </div>
                <div className='ms-6 text-center'>
                    <img className='w-14 h-14 text-white text-center' src="https://i.ibb.co/R4pNZMk/initial-letter-q-tennis-club-logo-design-template-removebg-preview.png" alt="" />
                    <h2 className='font-bold text-lg'>EliteSports <span className='text-orange-500'>Academy</span></h2>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-3 items-center">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-outline text-white">Get started</a>
            </div>
        </div>

    );
};

export default Navbar;