import React from 'react'
import "./table.css"
function Table(props) {
    // console.log("userssss",props.users);
    // let  tog = false
   
        return (
        <>
            <table >
                <tr className='table-tr'>
                    <th>name</th>
                    <th>email</th>
                    <th>password</th>
                    <th>age</th>
                    <th>date</th>
                    <th>number</th>
                    <th>color</th>
                    <th>post</th>
                    <th>gender</th>
                    <th>languages</th>
                    <th>delete</th>
                    <th>edit</th>
                </tr>
                {props.users.map((l,i)=>{
                    return(
                        <tr className='table-tr'>
                            <td>{l.name}</td>
                            <td>{l.email}</td>
                            <td>{l.password}</td>
                            <td>{l.age}</td>
                            <td>{l.date}</td>
                            <td>{l.number}</td>
                            <td>{l.color}</td>
                            <td>{l.post}</td>
                            <td>{l.gender}</td>
                            <td>{l.languages.join(',')}</td>
                            <td><button type='button' className='delete-btn'  onClick={()=>props.delet(i)}>delete</button></td>
                            <td><button type='button' className='edit-btn' onClick={()=>props.edit(i)}>edit</button></td>
                        </tr>
                    );
                })}
            </table>
        </>
      )

}

export default Table