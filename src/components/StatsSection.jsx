// components/StatsSection.jsx
import CountUp from "react-countup";

export function StatsSection() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center px-10 py-16 bg-blue-800">
      <div>
        <h2 className="text-3xl font-bold">
          <CountUp end={500} duration={2} />+
        </h2>
        <p className="mt-2">Companies Trust Us</p>
      </div>
      <div>
        <h2 className="text-3xl font-bold">
          <CountUp end={50000} duration={2.5} />+
        </h2>
        <p className="mt-2">Employees Managed</p>
      </div>
      <div>
        <h2 className="text-3xl font-bold">
          <CountUp end={99.9} duration={2.5} decimals={1} />%
        </h2>
        <p className="mt-2">Uptime Guarantee</p>
      </div>
      <div>
        <h2 className="text-3xl font-bold">
          <CountUp end={24} duration={1.5} />/<CountUp end={7} duration={1.5} />
        </h2>
        <p className="mt-2">Customer Support</p>
      </div>
    </section>
  );
}
export default StatsSection;
