import dynamic from 'next/dynamic';
import React from 'react';

const DomainMonitoringContent = dynamic(() => import('../../components/DomainMonitoringContent'), {
  ssr: false,  // Disable server-side rendering for this component
});

export default function DomainMonitoring() {
  return (
    <DomainMonitoringContent />
  );
}
