import dynamic from 'next/dynamic';
import React from 'react';


const DashboardContent = dynamic(() => import('../../components/DashboardContent'), {
  ssr: false,  // Disable server-side rendering for this component
});

function Dashboard() {
  return (
    <DashboardContent />
  );
}
export const runtime = 'nodejs' as const;
export default Dashboard;