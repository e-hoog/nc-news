import { CircularProgress } from "@mui/material";
import { getAllUsers } from "../utils/api";
import useApiRequest from "./useApiRequest";
import UserCard from "./UserCard";

function Users() {
  const { data: users, isLoading, err } = useApiRequest(getAllUsers);
  console.log(users);
  return (
    <section className="default-page">
      <h1>User Login</h1>
      {isLoading ? (
        <CircularProgress />
      ) : (
        users.map((userInfo) => {
          return <UserCard key={userInfo.username} userInfo={userInfo} />;
        })
      )}
    </section>
  );
}

export default Users;
