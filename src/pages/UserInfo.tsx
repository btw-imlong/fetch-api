import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const UserInfo = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/users")
      .then((res) => res.json())
      .then(setUsers);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">User Info</h2>
        <ul className="space-y-4">
          {users.map((user: any) => (
            <li key={user.id} className="border rounded p-4 shadow">
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Username:</strong> {user.username}
              </p>
              <p>
                <strong>Name:</strong> {user.name.firstname}{" "}
                {user.name.lastname}
              </p>
              <p>
                <strong>Phone:</strong> {user.phone}
              </p>
              <p>
                <strong>Address:</strong> {user.address.city},{" "}
                {user.address.street}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserInfo;
