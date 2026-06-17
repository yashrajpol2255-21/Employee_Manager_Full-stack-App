import { useState } from "react";

function EmployeeList({
  employees,
  deleteEmployee,
  updateEmployee
}) {

  const [editingId, setEditingId] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [editedDepartment, setEditedDepartment] = useState("");

  return (
    <div className="employee-grid">

      {employees.map((employee) => (

        <div
          className="employee-card"
          key={employee.id}
        >

          {editingId === employee.id ? (

            <div className="edit-form">

              <div className="edit-title">
                Editing Employee
              </div>

              <label className="edit-label">
                Employee Name
              </label>

              <input
                type="text"
                value={editedName}
                onChange={(e) =>
                  setEditedName(e.target.value)
                }
              />

              <label className="edit-label">
                Department
              </label>

              <input
                type="text"
                value={editedDepartment}
                onChange={(e) =>
                  setEditedDepartment(e.target.value)
                }
              />

              <div className="card-buttons">

                <button
                  className="save-btn"
                  onClick={async () => {

                    await updateEmployee(
                      employee.id,
                      editedName,
                      editedDepartment
                    );

                    setEditingId(null);

                  }}
                >
                  Save
                </button>

                <button
                  className="cancel-btn"
                  onClick={() =>
                    setEditingId(null)
                  }
                >
                  Cancel
                </button>

              </div>

            </div>

          ) : (

            <>

              <h3>👤 {employee.name}</h3>

              <p>💼 {employee.department}</p>

              <div className="card-buttons">

                <button
                  className="edit-btn"
                  onClick={() => {

                    setEditingId(employee.id);
                    setEditedName(employee.name);
                    setEditedDepartment(
                      employee.department
                    );

                  }}
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() =>
                    deleteEmployee(employee.id)
                  }
                >
                  Delete
                </button>

              </div>

            </>

          )}

        </div>

      ))}

    </div>
  );
}

export default EmployeeList;