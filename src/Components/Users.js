import axios from 'axios'
import React, { useEffect, useState } from 'react'
import User from './User';

function Users() {
const [users,setUsers]= useState ([])
const [error, seterror] = useState(false)
useEffect(()=> {
     axios
     .get('https://jsonplaceholder.typicode.com/users')
     .then((res)=>setUsers(res.data))
     .catch((err) =>seterror(true)) ;

 },[]) ;
 return(
  <div>


{  users.map((user)=>(
<User user={user} />
    ))}

 </div> );
}

export default Users
