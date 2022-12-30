import React, { useContext, useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [open, setOpen] = useState(false);
    const handleLogOut = () => {
        logOut();
    }
    return (
        <nav className='bg-blue-200 p-2 '>



            <div className='flex justify-end'>

                {
                    open ? <XMarkIcon onClick={() => setOpen(!open)} className="h-6 w-6 md:hidden " /> :
                        <Bars3Icon onClick={() => setOpen(!open)} className="h-6 w-6 md:hidden " />
                }
            </div>
            <div className='flex justify-between'>
                <h2 className=' font-bold text-lg '>Manager</h2>
                <ul className={` relative   ${open ? 'top-2' : 'hidden'} md:flex justify-center items-center `}>

                    <li className='mr-5 '><Link to={"/"}>HOME</Link></li>
                    <li className='mr-5'><Link to={"/addtask"}>ADDTASK</Link></li>
                    <li className='mr-5'><Link to={"/mytask"}>MYTASK</Link></li>
                    <li className='mr-5'><Link to={"/completetask"}>COMPLETE-TASK</Link></li>
                    {
                        user?.uid ? <li className='mr-5'><button onClick={handleLogOut}>Logout</button></li> :
                            <li className='mr-5'><Link to={"/login"}>LOGIN</Link></li>
                    }

                </ul>
            </div>

        </nav>
    );
};

export default Navbar;