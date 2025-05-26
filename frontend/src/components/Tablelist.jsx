import React from 'react'


const TableList = ({handleOpen}) => {
    const  clients =[
        {id:1,name:"neo",email:"neo@123",job:"dev", rate:"1000",isActive:true},
        {id:2,name:"neo1",email:"neoo@123",job:"test", rate:"1000",isActive:true},
        {id:3,name:"neo2",email:"neo0@123",job:"devops", rate:"1000",isActive:false},
    ]




  return (
 <div className="overflow-x-auto mt-15 ml-15 ">
  <table className="table ">
    {/* head */}
    <thead>
      <tr>
        <th>No</th>
        <th>Name</th>
        <th>Job</th>
        <th>rate</th>
        <th>isActive</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {clients.map(client =>(
            <tr key={client.id}>
        <th >{client.id}</th>
        <td>{client.name}</td>
        <td>{client.rate }</td>
        <td>{client.job}</td>
        <td>

            <button className={`btn text-black rounded-2xl pb-0.5 w-20 ${client.isActive  ? `btn-primary` :`btn-outline btn-primary text-white`} `} >
                    {client.isActive ? 'Active':'InActive'}
            </button>
        </td>

        <td>
            <button onClick={()=>handleOpen('edit')} className='btn btn-secondary rounded-2xl pb-0.5 text-black'>Update</button>
        </td>
        
        <td>
            <button className='btn btn-error pb-0.50.5'>Delete</button>
        </td>
      </tr>

      ))}
      
    
    </tbody>
  </table>
</div>
  )
}

export default TableList
