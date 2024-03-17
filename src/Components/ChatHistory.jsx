import React from 'react'
import { FaRobot, FaUser } from "react-icons/fa";
const ChatHistory = () => {
  return (
    <div className='history-container'>
        <div className='bot-container'>
        <FaRobot className='identify-icon' title='bot' />
        <div className='bot-msg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nobis eligendi asperiores nisi eius aliquid minus, aliquam totam provident dignissimos neque, facere recusandae dolores! Neque perspiciatis minima rem repudiandae nostrum?</div>
        </div>
        <div className='user-container'>
          <div className='user-msg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatem tenetur nam ut iusto accusantium id libero qui necessitatibus sit, magni impedit? Nemo cumque nihil, eius necessitatibus blanditiis nisi provident?</div>
        <FaUser className='identify-icon' title='bot' />
        </div>
    </div>
  )
}

export default ChatHistory