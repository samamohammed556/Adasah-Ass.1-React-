import SectionBadge from "../home/SectionBadge.jsx";
import TeamMemberCard from "./TeamMemberCard.jsx";

function TeamSection({ posts = [], social = {} }) {
  const members = [];
  const seenNames = new Set();

  for (const post of posts) {
    if (post?.author?.name && !seenNames.has(post.author.name)) {
      seenNames.add(post.author.name);
      members.push(post.author);
    }
  }

  return (
    <section className="w-full bg-[#0a0a0a] border-t border-white/[0.06] py-[64px] md:py-[84px]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <SectionBadge
            label="فريقنا"
            dotsCount={1}
            className="!mb-0 px-4 py-1.5 justify-center border border-[rgba(249,115,22,0.30)] bg-[rgba(249,115,22,0.10)] rounded-full"
            bigDotClassName="w-2 h-2"
            textClassName="!text-[#f97316] text-[14px] font-medium"
          />

          <h2 className="mt-[28px] font-tajawal font-extrabold text-[30px] lg:text-[40px] text-white leading-[1.2]">
            تعرف على كتابنا
          </h2>

          <p className="mt-[14px] font-tajawal font-normal text-[17px] md:text-[19px] text-gray-500 max-w-2xl">
            فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع المجتمع.
          </p>
        </div>

        <div className="mt-[40px] md:mt-[56px] max-w-[1140px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] lg:gap-[34px]">
          {members.map((member, index) => (
            <TeamMemberCard
              key={member.name}
              member={member}
              social={social}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
