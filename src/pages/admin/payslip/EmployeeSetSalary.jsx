import React, { useEffect, useState } from "react";
import { Edit, Plus, Trash } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchEmployeeList } from "../../../slices/employeeSlice";

const EmployeeSetSalary = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAllowanceOpen, setIsAllowanceOpen] = useState(false);
  const [isCommssionOpen, setIsCommissionOpen] = useState(false);
  const [isLoanOpen, setIsLoanOpen] = useState(false);
  const [isSaturationOpen, setIsSaturationOpen] = useState(false);
  const [isOtherOpen, setIsOtherOpen] = useState(false);
  const [isOvertime, setIsOvertime] = useState(false);
  const [formData, setFormData] = useState({
    payslipType: "",
    account: "",
    salary: "",
    allowanceoption: "",
    allowancetitle: "",
    allowancetype: "",
    allowanceamount: "",
    commissiontitle: "",
    commissiontype: "",
    commissionamount: "",
    loantitle: "",
    loanoption: "",
    loantype: "",
    loanamount: "",
    loanreason: "",
    saturationdeduction: "",
    saturationtitle: "",
    saturationtype: "",
    saturationamount: "",
    othertitle: "",
    othertype: "",
    otheramount: "",
    overtimetitle: "",
    overtimeday: "",
    overtimehour: "",
    overtimerate: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setIsOpen(false);
    setIsAllowanceOpen(false);
    setIsCommissionOpen(false);
    setIsLoanOpen(false);
    setIsSaturationOpen(false);
    setIsOtherOpen(false);
    setIsOvertime(false);
  };

  const { list } = useSelector((state) => state.employees);

  const { employeeId } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEmployeeList());
  }, [dispatch]);

  const currentId = useParams();
  console.log("currentId", currentId);

  const currentemployee = list.find((emp) =>
    emp._id === employeeId ? `${emp._id}` : "No employe match"
  );

  return (
    <div className="p-6 space-y-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500">
        <span className="text-gray-900 font-medium">Employee Set Salary</span>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-lg">Employee Salary</h2>
            <button
              onClick={() => setIsOpen(true)}
              className="bg-blue-500 hover:bg-blue-600 text-white p-1 rounded"
            >
              <Plus size={18} />
            </button>
          </div>
          <div className="space-y-2">
            <p>
              <strong>Payslip Type:</strong>{" "}
              {formData.payslipType || "Salary Slip"}
            </p>
            <p>
              <strong>Salary:</strong> ₹{formData.salary || "9325"}
            </p>
            <p>
              <strong>Account Type:</strong> {formData.account || "Vmart"}
            </p>
          </div>
        </div>
        {/* Modal */}
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg w-96 p-6">
              <h3 className="text-lg font-bold mb-4">Add Salary Details</h3>
              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Payslip Type Select */}
                <label htmlFor="payslipType">
                  Payslip Type <span className=" text-red-600">*</span>
                </label>
                <select
                  name="payslipType"
                  value={formData.payslipType}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                >
                  <option value="">Select Payslip Type</option>
                  <option value="Salary Slip">Salary Slip</option>
                  <option value="Hourly Slip">Hourly Slip</option>
                </select>

                {/* Salary Input */}
                <label htmlFor="salary">
                  Salary <span className=" text-red-600">*</span>
                </label>
                <input
                  type="number"
                  name="salary"
                  placeholder="Salary"
                  value={formData.salary}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                />
                {/* Account Type Select */}
                <label htmlFor="account">
                  From Account <span className=" text-red-600">*</span>
                </label>
                <select
                  name="account"
                  value={formData.account}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                >
                  <option value="Vmart">Vmart</option>
                </select>

                {/* Buttons */}
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="bg-gray-400 hover:bg-gray-500 text-white px-3 py-1 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Allowance Card */}
        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-lg">Allowance</h2>
            <button
              onClick={() => setIsAllowanceOpen(true)}
              className="bg-blue-500 hover:bg-blue-600 text-white p-1 rounded"
            >
              <Plus size={18} />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2">Employee Name</th>
                  <th className="px-4 py-2">Allowance Option</th>
                  <th className="px-4 py-2">Title</th>
                  <th className="px-4 py-2">Type</th>
                  <th className="px-4 py-2">Amount</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-2">
                    {currentemployee?.personalInfo?.name}
                  </td>
                  <td className="px-4 py-2">{formData.allowanceoption}</td>
                  <td className="px-4 py-2">{formData.allowancetitle}</td>{" "}
                  <td className="px-4 py-2">{formData.allowancetype}</td>{" "}
                  <td className="px-4 py-2">{formData.allowanceamount}</td>
                  <td className="flex">
                    <span className=" text-red-700 ">
                      <Trash />
                    </span>{" "}
                    ||{" "}
                    <span className=" text-blue-600">
                      <Edit></Edit>
                    </span>
                  </td>
                </tr>
                {/* <tr className="border-t">
                  <td className="px-4 py-2">SARVESH KUMAR YADAV</td>
                  <td className="px-4 py-2">Non Taxable</td>
                  <td className="px-4 py-2">Special Allowance HRA</td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>

        {/* // Allowance modal  */}
        {isAllowanceOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg w-96 p-6">
              <h3 className="text-lg font-bold mb-4">Create Allowance</h3>
              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Payslip Type Select */}
                <label htmlFor="allowanceoption">
                  allowance option <span className=" text-red-600">*</span>
                </label>
                <select
                  name="allowanceoption"
                  value={formData.allowanceoption}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                >
                  <option value="">Allowance options</option>
                  <option value="travell">Travell</option>
                  <option value="nontaxable">Non taxable</option>
                  <option value="nontaxable">Spacial HRA+FF</option>
                </select>

                {/* Title Allowance */}
                <label htmlFor="allowancetitle">
                  Title <span className=" text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="allowancetitle"
                  placeholder="allowance title"
                  value={formData.allowancetitle}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                />

                {/* Allowance Type */}
                <label htmlFor="allowancetype">
                  Type <span className=" text-red-600">*</span>
                </label>
                <select
                  name="allowancetype"
                  value={formData.allowancetype}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                >
                  <option value="">Allowance type</option>
                  <option value="fixed ">Fixed </option>
                  <option value="percantage ">Percantage</option>
                </select>

                {/* Amount */}
                <label htmlFor="allowanceamount">
                  Amount <span className=" text-red-600">*</span>
                </label>
                <input
                  type="number"
                  name="allowanceamount"
                  placeholder="Amount"
                  value={formData.allowanceamount}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                />
                {/* Buttons */}
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsAllowanceOpen(false)}
                    className="bg-gray-400 hover:bg-gray-500 text-white px-3 py-1 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Commission Card */}
        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-lg">Commission</h2>
            <button
              onClick={() => setIsCommissionOpen(true)}
              className="bg-blue-500 hover:bg-blue-600 text-white p-1 rounded"
            >
              <Plus size={18} />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2">Employee Name</th>
                  <th className="px-4 py-2">Title</th>
                  <th className="px-4 py-2">Type</th>
                  <th className="px-4 py-2">Amount</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-2">
                    {" "}
                    {currentemployee?.personalInfo?.name}
                  </td>
                  <td className="px-4 py-2">{formData.commisiontitle}</td>
                  <td className="px-4 py-2">{formData.commisiontype}</td>
                  <td className="px-4 py-2">{formData.commisionamount}</td>
                  <td className="flex items-center justify-center mt-4">
                    {" "}
                    <span className=" text-red-700 ">
                      <Trash />
                    </span>{" "}
                    ||{" "}
                    <span className=" text-blue-600">
                      <Edit></Edit>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* commission modal */}
        {isCommssionOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg w-96 p-6">
              <h3 className="text-lg font-bold mb-4">Create commission</h3>
              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Title Commission */}
                <label htmlFor="commissiontitle">
                  Title <span className=" text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="commissiontitle"
                  placeholder="Commission title"
                  value={formData.commissiontitle}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                />

                {/* Commision Type */}
                <label htmlFor="commissiontype">
                  Type <span className=" text-red-600">*</span>
                </label>
                <select
                  name="commissiontype"
                  value={formData.commissiontype}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                >
                  <option value="">Allowance type</option>
                  <option value="fixed ">Fixed </option>
                  <option value="percantage ">Percantage</option>
                </select>

                {/* Amount */}
                <label htmlFor="commissionamount">
                  Amount <span className=" text-red-600">*</span>
                </label>
                <input
                  type="number"
                  name="commissionamount"
                  placeholder="Amount"
                  value={formData.commissionamount}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                />
                {/* Buttons */}
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsCommissionOpen(false)}
                    className="bg-gray-400 hover:bg-gray-500 text-white px-3 py-1 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Loan Card */}
        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-lg">Loan</h2>
            <button
              onClick={() => setIsLoanOpen(true)}
              className="bg-blue-500 hover:bg-blue-600 text-white p-1 rounded"
            >
              <Plus size={18} />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2">Employee</th>
                  <th className="px-4 py-2">Loan Options</th>
                  <th className="px-4 py-2">Title</th>
                  <th className="px-4 py-2">Type</th>
                  <th className="px-4 py-2">Loan Amount</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-2">
                    {" "}
                    {currentemployee?.personalInfo?.name}
                  </td>
                  <td className="px-4 py-2">{formData.loanoption}</td>
                  <td className="px-4 py-2">{formData.loantitle}</td>
                  <td className="px-4 py-2">{formData.loantype}</td>
                  <td className="px-4 py-2">₹{formData.loanamount}</td>
                  <td className="px-4 py-2 flex mt-4">
                    {" "}
                    <span className=" text-red-700 ">
                      <Trash />
                    </span>{" "}
                    ||{" "}
                    <span className=" text-blue-600">
                      <Edit></Edit>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Loan Model  */}
        {isLoanOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg w-[250] p-6">
              <h3 className="text-lg font-bold mb-4">Create Loan</h3>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="flex space-x-6">
                  {/* Title Loan */}
                  <label htmlFor="loantitle">
                    Loan Title <span className=" text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="loantitle"
                    placeholder="loan title"
                    value={formData.loantitle}
                    onChange={handleChange}
                    className="w-full border rounded p-2"
                  />

                  {/* loan  Option */}
                  <label htmlFor="loanoption">
                    Loan Option <span className=" text-red-600">*</span>
                  </label>
                  <select
                    name="loanoption"
                    value={formData.loanoption}
                    onChange={handleChange}
                    className="w-full border rounded p-2"
                  >
                    <option value="">Loan option</option>
                    <option value="home/car">Home / car</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="flex space-x-6">
                  {/* loan  Type */}
                  <label htmlFor="loantype">
                    Loan Type <span className=" text-red-600">*</span>
                  </label>
                  <select
                    name="loantype"
                    value={formData.loantype}
                    onChange={handleChange}
                    className="w-full border rounded p-2"
                  >
                    <option value="">Loan type</option>
                    <option value="fixed ">Fixed </option>
                    <option value="percantage ">Percantage</option>
                  </select>

                  {/*Loan Amount */}
                  <label htmlFor="loanamount">
                    Loan Amount <span className=" text-red-600">*</span>
                  </label>
                  <input
                    type="number"
                    name="loanamount"
                    placeholder="Loan Amount"
                    value={formData.loanamount}
                    onChange={handleChange}
                    className="w-full border rounded p-2"
                  />
                </div>
                <label htmlFor="loanreason">Reason</label>
                <textarea
                  type="text"
                  name="loanreason"
                  placeholder="Loan Amount"
                  value={formData.loanreason}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                />
                {/* Buttons */}
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsLoanOpen(false)}
                    className="bg-gray-400 hover:bg-gray-500 text-white px-3 py-1 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Saturation Deduction*/}
        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-lg">Saturation Deduction</h2>
            <button
              onClick={() => setIsSaturationOpen(true)}
              className="bg-blue-500 hover:bg-blue-600 text-white p-1 rounded"
            >
              <Plus size={18} />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2">Employee Name</th>
                  <th className="px-4 py-2">Title</th>
                  <th className="px-4 py-2">Type</th>
                  <th className="px-4 py-2">Amount</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-2">
                    {" "}
                    {currentemployee?.personalInfo?.name}
                  </td>
                  <td className="px-4 py-2">{formData.saturationtitle}</td>
                  <td className="px-4 py-2">{formData.saturationtype}</td>
                  <td className="px-4 py-2">{formData.saturationamount}</td>
                  <td className="px-4 py-2 flex mt-4">
                    <span className=" text-red-700 ">
                      <Trash />
                    </span>{" "}
                    ||{" "}
                    <span className=" text-blue-600">
                      <Edit></Edit>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Saturation  Model  */}
        {isSaturationOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg w-[250] p-6">
              <h3 className="text-lg font-bold mb-4">Create Saturation</h3>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="flex space-x-6">
                  {/* deduction  Option */}
                  <label htmlFor="saturationdeduction">
                    Deduction Options <span className=" text-red-600">*</span>
                  </label>
                  <select
                    name="saturationdeduction"
                    value={formData.saturationdeduction}
                    onChange={handleChange}
                    className="w-full border rounded p-2"
                  >
                    <option value=""> deduction options</option>
                    <option value="fixed ">Pf </option>
                    <option value="percantage ">Bonus</option>
                    <option value="fixed ">Leave </option>
                    <option value="percantage ">Other</option>
                    <option value="fixed ">Mobile Allowance </option>
                    <option value="percantage ">Special HRA+FF</option>
                    <option value="fixed ">Incentive </option>
                    <option value="percantage ">Esic wages</option>
                  </select>

                  {/*Saturation Title */}
                  <label htmlFor="saturationtitle">
                    Title <span className=" text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="saturationtitle"
                    placeholder="saturation title"
                    value={formData.saturationtitle}
                    onChange={handleChange}
                    className="w-full border rounded p-2"
                  />
                </div>
                <div className="flex space-x-6">
                  {/* saturation  Type */}
                  <label htmlFor="saturationtype">
                    Type <span className=" text-red-600">*</span>
                  </label>
                  <select
                    name="saturationtype"
                    value={formData.saturationtype}
                    onChange={handleChange}
                    className="w-full border rounded p-2"
                  >
                    <option value=""> type</option>
                    <option value="fixed ">Fixed </option>
                    <option value="percantage ">Percantage</option>
                  </select>

                  {/* Amount */}
                  <label htmlFor="saturationamount">
                    Amount <span className=" text-red-600">*</span>
                  </label>
                  <input
                    type="number"
                    name="saturationamount"
                    placeholder=" Amount"
                    value={formData.saturationamount}
                    onChange={handleChange}
                    className="w-full border rounded p-2"
                  />
                </div>

                {/* Buttons */}
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsSaturationOpen(false)}
                    className="bg-gray-400 hover:bg-gray-500 text-white px-3 py-1 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Other Payment */}
        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-lg">Other Payment</h2>
            <button
              onClick={() => setIsOtherOpen(true)}
              className="bg-blue-500 hover:bg-blue-600 text-white p-1 rounded"
            >
              <Plus size={18} />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2">Employee</th>
                  <th className="px-4 py-2">Title</th>
                  <th className="px-4 py-2">Type</th>
                  <th className="px-4 py-2"> Amount</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-2">
                    {" "}
                    {currentemployee?.personalInfo?.name}
                  </td>
                  <td className="px-4 py-2">{formData.othertitle} </td>
                  <td className="px-4 py-2">{formData.othertype} </td>
                  <td className="px-4 py-2">₹{formData.otheramount} </td>
                  <td className="px-4 py-2 flex  mt-4">
                    <span className=" text-red-700 ">
                      <Trash />
                    </span>{" "}
                    ||{" "}
                    <span className=" text-blue-600">
                      <Edit></Edit>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Other  Model  */}
        {isOtherOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg w-[250] p-6">
              <h3 className="text-lg font-bold mb-4">Create Other Payment</h3>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="flex space-x-6">
                  {/* Other  Title */}
                  <label htmlFor="othertitle">
                    Title <span className=" text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="othertitle"
                    placeholder="saturation title"
                    value={formData.othertitle}
                    onChange={handleChange}
                    className="w-full border rounded p-2"
                  />
                </div>
                <div className="flex space-x-6">
                  {/* other  Type */}
                  <label htmlFor="othertype">
                    Type <span className=" text-red-600">*</span>
                  </label>
                  <select
                    name="othertype"
                    value={formData.othertype}
                    onChange={handleChange}
                    className="w-full border rounded p-2"
                  >
                    <option value=""> type</option>
                    <option value="fixed ">Fixed </option>
                    <option value="percantage ">Percantage</option>
                  </select>

                  {/* other Amount */}
                  <label htmlFor="otheramount">
                    Amount <span className=" text-red-600">*</span>
                  </label>
                  <input
                    type="number"
                    name="otheramount"
                    placeholder=" Amount"
                    value={formData.otheramount}
                    onChange={handleChange}
                    className="w-full border rounded p-2"
                  />
                </div>

                {/* Buttons */}
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsOtherOpen(false)}
                    className="bg-gray-400 hover:bg-gray-500 text-white px-3 py-1 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Overtime*/}
        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-lg">Overtime</h2>
            <button
              onClick={() => setIsOvertime(true)}
              className="bg-blue-500 hover:bg-blue-600 text-white p-1 rounded"
            >
              <Plus size={18} />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2">Employee Name</th>
                  <th className="px-4 py-2">Overtime Title</th>
                  <th className="px-4 py-2">Number of days</th>
                  <th className="px-4 py-2">Hours</th>
                  <th className="px-4 py-2">Rate</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-2">
                    {" "}
                    {currentemployee?.personalInfo?.name}
                  </td>
                  <td className="px-4 py-2">{formData.overtimetitle}</td>
                  <td className="px-4 py-2">{formData.overtimeday}</td>
                  <td className="px-4 py-2">{formData.overtimerate}</td>
                  <td className="px-4 py-2 flex mt-4">
                    <span className=" text-red-700 ">
                      <Trash />
                    </span>
                    ||
                    <span className=" text-blue-600">
                      <Edit></Edit>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* overtime  Model  */}
        {isOvertime && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg w-[250] ml-[180px] p-6">
              <h3 className="text-lg font-bold mb-4">
                Create Overtime Payment
              </h3>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="flex space-x-6">
                  {/* overtime  Title */}
                  <label htmlFor="overtimetitle">
                    Title <span className=" text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="overtimetitle"
                    placeholder="overtime title"
                    value={formData.overtimetitle}
                    onChange={handleChange}
                    className="w-full border rounded p-2"
                  />
                </div>
                <div className="flex space-x-6">
                  {/* Number of days* */}
                  <label htmlFor="overtimeday">
                    number of day <span className=" text-red-600">*</span>
                  </label>
                  <input
                    type="number"
                    name="overtimeday"
                    placeholder=" Number of Daya"
                    value={formData.overtimeday}
                    onChange={handleChange}
                    className="w-full border rounded p-2"
                  />

                  {/* Hours */}
                  <label htmlFor="overtimehour">
                    Hours <span className=" text-red-600">*</span>
                  </label>
                  <input
                    type="number"
                    name="overtimehour"
                    placeholder=" Amount"
                    value={formData.overtimehour}
                    onChange={handleChange}
                    className="w-full border rounded p-2"
                  />

                  {/* Rate */}
                  <label htmlFor="overtimerate">
                    Rate <span className=" text-red-600">*</span>
                  </label>
                  <input
                    type="number"
                    name="overtimerate"
                    placeholder=" rate"
                    value={formData.overtimerate}
                    onChange={handleChange}
                    className="w-full border rounded p-2"
                  />
                </div>

                {/* Buttons */}
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsOvertime(false)}
                    className="bg-gray-400 hover:bg-gray-500 text-white px-3 py-1 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeeSetSalary;
