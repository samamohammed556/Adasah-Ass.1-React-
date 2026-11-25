import { useState } from "react";
import { FaShareNodes, FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { LuLink, LuCheck } from "react-icons/lu";

function ShareCard({ post }) {
  const [copied, setCopied] = useState(false);
  const pageUrl = typeof window !== "undefined" ? window.location.href : "";

  const handleCopy = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(pageUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="rounded-[20px] p-[26px] bg-[#141414] border border-white/[0.07] mt-[26px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="w-[42px] h-[42px] rounded-[12px] bg-[rgba(249,115,22,0.10)] border border-[rgba(249,115,22,0.30)] flex items-center justify-center shrink-0">
          <FaShareNodes className="w-[18px] h-[18px] text-[#f97316]" />
        </div>
        <h3 className="text-white font-bold text-[18px] font-tajawal">
          شارك المقال
        </h3>
      </div>

      <div className="flex items-center gap-2">
        <a
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(post?.title || "")}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="مشاركة على إكس"
          className="group w-[46px] h-[46px] rounded-[13px] bg-[#1a1a1a] border border-white/[0.08] flex items-center justify-center transition-all duration-200 [@media(hover:hover)]:hover:bg-[#1DA1F2] [@media(hover:hover)]:hover:border-transparent"
        >
          <FaXTwitter className="w-[21px] h-[21px] text-gray-400 [@media(hover:hover)]:group-hover:text-white transition-colors duration-200 shrink-0" />
        </a>

        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="مشاركة على لينكد إن"
          className="group w-[46px] h-[46px] rounded-[13px] bg-[#1a1a1a] border border-white/[0.08] flex items-center justify-center transition-all duration-200 [@media(hover:hover)]:hover:bg-[#0077B5] [@media(hover:hover)]:hover:border-transparent"
        >
          <FaLinkedinIn className="w-[21px] h-[21px] text-gray-400 [@media(hover:hover)]:group-hover:text-white transition-colors duration-200 shrink-0" />
        </a>

        <a
          href={`https://api.whatsapp.com/send?text=${encodeURIComponent((post?.title || "") + " " + pageUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="مشاركة على واتساب"
          className="group w-[46px] h-[46px] rounded-[13px] bg-[#1a1a1a] border border-white/[0.08] flex items-center justify-center transition-all duration-200 [@media(hover:hover)]:hover:bg-[#25D366] [@media(hover:hover)]:hover:border-transparent"
        >
          <FaWhatsapp className="w-[21px] h-[21px] text-gray-400 [@media(hover:hover)]:group-hover:text-white transition-colors duration-200 shrink-0" />
        </a>

        <button
          type="button"
          onClick={handleCopy}
          aria-label="نسخ رابط المقال"
          className={`group w-[46px] h-[46px] rounded-[13px] border flex items-center justify-center transition-all duration-200 cursor-pointer ${
            copied
              ? "bg-[#f97316] border-transparent text-white"
              : "bg-[#1a1a1a] border-white/[0.08] [@media(hover:hover)]:hover:bg-[#f97316] [@media(hover:hover)]:hover:border-transparent"
          }`}
        >
          {copied ? (
            <LuCheck className="w-[21px] h-[21px] text-white shrink-0" />
          ) : (
            <LuLink className="w-[21px] h-[21px] text-gray-400 [@media(hover:hover)]:group-hover:text-white transition-colors duration-200 shrink-0" />
          )}
        </button>
      </div>
    </div>
  );
}

export default ShareCard;
