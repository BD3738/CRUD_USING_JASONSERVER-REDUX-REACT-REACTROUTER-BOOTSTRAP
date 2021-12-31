import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { deleteUser, getUser } from "../Redux/Action/action";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Data = useSelector((state) => state.reducer);

  const [data, setData] = useState([]);
  const loadData = () => {
    axios.get("http://localhost:5000/user").then((res) => {
      dispatch(getUser(res.data));
    });
  };
  const deleteData = (id) => {
    axios.delete(`http://localhost:5000/user/${id}`).then((res) => {
      //   dispatch(deleteUser());
      loadData();
    });
  };

  useEffect(() => {
    loadData();
  }, []);
  useEffect(() => {
    setData(Data);
  }, [Data]);

  return (
    <div>
      <Link to="/adduser">
        <button
          className="btn btn-primary"
          style={{ marginTop: "30px", height: "50px", width: "150px" }}
        >
          +Adduser
        </button>
      </Link>
      <table className="table" style={{ marginTop: "30px" }}>
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Number</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data?.users?.length > 0 &&
            data.users.map((dt, i) => {
              return (
                <tr key={i}>
                  <td>{dt.id}</td>
                  <td>{dt.name}</td>
                  <td>{dt.email}</td>
                  <td>{dt.number}</td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => navigate(`/edituser/${dt.id}`)}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteData(dt.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
