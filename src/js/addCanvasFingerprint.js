import { detectCanvasFingerprint } from './detectCanvasFingerprint.js';

document.addEventListener('DOMContentLoaded', function () {
  const baseUrl = typeof browser !== "undefined" ? browser.runtime.getURL('/') : '';

  if (baseUrl) {
    document.getElementById('back-link').href = baseUrl;

    const links = document.querySelectorAll('.dynamic-link');
    links.forEach(link => {
      const page = link.getAttribute('data-page');
      link.href = `${baseUrl}dashboard/${page}/index.html`;
    });
  }

  const detectionsList = document.getElementById('detections-list');
  if (detectionsList.children.length === 0) {
    const noDetectionMessage = document.createElement('li');
    noDetectionMessage.textContent = 'No fingerprinting attempts detected.';
    detectionsList.appendChild(noDetectionMessage);
  } else if (detectionsList) {
    function handleDetection(message) {
      const listItem = document.createElement('li');
      listItem.textContent = message;
      detectionsList.appendChild(listItem);
    }

    detectCanvasFingerprint(handleDetection);
  }
});

