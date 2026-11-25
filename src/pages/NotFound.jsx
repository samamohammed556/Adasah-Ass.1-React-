import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] text-center bg-bg py-16">
      <div className="max-w-md mx-auto px-6">
        <div className="text-8xl sm:text-9xl font-black text-primary mb-4 tracking-tighter">404</div>
        <h1 className="text-2xl sm:text-3xl font-bold text-text mb-4">الصفحة غير موجودة</h1>
        <p className="text-text-muted mb-8 leading-relaxed">
          عذرًا، الصفحة التي تبحث عنها غير موجودة أو تم نقلها إلى عنوان آخر.
        </p>
        <Link
          to="/"
          className="bg-gradient-to-r from-primary-from to-primary-to text-text px-8 py-3 rounded-full font-bold transition-all inline-block hover:brightness-105"
        >
          العودة إلى الصفحة الرئيسية
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
