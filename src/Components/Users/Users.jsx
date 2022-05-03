import React, {useState} from 'react'

function Users() {

  // const [userDetail, setUserDetail] = useState([
  //   {id:1, name:'Hamza', age:21, status:'Active'},
  //   {id:2, name:'Raza', age:20, status:'Pending'},
  //   {id:3, name:'Faseeh', age:37, status:'Pending'},
  //   {id:4, name:'Talal', age:15, status:'Active'},
  // ]);
  const userDetail = [
    {id:1, name:'Hamza', age:21, status:'Active'},
    {id:2, name:'Raza', age:20, status:'Pending'},
    {id:3, name:'Faseeh', age:37, status:'Pending'},
    {id:4, name:'Talal', age:15, status:'Active'},
  ];

  const [userStatus, setUserStatus] = useState('Active');

  // const [userStatusArr, setUserStatusArr] = useState(['All', 'Active', 'Pending']);
  const userStatusArr = ['All', 'Active', 'Pending'];

  return (
    <div className='bg-dark text-light'>
      <select>
        {userStatusArr.map(item => (
          <option>{item}</option>
        ))}
      </select>
      <table className='table table-responsive text-light'>
        <tbody>
        {userDetail.map(user => user.status == userStatus && (
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