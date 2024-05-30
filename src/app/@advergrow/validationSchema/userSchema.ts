import * as Yup from "yup";

export const addUserSchema = Yup.object({

    name: Yup.string().required('Name is required.'),
    phoneNumber: Yup.string().required('Phone Number is required.'),
    website: Yup.string().required('Website is required.'),
    email: Yup.string()
        .email("Please enter valid email")
        .required("Mail is required"),
});