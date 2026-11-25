function StatCard({ icon: Icon, valuePrefix, valueSuffix, label }) {
  return (
    <div className="h-[120px] md:h-[140px] rounded-[25px] bg-[#141414] border border-white/[0.07] px-3 flex flex-col items-center justify-center text-center">
      <Icon className="w-[28px] h-[28px] text-[#f97316] shrink-0" />
      <p className="mt-2 font-tajawal font-extrabold text-[28px] md:text-[36px] leading-tight text-[#f59e0b]">
        <span dir="ltr">{valuePrefix}</span>
        {valueSuffix && <span>{valueSuffix}</span>}
      </p>
      <p className="mt-1 font-tajawal font-normal text-[14px] md:text-[16px] text-gray-500 leading-snug">
        {label}
      </p>
    </div>
  );
}

export default StatCard;
