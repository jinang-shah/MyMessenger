import './App.css';
import React,{useState,useEffect} from 'react'
import firebase from './Components/firebase'
import ClassMessage from './Components/ClassMessage';

function App() {

  const [myId, setmyId] = useState('');
  const [connection, setconnection] = useState(false)
  const [receiverId, setreceiverId] = useState('')
  const [message, setmessage] = useState('')
  const [messages, setmessages] = useState([])
  const [database, setdatabase] = useState(null)
  const [buttonClick, setbuttonClick] = useState(false)

  useEffect(() => {
    const notif={
      message : message,
      from : myId
    }
    if(database){
    database.ref('/mymessenger/'+myId).remove()
    firebase.database().ref('/mymessenger/'+myId).on("value", function(snapshot) {
      console.log("snap :"+snapshot.val());
    })
    
    console.log("messages set");
    database.ref('/mymessenger/'+receiverId).push(notif)
    console.log("push to receiver")

    setbuttonClick(false)
    }
  },[buttonClick])
    
  const clickHandler=async ()=>{
    try {
      setdatabase(firebase.database())
      
      setconnection(true)
    } catch (error) {
      console.log(error)
    }
  }

  // const sendMessage=()=>{
      
  //     const notif={
  //       message,
  //       from : myId
  //     }
  //     database.ref('/mymessenger/'+myId).remove()
  //     database.ref('/mymessenger/'+myId)
  //       .get()
  //       .then(snapshot=>{
  //         snapshot.forEach(doc=>{
  //           const data=doc.data()
  //           setmessages([...messages,data])
  //         })
  //       })
  //       console.log("messages set");
  //     // database.ref('/mymessenger/'+myId).on('value',snapshot=>{
  //     //   if(snapshot.exists()){
  //     //     const notifs=snapshot.val();
  //     //     setmessages([...messages,notifs])
  //     //   }
  //     // })
  //     database.ref('/mymessenger/'+receiverId).push(notif)
  //     console.log("push to receiver")
  //     setmessage('')
  // }

  const renderMessage=(value,key)=>{
    return <div key={key}>
        From : ${value.from} :  ${value.message}
    </div>
  }

  return (
    <div className="App">
      {/* <ClassMessage /> */}
     {
       connection? 
          <div>
             <div className="sendMessage">
             <label>Receiver ID : </label>
             <input type="text" onChange={(e)=>{setreceiverId(e.target.value)}}  />
             <br/>
             <label>Message :  </label>
             <input type="text" onChange={(e)=>{setmessage(e.target.value)}}  />
             <br/>
             <button onClick={()=>{setbuttonClick(true)}}>Send</button>
             </div>
             <div className="newMessages">
               Notifications :
               {
                    messages.map(data=>{
                        return (
                            <tr>
                            <td>{data.from} </td>
                            <td>{data.message} </td>
                            </tr>
                        );
                    })
                }
             </div>
          </div>
        :
          <div>
            <label>Enter UserID : </label>
            <input type="text" onChange={(e)=>{setmyId(e.target.value)}}  />
            <br />
            <button onClick={clickHandler}>Connect</button>
          </div>  
     }

    </div>
  );
}

export default App;
