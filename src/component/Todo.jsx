import React,{useState,useEffect} from 'react'
import styles from'./Todo.module.css'
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
    <div className={styles.Todo_list_container}>
      <div className={styles.UserName}>
        <h3><span>👤&nbsp;</span><u>{User.name}</u></h3>
      </div>
      <button className={styles.LogOut} onClick={LogOutAction}>LogOut</button>
        <div className={styles.intro}>
        <img src="https://tse3.mm.bing.net/th?id=OIP.CF_4lvbDsd3EFolEGiSzIQHaHa&pid=Api&P=0&h=180" alt="" />
        <h3>Add Your task In the List 👇</h3>
        </div>
        <div className={styles.input}>
        <input type="text"  placeholder="✍ write you task ......"
        value={inputData} onChange={(e)=>{setInputData(e.target.value)}}
        />
        <button onClick={add_item}>➕</button>
        </div>
            <div className={styles.task_list}>
              <h2>Your Tasks 📝</h2>
              <p className={styles.weather}><b>Today's Wether of your city: {data}</b></p>
                {list.map((item,id)=>{return(<div className={styles.task} key={id}>
                    <h3 className={styles.text}>{item}</h3>
                    <div className={styles.btn_container}>
                    <button className={styles.delete} onClick={()=>{deleteitem(id)}}>➖</button>
                    <button className={styles.up} onClick={()=>{Upward(id)}}>👆</button>
                    <button className={styles.down} onClick={()=>{downward(id)}}>👇</button>
                    </div>
                </div>)})}
            </div>
        
        
    </div>
  )
}

export default Todo
