export function Footer() {
  return (
    <footer className="bg-indigo-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center">
          <div className="mt-6 lg:mt-0">
            <a href="#" className="text-base text-gray-500 hover:text-gray-300">
              Privacy Policy
            </a>
          </div>
          <div className="mt-6 lg:mt-0">
            <a href="#" className="text-base text-gray-500 hover:text-gray-300">
              Terms and Conditions
            </a>
          </div>
        </nav>
        <div className="mt-8">
          <p className="text-center text-base text-gray-400">&copy; 2022 Whale World. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}