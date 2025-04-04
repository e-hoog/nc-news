import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/User";
import { Button } from "@mui/material";

function UserProfile() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  });
  function handleLogOut() {
    setUser(null);
    navigate("/login");
  }
  return (
    <section className="default-page">
      {user ? (
        <>
          <h1>Welcome {user.name}</h1>
          <div className="user-profile">
            <img src={user.avatar_url}></img>
            <h2>{user.username}</h2>
            <Button onClick={handleLogOut} variant="outlined">
              Log Out
            </Button>
          </div>
        </>
      ) : (
        <h1>You are not logged in!</h1>
      )}
    </section>
  );
}

export default UserProfile;
