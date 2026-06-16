function EmployeeList({
  employees,
  deleteEmployee
}) {

  return (
    <div className="employee-grid">

      {employees.map((employee) => (

        <div 
          className="employee-card"
          key={employee.id}>

          <h3>{employee.name}</h3>

          <p>{employee.department}</p>

          <button
            className="delete-btn"
            onClick={() =>
              deleteEmployee(employee.id)
            }
          >
            Delete
          </button>

        </div>

      ))}

    </div>
  );
}

export default EmployeeList;