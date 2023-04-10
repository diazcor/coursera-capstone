import * as yup from "yup";

const validationsForm = {
  date: yup.string().required("Required"),
  time: yup.string().required("Required"),
  dinners: yup.string().required("Required"),

  name: yup.string().required("Required"),
  surname: yup.string().required("Required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  phone: yup.string().required("Required"),

  comment: yup.string(),
};

export default validationsForm;
