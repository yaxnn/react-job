import React from 'react'
import {useState, useEffect } from 'react';
import JobListings from './JobListings'
import Spinner from './Spinner';


const JobListing = ({isHome = false}) => {
  const [jobs , setJobs ] = useState([]);
  const [loading , setLoading] = useState(true);

  useEffect(() => { 
    const fetchjobs = async () => {
      const apiUrl = isHome ? 'http://localhost:8000/jobs?_limit=3':
      'http://localhost:8000/jobs';
      try {
        const res = await fetch(apiUrl)
        const data = await res.json();
        setJobs(data)
      }
      
      catch (error) {
      console.log('error fetching data', error);
     }finally{
        setLoading(false)
        }}
        fetchjobs()
} ,[])
     
  return (
    <section className="bg-blue-50 px-4 py-10">
    <div className="container-xl lg:container m-auto">
      <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
        {isHome? 'Recent Job' : 'Browse Job' }
      </h2>

        {loading? (<Spinner loading={loading} /> 
        ):(
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {jobs.map((job) => (
            <JobListings key={jobs.id} job={job} />
          
          )) }
          
        </div>
        )}
        
        
        
    </div>
  </section>

  )
}

export default JobListing