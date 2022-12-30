import React, { useContext } from 'react';
import { useState } from "react";
import { useForm } from "react-hook-form";
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import * as animationData from '../../../multitasking.json'


const Addtask = () => {
    const { user } = useContext(AuthContext)
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const imageHostkey = process.env.REACT_APP_imagebb;
    console.log(imageHostkey)
    const { register, handleSubmit } = useForm();
    const handleAdd = task => {
        console.log(task)
        const image = task.avatar[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostkey} `;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {

                    const people = {
                        name: task.name,
                        email: task.email,
                        category: task.category,
                        myself: task.aboutYou,
                        image: imgData.data.url
                    }

                    fetch('http://localhost:5000/addtask', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(people)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result)
                        })
                }
            })
    }

    return (
        <div className='my-12 py-12 mx-12 '>
            <p className='font-bold text-3xl text-center'>Add-task</p>
            <hr />
            <div className=' p-3  md:grid grid-cols-2  mx-4 '>
                <form className='flex flex-col' onSubmit={handleSubmit(handleAdd)}>
                    <input className='' {...register("avatar")} type="file"
                        id="avatar" name="avatar"
                        accept="image/png, image/jpeg"></input>

                    <input className='rounded-lg mt-4  w-48 border-solid border-2 focus:bg-blue-500 mb-3 p-2' {...register("name")} placeholder="your name" /> <br />
                    <input className='rounded-lg mt-4  w-48 border-solid border-2 focus:bg-blue-500 mb-3 p-2' {...register("email")} placeholder="your email" defaultValue={user?.email} /> <br />
                    <select className='rounded-lg w-48 border-solid border-2 border-black mb-3' {...register("category", { required: true })}>
                        <option value="">Select...</option>
                        <option value="A">Option A</option>
                        <option value="B">Option B</option>
                    </select> <br />
                    <textarea className='rounded-lg w-48 border-solid border-2 border-black mb-3'  {...register("aboutYou")} placeholder="About task" />


                    <input className='rounded-lg w-48 p-2 font-bold border-2 border-blue-500' type="submit" />
                </form>
                <div>
                    <Lottie options={defaultOptions}
                        height={300}
                        width={300}
                    />
                </div>
            </div>

        </div>
    );
};

export default Addtask;