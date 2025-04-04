import { useSearchParams } from "react-router-dom";
import ArticleList from "./ArticleList";
import { useEffect, useState } from "react";

function Articles() {
  const [topic, setTopic] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    setTopic(searchParams.get("topic"));
  }, [searchParams]);
  return (
    <section className="default-page">
      <header>
        <h1>
          {!topic ? "All" : topic.charAt(0).toUpperCase() + topic.slice(1)}{" "}
          Articles
        </h1>
      </header>
      <ArticleList perPage={10} topic={topic}></ArticleList>
    </section>
  );
}

export default Articles;
