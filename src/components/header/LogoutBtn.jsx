import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../features/authSlice'
import { useNavigate } from 'react-router-dom'
function LogoutBtn() {
 const dispatch=useDispatch();
 const navigate=useNavigate();
 const handleLogout=()=>{
    authService.logout()
    .then(()=>{
     dispatch(logout());  
      
    })
    .catch((error)=>{
        console.log("Error during Logout :",error);
    });
navigate("/");

 }
    return (
    <button onClick={handleLogout}
    className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    >
        Logout
    </button>
  )
}

export default LogoutBtn