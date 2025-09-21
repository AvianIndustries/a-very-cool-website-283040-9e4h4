import Link from 'next/link';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">About Whale World</h1>
          <p className="mt-2 text-center text-sm text-gray-600">
            Whale World is a non-profit organization dedicated to the protection and preservation of whales. We believe in the power of education and advocacy to make a difference in the lives of these wonderful creatures.
          </p>
          <div className="mt-4">
            <Link href="/"><button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Back to Home</button></Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}