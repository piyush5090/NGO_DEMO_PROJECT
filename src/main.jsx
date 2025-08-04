import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from "./components/Layout"
import HomePage from './components/Pages/HomePage'
import Admin from './components/Pages/Admin'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import store from './app/store'
import { Provider } from 'react-redux'
import About from './components/Pages/About'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='' element={<HomePage />} />
      <Route path='/admin' element={<Admin />} />
      <Route path='/about' element={<About />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store} >
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
