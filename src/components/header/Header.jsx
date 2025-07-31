import React, { useState } from 'react'
import Logo from '../Logo'
import Container from '../container/Container'
import LogoutBtn from './LogoutBtn'
import { useNavigate, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
function Header() {

  const authStatus=useSelector((state)=>state.auth.status);
  const navigate=useNavigate();
  const [open, setOpen]=useState(false);
  const navItems=[
    {
      name:"Home",
      slug:"/",
      active:true
    },
    {
       name:"Login",
       slug:"/login",
       active:!authStatus

    },

    {
       name:"Signup",
       slug:"/signup",
       active:!authStatus

    },

    {
       name:"All Blogs",
       slug:"/all-post",
       active:authStatus

    },
    
    {
       name:"Add Blog",
       slug:"/add-post",
       active:authStatus

    }

  ]
return (
  <header
    className={`py-3 shadow w-full bg-slate-50 transition-all duration-300 ease-in-out`}
  >
    <Container>
      <nav className="flex items-center relative">
        
        <div className="mr-4">
          <Link to={"/"}>
            <Logo />
          </Link>
        </div>

        
        <ul className="hidden md:flex ml-auto">
          {navItems.map(
            (item) =>
              item.active && (
                <li key={item.name}>
                  <button
                    onClick={() => {
                      navigate(item.slug);
                    }}
                    className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                  >
                    {item.name}
                  </button>
                </li>
              )
          )}
          {authStatus && <LogoutBtn />}
        </ul>

        
        <ul
          className={`z-50 flex flex-col px-4 gap-4 pt-8 md:hidden shadow-lg absolute right-0 left-0 top-10 bg-slate-50 w-full h-screen transition-all duration-300 ease-in-out ${
            open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"
          }`}
        >
          {navItems.map(
            (item) =>
              item.active && (
                <li key={item.name}>
                  <button
                    onClick={() => {
                      setOpen(false);
                      navigate(item.slug);
                    }}
                    className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                  >
                    {item.name}
                  </button>
                </li>
              )
          )}
          <div onClick={() => setOpen(false)}>{authStatus && <LogoutBtn />}</div>
        </ul>

        
        <button className="ml-auto md:hidden transition-transform duration-300 ease-in-out transform active:scale-95">
          {open ? (
            <i
              className="fa-solid fa-xmark fa-xl"
              onClick={() => setOpen(false)}
            ></i>
          ) : (
            <i
              className="fa-solid fa-bars-staggered fa-xl"
              onClick={() => setOpen(true)}
            ></i>
          )}
        </button>
      </nav>
    </Container>
  </header>
);

}

export default Header