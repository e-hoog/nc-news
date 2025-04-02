import ArticleList from "./ArticleList";
import NavBar from "./NavBar";

function Articles() {
  return (
    <section className="page-with-nav">
      <section className="navbar">
        <NavBar />
      </section>
      <section className="content-with-nav">
        <header>
          <h1>All Articles</h1>
        </header>
        <ArticleList perPage={10}></ArticleList>
      </section>
    </section>
  );
}

export default Articles;
