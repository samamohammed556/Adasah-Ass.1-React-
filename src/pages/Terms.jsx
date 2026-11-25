import { Link } from "react-router-dom";

function Terms() {
  return (
    <section className="py-16 bg-bg min-h-screen">
      <div className="container-custom max-w-4xl">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-text mb-8">الشروط والأحكام</h1>
        <div className="text-text-muted leading-relaxed text-base sm:text-lg space-y-6">
          <p>
            أهلاً بك في مدونة عدسة. باستخدامك لهذه المدونة، فإنك توافق على الشروط والأحكام التالية.
          </p>
          <p>
            <strong className="text-text">استخدام المحتوى:</strong> كل المحتوى المنشور في المدونة محمي بحقوق الملكية الفكرية ولا يُسمح بإعادة النشر دون إذن مسبق.
          </p>
          <p>
            <strong className="text-text">عدم الضمان:</strong> المعلومات المقدمة تهدف إلى التعليم والإرشاد فقط، ولا نضمن دقتها الكاملة أو ملاءمتها لكل حالة.
          </p>
          <p>
            <strong className="text-text">روابط خارجية:</strong> قد تحتوي المدونة على روابط لمواقع خارجية، ونحن غير مسؤولين عن محتواها أو سياسات الخصوصية الخاصة بها.
          </p>
          <p>
            يحق لنا تعديل هذه الشروط في أي وقت، وسيتم إشعار المستخدمين بالتغييرات عبر الموقع.
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

export default Terms;
