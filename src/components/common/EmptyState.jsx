import { Link } from "react-router-dom";

function EmptyState({ title, description, actionLabel, actionHref, onAction }) {
  return (
    <div className="bg-[#141414] border border-white/[0.07] rounded-[26px] p-8 md:p-12 text-center max-w-xl mx-auto flex flex-col items-center justify-center my-6">
      <p className="text-[22px] md:text-[24px] font-bold text-white font-tajawal mb-3">
        {title}
      </p>
      <p className="text-gray-400 text-[15px] font-tajawal mb-8 max-w-md leading-relaxed">
        {description}
      </p>
      {onAction && actionLabel ? (
        <button
          type="button"
          onClick={onAction}
          className="bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white px-7 py-3 rounded-full text-[15px] font-bold font-tajawal transition-all duration-300 hover:brightness-110 shadow-none cursor-pointer"
        >
          {actionLabel}
        </button>
      ) : actionLabel && actionHref ? (
        <Link
          to={actionHref}
          className="bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white px-7 py-3 rounded-full text-[15px] font-bold font-tajawal transition-all duration-300 hover:brightness-110 shadow-none cursor-pointer inline-flex items-center justify-center"
        >
          {actionLabel}
        </Link>
      ) : null}
    </div>
  );
}

export default EmptyState;
