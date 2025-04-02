import ArticleList from "./ArticleList";

function Home() {
  return (
    <section className="default-page">
      <section className="default-content">
        <header>
          <h1>Welcome to NC News</h1>
        </header>
        <ArticleList sort_by="votes" perPage={3}></ArticleList>
      </section>
    </section>
  );
}

export default Home;
