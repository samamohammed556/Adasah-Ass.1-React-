import { useFetch } from "../hooks/useFetch.js";
import Loader from "../components/common/Loader.jsx";
import ErrorMessage from "../components/common/ErrorMessage.jsx";
import AboutHero from "../components/about/AboutHero.jsx";
import ValuesSection from "../components/about/ValuesSection.jsx";
import TeamSection from "../components/about/TeamSection.jsx";
import ContactBand from "../components/about/ContactBand.jsx";

function About() {
  const { data, loading, error } = useFetch("/data/posts.json");
  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error.message} onRetry={() => window.location.reload()} />;
  const { posts = [], siteInfo = {} } = data;

  return (
    <>
      <AboutHero />
      <ValuesSection />
      <TeamSection posts={posts} social={siteInfo.social} />
      <ContactBand email={siteInfo.email} />
    </>
  );
}

export default About;
