import React, {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import authService from '../appwrite/auth'
import { login } from '../features/authSlice'
import Input from './Input'
import Button from './Button'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import Logo from "./Logo"
function SignupComponent() {
    const [error, setError]=useState('');
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const {register, handleSubmit} = useForm();
    const create=async(data)=>{
        setError('');
        try {
            const user=await authService.createAccount(data);
            if(user){
                const userData=await authService.getCurrentUser();
                if(userData){
                    dispatch(login(userData));
                    navigate("/");
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

                 <span className='inline-block w-[60px] md:w-[100px]'>
                    <Logo/>
                 </span>


             </div>

             <h2 className='text-center text-3xl font-light leading-tight'>
                Sign Up 
             </h2> 

             <p className='mt-2 text-center text-base text-black/60'>
             already have an account?&nbsp;
             <Link to={'/login'}
             className='font-medium text-primary transition-all duration-200 hover:underline'
             >
                Sign In
             </Link>
             </p>
             {error && <p className='text-red-600 mt-8 text-center' >{error}</p> }

      <form onSubmit={handleSubmit(create)}
      className='mt-8 px-6'
      >
        <div className='space-y-5'>
          
          <Input 
          label="Full Name: "
          type="text"
          placeholder="Enter your full name"
          {...register("name",{
            required:true
          })}
          />

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
            >Sign Up</Button>

        </div>
      </form>

    </div>

    </div>
  )
}

export default SignupComponent;