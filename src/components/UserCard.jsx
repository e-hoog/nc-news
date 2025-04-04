import { Button } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../contexts/User";
import { useNavigate } from "react-router-dom";

function UserCard({ user }) {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  function handleLogIn() {
    setUser(user);
    navigate("/user");
  }
  return (
    <div className="user-card">
      <img className="login-photo" src={user.avatar_url}></img>
      <h2>{user.username}</h2>
      <Button onClick={handleLogIn} variant="outlined">
        Log In
      </Button>
    </div>
  );
}

export default UserCard;
