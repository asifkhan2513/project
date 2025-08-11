import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployeeList } from "../../slices/employeeSlice";
import { Eye, EyeClosed, Pencil } from "lucide-react";

export default function Employees() {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.employees);

  useEffect(() => {
    dispatch(fetchEmployeeList());
  }, [dispatch]);

  if (loading) return <p>Loading employees...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  console.log("emp", list);
  return (
    <div>
      <h1>All Employees</h1>
      <table border="1">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>gender</th>
          </tr>
        </thead>
        <tbody>
          {list.map((emp, index) => (
            <tr key={emp._id}>
              <td>{index + 1}</td>
              <td>{emp.personalInfo.name}</td>
              <td>{emp.personalInfo.email}</td>
              <td>{emp.personalInfo.role}</td>
              <td>{emp.personalInfo.gender}</td>
              <div className="flex">
                {" "}
                {<Eye />} {<Pencil />}
              </div>
            </tr>
          ))}

          <span>{<Eye />}</span>
        </tbody>
      </table>
    </div>
  );
}
