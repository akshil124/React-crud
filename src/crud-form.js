import React from 'react'
import "./form-crud.css"

function Crudform(props) {
  return (
    <>
        <form onSubmit={props.get} className='form'>
            <label>name : </label>
            <input type="text" name='name'  className='input-set' value={props.user.name || ''} onChange={props.change}/><br/>
            <label>email : </label>
            <input type="text" name='email'  className='input-set' value={props.user.email || ''} onChange={props.change}/><br />
            <label>password : </label>
            <input type="password" name='password' className='input-set' value={props.user.password || ''} onChange={props.change}/><br />
            <label>age : </label>
            <input type="text" name='age' className='input-set' value={props.user.age || ''} onChange={props.change}/><br />
            <label>date : </label>
            <input type="date" name='date' className='input-set' value={props.user.date || ''} onChange={props.change}/><br />
            <label>number : </label>
            <input type='number' name='number' className='input-set' value={props.user.number || ''} onChange={props.change}/><br />
            <label>color : </label>
            <input type='color' name='color' className='input-set' value={props.user.color || ''} onChange={props.change}/><br />
            <label>who are you : </label>
            <select name='post' value={props.user.post || ''} className='input-set' onChange={props.change}>
                <option>options</option>
                <option>student</option>
                <option>employee</option>
                <option>other</option>
            </select><br />
            <label>gender : </label><br />
            <input name='gender' type={'radio'} onChange={props.change} checked={props.user.gender==='male'} value={ 'male' }/><label>male</label><br />
            <input name='gender' type={'radio'} onChange={props.change} checked={props.user.gender==='female'} value={ 'female' }/><label>female</label><br />
            <input name='gender' type={'radio'} onChange={props.change} checked={props.user.gender==='other'}  value={ 'other' }/><label>other</label><br />
            <label>languages : </label><br />
            <input name='languages' type={'checkbox'}  onChange={props.change} checked={props.user.languages?.includes('gujarati')} value='gujarati'/><label>gujarati</label><br />
            <input name='languages' type={'checkbox'} onChange={props.change}  checked={props.user.languages?.includes('english')} value='english'/><label>english</label><br />
            <input name='languages' type={'checkbox'} onChange={props.change} checked={props.user.languages?.includes('hindi')}  value='hindi'/><label>hindi</label><br />
            <button type='submit' className='main-btn'>submit</button>

        </form>
    </>
  )
}

export default Crudform