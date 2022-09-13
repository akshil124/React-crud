import React, {  useState } from 'react'
import Crudform from './crud-form';
import Table from './Table';
function Form() {
    const [user,setUser] = useState({
        languages:[]
    })
    const [users,setUsers] = useState([])
    const [update,setUpdate] = useState(null)
    // user.languages = []
    
    const change=(event)=>{
        const {name , value}=event.target;
        const checked = event.target.checked
        if(name ==='languages'){

            if(checked){
                setUser({...user,
                    languages : [...user.languages,value]
                })
            }
            else{
                // user.languages.splice(user.languages.indexOf(value),1)
                const user1 =  user.languages.filter((i)=> i!==value)
                setUser({...user,
                    languages : user1
                })
            }
        }else{
            setUser({...user,
                [name] : value
            })
        }
            
    }
    console.log("user.languages",user.languages);
    const get = (event) => {
        event.preventDefault()
        if(update !== null){
            users.splice(update,1,user)
            // console.log(users.splice(update,1,user));
            setUsers([...users])
            setUser({languages:[]})
            setUpdate(null)
            console.log("22",users);
        }else{
            setUsers([...users,user])
            setUser({languages:[]})
        }
    }
    const delet=(i) =>{
        users.splice(i,1)
        setUsers([...users]); console.log("33",users);
    }
    const edit=(i)=>{
            console.log("55",users);
       const userssss= users.find((z,index)=>index===i)
        // console.log(props.users.find((_,index)=>index===i));
        setUser(userssss)
        setUpdate(i);
        console.log("44",users);
    }
    return (
    <>
            <Crudform get={get} user={user} change={change}  />
            <Table users={users}  delet={delet} edit={edit}/>
    </>
    )
    
}

export  {Form}