import React from 'react';
import Blogify from '../../assets/Blogify.png';
import Container from '../container/Container';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function LandingPage() {
    const navigate=useNavigate();
    const {status}=useSelector((state)=>state.auth);

  return (
    <Container>
      <div className="flex flex-col items-center justify-center gap-20 mt-24 text-center px-4">
        
        
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <img
            className="w-[280px] md:w-[400px] object-contain"
            src={Blogify}
            alt="Blogify"
          />
          <h1 className="text-2xl md:text-4xl font-light text-gray-800 max-w-xl">
            Your Words. Your World. <span className="font-semibold text-blue-600">Amplified</span>
          </h1>
        </div>

        
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-6 leading-tight ">
            Turn your thoughts into <span className="font-semibold text-blue-600">thriving blogs</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 px-2">
            Whether you're a seasoned writer or just starting out, Blogify gives you the tools to create,
            share, and grow your voice online — beautifully and effortlessly.
          </p>
          <button onClick={()=>status?navigate("/all-post"):navigate("/signup")} className="bg-blue-600 hover:bg-blue-700 transition-all duration-200 text-white text-lg font-medium px-6 py-3 rounded-full shadow-md">
            Get Started
          </button>
        </div>
        
      </div>
    </Container>
  );
}

export default LandingPage;
