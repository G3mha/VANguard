import dynamic from 'next/dynamic';
import React from 'react';


const DomainMonitoringContent = dynamic(() => import('../../components/DomainMonitoringContent'), {
  ssr: false,  // Disable server-side rendering for this component
});

function DomainMonitoring() {
  return (
    <DomainMonitoringContent />
  );
}
export const runtime = 'nodejs' as const;
export default DomainMonitoring;