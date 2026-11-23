import { useEffect, useState } from 'react';

function Reviews() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/3/comments')
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, []);

  return (
    <section className="rounded-xl bg-white p-6 shadow-md">
      <h2 className="mb-3 text-2xl font-bold">Відгуки роботодавців</h2>
      {comments.map((comment) => (
        <article key={comment.id} className="mb-4 border p-3">
          <h3 className="font-bold">{comment.name}</h3>
          <p>{comment.email}</p>
          <p>{comment.body}</p>
        </article>
      ))}
    </section>
  );
}

export default Reviews;
