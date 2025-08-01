import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from "react-redux"
import store from './store/store.js'
import Home from './components/pages/Home.jsx'
import Protected from './components/Protected.jsx'
import Login from './components/pages/Login.jsx'
import Signup from './components/pages/Signup.jsx'
import EditPost from './components/pages/EditPost.jsx'
import Post from './components/pages/Post.jsx'
import AllPost from './components/pages/AllPost.jsx'
import AddPost from './components/pages/AddPost.jsx'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import Profile from './components/pages/Profile.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/login",
        element:(
          <Protected authentication={false}>
            <Login/>
          </Protected>
        )
      },
      {
        path:"/signup",
        element:(
          <Protected authentication={false}>
            <Signup/>
          </Protected>
        )
      },
       {
        path:"/all-post",
        element:(
          <Protected authentication>
           <AllPost/>
          </Protected>
        )
      },
      {
        path:"/add-post",
        element:(
          <Protected authentication>
           <AddPost/>
          </Protected>
        )
      },
      {
        path:"/edit-post/:slug",
        element:(
          <Protected authentication>
             <EditPost/>
          </Protected>
        )
      },
      {
      path:"/post/:slug",
      element:<Post/>,
      },
      {
        path:"/profile",
        
        element:(
        
        <Protected authentication>
        <Profile/>
        </Protected>),
      }

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
