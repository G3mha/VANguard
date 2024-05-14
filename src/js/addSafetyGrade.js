document.addEventListener('DOMContentLoaded', function () {
  function calculateSafetyGrade() {
    // Your logic to calculate the safety grade
    return 'A'; // Example grade
  }

  function getColorForGrade(grade) {
    switch (grade) {
      case 'A':
        return 'text-green-500';
      case 'B':
        return 'text-yellow-500';
      case 'C':
        return 'text-orange-500';
      case 'D':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  }

  function reloadPage() {
    window.location.reload();
  }

  const safetyGrade = calculateSafetyGrade();
  const gradeElement = document.getElementById('safety-grade');
  gradeElement.className = `text-6xl font-bold ${getColorForGrade(safetyGrade)}`;
  gradeElement.textContent = safetyGrade || '...';

  const reloadButton = document.getElementById('reload-button');
  reloadButton.addEventListener('click', reloadPage);
});
