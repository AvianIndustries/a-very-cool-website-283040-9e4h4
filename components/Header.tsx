export function Header() {
  return (
    <header className="bg-indigo-600">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between">
          <div className="flex items-center">
            <a href="#">
              <span className="sr-only">Whale World</span>
              <img className="h-8 w-auto" src="/images/logo.svg" alt="">
            </a>
            <div className="hidden ml-10 space-x-8">
              <a href="#" className="text-base font-medium text-white hover:text-indigo-50">Home</a>
              <a href="#" className="text-base font-medium text-white hover:text-indigo-50">About</a>
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <a href="#" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 hover:bg-indigo-700">Donate</a>
          </div>
        </div>
      </nav>
    </header>
  );
}