import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
  tableCellClasses,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { getUserList } from "../store/commonApis";

const StyledTableRow = styled(TableRow)(({}) => ({
  backgroundColor: "#FFFFFF",
  border: 0,
  "&:last-child td, &:last-child th": {
    border: 0,
  },
  "& td, & th": {
    border: 0,
  },
}));

const StyledTableCell = styled(TableCell)(({}) => ({
  table: { backgroundColor: "#000000" },
  [`&.${tableCellClasses.head}`]: {
    " thead": {
      borderRadius: "8px",
    },
    backgroundColor: "#F7F7F7",
    color: "#000000",
    padding: "12px 16px !important",
    fontSize: "13px",
    lineHeight: "12px",
    whiteSpace: "nowrap",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const User = () => {
  

  const navigate = useNavigate();
  const [userList, setUserList] = useState([])

  const fetchList = () =>{
    console.log("fetch list called")
    getUserList().then((response: any) => {
      console.log("THi is reposne from get api", response)
      setUserList(response)
    })
  }

  useEffect(() => {
    if(!userList.length){
      fetchList()
    }
    
  }, []);

  return (
    <div className="flex justify-center py-8">
      <div className="w-[60%]">

        <div className=" flex justify-between">
          <h1 className="font-bold text-[18px]">Users</h1>
          <button className="border border-black rounded-[8px] py-2 px-4" onClick={() => navigate('/addEditUser')}>Add User</button>
        </div>

        {
          !!(userList.length) && <div className="mt-6">
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow style={{ borderRadius: "8px" }}>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell>Email</StyledTableCell>
                  <StyledTableCell>Phone</StyledTableCell>
                  <StyledTableCell>Website</StyledTableCell>
                  <StyledTableCell>Actions</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userList?.map((row: any, _index: number) => (
                  <StyledTableRow
                    key={row.id}
                    onClick={() =>
                      navigate(`/profile/my-store/productDetail/${row.id}`)
                    }
                    className="cursor-pointer"
                  >
                    <StyledTableCell>
                      <div>
                        <p className="text-[#000000] text-[13px] font-normal">
                          {row.name}
                        </p>
                      </div>
                    </StyledTableCell>
                    <StyledTableCell>
                      <div>
                        <p className="text-[#000000] text-[13px] font-normal">
                          {row.email}
                        </p>
                      </div>
                    </StyledTableCell>
                    <StyledTableCell>
                      <div>
                        <p className="text-[#000000] text-[13px] font-normal">
                          {row.phone}
                        </p>
                      </div>
                    </StyledTableCell>
                    <StyledTableCell>
                      <div>
                        <p className="text-[#000000] text-[13px] font-normal">
                          {row.website}
                        </p>
                      </div>
                    </StyledTableCell>

                    <StyledTableCell>
                      <div className="flex gap-2">
                        <ModeEditIcon
                          sx={{
                            color: "#FF830A",
                            cursor: "pointer",
                            fontSize: "20px",
                          }}
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/addEditUser/${row.id}`);
                          }}
                        />
                      </div>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        }

        
      </div>
    </div>
  );
};

export default User;
