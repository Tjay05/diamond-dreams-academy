import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';

// Page Imports
import AppLayout from './layout/Index';
import AboutMe from './pages/about/Index';
import Contact from "./pages/contact/Index"
import Courses from "./pages/course/Index"
import Home from "./pages/home/Index"
import Login from './pages/student/Login';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<AppLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='About-me' element={<AboutMe/>}/>
        <Route path='Courses' element={<Courses/>}/>
        <Route path='Contact' element={<Contact/>}/>
        <Route path='Portal' element={<Login/>}/>
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
