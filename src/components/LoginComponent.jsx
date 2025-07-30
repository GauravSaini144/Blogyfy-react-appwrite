import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Input from './Input'
import Button from './Button'
import { login} from '../features/authSlice'
import {useDispatch} from "react-redux"
import authService from '../appwrite/auth'
import { useForm } from 'react-hook-form'
import Logo from './Logo'
function LoginComponent() {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const {register, handleSubmit}=useForm();
    const [error, setError] = useState('');
    const loginUser=async(data)=>{
        setError("");
        try {
            const session=await authService.login(data);
            if(session){
                const userData=await authService.getCurrentUser();
            
                if(userData){
                    dispatch(login(userData));
                    setTimeout(() => {
                                            navigate("/all-post");

                    }, 1000);
                }
            }

            
        } catch (error) {
            setError(error.message);
        }
    }
  return (
    <div className='flex items-center justify-center w-full' >

    <div className='mx-auto w-full max-w-2xl bg-gray-100 rounded-xl p-4 md:p-8 border border-black/10'>
             
             <div className='mb-8 flex justify-start items-start'>

                 <span className='inline-block w-[60px] md:w-[100px]  '>
                    <Logo/>
                 </span>

             </div>

             <h2 className='text-center text-3xl font-light leading-tight'>
                Sign In 
             </h2> 

             <p className='mt-2 text-center text-base text-black/60'>
             Don&apos;t have any account?&nbsp;
             <Link to={'/signup'}
             className='font-medium text-primary transition-all duration-200 hover:underline'
             >
                Sign Up
             </Link>
             </p>
             {error && <p className='text-red-600 mt-8 text-center' >{error}</p> }

      <form onSubmit={handleSubmit(loginUser)}
      className='mt-8 px-6'
      >
        <div className='space-y-5'>

            <Input
            label="Email: "
            placeholder="Enter your email address"
            type="email"
            {...register("email", {
                required:true,
                validate: {
                    matchPattern: (value) =>/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) || "Email address must be valid",
                    

                }
            })}
            />

            <Input
            label="Password: "
            type="password"
            placeholder="Enter your password"
            {...register("password",{
                required:true,
            })}
            />
            <Button
            type="submit"
            className='w-full'
            >Sign In</Button>

        </div>
      </form>

    </div>

    </div>
  )
}

export default LoginComponent;