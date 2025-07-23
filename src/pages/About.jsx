// components/About.jsx
import { Award, Settings, Headphones } from "lucide-react";

export default function About() {
  return (
    <section className="bg-gradient-to-br from-orange-500 to-orange-600 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">About Maazster Tech</h2>
        <p className="text-lg mb-12">
          We are a leading provider of workforce management solutions, helping
          businesses of all sizes streamline their operations.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-orange-100 text-orange-800 rounded-lg shadow-md p-6 hover:scale-105 transition-transform duration-300">
            <Award className="mx-auto mb-4 w-10 h-10" />
            <h3 className="font-bold text-xl mb-2">Industry Leader</h3>
            <p>
              Trusted by 500+ companies across various industries for reliable
              workforce management.
            </p>
          </div>

          <div className="bg-orange-100 text-orange-800 rounded-lg shadow-md p-6 hover:scale-105 transition-transform duration-300">
            <Settings className="mx-auto mb-4 w-10 h-10" />
            <h3 className="font-bold text-xl mb-2">Innovation Driven</h3>
            <p>
              Continuously evolving our platform with cutting-edge technology
              and user feedback.
            </p>
          </div>

          <div className="bg-orange-100 text-orange-800 rounded-lg shadow-md p-6 hover:scale-105 transition-transform duration-300">
            <Headphones className="mx-auto mb-4 w-10 h-10" />
            <h3 className="font-bold text-xl mb-2">Expert Support</h3>
            <p>
              Dedicated customer support team available 24/7 to help you
              succeed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
