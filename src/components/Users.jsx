import { CircularProgress } from "@mui/material";
import { getAllUsers } from "../utils/api";
import useApiRequest from "./useApiRequest";
import UserCard from "./UserCard";
import { UserContext } from "../contexts/User";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Users() {
  const { data: users, isLoading, err } = useApiRequest(getAllUsers);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/user");
    }
  });
  return (
    <section className="default-page">
      <h1>User Login</h1>
      {isLoading ? (
        <CircularProgress />
      ) : (
        users.map((userInfo) => {
          return <UserCard key={userInfo.username} user={userInfo} />;
        })
      )}
    </section>
  );
}

export default Users;
