import { useFetch } from "../hooks/useFetch.js";
import Loader from "../components/common/Loader.jsx";
import ErrorMessage from "../components/common/ErrorMessage.jsx";
import Hero from "../components/home/Hero.jsx";
import FeaturedPosts from "../components/home/FeaturedPosts.jsx";
import CategoriesSection from "../components/home/CategoriesSection.jsx";
import LatestPosts from "../components/home/LatestPosts.jsx";
import NewsletterSection from "../components/home/NewsletterSection.jsx";

function Home() {
  const { data, loading, error } = useFetch(`${import.meta.env.BASE_URL}data/posts.json`);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error.message} onRetry={() => window.location.reload()} />;

  const { posts, categories, siteInfo } = data;

  return (
    <>
      <Hero siteInfo={siteInfo} />
      <FeaturedPosts posts={posts} />
      <CategoriesSection categories={categories} />
      <LatestPosts posts={posts} />
      <NewsletterSection posts={posts} />
    </>
  );
}

export default Home;
