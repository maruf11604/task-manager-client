import React from 'react';
const Footer = () => {
    return (
        <div className='bg-blue-300 py-12 px-3'>
            <div className='md:flex justify-between '>
                <h3 className='font-semibold text-lg'>Task</h3>

                <ul className='font-semibold text-sm'>
                    <li><a href="">Contact Us </a></li>
                    <li><a href=""> Terms of Service </a></li>
                    <li><a href=""> Privacy Policy </a></li>
                    <li><a href=""> Privacy Settings </a></li>

                </ul>



            </div>
            <hr />
            <p className='text-center py-5'>©Maruf Ahmed 2022</p>
        </div>
    );
};

export default Footer;