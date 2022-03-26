import React, {FC} from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const AboutPage: FC = () => {

  const navigate = useNavigate()
  
  return (
    <>
      <h1>Information page</h1>
      <p>Lorem ipsum dolor sit amet.</p>
      <button className='btn' onClick={() => navigate('/')}>Back todo list</button>
    </>
  )
}

export default AboutPage