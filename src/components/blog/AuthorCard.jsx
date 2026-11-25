function AuthorCard({ author }) {
  if (!author) return null;

  return (
    <div className="rounded-[20px] p-[26px] bg-[#141414] border border-white/[0.07] mt-[26px] flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-[22px]">
      <img
        src={author.avatar}
        alt={author.name}
        className="w-[109px] h-[109px] rounded-[20px] object-cover border-2 border-[rgba(249,115,22,0.45)] shrink-0"
      />
      <div className="flex flex-col text-start">
        <span className="text-[#f97316] font-bold text-[14px] font-tajawal">
          كاتب المقال
        </span>
        <h4 className="text-white font-extrabold text-[25px] font-tajawal mt-0.5 leading-snug">
          {author.name}
        </h4>
        <span className="text-gray-500 text-[15px] font-tajawal mt-0.5">
          {author.role}
        </span>
        <p className="text-gray-400 text-[15px] leading-[26px] font-tajawal mt-2">
          {author.role} شغوف بمشاركة المعرفة والخبرات في عالم التصوير الفوتوغرافي.
        </p>
      </div>
    </div>
  );
}

export default AuthorCard;
