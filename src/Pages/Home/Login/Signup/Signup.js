import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider';
const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext)
    const handleSignup = data => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('user created')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => { })
                    .then(err => console.log(err))
            })
            .then(err => console.log(err))
    }
    return (
        <div className='flex flex-col  justify-center text-center mx-auto py-12'>

            <form className='' onSubmit={handleSubmit(handleSignup)}>

                <p className='text-center'>Signup</p>
                <input className='rounded-lg mt-4  w-48 border-solid border-2 focus:bg-blue-500 mb-3 p-2' {...register("name", { ...register("name", { required: "Name is required" }) })} placeholder="Your Name" /> <br />
                {errors.email && (
                    <p className="text-red-600">{errors.name?.message}</p>
                )}
                <input className='rounded-lg mt-4  w-48 border-solid border-2 focus:bg-blue-500 mb-3 p-2' {...register("email", { ...register("email", { required: "Email Address is required" }) })} placeholder="Your email" /> <br />
                {errors.email && (
                    <p className="text-red-600">{errors.email?.message}</p>
                )}
                <input className='rounded-lg mt-4  w-48 border-solid border-2 focus:bg-blue-500 mb-3 p-2' {...register("password", { required: "password Address is required", minLength: { value: 6, message: 'password must be 6 charecter' } })} placeholder="Your password" /> <br />
                {errors.password && (
                    <p className="text-red-600">{errors.password?.message}</p>
                )}


                <input className='rounded-lg w-48 p-2 font-bold border-2 border-blue-500' type="submit" value="signup" />
            </form>
            <Link className='text-blue-500' to={"/login"}>Already have an account <small>login</small></Link>
            <p>or</p>

            <button className='mx-auto h-10 w-18 p-2 rounded font-bold border-2 border-blue-500' type="submit" value="googlelogin">Google login</button>

        </div>
    );
};

export default Signup;