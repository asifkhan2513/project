const Features = () => {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        <FeatureCard
          title="Smart Attendance Tracking"
          description="Automated attendance monitoring with real-time tracking."
        />
        <FeatureCard
          title="Automated Payroll"
          description="Generate accurate payslips with attendance & overtime."
        />
        <FeatureCard
          title="Employee Management"
          description="Comprehensive employee profiles & document management."
        />
        <FeatureCard
          title="Leave Management"
          description="Streamlined leave application process with notifications."
        />
        <FeatureCard
          title="Analytics & Reports"
          description="Track attendance patterns and productivity insights."
        />
        <FeatureCard
          title="Security & Compliance"
          description="Role-based access, encryption, and compliance tools."
        />
      </div>
    </section>
  );
};

const FeatureCard = ({ title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition-all duration-300">
    <h3 className="text-xl text-black font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Features;
