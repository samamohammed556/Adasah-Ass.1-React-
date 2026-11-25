function Loader() {
  return (
    <div className="flex flex-col items-center justify-center py-24 bg-bg">
      <div className="w-12 h-12 border-4 border-primary-tint border-t-primary rounded-full animate-spin mb-4"></div>
      <p className="text-text-muted text-sm">جاري التحميل...</p>
    </div>
  );
}

export default Loader;
