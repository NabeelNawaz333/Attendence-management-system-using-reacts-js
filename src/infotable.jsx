import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import "./EmployeeTable.css";
const EmployeeTable = () => {
  const [attendance, setAttendance] = useState({
    1: "", // Employee ID as key, value as either "PRESENT" or "ABSENT"
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
  });
  const [statuses, setStatuses] = useState({});
  const [summary, setSummary] = useState({
    totalEmployees: 0,
    presentCount: 0,
    absentCount: 0,
  });

  const employees = [
    {
      id: 1,
      name: "Nabeel",
      date: "13 September",
      Role: "Front end developer",
    },
    {
      id: 2,
      name: "Haider Ali",
      date: "13 September",
      Role: "Mern Stack Developer",
    },
    {
      id: 3,
      name: "Tabish",
      date: "13 September",
      Role: "Python Developer",
    },
    {
      id: 4,
      name: "Usman",
      date: "13 September",
      Role: "Wordpress Developer",
    },
    {
      id: 5,
      name: "Ali",
      date: "13 September",
      Role: "shopify Developer",
    },
    {
      id: 6,
      name: "Shakeel",
      date: "13 September",
      Role: "full stack Developer",
    },
  ];

  const handleAttendanceChange = (employeeId, value) => {
    setAttendance((prevState) => ({
      ...prevState,
      [employeeId]: value,
    }));
  };

  const handleSave = () => {
    setStatuses(attendance);

    // Calculate summary
    const totalEmployees = employees.length;
    const presentCount = Object.values(attendance).filter(
      (status) => status === "PRESENT"
    ).length;
    const absentCount = totalEmployees - presentCount;

    setSummary({
      totalEmployees,
      presentCount,
      absentCount,
    });
  };

  return (
    <div className="table-responsive">
      <Table bordered hover className="align-middle">
        <thead>
          <tr>
            <th>ID</th>
            <th>Employee</th>
            <th>Date</th>
            <th>Present</th>
            <th>Absent</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.date}</td>
              <td>
                <input
                  type="radio"
                  name={`attendance-${employee.id}`}
                  checked={attendance[employee.id] === "PRESENT"}
                  onChange={() =>
                    handleAttendanceChange(employee.id, "PRESENT")
                  }
                />
              </td>
              <td>
                <input
                  type="radio"
                  name={`attendance-${employee.id}`}
                  checked={attendance[employee.id] === "ABSENT"}
                  onChange={() => handleAttendanceChange(employee.id, "ABSENT")}
                />
              </td>
              <td>{statuses[employee.id] || "-"}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="save-button-container">
        <Button onClick={handleSave}  className="hover-effect" style={{ backgroundColor: 'green', borderColor: 'green', color: 'white',width:'80px'}}>
          Save
        </Button>
      </div>
      <div className="summary">
        <p>
          <strong>Total Employees:</strong> {summary.totalEmployees}
        </p>
        <p>
          <strong>Total number of Employees Present:</strong>{" "}
          {summary.presentCount}
        </p>
        <p>
          <strong>Total number of Employees Absent:</strong>{" "}
          {summary.absentCount}
        </p>
      </div>
      </div>
  );
};

export default EmployeeTable;
