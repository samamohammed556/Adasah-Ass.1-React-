import { useParams, Navigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch.js";
import Loader from "../components/common/Loader.jsx";
import ErrorMessage from "../components/common/ErrorMessage.jsx";
import PostHero from "../components/blog/PostHero.jsx";
import PostContent from "../components/blog/PostContent.jsx";
import PostSidebar from "../components/blog/PostSidebar.jsx";
import RelatedPosts from "../components/blog/RelatedPosts.jsx";

function BlogDetails() {
  const { slug } = useParams();
  const { data, loading, error } = useFetch(`${import.meta.env.BASE_URL}data/posts.json`);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error.message} onRetry={() => window.location.reload()} />;

  const allPosts = data?.posts || [];
  const post = allPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/404" replace />;

  const parseContent = (contentString) => {
    if (!contentString) return { intro: "", sections: [] };
    const parts = contentString.split("\n\n");
    let intro = "";
    const sections = [];
    let currentSection = null;

    for (const rawPart of parts) {
      const part = rawPart.trim();
      if (!part) continue;

      if (part.startsWith("## ")) {
        if (currentSection) {
          sections.push(currentSection);
        }
        const heading = part.replace(/^##\s+/, "");
        currentSection = {
          id: `section-${sections.length}`,
          heading,
          paragraphs: [],
        };
      } else {
        if (!currentSection) {
          intro = intro ? `${intro}\n\n${part}` : part;
        } else {
          currentSection.paragraphs.push(part);
        }
      }
    }
    if (currentSection) {
      sections.push(currentSection);
    }
    return { intro, sections };
  };

  const { intro, sections } = parseContent(post.content);

  const getRelatedPosts = () => {
    const sameCat = allPosts.filter(
      (p) => p.category === post.category && p.id !== post.id
    );
    if (sameCat.length >= 3) {
      return sameCat.slice(0, 3);
    }
    const remaining = allPosts.filter(
      (p) => p.id !== post.id && !sameCat.some((c) => c.id === p.id)
    );
    return [...sameCat, ...remaining].slice(0, 3);
  };

  const related = getRelatedPosts();

  return (
    <div className="w-full bg-[#0a0a0a] min-h-screen">
      <PostHero post={post} />

      <main className="w-full bg-[#0a0a0a] pt-10 pb-6">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_310px] gap-6 lg:gap-12 items-start">
            <PostContent post={post} intro={intro} sections={sections} />
            <PostSidebar post={post} sections={sections} />
          </div>

          <div className="w-full border-t border-white/[0.06] mt-12 md:mt-14" />

          <RelatedPosts posts={related} />
        </div>
      </main>
    </div>
  );
}

export default BlogDetails;
