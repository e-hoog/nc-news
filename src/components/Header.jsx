import { useContext, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/User";
import { TopicsContext } from "../contexts/Topics";
import { CircularProgress } from "@mui/material";

const drawerWidth = 240;

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const { user } = useContext(UserContext);
  const { topics, isTopicsLoading } = useContext(TopicsContext);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Divider />
      <List>
        <Link to={"/"}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={"Home"} />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to={"/articles"}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={"All Articles"} />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        {isTopicsLoading || !topics ? (
          <CircularProgress />
        ) : (
          topics.map((topic) => {
            return (
              <ListItem key={topic.slug} disablePadding>
                <ListItemButton href={`/articles?topic=${topic.slug}`}>
                  <ListItemText
                    primary={
                      topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1)
                    }
                  />
                </ListItemButton>
              </ListItem>
            );
          })
        )}
      </List>
    </div>
  );
  return (
    <section className="header">
      <CssBaseline />
      <AppBar position="absolute">
        <Toolbar className="toolbar">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/">
            <img src="/src/assets/logo.png" className="logo"></img>
          </Link>
          {user ? (
            <Link to="/user" className="user-button">
              <img src={user.avatar_url} className="user-button-image"></img>
            </Link>
          ) : (
            <Link to="/login">
              <button className="login-button">Log In</button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          slotProps={{
            root: {
              keepMounted: true,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              marginTop: 8.5,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </section>
  );
}

export default Header;
