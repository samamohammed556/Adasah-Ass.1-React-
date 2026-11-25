import { FaBullseye, FaBolt, FaHandshake } from "react-icons/fa";
import { FaArrowsRotate } from "react-icons/fa6";
import ValueCard from "./ValueCard.jsx";

const values = [
  {
    icon: FaBullseye,
    title: "الجودة أولاً",
    description: "محتوى مدروس ومكتوب بخبرة",
  },
  {
    icon: FaBolt,
    title: "تركيز عملي",
    description: "أمثلة واقعية يمكنك تطبيقها اليوم",
  },
  {
    icon: FaHandshake,
    title: "المجتمع",
    description: "تعلم مع آلاف المصورين",
  },
  {
    icon: FaArrowsRotate,
    title: "دائماً محدث",
    description: "أحدث الاتجاهات وأفضل الممارسات",
  },
];

function ValuesSection() {
  return (
    <section className="w-full bg-[#0e0e0e] border-t border-white/[0.06] py-[64px] md:py-[84px]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center justify-center gap-[12px]">
            <span className="w-[4px] h-[26px] rounded-full bg-gradient-to-b from-[#f59e0b] to-[#f97316] shrink-0" />
            <h2 className="font-tajawal font-extrabold text-[30px] lg:text-[40px] text-white leading-[1.2]">
              قيمنا
            </h2>
            <span className="w-[4px] h-[26px] rounded-full bg-gradient-to-b from-[#f59e0b] to-[#f97316] shrink-0" />
          </div>

          <p className="mt-[14px] font-tajawal font-normal text-[17px] md:text-[19px] text-gray-500">
            المبادئ التي توجه كل ما نقوم بإنشائه
          </p>
        </div>

        <div className="mt-[48px] max-w-[1140px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-[16px] lg:gap-[26px]">
          {values.map((item, index) => (
            <ValueCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ValuesSection;
