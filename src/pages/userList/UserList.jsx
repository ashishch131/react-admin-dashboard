import "./userList.css";
import { DataGrid } from '@mui/x-data-grid';
import {userRows} from "../../dummyData"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useState } from "react";
import { Link } from "react-router-dom";
  
const UserList = () => {
 const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
    
}

 const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 180,
      renderCell: (params) => {
        return (
          <div className="userListuser">
            <img className="userListImg" src={params.row.Avatar} alt=""></img>
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit" >Edit</button>
              </Link>
            <DeleteOutlineIcon  className='userListDlt' onClick={()=>handleDelete(params.row.id)} />
          </>
        )
      }
    },
  ];

  return (
      <div className="userlist">
            <div style={{ height: 600, width: '100%' }}>
        <DataGrid
          disableRowSelectionOnClick
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
    </div>
  )
}

export default UserList