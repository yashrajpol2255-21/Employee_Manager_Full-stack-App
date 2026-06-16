import {useState,useRef} from "react";

function EmployeeForm ({ addEmployee })
{
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const nameInputRef = useRef(null);


  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !department) return;
    addEmployee(
      { name, department }
    );
    setName("");
    setDepartment("");
    nameInputRef.current.focus();

  }

 
  
  return (
    <form 
        className="form-card"
        onSubmit={handleSubmit}>
      <input
        ref={nameInputRef}
        type = "text"
        placeholder="Employee name"
        value={name}
        onChange={(e) => setName(e.target.value)} 
        />
      <input
        type="text"
        placeholder="Department Name"
        value={department}
        onChange = {(e) => setDepartment(e.target.value)}
      />
      <button type="submit">
        Add Employee</button>  
    </form>
  )
}
export default EmployeeForm;