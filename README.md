# عدسة - عالم التصوير (Adasa)

مدونة عربية عن التصوير الفوتوغرافي تُنشأ باستخدام Vite + React + Tailwind CSS + Flowbite React + React Router.

## تقنيات المشروع
- React (JavaScript) مع Vite
- Tailwind CSS v3 (إعداد رسمي مع Vite)
- React Router (createBrowserRouter + RouterProvider)
- Flowbite React للمكونات واجهة المستخدم
- axios لجلب البيانات
- useState و useEffect فقط لإدارة الحالة (مع هوك useFetch مخصص)

## هيكل المجلد
```
adasah/
├─ public/data/posts.json    # مصدر البيانات (28 مقالة، أقسام، معلومات الموقع)
├─ src/
│  ├─ main.jsx               # نقطة الدخول
│  ├─ App.jsx                # تعريف المسارات باستخدام createBrowserRouter
│  ├─ index.css              # أنماط Tailwind
│  ├─ layouts/MainLayout.jsx # التخطيط الرئيسي (Navbar + Outlet + Footer)
│  ├─ pages/
│  │  ├─ Home.jsx            # الصفحة الرئيسية
│  │  ├─ Blog.jsx            # قائمة المقالات مع بحث، تصفية، ترقيم
│  │  ├─ BlogDetails.jsx     # تفاصيل المقال
│  │  ├─ About.jsx           # عن المدونة
│  │  ├─ Terms.jsx           # الشروط
│  │  ├─ Privacy.jsx         # الخصوصية
│  │  └─ NotFound.jsx        # صفحة 404
│  ├─ components/
│  │  ├─ layout/Navbar.jsx
│  │  ├─ layout/Footer.jsx
│  │  ├─ layout/ScrollToTop.jsx
│  │  ├─ blog/PostCard.jsx
│  │  ├─ blog/PostList.jsx
│  │  ├─ blog/SearchBar.jsx
│  │  ├─ blog/CategoryFilter.jsx
│  │  ├─ blog/ViewToggle.jsx
│  │  ├─ blog/PostsPagination.jsx
│  │  ├─ blog/PostContent.jsx
│  │  ├─ blog/RelatedPosts.jsx
│  │  ├─ home/Hero.jsx
│  │  ├─ home/FeaturedPosts.jsx
│  │  ├─ home/LatestPosts.jsx
│  │  ├─ home/CategoriesSection.jsx
│  │  └─ common/Loader.jsx
│  │     common/ErrorMessage.jsx
│  │     common/EmptyState.jsx
│  ├─ hooks/useFetch.js      # هوك لجلب البيانات باستخدام axios
│  └─ utils/
│     ├─ formatDate.js       # تنسيق التواريخ
│     └─ helpers.js          # دوال التصفية والفرز
└─ README.md
```

## كيفية التشغيل
```bash
cd adasah
npm install
npm run dev
```

بعد تشغيل الخادم، افتح http://localhost:5173 في المتصفح.

## الميزات
- واجهة كاملة بالعربية مع اتجاه من اليمين إلى اليسار (RTL)
- خط عربي (Cairo، Tajawal) من Google Fonts
- صفحة رئيسية تحتوي على Section البطل، المقالات المميزة، أحدث المقالات، والأقسام
- صفحة المدونة مع بحث (بمؤقت تأخير)، تصفية حسب القسم، toggle عرض شبكة/قائمة، ترقيم بـ 6 مقالات في كل صفحة
- صفحة تفاصيل المقال مع مسارات التنقل، محتوى منسق، مقالات ذات صلة، وأزرار المجاورة
- صفحات عن، الشروط، الخصوصية، وصفحة 404
- جميع الروابط قابلة للمشاركة عبر عناوين URL (البحث، التصفي، رقم الصفحة تُخزَّن في استعلامات العنوان)

## القرارات التصميمية
- استخدام Tailwind v3 للتوافق مع Flowbite React v0.12 (حُزمت flowbite v4 لعدم توافقها مع Tailwind v3)
- utiliser مرافق Tailwind المنطقية لاتجاه RTL (ms-، me-، ps-، pe-، text-start)
- كل مقالة تحتوي على حقل content منسق يدويًا (فقرات وعناوين frmentary)
- يتم احتساب عدد المقالات في كل قسم من المقالات نفسها لأن قيم count في البيانات غير دقيقة
