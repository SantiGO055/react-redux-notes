import React, { useState, useEffect } from "react"
// import "./Chat.css"
import Message from "./Message"
import {io} from "socket.io-client";
// const WebSocket = require('ws');
// var W3CWebSocket = require('websocket').w3cwebsocket;
// const ws = new W3CWebSocket("ws://localhost:5000")
// WebSocket
let port  = process.env.PORT || 3000;
const socket = io(`ws://localhost:5000`);

export default () => {
  const [userName, setUserName] = useState("")
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const uName = prompt("Name?")
    if (uName) {
      setUserName(uName)
    }
  }, [])

//   ws.onopen = ()=>{
//       console.log("Connection opened!")
//   }
//   ws.onmessage = ({data})=>{
//       console.log(data)
//       setMessages([...messages,data])
//   }
  socket.on("message", message => {
    console.log(message);
    setMessages([...messages, message])
    // console.log("array");
    console.log(messages);

  });

  return (
    <div className="wrapper">
      <div className="card border-primary">
        <h5 className="card-header bg-primary text-white">
          <i className="fas fa-comment"></i> Chat
        </h5>
        <div className="card-body overflow-auto">
          {messages.map((msg, index) => (
            <Message
              key={index}
              userName={msg.userName}
              message={msg.message}
            />
          ))}
        </div>
        <div className="card-footer border-primary p-0">
          <div className="input-group">
            <input
              value={message}
              onChange={e => {
                setMessage(e.target.value)
              }}
              type="text"
              className="form-control input-sm"
              placeholder="Type your message here..."
            />
            <button
              className="btn btn-primary btn-sm"
              onClick={_ => {
                const msg = {
                  id: Math.floor( Math.random() * 10),
                  message,
                  userName: userName,
                }
                setMessages([...messages, msg])
                setMessage("")
                // ws.send(msg)
                socket.emit("message", msg)
              }}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}