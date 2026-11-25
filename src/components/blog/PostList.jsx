import PostCard from "./PostCard.jsx";

function PostList({ posts = [], view = "grid" }) {
  return (
    <div
      className={
        view === "grid"
          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          : "grid grid-cols-1 gap-8"
      }
    >
      {posts.map((post, index) => (
        <PostCard key={post.id} post={post} view={view} index={index} />
      ))}
    </div>
  );
}

export default PostList;
