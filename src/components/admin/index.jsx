import React, { useState } from "react";
import "./index.scss";
import { useSelector } from "react-redux";
import { useGetUsersQuery } from "../../context/api/userApi";

const AdminData = () => {
  const [limit, setLimit] = useState(1);
  const { data, isFetching } = useGetUsersQuery({ limit: limit * 5 });
  console.log();
  const userData = useSelector((s) => s.auth.user);
  const users = data?.data?.users?.map((user) => (
    <tr key={user.id}>
      <td>{user.FirstName}</td>
      <td>{user.LastName}</td>
      <td>{user?.phones[0]}</td>
      <td>{user.role}</td>
      <td>
        <button>Edit</button>
      </td>
      <td>
        <button>Delete</button>
      </td>
    </tr>
  ));
  return (
    <section id="admin">
      <div className="container">
        <table>
          <caption>
            {userData?.FirstName} {userData?.LastName}
          </caption>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>phones</th>
            <th>role</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          {users}
        </table>
        <button onClick={() => setLimit((p) => p + 1)} className="see-more">
          {isFetching ? "Loading..." : "  See-more"}
        </button>
      </div>
    </section>
  );
};

export default AdminData;
