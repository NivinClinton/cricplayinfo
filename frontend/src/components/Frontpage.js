import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Frontpage.css'

const Frontpage = () => {
  const navigate = useNavigate()
  return (
    <div className='Frontpage'>

      <div className='backgroundImage'>

        <h1>Best Cricket Blogs on the Planet</h1>
        <p>Find all you need, share all you want about cricket</p>

        <div className='button'>
          <button onClick={() => navigate('/auth')}>Continue</button>
        </div>
      </div>
    </div>
  )
}

export default Frontpage