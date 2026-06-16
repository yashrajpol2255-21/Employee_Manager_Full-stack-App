using Microsoft.AspNetCore.Mvc;
using EmployeeManagerApp.Data;
using EmployeeManagerApp.Models;
namespace EmployeeManagerApp.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class EmployeesController : ControllerBase
    {
        private readonly AppDbContext _context;
        public EmployeesController(AppDbContext context)
        {
            _context = context;
        }


        [HttpGet]
        public IActionResult GetEmployees()
        {
            return Ok(_context.Employees.ToList());
        }
        [HttpPost]
        public IActionResult AddEmployee(Employee employee)
        {
            _context.Employees.Add(employee);
            _context.SaveChanges();
            return Ok(employee);
        }


        [HttpGet("{id}")]
        public IActionResult GetEmployeeById(int id)
        {
            var employee = _context.Employees.Find(id);

            if (employee == null)
            {
                return NotFound();
            }

            return Ok(employee);
        }


        [HttpPut("{id}")]
        public IActionResult UpdateEmployee(
             int id,
             Employee updatedEmployee
        )
        {
            var employee =
                _context.Employees.Find(id);

            if (employee == null)
            {
                return NotFound();
            }

            employee.Name =
                updatedEmployee.Name;

            employee.Department =
                updatedEmployee.Department;

            _context.SaveChanges();

            return Ok(employee);
        }


        [HttpDelete("{id}")]
        public IActionResult DeleteEmployee(int id)
        {
            var employee =
                _context.Employees.Find(id);

            if (employee == null)
            {
                return NotFound();
            }

            _context.Employees.Remove(employee);

            _context.SaveChanges();

            return NoContent();
        }
    }
}
