import { useFormik } from "formik";
import { addUserSchema } from "../@advergrow/validationSchema/userSchema";
import { Snackbar, TextField } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { addUser, getUserDataById } from "../store/commonApis";


const UserDetail = () => {

  const { id } = useParams();
 
  const navigate = useNavigate()

  const [state, setState] = useState<any>({
    open: false,
    vertical: 'bottom',
    horizontal: 'left',
  });
  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const fetUserData = (id: any) => {
    getUserDataById(id).then((response: any) => {
      console.log("This is response from get data", response)
      if(response.status === 200){
        formik.setFieldValue('name', response.data.name)
        formik.setFieldValue('email', response.data.email)
        formik.setFieldValue('phoneNumber', response.data.phone)
        formik.setFieldValue('website', response.data.website)
      }else{
        console.log("something went wrong")
      }
    })
  }

  useEffect(() => {
    console.log(id)
    if(id){
      fetUserData(id)
    }
  }, [])

  


  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      website: "",
    },
    validationSchema: addUserSchema,
    onSubmit: (values) => {
      console.log("You are in values", values);
      if (formik.isValid) {
        if(id){
          // Call api for update user
        }else{
          console.log("form is valid", formik.values)
          addUser(formik.values).then((response: any) => {
            console.log("response", response)
            setState({ ...state, open: true }); 

            setTimeout(() => {
              navigate('/')
            }, 3000);
          })
        }
        

      }
    },
  });

  return (
    <div className="flex justify-center py-8">
      <div className="w-[60%]">
        <div className=" flex justify-between">
          <h1 className="font-bold text-[18px]">{id ? 'Edit' : 'Add'} Users</h1>
          {/* <button className="border border-black rounded-[8px] py-2 px-4" onClick={() => navigate('/addEditUser')}>Add User</button> */}
        </div>

        <div className="mt-6">
          <form onSubmit={formik.handleSubmit}>
            <div className="mt-3">
              <label className="mb-1 inline-block text-[#000000] text-[14px]">
                Name
              </label>

              <TextField
                variant="outlined"
                className="w-full"
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& input': {
                      padding: '12px 8px',
                    },
                  },
                }}
              />

              <div className="Mui-error mt-1 h-[15px] ms-1 text-[#f44336] text-xs">
                {formik.touched.name && formik.errors.name ? (
                  <p className="text-[#d32f2f] text-[12px] font-normal ml-1 mt-1">
                    {formik.errors.name}
                  </p>
                ) : null}
              </div>
            </div>


            <div className="mt-3">
              <label className="mb-1 inline-block text-[#000000] text-[14px]">
                Email
              </label>

              <TextField
                variant="outlined"
                className="w-full"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& input': {
                      padding: '12px 8px',
                    },
                  },
                }}
              />

              <div className="Mui-error mt-1 h-[15px] ms-1 text-[#f44336] text-xs">
                {formik.touched.email && formik.errors.email ? (
                  <p className="text-[#d32f2f] text-[12px] font-normal ml-1 mt-1">
                    {formik.errors.email}
                  </p>
                ) : null}
              </div>
            </div>


            <div className="mt-3">
              <label className="mb-1 inline-block text-[#000000] text-[14px]">
                Phone Number
              </label>

              <TextField
                variant="outlined"
                className="w-full"
                name="phoneNumber"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phoneNumber}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& input': {
                      padding: '12px 8px',
                    },
                  },
                }}
              />

              <div className="Mui-error mt-1 h-[15px] ms-1 text-[#f44336] text-xs">
                {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                  <p className="text-[#d32f2f] text-[12px] font-normal ml-1 mt-1">
                    {formik.errors.phoneNumber}
                  </p>
                ) : null}
              </div>
            </div>


            <div className="mt-3">
              <label className="mb-1 inline-block text-[#000000] text-[14px]">
                Website
              </label>

              <TextField
                variant="outlined"
                className="w-full"
                name="website"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.website}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& input': {
                      padding: '12px 8px',
                    },
                  },
                }}
              />

              <div className="Mui-error mt-1 h-[15px] ms-1 text-[#f44336] text-xs">
                {formik.touched.website && formik.errors.website ? (
                  <p className="text-[#d32f2f] text-[12px] font-normal ml-1 mt-1">
                    {formik.errors.website}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <button className="border border-black rounded-[8px] py-2 px-4">
                {id ? 'Update': 'Add'} User
              </button>
            </div>
          </form>
        </div>
      </div>
      
      {
        !!(state.open) && <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message="User Added Successfully"
        key={vertical + horizontal}
      />
      }
      
    </div>
  );
};

export default UserDetail;
