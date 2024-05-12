import Link from "next/link";
import { useState, useEffect } from "react";
import { calculateSafetyGrade } from "../utils/safetyGradeCalculator";

export default function Home() {
  const [safetyGrade, setSafetyGrade] = useState<string>('');

  useEffect(() => {
    const grade = calculateSafetyGrade();
    setSafetyGrade(grade);
  }, []);

  // Function to determine the color based on the grade
  const getColorForGrade = (grade: string) => {
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
  };

  return (
    <div className="p-3">
      <h1 className="text-lg font-bold">VANguard Dashboard</h1>
      <div className="mt-4">
        <h2 className="text-6xl font-bold text-green-500">{safetyGrade}</h2>
        <p className="text-gray-600">Your current safety grade</p>
      </div>
      <Link href="/dashboard" className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Go to Dashboard
      </Link>
    </div>
  );
}
