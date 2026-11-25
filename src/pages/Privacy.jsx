import { Link } from "react-router-dom";

function Privacy() {
  return (
    <section className="py-16 bg-bg min-h-screen">
      <div className="container-custom max-w-4xl">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-text mb-8">سياسة الخصوصية</h1>
        <div className="text-text-muted leading-relaxed text-base sm:text-lg space-y-6">
          <p>
            خصوصيتك مهمة لنا. هذه الصفحة توضح كيف نجمع ونستخدم ونحمي معلوماتك عند زيارة مدونة عدسة.
          </p>
          <p>
            <strong className="text-text">المعلومات التي نجمعها:</strong> نحن لا نجمع أي بيانات شخصية عن زوار الموقع إلا إذا اخترت تقديمها طواعية عبر نموذج الاتصال أو الاشتراك النشري.
          </p>
          <p>
            <strong className="text-text">استخدام المعلومات:</strong> أي معلومات تقدمها تُستخدم فقط للتواصل معك أو إرسال النشرة البريدية، ولا نشاركها مع أطراف ثالثة.
          </p>
          <p>
            <strong className="text-text">ملفات تعريف الارتباط:</strong> قد نستخدم ملفات تعريف الارتباط لتحسين تجربة التصفح وتحليل حركة الموقع بشكل إجمالي.
          </p>
          <p>
            يمكنك دائمًا التواصل معنا لحذف بياناتك أو الاستفسار حول كيفية معالجتها.
          </p>
        </div>
        <div className="mt-12">
          <Link to="/" className="text-primary hover:underline text-sm font-semibold inline-flex items-center gap-1 transition-colors">
            ← العودة إلى الرئيسية
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Privacy;
