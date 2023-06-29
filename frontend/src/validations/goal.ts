import * as Yup from "yup";

const goalSchema = Yup.object().shape({
  total: Yup.number()
    .required("Total is required")
    .positive("Total must be bigger than zero")
    .typeError("Total must be a number"),
  date: Yup.string().required("Date is required"),
});

export default goalSchema;
