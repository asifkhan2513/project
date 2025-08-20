import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployeeList } from "../../slices/employeeSlice";
import { Pencil, Trash2, Plus, Import, FolderInput } from "lucide-react";
import API from "../../axiosInstance";

export default function Employees() {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.employees);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    dob: "",
    gender: "",
    email: "",
    address: "",
    company: "",
    jobtitle: "",
    salary: "",
    experience: "",
    branch: "",
    department: "",
    designation: "",
    joiningDate: "",
    netsalary: "",
    accountHolder: "",
    accountNumber: "",
    bankName: "",
    bankCode: "",
    branchLocation: "",
    documents: {},
  });

  useEffect(() => {
    dispatch(fetchEmployeeList());
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData((prev) => ({
        ...prev,
        documents: {
          ...prev.documents,
          [name]: files[0],
        },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // const handleSave = async () => {
  //   try {
  //     const payload = new FormData();
  //     Object.entries(formData).forEach(([key, value]) => {
  //       if (key === "documents") {
  //         Object.entries(value).forEach(([docKey, file]) => {
  //           if (file) payload.append(docKey, file);
  //         });
  //       } else {
  //         payload.append(key, value);
  //       }
  //     });
  //     console.log("payload for employee", payload);

  //     await API.post("/employees", payload, {
  //       headers: { "Content-Type": "multipart/form-data" },
  //     });

  //     alert("Employee saved successfully!");
  //     setShowForm(false);
  //     dispatch(fetchEmployeeList());
  //   } catch (err) {
  //     console.error(err);
  //     alert("Error saving employee");
  //   }
  // };

  const handleSave = async () => {
    try {
      // const token = localStorage.getItem("token");
      const payload = new FormData();

      // personal info
      payload.append("personalInfo[name]", formData.name);
      payload.append("personalInfo[email]", formData.email);
      payload.append("personalInfo[salary]", formData.salary);
      payload.append("personalInfo[netsalary]", formData.netsalary);
      payload.append("personalInfo[branch]", formData.branch);
      payload.append("personalInfo[department]", formData.department);
      payload.append("personalInfo[designation]", formData.designation);
      payload.append("personalInfo[phone]", formData.phone);
      payload.append("personalInfo[dob]", formData.dob);
      payload.append("personalInfo[gender]", formData.gender);
      payload.append("personalInfo[address]", formData.address);

      // bank info
      payload.append("bankInfo[accountNumber]", formData.accountNumber);
      payload.append("bankInfo[ifsc]", formData.bankCode);
      payload.append("bankInfo[bankName]", formData.bankName);
      payload.append("bankInfo[branch]", formData.branchLocation);

      // nominee info (if any)
      payload.append("nomineeInfo[name]", formData.nomineeName || "");
      payload.append("nomineeInfo[relation]", formData.nomineeRelation || "");
      payload.append("nomineeInfo[contact]", formData.nomineeContact || "");

      // id details
      payload.append("idDetails[aadhaar]", formData.aadharNumber || "");
      payload.append("idDetails[pan]", formData.panNumber || "");
      payload.append("idDetails[voterId]", formData.voterId || "");

      // documents (files)
      Object.entries(formData.documents).forEach(([docKey, file]) => {
        if (file) payload.append(`documents[${docKey}]`, file);
      });

      let res = await API.post("/employees", payload, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("Response:", res.data);
      alert("Employee saved successfully!");
      setShowForm(false);
      dispatch(fetchEmployeeList());
    } catch (err) {
      console.error(err);
      alert("Error saving employee");
    }
  };

  const handleDownloadExcel = () => {
    // Simple example of downloading list as Excel
    import("xlsx").then((XLSX) => {
      const worksheet = XLSX.utils.json_to_sheet(list);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Employees");
      XLSX.writeFile(workbook, "employees.xlsx");
    });
  };

  if (loading) return <p className="text-gray-500">Loading employees...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">All Employees</h1>
        <div className="flex space-x-6 bg-cyan-600 text-white p-3 rounded">
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-1"
          >
            <Plus /> Add
          </button>
          <button>
            <Import />
          </button>
          <button onClick={handleDownloadExcel}>
            <FolderInput />
          </button>
        </div>
      </div>

      {/* Employee Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full text-sm text-left text-gray-600">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs border-b">
            <tr>
              <th className="px-6 py-3">Employee ID</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Branch</th>
              <th className="px-6 py-3">Department</th>
              <th className="px-6 py-3">Designation</th>
              <th className="px-6 py-3">Date of Joining</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {list.map((emp, index) => (
              <tr key={emp._id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">
                  {`#EMP${String(index + 1).padStart(6, "0")}`}
                </td>
                <td className="px-6 py-4">{emp?.personalInfo?.name ?? "-"}</td>
                <td className="px-6 py-4">{emp?.personalInfo?.email ?? "-"}</td>
                <td className="px-6 py-4">{emp?.jobInfo?.branch ?? "-"}</td>
                <td className="px-6 py-4">{emp?.jobInfo?.department ?? "-"}</td>
                <td className="px-6 py-4">
                  {emp?.jobInfo?.designation ?? "-"}
                </td>
                <td className="px-6 py-4">
                  {emp?.jobInfo?.joiningDate
                    ? new Date(emp.jobInfo.joiningDate).toLocaleDateString(
                        "en-US",
                        { month: "short", day: "numeric", year: "numeric" }
                      )
                    : "-"}
                </td>
                <td className="px-6 py-4 flex gap-2">
                  <button className="p-2 rounded-md bg-cyan-500 hover:bg-cyan-600 text-white transition">
                    <Pencil size={16} />
                  </button>
                  <button className="p-2 rounded-md bg-pink-500 hover:bg-pink-600 text-white transition">
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Create Employee Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-6xl rounded-lg shadow-lg p-6 overflow-y-auto max-h-[90vh]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Create Employee</h2>
              <button
                onClick={() => setShowForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✖
              </button>
            </div>

            {/* Form */}
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Detail */}
              <div className="bg-white border rounded p-4 shadow-sm">
                <h3 className="font-medium mb-4">Personal Detail</h3>
                <div className="space-y-3">
                  <input
                    name="name"
                    onChange={handleChange}
                    placeholder="Name*"
                    className="w-full border p-2 rounded"
                  />
                  <input
                    name="phone"
                    onChange={handleChange}
                    placeholder="Phone*"
                    className="w-full border p-2 rounded"
                  />
                  <input
                    type="date"
                    name="dob"
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                  />
                  <div className="flex gap-4">
                    <label className="flex items-center gap-1">
                      <input
                        type="radio"
                        name="gender"
                        value="Male"
                        onChange={handleChange}
                      />{" "}
                      Male
                    </label>
                    <label className="flex items-center gap-1">
                      <input
                        type="radio"
                        name="gender"
                        value="Female"
                        onChange={handleChange}
                      />{" "}
                      Female
                    </label>
                  </div>
                  <input
                    name="email"
                    type="email"
                    onChange={handleChange}
                    placeholder="Email*"
                    className="w-full border p-2 rounded"
                  />

                  <textarea
                    name="address"
                    onChange={handleChange}
                    placeholder="Address*"
                    className="w-full border p-2 rounded"
                  ></textarea>
                </div>
              </div>

              {/* job Detail */}
              <div className="bg-white border rounded p-4 shadow-sm">
                <h3 className="font-medium mb-4">Job Detail</h3>
                <div className="space-y-3">
                  {/* <input
                    // value="ID"
                    readOnly
                    className="w-full border p-2 rounded bg-gray-100"
                  /> */}
                  <input
                    name="company"
                    onChange={handleChange}
                    placeholder="company Name"
                    className="w-full border p-2 rounded"
                  />

                  <input
                    name="jobtitle"
                    onChange={handleChange}
                    placeholder="job title"
                    className="w-full border p-2 rounded"
                  />
                  <input
                    name="salary"
                    onChange={handleChange}
                    placeholder="salary"
                    className="w-full border p-2 rounded"
                  />

                  <input
                    name="experience"
                    onChange={handleChange}
                    placeholder="experience"
                    className="w-full border p-2 rounded"
                  />

                  <input
                    name="branch"
                    onChange={handleChange}
                    placeholder="Branch*"
                    className="w-full border p-2 rounded"
                  />
                  <input
                    name="department"
                    onChange={handleChange}
                    placeholder="Department*"
                    className="w-full border p-2 rounded"
                  />
                  <input
                    name="designation"
                    onChange={handleChange}
                    placeholder="Designation*"
                    className="w-full border p-2 rounded"
                  />
                  <input
                    type="date"
                    name="joiningDate"
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                  />
                  <input
                    name="netsalary"
                    onChange={handleChange}
                    placeholder="netsalary*"
                    className="w-full border p-2 rounded"
                  />
                  <input
                    type="address"
                    name="address"
                    placeholder="address"
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                  />
                </div>
              </div>

              {/* Document Upload */}
              <div className="bg-white border rounded p-4 shadow-sm">
                <h3 className="font-medium mb-4">Document</h3>
                <div className="space-y-3">
                  {[
                    "resume",
                    "aadhar",
                    "pan",
                    "photo",
                    "bankProof",
                    "offerLetter",
                    "joiningLetter",
                    "experienceLetter",
                    "policeVerification",
                  ].map((doc, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between border p-2 rounded"
                    >
                      <span>{doc}</span>
                      <input type="file" name={doc} onChange={handleChange} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Bank Account Detail */}
              <div className="bg-white border rounded p-4 shadow-sm">
                <h3 className="font-medium mb-4">Bank Account Detail</h3>
                <div className="space-y-3">
                  <input
                    name="accountHolder"
                    onChange={handleChange}
                    placeholder="Account Holder Name"
                    className="w-full border p-2 rounded"
                  />
                  <input
                    name="accountNumber"
                    onChange={handleChange}
                    placeholder="Account Number"
                    className="w-full border p-2 rounded"
                  />
                  <input
                    name="bankName"
                    onChange={handleChange}
                    placeholder="Bank Name"
                    className="w-full border p-2 rounded"
                  />
                  <input
                    name="bankCode"
                    onChange={handleChange}
                    placeholder="Bank IFSC Code"
                    className="w-full border p-2 rounded"
                  />
                  <input
                    name="branchLocation"
                    onChange={handleChange}
                    placeholder="Branch Location"
                    className="w-full border p-2 rounded"
                  />
                </div>
              </div>
            </form>

            {/* Submit */}
            <div className="mt-6 text-right">
              <button
                type="button"
                onClick={handleSave}
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
              >
                Save Employee
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
