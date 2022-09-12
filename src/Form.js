import React, { useEffect, useState } from 'react'
import Table from './Table';

function Form() {
    const [users,setUsers] = useState([])
    const [user,setUser] = useState({})
    const change=(event)=>{
        const {name , value}=event.target;
        setUser({...user,
            [name] : value
        })
        // setCk(true)
    }
    const get = (event) => {
        event.preventDefault()
        setUsers([...users,user])
        setUser({})
    }
    // console.log("users",users);
    // console.log('user',user.name);
  return (
    <>
        <form onSubmit={get} id='form'>
            <label>name : </label>
            <input type="text" name='name' value={user.name || ''} onChange={change}/><br/>
            <label>email : </label>
            <input type="text" name='email' value={user.email || ''} onChange={change}/><br />
            <label>password : </label>
            <input type="password" name='password' value={user.password || ''} onChange={change}/><br />
            <label>age : </label>
            <input type="text" name='age' value={user.age || ''} onChange={change}/><br />
            <label>date : </label>
            <input type="date" name='date' value={user.date || ''} onChange={change}/><br />
            <label>number : </label>
            <input type='number' name='number' value={user.number || ''} onChange={change}/><br />
            <label>color : </label>
            <input type='color' name='color' value={user.color || ''} onChange={change}/><br />
            <label>who are you : </label>
            <select name='post' value={user.post || ''} onChange={change}>
                <option>student</option>
                <option>employee</option>
                <option>other</option>
            </select><br />
            <label>gender : </label>
            <input name='gender' type={'radio'} onChange={change} checked={user.gender==='male'} value={ 'male' }/><label>male</label>
            <input name='gender' type={'radio'} onChange={change} checked={user.gender==='female'} value={ 'female' }/><label>female</label>
            <input name='gender' type={'radio'} onChange={change} checked={user.gender==='other'}  value={ 'other' }/><label>other</label><br />
            <label>languages : </label>
            <input name='languages' type={'checkbox'}  onChange={change} checked={user.languages==='gujarati'} value='gujarati'/><label>gujarati</label>
            <input name='languages1' type={'checkbox'} onChange={change} checked={user.languages1==='english'} value='english'/><label>english</label>
            <input name='languages2' type={'checkbox'} onChange={change} checked={user.languages2==='hindi'} value='hindi'/><label>hindi</label><br />
            <button type='submit'>submit</button>

        </form>
            <Table users={users}/>
    </>
    )
    
}

export  {Form}