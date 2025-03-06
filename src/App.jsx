import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';

import Footer from "./layout/Footer"
import AppLayout from './layout/Index';
import Navbar from "./layout/Navbar"
import Contact from "./pages/contact/Index"
import Courses from "./pages/course/Index"
import Home from "./pages/home/Index"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<AppLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='Courses' element={<Courses/>}/>
        <Route path='Conatct' element={<Contact/>}/>
      </Route>
    </Route>
  )
)

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
