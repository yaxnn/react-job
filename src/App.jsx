import React from 'react'
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layout/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, {jobLoader} from './pages/JobPage';

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element = {<MainLayout />}>
    <Route index element={<HomePage/>}/>
    <Route path='/jobs' element={<JobsPage/>}/>
    <Route path='*' element={<NotFoundPage/>}/>
    <Route path='/jobs/:id' element={<JobPage/>} loader={jobLoader}/>
  </Route>
  )
);

const App = () => {
  return <RouterProvider router={router}/>
}

export default App