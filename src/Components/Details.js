import axios from 'axios'
import React , {useEffect ,useState} from 'react'
import { useParams } from 'react-router-dom';

function Details() {
    let {id} = useParams() ;
    const [user, setuser] = useState({}) ;
    const [loading , setloading]=useState(true)
    useEffect(() => {
   axios
   .get(`https://jsonplaceholder.typicode.com/users/${id}`)
   .then((res)=>{
        setuser(res.data)  
        setloading(false);
    })
   .catch((err)=>(console.log(err) ));


    }, []);
    return (
        <div>

{ loading ? ( "wait.." )  :(
<div>
    <h1> {user.address.street} </h1>
    <h1>{user.email} </h1>
</div>

)}
        </div>
    );
}

export default Details ;