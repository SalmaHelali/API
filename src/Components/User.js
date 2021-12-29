import React, { useEffect } from 'react'
function User({user}) {
useEffect(() => {
    
}, [])
    return (
        <div>
<h1> {user.name} </h1>

<link  to={`/Details/${user.id}`} >
<button> More Details </button>
</link>
        </div>
    );
}

export default User
