import dynamic from 'next/dynamic';
import React from 'react';

const DashboardContent = dynamic(() => import('../../components/DashboardContent'), {
  ssr: false,  // Disable server-side rendering for this component
});

export default function Dashboard() {
  return (
    <DashboardContent />
  );
}
