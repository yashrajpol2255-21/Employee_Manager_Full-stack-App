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
  };

  return (
    <div className="container">
      <h1>
        Employee Manager
      </h1>

      <EmployeeForm
        addEmployee={addEmployee}
        />
      <EmployeeList
        employees={employees}
        deleteEmployee={deleteEmployee}
        />

    </div>
  );
}
export default App;