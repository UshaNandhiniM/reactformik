import axios from "axios";
import { useFormik } from "formik";
import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const AuthorCreate = () => {
    const navigate = useNavigate();
  const [createD, setCreateD] = useState({
    id: "",
    authorname: "",
    dob: "",
    title: "",
    biodate: "",
  });
  const validationSchema = Yup.object().shape({
    id: Yup.string().required("Id is requied"),
    authorname: Yup.string().required("AuthorName is requied"),
    dob: Yup.string().required("Author DoB is requied"),
    title: Yup.string().required("Title is requied"),
    biodate: Yup.string().required("Biodata is requied"),
  });
  const formik = useFormik({
    initialValues: { createD },
    validationSchema,
    onSubmit: async (values) => {
      await axios
        .post("https://668274e34102471fa4c705b4.mockapi.io/author", values)
        .then((res) => console.log(res.data))
        .catch((error) => console.log(error));
      navigate("/author");
    },
  });
    return (
        <div className="container-md align-self-start">
        <div className="card m-5">
      <form onSubmit={formik.handleSubmit}>
        <p>
          <label>
            Author Id:
            <input
              type="text"
              name="id"
              value={formik.values.id}
              onChange={formik.handleChange}
            />
          </label>
        </p>
        <div className="text-danger">{formik.errors.id}</div>
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
            Author DoB:
            <input
              type="text"
              name="dob"
              value={formik.values.dob}
              onChange={formik.handleChange}
            />
          </label>
        </p>
        <div className="text-danger">{formik.errors.dob}</div>
        <br />
        <br />
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
        <br />
        <p>
          <label>
            Published biodate:
            <input
              type="text"
              name="biodate"
              value={formik.values.biodate}
              onChange={formik.handleChange}
            />
          </label>
        </p>
        <div className="text-danger">{formik.errors.biodate}</div>
        <br />
        <br />
        <p>
          <button className="btn btn-danger" type="submit">
            Create
          </button>
        </p>
      </form>
    </div>
    </div>
    );
};

export default AuthorCreate;