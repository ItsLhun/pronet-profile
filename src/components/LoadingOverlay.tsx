export const LoadingOverlay = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black opacity-40">
    {' '}
    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);
