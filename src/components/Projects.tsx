import React, { useEffect, useState } from 'react'
import db from '../firebase.config'

import './Projects.css'

const Projects = () => {
    const [events, setEvents]=useState<string[]>([])
    const fetchEvents = async () => {
        const response = db.collection('todos');
        const data = await response.get();
        data.docs.forEach((item: any)=>{
        events.push(item.data())
        })
        console.log(events)
    }
  useEffect(() => {
    fetchEvents();
  }, [])

  return (
      <div className='projects-container'>
          Projects
      </div>
  )
}

export default Projects