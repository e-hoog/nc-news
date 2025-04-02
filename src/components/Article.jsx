import { useParams, useSearchParams } from "react-router-dom";

function Article() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { article_id } = useParams();
  return (
    <section>
      <h1>Article Title</h1>
      <p>Date Posted</p>
      <p>Author</p>
      <p>Topic</p>
      <p>
        Body: Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
        distinctio quam culpa optio autem. Qui sint saepe quasi error,
        exercitationem corporis sapiente repellendus voluptate, recusandae nihil
        quidem pariatur ab quaerat.
      </p>
    </section>
  );
}

export default Article;
