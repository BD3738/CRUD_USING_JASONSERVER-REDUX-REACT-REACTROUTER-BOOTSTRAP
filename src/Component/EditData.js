import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../Redux/Action/action";

const EditData = () => {
  const dt = {
    name: "",
    email: "",
    number: "",
  };
  const [data, setData] = useState(dt);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const onChangeHander = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const edata = useSelector((state) => state.reducer.users);
  const editdata = edata.find((dt, i) => dt.id === parseInt(id));

  const updateData = () => {
    axios
      .put(`http://localhost:5000/user/${parseInt(id)}`, data)
      .then((res) => {
        dispatch(updateUser(res.data));
    
      });
        navigate("/");
  };

  useEffect(() => {
    if (editdata) {
      setData({
        name: editdata.name,
        email: editdata.email,
        number: editdata.number,
      });
    }
  }, [editdata]);
  return (
    <div>
      <input
        style={{
          height: "50px",
          width: "500px",
          marginTop: "150px",
        }}
        type="text"
        placeholder="Name"
        name="name"
        value={data.name}
        onChange={(e) => onChangeHander(e)}
      />
      <br />
      <input
        style={{
          height: "50px",
          width: "500px",
          marginTop: "30px",
        }}
        type="text"
        placeholder="Email"
        name="email"
        value={data.email}
        onChange={(e) => onChangeHander(e)}
      />
      <br />
      <input
        style={{
          height: "50px",
          width: "500px",
          marginTop: "30px",
        }}
        type="text"
        placeholder="Number"
        name="number"
        value={data.number}
        onChange={(e) => onChangeHander(e)}
      />
      <br />
      <button
        type="button"
        className="btn btn-danger"
        style={{ marginTop: "30px", height: "50px", width: "150px" }}
        onClick={() => {
          updateData();
        }}
      >
        Update
      </button>

      <button
        type="button"
        className="btn btn-primary "
        style={{ marginTop: "30px", height: "50px", width: "150px" }}
        onClick={() => navigate("/")}
      >
        Cancle
      </button>
    </div>
  );
};

export default EditData;
