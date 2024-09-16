import React, { useState } from "react";
import { Table, Button, Form } from "react-bootstrap";
import "./EmployeeTable.css";

const EmployeeTable = () => {
  const [attendance, setAttendance] = useState({
    1: "",
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
  const [searchTerm, setSearchTerm] = useState(""); // Search term state

  const employees = [
    { id: 1, name: "Nabeel", date: "13 September", Role: "Front end developer" },
    { id: 2, name: "Akram", date: "13 September", Role: "Mern Stack Developer" },
    { id: 3, name: "Ateeb", date: "13 September", Role: "Python Developer" },
    { id: 4, name: "Tabish", date: "13 September", Role: "Python Developer" },
    { id: 5, name: "Haider Ali", date: "13 September", Role: "Shopify Developer" },
    { id: 6, name: "Shakeel", date: "13 September", Role: "Full Stack Developer" },
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

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.Role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.id.toString().includes(searchTerm)
  );

  return (
    <div className="tables table-responsive" style={{ overflowX: "hidden", border: "2px solid black", backgroundColor: "#F0EFEF" }}>
      <Form className="search-container">
        <Form.Control 
          type="text"
          placeholder="Search Employee"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term
          style={{ width: "300px", marginBottom: "10px", marginRight: "10px",borderRadius:"16px" }}
        />
      </Form>
      <Table bordered hover className="align-middle" style={{ overflowX: "hidden", border: "2px solid black" }}>
        <thead style={{ overflowX: "hidden", backgroundColor: "#F0EFEF" }}>
          <tr>
            <th>ID</th>
            <th>Employee</th>
            <th>Date</th>
            <th>Present</th>
            <th>Absent</th>
            <th>Status</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody style={{ overflowX: "hidden", border: "2px solid black", backgroundColor: "#F0EFEF" }}>
          {filteredEmployees.length > 0 ? (
            filteredEmployees.map((employee) => (
              <tr key={employee.id} style={{ backgroundColor: "#F0EFEF" }}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.date}</td>
                <td>
                  <input
                    type="radio"
                    name={`attendance-${employee.id}`}
                    checked={attendance[employee.id] === "PRESENT"}
                    onChange={() => handleAttendanceChange(employee.id, "PRESENT")}
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
                <td>{employee.Role}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" style={{ textAlign: "center" }}>
                No employees found
              </td>
            </tr>
          )}
        </tbody>
      </Table>
      <div className="save-button-container">
        <Button
          onClick={handleSave}
          className="hover-effect"
          style={{ backgroundColor: "green", borderColor: "green", color: "white", width: "80px" }}
        >
          Save
        </Button>
      </div>
      <div className="summary">
        <p>
          <strong>Total Employees:</strong> {summary.totalEmployees}
        </p>
        <p>
          <strong>Total number of Employees Present:</strong> {summary.presentCount}
        </p>
        <p>
          <strong>Total number of Employees Absent:</strong> {summary.absentCount}
        </p>
      </div>
    </div>
  );
};

export default EmployeeTable;
