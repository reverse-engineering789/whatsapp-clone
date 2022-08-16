import { Avatar, IconButton } from '@mui/material'
import MoreVert from '@mui/icons-material/MoreVert';
import {InsertEmoticon, SearchOutlined} from "@mui/icons-material";
import MicIcon from '@mui/icons-material/Mic';
import AttachFile from '@mui/icons-material/AttachFile';
import React, {useState, useEffect} from 'react'
import "./Chat.css"



function Chat() {
    // function SidebarChat({addNewChat}) {
        const [seed, setSeed] = useState("");
   
   
   useEffect(() => {
       setSeed(Math.floor(Math.random() * 5000));
   }, []);


  return (
    <div className='chat'>
          <div className='chat__header'>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            
            <div className='chat__headerInfo'>
                <h3>Room name</h3>
                <p>Last seen at ...</p>
            </div>
            
            <div className='chat__headerRight'>
              <IconButton>
                <SearchOutlined />
              </IconButton>

              <IconButton>
                <AttachFile />
              </IconButton>

              <IconButton>
                <MoreVert />
              </IconButton>
            </div>
          </div>

          <div className='chat__body'>
             <p className= {`chat__message ${true && 'chat__reciever'}`} >
              <span className='chat__name'>Surya Gaonkar</span>
             Hey guys
             <span 
               className='chat__timestamp'>3:52pm
               </span>
              </p>
          </div>

          <div className='chat__footer'>
             <InsertEmoticon />
             <form>
              <input type="text" />
              <button>Send a message</button>
             </form>
             <MicIcon />
          </div>
    </div>
  )
}

export default Chat