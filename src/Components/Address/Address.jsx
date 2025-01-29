import axios from "axios";
import React, { useState, useEffect } from "react";

export const Address = () => {
  let [users, setUser] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/users").then((response) => {
      //   console.log(response);
      setUser(response.data);
    });
  }, []);
  return (
    <div style={{ textAlign: "center", minHeight: "600px" }}>
      {users.map((user) => (
        <div key={user.id}>
          <p>
            {user.address.city}, {user.address.street} {user.address.number}
          </p>
        </div>
      ))}
    </div>
  );
};
