import ArticleList from "./ArticleList";

function Articles() {
  return (
    <section className="default-page">
      <header>
        <h1>All Articles</h1>
      </header>
      <ArticleList perPage={10}></ArticleList>
    </section>
  );
}

export default Articles;
