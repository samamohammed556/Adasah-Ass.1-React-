import { Link } from "react-router-dom";
import { FaCamera, FaTags } from "react-icons/fa";
import ShareCard from "./ShareCard.jsx";
import AuthorCard from "./AuthorCard.jsx";

function PostContent({ post, intro = "", sections = [] }) {
  return (
    <article className="w-full text-start">
      {post.excerpt && (
        <div className="rounded-[20px] p-6 md:px-[22px] md:py-6 bg-[rgba(249,115,22,0.07)] border border-[rgba(249,115,22,0.25)]">
          <p className="text-gray-300 italic text-[16px] md:text-[18px] leading-[28px] md:leading-[30px] font-tajawal">
            &ldquo;{post.excerpt}&rdquo;
          </p>
        </div>
      )}

      {intro && (
        <p className="text-gray-200 text-[16px] md:text-[20px] leading-[28px] md:leading-[31px] font-tajawal font-normal mt-8 md:mt-10">
          {intro}
        </p>
      )}

      <div className="flex flex-col">
        {sections.map((sec) => (
          <div key={sec.id} className="mt-10 md:mt-[50px]">
            <div
              id={sec.id}
              className="flex items-center gap-3.5 md:gap-[17px] scroll-mt-[calc(var(--navbar-height)+24px)]"
            >
              <div className="w-[36px] h-[36px] md:w-[42px] md:h-[42px] rounded-[12px] bg-[rgba(249,115,22,0.10)] border border-[rgba(249,115,22,0.30)] flex items-center justify-center shrink-0">
                <FaCamera className="w-4 h-4 md:w-[18px] md:h-[18px] text-[#f97316]" />
              </div>
              <h2 className="text-white font-extrabold text-[24px] md:text-[30px] font-tajawal leading-tight">
                {sec.heading}
              </h2>
            </div>

            <div className="flex flex-col gap-3 mt-4">
              {sec.paragraphs.map((p, pIdx) => (
                <p
                  key={pIdx}
                  className="text-gray-300 text-[16px] md:text-[18px] leading-[28px] md:leading-[31px] font-tajawal font-normal"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {post.tags && post.tags.length > 0 && (
        <div className="rounded-[20px] p-[26px] bg-[#141414] border border-white/[0.07] mt-10 md:mt-[50px]">
          <div className="flex items-center gap-3">
            <div className="w-[42px] h-[42px] rounded-[12px] bg-[rgba(249,115,22,0.10)] border border-[rgba(249,115,22,0.30)] flex items-center justify-center shrink-0">
              <FaTags className="w-[18px] h-[18px] text-[#f97316]" />
            </div>
            <h3 className="text-white font-bold text-[18px] font-tajawal">
              الوسوم
            </h3>
          </div>

          <div className="flex flex-wrap gap-2 mt-[17px]">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                to={`/blog?q=${encodeURIComponent(tag)}`}
                className="h-[39px] px-[17px] rounded-full bg-[#1a1a1a] border border-white/[0.08] text-gray-400 text-[15px] font-tajawal inline-flex items-center justify-center transition-all duration-200 [@media(hover:hover)]:hover:border-[rgba(249,115,22,0.6)] [@media(hover:hover)]:hover:text-[#f97316]"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>
      )}

      <ShareCard post={post} />
      <AuthorCard author={post.author} />
    </article>
  );
}

export default PostContent;
