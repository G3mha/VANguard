import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="p-4">
      <div className="flex items-center mb-4">
        {/* Left Arrow Icon */}
        <Link href="/dashboard" className="mr-4 inline-flex items-center justify-center p-2 text-gray-500 hover:text-white bg-transparent hover:bg-blue-700 rounded-full transition-colors duration-150 ease-in-out" aria-label="Go back">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-500">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <h1 className="text-xl font-bold">Security Dashboard</h1>
      </div>
      <ul className="list-none space-y-2 pl-14">
        <li><Link href="/domain-monitoring" className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Domain Monitoring</Link></li>
        <li><Link href="/cookie-management" className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Cookie Management</Link></li>
        <li><Link href="/local-storage-detection" className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Local Storage Detection</Link></li>
        <li><Link href="/browser-hijacking-protection" className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Browser Hijacking Protection</Link></li>
        <li><Link href="/canvas-fingerprint-detection" className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Canvas Fingerprint Detection</Link></li>
        <li><Link href="/privacy-scoring" className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Privacy Scoring</Link></li>
      </ul>
    </div>
  );
}
