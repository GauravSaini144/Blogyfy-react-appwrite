import React, { useEffect, useState } from 'react'
import Container from '../container/Container'
import service from '../../appwrite/config'
import PostCard from '../PostCard'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import Skeleton from '../Skeleton';
import LandingPage from './LandingPage';
function Home() {

    
  
   
  return (

    <>
    <LandingPage/>

    </>
    
       
    
  )
}

export default Home