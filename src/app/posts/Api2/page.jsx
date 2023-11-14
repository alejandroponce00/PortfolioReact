

import React from 'react'

async function fetchUsers() {
const res = await fetch("https://reqres.in/api/users") 
const data = await res.json()
return data.data
}


async function HomePage() {
 const users = await fetchUsers()

    return (
<ul className='text-center container col-md-2 table-responsive  '>
    {users.map(user => (
    <li key={user.id}className='card bg-dark '>
        <div className='card-body  rounded bg-secondary mb-3'>
        <h5 className='card-title text-white bg-secondary'>
            {user.id} {user.first_name} {user.last_name}
        </h5>
        <p className='text-light bg-secondary'>
            email:{ user.email}
        </p>
        <img src={user.avatar} alt="user picture" className='rounded-circle'/>
        </div>
    </li>
    ))}
</ul>
   
  )
}

export default HomePage
