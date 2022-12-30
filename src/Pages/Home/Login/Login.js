import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signIn } = useContext(AuthContext)
    const { error, setError } = useState("");
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = data => {
        console.log(data)
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .then(err => {
                console.log(err.message)
                setError(err.message)
            })
    }
    return (
        <div className='flex flex-col  justify-center text-center mx-auto py-12'>

            <form className='' onSubmit={handleSubmit(handleLogin)}>

                <p className='text-center'>Login</p>
                <input className='rounded-lg mt-4  w-48 border-solid border-2 focus:bg-blue-500 mb-3 p-2' {...register("email", { ...register("email", { required: "Email Address is required" }) })} placeholder="Your email" /> <br />
                {errors.email && (
                    <p className="text-red-600">{errors.email?.message}</p>
                )}
                <input className='rounded-lg mt-4  w-48 border-solid border-2 focus:bg-blue-500 mb-3 p-2' {...register("password", { required: "password Address is required", minLength: { value: 6, message: 'password must be 6 charecter' } })} placeholder="Your password" /> <br />
                {errors.password && (
                    <p className="text-red-600">{errors.password?.message}</p>
                )}


                <input className='rounded-lg w-48 p-2 font-bold border-2 border-blue-500' type="submit" value="login" />
            </form>
            <Link className='text-blue-500' to={"/signup"}>if you are new <small>signup</small></Link>
            <div>
                {
                    error && <p className='text-red-500'>{error}</p>
                }
            </div>
            <p>or</p>

            <button className='mx-auto h-10 w-18 p-2 rounded font-bold border-2 border-blue-500' type="submit" value="googlelogin">Google login</button>

        </div>
    );
};

export default Login;