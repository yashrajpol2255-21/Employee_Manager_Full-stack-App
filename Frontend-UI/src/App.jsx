import { useEffect , useState } from 'react'

import EmployeeForm from './components/EmployeeForm'
import EmployeeList from './components/EmployeeList'
import "./App.css";

function App(){
  const [employees , setEmployees] = useState([]);

  useEffect(() => {

    fetch(
      "https://localhost:7252/api/employees"
      )
      .then((res) => res.json()
    )
      .then((data) => setEmployees(data)
    )
    .catch((error) => console.error(error)
  );
  },[]);


   const addEmployee = async (employee) => {

    const response = await fetch(
    "https://localhost:7252/api/employees",
    {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(employee)
    }
    );
    const newEmployee = await response.json();
    setEmployees([...employees,newEmployee]);
  };

  const deleteEmployee = async (id) => {
    await fetch(
      `https://localhost:7252/api/employees/${id}`,
      {
        method: "Delete"

      }
    );
    setEmployees(employees.filter(
      emp => emp.id !==id
    ));
  }
  const updateEmployee =
async (
  id,
  name,
  department
) => {

  const response =
    await fetch(
      `https://localhost:7252/api/employees/${id}`,
      {
        method: "PUT",

        headers: {
          "Content-Type":
            "application/json"
        },

        body: JSON.stringify({
          id,
          name,
          department
        })
      }
 );
  
  const updatedEmployee =
     await response.json();

  setEmployees(
    employees.map(emp =>
      emp.id === id
      ? updatedEmployee
      : emp
    )
  );
};

  ;
    

  return (
    <div className="container">
      <h1 className="title">
           Employee Manager
      </h1>

      <p className="subtitle">
            Full Stack Employee Management Dashboard
      </p>

      <div className="employee-count">
        <p>Total Employees</p>
        <h2>{employees.length}</h2>
      </div>

      <EmployeeForm
        addEmployee={addEmployee}
        />
      <EmployeeList
        employees={employees}
        deleteEmployee={deleteEmployee}
        updateEmployee={updateEmployee}
        />
    </div>
  )
}
        
export default App;