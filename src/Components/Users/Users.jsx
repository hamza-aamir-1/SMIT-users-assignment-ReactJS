import React, {useState} from 'react'

import './Users.css'

function Users() {

  const [userDetail, setUserDetail] = useState([
    {id:1, name:'Hamza', age:21, status:'Active'},
    {id:2, name:'Raza', age:20, status:'Pending'},
    {id:3, name:'Faseeh', age:37, status:'Pending'},
    {id:4, name:'Talal', age:15, status:'Active'},
    {id:5, name:'Tahir', age:47, status:'Pending'},
    {id:6, name:'Hassaan', age:65, status:'Active'},
    {id:7, name:'Hussnain', age:3, status:'Pending'},
    {id:8, name:'Faizan', age:123, status:'Active'},
    {id:9, name:'Ahmad', age:37, status:'Active'},
    {id:10, name:'Usman', age:15, status:'Pending'},
  ]);

  const [userStatus, setUserStatus] = useState('All');

  const [userStatusArr, setUserStatusArr] = useState(['All', 'Active', 'Pending']);

  return (
    <div className='bg-dark text-light pb-5'>

      <div className='dropdown-box py-4'>
      <select className='' value={userStatus} onChange={e => setUserStatus(e.target.value)}>
        {userStatusArr.map(item => (
          <option key={Math.random()} value={item}>{item}</option>
        ))}
      </select>
      </div>

      <table className='table table-responsive table-striped table-dark table-bordered table-hover my-0'>
        <thead>
          <tr>
            {/* {userDetail.map((user) => (
              <th>{user.id}</th>
            ))}
            */}
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
        {userDetail.map(user => (user.status == userStatus || userStatus == 'All') && (
          <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.status}</td>
          </tr>
        ))}
        </tbody>
      </table>

    </div>
  )
}

export default Users