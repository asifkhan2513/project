// components/HowItWorks.jsx
import React from "react";
import { CheckCircle } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Sign Up",
    description:
      "Create your account and set up your organization profile in minutes.",
  },
  {
    id: 2,
    title: "Add Employees",
    description:
      "Import your employee data or add them manually with detailed profiles.",
  },
  {
    id: 3,
    title: "Configure Settings",
    description:
      "Set up attendance rules, salary structures, and leave policies.",
  },
  {
    id: 4,
    title: "Start Managing",
    description:
      "Begin tracking attendance and generating reports immediately.",
  },
];

export default function HowItWorks() {
  return (
    <div className="text-black">
      <section className="bg-white py-16 px-6 sm:px-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          How It Works
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Get started in minutes with our simple setup process
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-md transition-all"
            >
              <div className="text-blue-600 mb-3">
                <CheckCircle size={36} />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {step.id}. {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
