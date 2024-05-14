import browser from 'webextension-polyfill';

export default function Dashboard() {
  const baseUrl = typeof browser !== "undefined" ? browser.runtime.getURL('/') : '';
  return (
    <div className="p-4">
      <div className="flex items-center mb-4">
        {/* Left Arrow Icon */}
        <a href={`${baseUrl}`} className="mr-4 inline-flex items-center justify-center p-2 text-gray-500 hover:text-white bg-transparent hover:bg-blue-700 rounded-full transition-colors duration-150 ease-in-out" aria-label="Go back">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-500">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </a>
        <h1 className="text-xl font-bold">Security Dashboard</h1>
      </div>
      <ul className="list-none space-y-2 pl-14">
        <li><a href={`${baseUrl}domain-monitoring.html`} className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Domain Monitoring</a></li>
        <li><a href={`${baseUrl}cookie-management`} className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Cookie Management</a></li>
        <li><a href={`${baseUrl}local-storage-detection`} className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Local Storage Detection</a></li>
        <li><a href={`${baseUrl}browser-hijacking-protection`} className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Browser Hijacking Protection</a></li>
        <li><a href={`${baseUrl}canvas-fingerprint-detection`} className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Canvas Fingerprint Detection</a></li>
        <li><a href={`${baseUrl}privacy-scoring`} className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Privacy Scoring</a></li>
      </ul>
    </div>
  );
}
