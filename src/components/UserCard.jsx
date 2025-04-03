import { Button } from "@mui/material";
import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/User";
import { useNavigate } from "react-router-dom";

function UserCard({ userInfo }) {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    if (user) {
      navigate("/user");
    }
  });

  function handleLogIn() {
    setUser(userInfo);
    navigate("/user");
  }
  return (
    <div className="user-card">
      <img className="login-photo" src={userInfo.avatar_url}></img>
      <h2>{userInfo.username}</h2>
      <Button onClick={handleLogIn} variant="outlined">
        Log In
      </Button>
    </div>
  );
}

export default UserCard;
