import SectionBadge from "./SectionBadge.jsx";
import CategoryCard from "./CategoryCard.jsx";

function CategoriesSection({ categories = [] }) {
  if (!categories || categories.length === 0) return null;

  return (
    <section className="relative bg-[#0e0e0e] border-t border-b border-white/[0.06] py-16 lg:py-[100px] overflow-hidden">
      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-6">
        <div className="text-center flex flex-col items-center mb-8 sm:mb-10 lg:mb-[48px]">
          <SectionBadge
            label="التصنيفات"
            className="w-[110px] h-[42px] px-3.5 justify-center mb-5"
            bigDotClassName="w-[10px] h-[10px]"
            textClassName="text-[16px]"
          />
          <h2 className="text-[36px] sm:text-[44px] lg:text-[56px] font-extrabold text-white leading-[1.2] mb-4 lg:mb-[16px]">
            استكشف حسب الموضوع
          </h2>
          <p className="text-[17px] sm:text-[18px] lg:text-[20px] text-gray-500 font-normal leading-normal max-w-xl mx-auto">
            اعثر على محتوى مصمم حسب اهتماماتك
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.id || category.name}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoriesSection;
