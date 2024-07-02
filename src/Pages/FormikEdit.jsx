import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";

const FormikEdit = ({ id }) => {
  const navigate = useNavigate();
  const [editData, setEditData] = useState({
    title: "",
    authorname: "",
    isbn: "",
    Description: "",
    date: "",
  });
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get(`https://668274e34102471fa4c705b4.mockapi.io/author/${id}`)
      .then((res) => setEditData(res.data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    formik.setValues(editData);
  }, [editData]);

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is requied"),
    authorname: Yup.string().required("AuthorName is requied"),
    isbn: Yup.string().required("ISBN is requied"),
    description: Yup.string().required("Description is requied"),
    date: Yup.string().required("Date is requied"),
  });
  const formik = useFormik({
    initialValues: {
      title: "",
      authorname: "",
      isbn: "",
      description: "",
      date: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      await axios
        .put(`https://668274e34102471fa4c705b4.mockapi.io/author/${id}`, values)
        .then((res) => console.log(res.data))
        .catch((error) => console.log(error));
      alert("Updated Successfully");
      navigate("/");
    },
  });
  return (
    <div className="container-md align-self-start">
    <div className="card m-5">
      <form onSubmit={formik.handleSubmit} >
        <p>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
            />
          </label>
        </p>
        <div className="text-danger">{formik.errors.title}</div>
        <br />
        <p>
          <label>
            Author Name:
            <input
              type="text"
              name="authorname"
              value={formik.values.authorname}
              onChange={formik.handleChange}
            />
          </label>
        </p>
        <div className="text-danger">{formik.errors.authorname}</div>
        <br />
        <p>
          <label>
            Book ISBN:
            <input
              type="text"
              name="isbn"
              value={formik.values.isbn}
              onChange={formik.handleChange}
            />
          </label>
        </p>
        <div className="text-danger">{formik.errors.isbn}</div>
        <br />
        <br />
        <p>
          <label>
            Description:
            <input
              type="text"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
            />
          </label>
        </p>
        <div className="text-danger">{formik.errors.description}</div>
        <br />
        <br />
        <p>
          
          <label>
            Published Date:
            <input
              type="text"
              name="date"
              value={formik.values.date}
              onChange={formik.handleChange}
            />
          </label>
        </p>
        <div className="text-danger">{formik.errors.date}</div>
        <br />
        <br />
        <p>
          <button className="btn btn-danger" type="submit">
            Updated
          </button>
        </p>
      </form>
    </div>
    </div>
  );
};

export default FormikEdit;
