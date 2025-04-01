import { Link } from "react-router-dom";

function Header() {
  return (
    <section className="default-header">
      <Link to="/">
        <h1 className="logo">NC News</h1>
      </Link>
      <p className="user">Username</p>
    </section>
  );
}

export default Header;
