import React from 'react'
// import { Form } from './Form'
function Table(props) {
    // console.log("userssss",props.users);
    const delet=(i) =>{
        console.log("index",i);
    }
        return (
        <>
            <table border={1}>
                <tr>
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
                </tr>
                {props.users.map((l,i)=>{
                    return(
                        <tr>
                            <td>{l.name}</td>
                            <td>{l.email}</td>
                            <td>{l.password}</td>
                            <td>{l.age}</td>
                            <td>{l.date}</td>
                            <td>{l.number}</td>
                            <td>{l.color}</td>
                            <td>{l.post}</td>
                            <td>{l.gender}</td>
                            <td>{l.languages},{l.languages1},{l.languages2}</td>
                            <td><button type='button'  onClick={()=>delet(i)}>delete</button></td>
                        </tr>
                    );
                })}
            </table>
        </>
      )

}

export default Table