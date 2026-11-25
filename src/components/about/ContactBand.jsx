import { Link } from "react-router-dom";
import { LuMail } from "react-icons/lu";

function ContactBand({ email = "hello@adasah.com" }) {
  return (
    <section
      className="w-full border-t border-white/[0.06] py-[56px] md:py-[84px]"
      style={{
        background: "linear-gradient(135deg, #ff5a00 0%, #ff8a00 55%, #f2b705 100%)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        <h2 className="font-tajawal font-extrabold text-[28px] md:text-[38px] text-white leading-[1.2]">
          لديك أسئلة؟ دعنا نتحدث!
        </h2>

        <p className="mt-[20px] max-w-[710px] font-tajawal font-normal text-[16px] md:text-[19px] leading-[26px] md:leading-[29px] text-[rgba(255,255,255,0.92)]">
          نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة، أو تريد فقط إلقاء التحية، لا تتردد في التواصل.
        </p>

        <div className="mt-[34px] w-full md:w-auto flex flex-col md:flex-row items-center justify-center gap-[14px] md:gap-[17px]">
          <a
            href={`mailto:${email}`}
            className="w-full md:w-[184px] h-[56px] md:h-[63px] rounded-[15px] bg-[#0a0a0a] text-white font-tajawal font-extrabold text-[17px] inline-flex items-center justify-center gap-2.5 transition-colors duration-200 [@media(hover:hover)]:hover:bg-[#1C1C1C]"
          >
            <span>تواصل معنا</span>
            <LuMail className="w-[18px] h-[18px] shrink-0" />
          </a>

          <Link
            to="/blog"
            className="w-full md:w-[184px] h-[56px] md:h-[63px] rounded-[15px] bg-transparent border-2 border-[rgba(255,255,255,0.65)] text-white font-tajawal font-extrabold text-[17px] inline-flex items-center justify-center transition-colors duration-200 [@media(hover:hover)]:hover:bg-white [@media(hover:hover)]:hover:text-[#111111] [@media(hover:hover)]:hover:border-white"
          >
            تصفح المقالات
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ContactBand;
