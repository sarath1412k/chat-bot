import React from 'react'
import { IoSend } from "react-icons/io5";

const TextArea = () => {
  return (
    <div className='chat-bot-text-area'>
        <input className='chat-input' type='text' />
        <IoSend title='send' className='send-btn' />
    </div>
  )
}

export default TextArea