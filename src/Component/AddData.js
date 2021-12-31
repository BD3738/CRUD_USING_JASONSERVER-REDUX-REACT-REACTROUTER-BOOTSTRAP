import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postUser } from "../Redux/Action/action";

const AddData = () => {
  const dt = {
    name: "",
    email: "",
    number: "",
  };

  const [data, setData] = useState(dt);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeHander = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitData = () => {
    axios.post("http://localhost:5000/user", data).then((res) => {
      dispatch(postUser(res.data));
      navigate("/");
    });
  };

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
        className="btn btn-primary"
        style={{ marginTop: "30px", height: "50px", width: "150px" }}
        onClick={() => submitData()}
      >
        Submit
      </button>
    </div>
  );
};

export default AddData;
