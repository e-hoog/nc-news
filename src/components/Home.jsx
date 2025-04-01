import ArticleList from "./ArticleList";
import NavBar from "./NavBar";

function Home() {
  return (
    <section className="page-with-nav">
      <section className="navbar">
        <NavBar />
      </section>
      <section className="content-with-nav">
        <header>
          <h1>Welcome to NC News</h1>
        </header>
        <ArticleList sort_by="votes"></ArticleList>
      </section>
    </section>
  );
}

export default Home;
