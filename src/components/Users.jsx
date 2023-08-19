import React, { useEffect, useState } from "react";
import User from "./User";
import axios from "axios";
function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const apiUrl = "https://brightness-y1n2.onrender.com/api/Photographer";

    axios
      .get(apiUrl, {
        headers: {
          accept: "application/json",
          contentType: "application/json",
        },
      })
      .then((response) => {
        setUsers(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="flex flex-col gap-5">
      {users.map((user) => (
        <User
          name={user.name}
          email={user.email}
          date={user.adress}
          state={user.status}
        />
      ))}
    </div>
  );
}

export default Users;
