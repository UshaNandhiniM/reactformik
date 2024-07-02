import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminPage = ({setId}) => {
    const [product, setProducts] = useState([]);
    const [deleteData, setDeleteData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
      fetchData();
    }, [deleteData]);
    const fetchData = async () => {
      await axios
        .get("https://668274e34102471fa4c705b4.mockapi.io/author")
        .then((res) => setProducts(res.data))
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
    };
  
    return (
      <div>
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">AuthorID</th>
              <th scope="col">Author_Name</th>
              <th scope="col">Title</th>
              <th scope="col">ISBN</th>
              <th scope="col">Description</th>
              <th scope="col">Date</th>
              <th scope="coll" colSpan={2}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {product.map((ele, ind) => {
              return (
                <tr key={ind}>
                  <th scope="row">{ele.id}</th>
                  <td>{ele.id}</td>
                  <td>{ele.authorname}</td>
                  <td>{ele.title}</td>
                  <td>{ele.isbn}</td>
                  <td>{ele.description}</td>
                  <td>{ele.date}</td>
                  <td>
                    <button
                      className="btn  btn-outline-secondary"
                      onClick={() => {
                        handleEdit(ele.id);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn  btn-outline-secondary"
                      onClick={() => {
                        handleDelete(ele.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button
          className="btn btn-secondary ml-5 " 
          onClick={() => {
            navigate("/create");
          }}
        >
          Create
        </button>
      </div>
    );
};

export default AdminPage;