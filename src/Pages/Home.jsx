import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({setId}) => {
  const [data, setData] = useState([]);
  const [deleteData, setDeleteData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchdata();
  }, [deleteData]);
  const fetchdata = async () => {
    await axios
      .get("https://668274e34102471fa4c705b4.mockapi.io/author")
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  };
  const handleEdit = (id) => {
    setId(id);
    navigate(`/edit/${id}`);
  };
  const handleDelete = async (id) => {
    await axios
      .delete(`https://668274e34102471fa4c705b4.mockapi.io/author/${id}`)
      .then((res) => setDeleteData(res.data))
      .catch((error) => console.log(error));
      navigate('/')
  };
  return (
    <div>
      <br />
      <div class="d-grid gap-2 d-md-flex justify-content-md-center">
      <button
          className="btn btn-primary ml-5 " 
          onClick={() => {
            navigate("/create");
          }}
        >
          Create
        </button>
        </div>
      <br />
      <div className="container-md ">
        <div className="row  row-cols-1 row-cols-md-2  g-4">
        {data.map((element, index) => {
          return (
            <div key={index}>
              <div className="col ">
                <div className="card">
                  <div className="card-header">
                    <h1>Title: {element.title}</h1>
                    <h1>Author: {element.authorname}</h1>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">ISBN: {element.isbn}</h5>
                    <p className="card-text">
                      Description:
                      <br />
                      {element.description}
                    </p>
                    <p className="card-date">Published Date:{element.date}</p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                      
                      <button class="btn btn-primary me-md-2" type="button" onClick={() => {
                        handleEdit(element.id);
                      }}>
                        Edit
                      </button>
                      <button class="btn btn-primary" type="button"  onClick={() => {
                        handleDelete(element.id);
                      }}>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
};

export default Home;
