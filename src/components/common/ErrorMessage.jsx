function ErrorMessage({ message, onRetry }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center bg-bg">
      <div className="bg-surface border border-primary-border-tint rounded-2xl p-6 max-w-md w-full mb-6">
        <p className="text-primary font-bold mb-2">حدث خطأ أثناء تحميل البيانات</p>
        <p className="text-text-muted text-sm">{message}</p>
      </div>
      {onRetry && (
        <button
          onClick={onRetry}
          className="bg-gradient-to-r from-primary-from to-primary-to text-text px-6 py-2 rounded-full text-sm font-bold transition-all hover:brightness-105"
        >
          إعادة المحاولة
        </button>
      )}
    </div>
  );
}

export default ErrorMessage;
