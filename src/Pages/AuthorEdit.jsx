import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";

const AuthorEdit = ({ id }) => {
  const navigate = useNavigate();
  const [editD, setEditD] = useState({
    id: "",
    authorname: "",
    dob: "",
    title: "",
    biodate: "",
  });
  useEffect(() => {
    fetchD();
  }, []);

  const fetchD = async () => {
    await axios
      .get(`https://668274e34102471fa4c705b4.mockapi.io/author/${id}`)
      .then((res) => setEditD(res.data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    formik.setValues(editD);
  }, [editD]);
  const validationSchema = Yup.object().shape({
    id: Yup.string().required("id is requied"),
    authorname: Yup.string().required("AuthorName is requied"),
    dob: Yup.string().required("dob is requied"),
    title: Yup.string().required("title is requied"),
    biodate: Yup.string().required("biodate is requied"),
  });
  const formik = useFormik({
    initialValues: {
      id: "",
      authorname: "",
      dob: "",
      title: "",
      biodate: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      await axios
        .put(`https://668274e34102471fa4c705b4.mockapi.io/author/${id}`, values)
        .then((res) => console.log(res.data))
        .catch((error) => console.log(error));
      alert("Upbiodated Successfully");
      navigate("/author");
    },
  });
  return (
    <div className="container-md align-self-start">
      <div className="card m-5">
        <form onSubmit={formik.handleSubmit}>
          <p>
            <label>
              id:
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
              Book Title:
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
              Author Biodata:
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
              Update
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AuthorEdit;
