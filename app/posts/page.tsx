import CardList from "../components/Posts/CardList";
import ViewUserButton from "../components/Posts/ViewUserButton";

const base_url = "https://jsonplaceholder.typicode.com/posts";

interface IPosts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts = async () => {
  const response = await fetch(base_url, {
    cache: "no-store",
  });
  const posts: IPosts[] = await response.json();

  return (
    <>
      <p>{new Date().toLocaleTimeString()}</p>
      <h1 className="bg-orange-500 m-4 p-2 text-xl font-bold">Ini Post Page</h1>
      {posts.map((post) => {
        return (
          <CardList key={post.id}>
            <h1 className="font-semibold my-2">{post.title}</h1>
            <p>{post.body}</p>
            <br />
            <ViewUserButton userId={post.userId} />
          </CardList>
        );
      })}
    </>
  );
};

export default Posts;
