import React from 'react'
import {useParams , useLoaderData} from 'react-router-dom';


const JobPage = () => {
  const { id } = useParams()
  const job = useLoaderData()
  return <h1>{job.title}</h1>
  
  
}

const jobLoader = async ({ params }) => {
  try {
    const res = await fetch(`/api/jobs/${params.id}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch job with id ${params.id}`);
    }
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error loading job:", error);
    throw error; // Re-throw the error to be handled by error boundaries
  }
};
export {JobPage as default ,jobLoader}

