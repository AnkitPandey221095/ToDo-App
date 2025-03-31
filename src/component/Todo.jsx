import React,{useState,useEffect} from 'react'
import './Todo.css'
import {useNavigate} from 'react-router-dom'

// for getting local data
const getLocalData=()=>{
  const list=localStorage.getItem('Tasks')
  if(list){
    return JSON.parse(localStorage.getItem("Tasks"))
  }
  else{
    return {}
  }
}


// Main Fuction for of the file 

const Todo = () => {
let [inputData ,setInputData]=useState('')
let [list,setList]=useState(getLocalData())
const navigate=useNavigate();

const User=JSON.parse(localStorage.getItem('User'))

// Adding weather fetching 

const [data, setData] = useState('');

useEffect(() => {
  fetch(`http://api.weatherapi.com/v1/current.json?key=0a99db3f6a5a4ed5b27172616242109&q=${User.city}&aqi=no`)
    .then((res) => res.json())
    .then((data1) => setData(data1.current.condition.text))
    .catch((error) => console.error("Error fetching data:", error));
}, []);




// Function for log out key

 const LogOutAction=()=>{
  navigate('/LogIn')
 }




// functions for making different keis working 
const add_item=()=>{
  if(inputData!=''){
    setList([...list, inputData])
    setInputData('')
}
}

const deleteitem=(id)=>{
  let updatedList=list.filter((Element, idn)=>{
    return idn !=id;
  })
  setList(updatedList)
}

function Upward(index){
  if(index>0){const updateditems=[...list];
  [updateditems[index-1],updateditems[index]]=[updateditems[index],updateditems[index-1]]
  setList(updateditems)}
}

function downward(index){
  if(index<list.length-1){
    const updateditems=[...list];
    [updateditems[index+1],updateditems[index]]=[updateditems[index],updateditems[index+1]]
    setList(updateditems)}
}

// hook for storing data for each new task list updation
useEffect(()=>{
localStorage.setItem('Tasks',JSON.stringify(list))
},[list])

  return (
    <div className="Todo_list_container">
      <div className="UserName">
        <h3><span>👤&nbsp;</span><u>{User.name}</u></h3>
      </div>
      <button className="LogOut" onClick={LogOutAction}>LogOut</button>
        <div className="intro">
        <img src="https://tse3.mm.bing.net/th?id=OIP.CF_4lvbDsd3EFolEGiSzIQHaHa&pid=Api&P=0&h=180" alt="" />
        <h3>Add Your task In the List 👇</h3>
        </div>
        <div className="input">
        <input type="text"  placeholder="✍ write you task ......"
        value={inputData} onChange={(e)=>{setInputData(e.target.value)}}
        />
        <button onClick={add_item}>➕</button>
        </div>
            <div className="task_list">
              <h2>Your Tasks 📝</h2>
              <p className="weather"><b>Today's Wether of your city: {data}</b></p>
                {list.map((item,id)=>{return(<div className="task" key={id}>
                    <h3 className="text">{item}</h3>
                    <div className="btn_container">
                    <button className="delete" onClick={()=>{deleteitem(id)}}>➖</button>
                    <button className="up" onClick={()=>{Upward(id)}}>👆</button>
                    <button className="down" onClick={()=>{downward(id)}}>👇</button>
                    </div>
                </div>)})}
            </div>
        
        
    </div>
  )
}

export default Todo
