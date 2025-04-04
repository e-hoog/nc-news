import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Articles from "./components/Articles";
import Article from "./components/Article";
import Users from "./components/Users";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:article_id" element={<Article />} />
        <Route path="/login" element={<Users />} />
        <Route path="/user" element={<UserProfile />} />
      </Routes>
    </>
  );
}

export default App;
