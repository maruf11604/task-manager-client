import { Button } from 'bootstrap';
import React from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import * as animationData from '../../../market.json'

const Home = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <div className='my-12 flex flex-col'>
            <div className=' text-center '>
                <h2 className='font-bold text-4xl'>Task manager</h2>
                <p>you can add task and remove your task .So do not dealy.</p>
                <p className='font-semibold text-2xl pt-6'>Let's try Now</p>

                <button className='bg-blue-700 py-3 px-6 rounded-md mt-4 text-white'><Link>Join</Link></button>
            </div>
            <Lottie options={defaultOptions}
                height={300}
                width={300}
            />
        </div>
    );
};

export default Home;