import React from "react";
import { ChevronRight } from "lucide-react";

// A small component for displaying each detail item
const DetailItem = ({ label, value }) => (
  <div>
    <p className="text-sm font-semibold text-gray-500">{label}</p>
    <p className="text-base text-gray-800">{value || "N/A"}</p>
  </div>
);

// A small component for displaying document links
const DocumentItem = ({ label, value }) => (
  <div>
    <p className="text-sm text-gray-800">{label}</p>
    <a href="#" className="text-sm text-blue-600 hover:underline">
      {value || "Not Uploaded"}
    </a>
  </div>
);

const ParticularUser = ({ employee, onBack }) => {
  if (!employee) {
    return null;
  }

  // Destructure for easier access, assuming a nested structure
  const { personalInfo, jobInfo, bankInfo, documents } = employee;

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      {/* Header and Breadcrumbs */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Employees Details</h1>
      </div>

      {/* Back Button */}
      <button
        onClick={onBack}
        className="mb-4 bg-white border border-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-100 transition shadow-sm"
      >
        &larr; Back to List
      </button>

      {/* Main Grid for Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Personal Detail Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold text-gray-900 border-b pb-3 mb-4">
            Personal Detail
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
            <DetailItem label="Employee ID" value={personalInfo?.employeeId} />
            <DetailItem label="Name" value={personalInfo?.name} />
            <DetailItem label="Email" value={personalInfo?.email} />
            <DetailItem
              label="Date of Birth"
              value={
                personalInfo?.dob
                  ? new Date(personalInfo.dob).toLocaleDateString()
                  : "N/A"
              }
            />
            <DetailItem label="Phone" value={personalInfo?.phone} />
            <DetailItem label="Address" value={personalInfo?.address} />
            <DetailItem label="Salary Type" value={personalInfo?.salaryType} />
            <DetailItem
              label="Basic Salary"
              value={personalInfo?.basicSalary}
            />
          </div>
        </div>

        {/* Company Detail Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold text-gray-900 border-b pb-3 mb-4">
            Company Detail
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
            <DetailItem label="Branch" value={jobInfo?.branch} />
            <DetailItem label="Department" value={jobInfo?.department} />
            <DetailItem label="Designation" value={jobInfo?.designation} />
            <DetailItem
              label="Date Of Joining"
              value={
                jobInfo?.dateOfJoining
                  ? new Date(jobInfo.dateOfJoining).toLocaleDateString()
                  : "N/A"
              }
            />
          </div>
        </div>

        {/* Document Detail Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold text-gray-900 border-b pb-3 mb-4">
            Document Detail
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
            <DocumentItem label="Adhar Card" value={documents?.adharCard} />
            <DocumentItem label="Pan Card" value={documents?.panCard} />
            <DocumentItem label="Photos" value={documents?.photos} />
            <DocumentItem label="Bank Account" value={documents?.bankAccount} />
            <DocumentItem
              label="Police Verification"
              value={documents?.policeVerification}
            />
            <DocumentItem
              label="Character Certificate"
              value={documents?.characterCertificate}
            />
          </div>
        </div>

        {/* Bank Account Detail Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold text-gray-900 border-b pb-3 mb-4">
            Bank Account Detail
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
            <DetailItem
              label="Account Holder Name"
              value={bankInfo?.accountHolderName}
            />
            <DetailItem
              label="Account Number"
              value={bankInfo?.accountNumber}
            />
            <DetailItem label="Bank Name" value={bankInfo?.bankName} />
            <DetailItem
              label="Bank Identifier Code"
              value={bankInfo?.bankIdentifierCode}
            />
            <DetailItem
              label="Branch Location"
              value={bankInfo?.branchLocation}
            />
            <DetailItem label="Tax Payer Id" value={bankInfo?.taxPayerId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticularUser;
