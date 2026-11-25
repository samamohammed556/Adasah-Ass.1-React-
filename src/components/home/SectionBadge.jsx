
function SectionBadge({
  label = "مميز",
  className = "",
  bigDotClassName = "h-2 w-2",
  textClassName = "",
  icon: Icon = null,
  dotsCount = 2,
}) {
  return (
    <div
      className={`section-label inline-flex items-center gap-2 ${
        dotsCount === 1 ? "before:!hidden before:!content-none" : ""
      } ${className}`}
    >
      <span className={`relative flex ${bigDotClassName}`}>
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
        <span className={`relative inline-flex rounded-full ${bigDotClassName} bg-primary`} />
      </span>
      {Icon && <Icon className="w-4 h-4 text-primary shrink-0" />}
      <span className={`font-medium text-neutral-300 ${textClassName}`}>
        {label}
      </span>
    </div>
  );
}

export default SectionBadge;
