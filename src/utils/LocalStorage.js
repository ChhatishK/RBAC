
export const employees = [
  {
      "id": 1,
      "firstname": "Aarav",
      "email": "aarav@example.com",
      "password": "123",
      "tasks": [
          {
              "title": "Design Logo",
              "description": "Create a new logo for the project.",
              "date": "2024-10-01",
              "categories": "Design",
              "active": false,
              "new": false,
              "completed": false,
              "failed": false,
              "ignored": true
          },
          {
              "title": "Develop Homepage",
              "description": "Build the homepage layout using HTML and CSS.",
              "date": "2024-10-05",
              "categories": "Development",
              "active": true,
              "new": true,
              "completed": false,
              "failed": false,
              "ignored": false
          },
          {
              "title": "Update Documentation",
              "description": "Revise the user documentation for clarity.",
              "date": "2024-10-10",
              "categories": "Development",
              "active": false,
              "new": false,
              "completed": true,
              "failed": false,
              "ignored": false
          }
      ]
  },
  {
      "id": 2,
      "firstname": "Vivaan",
      "email": "vivaan@example.com",
      "password": "123",
      "tasks": [
          {
              "title": "Create Wireframes",
              "description": "Design wireframes for the new application.",
              "date": "2024-10-02",
              "categories": "Design",
              "active": true,
              "new": true,
              "completed": false,
              "failed": false,
              "ignored": false
          },
          {
              "title": "API Integration",
              "description": "Integrate the new API for user authentication.",
              "date": "2024-10-07",
              "categories": "Development",
              "active": true,
              "new": true,
              "completed": false,
              "failed": false,
              "ignored": false
          },
          {
              "title": "Code Review",
              "description": "Review code for the last sprint.",
              "date": "2024-10-12",
              "categories": "Development",
              "active": false,
              "new": false,
              "completed": true,
              "failed": false,
              "ignored": false
          }
      ]
  },
  {
      "id": 3,
      "firstname": "Reyansh",
      "email": "reyansh@example.com",
      "password": "123",
      "tasks": [
          {
              "title": "User Testing",
              "description": "Conduct user testing for the new features.",
              "date": "2024-10-03",
              "categories": "Design",
              "active": true,
              "new": true,
              "completed": false,
              "failed": false,
              "ignored": false
          },
          {
              "title": "Bug Fixing",
              "description": "Fix bugs reported during the testing phase.",
              "date": "2024-10-08",
              "categories": "Development",
              "active": true,
              "new": false,
              "completed": false,
              "failed": false,
              "ignored": false
          },
          {
              "title": "Deploy Application",
              "description": "Deploy the application to the production server.",
              "date": "2024-10-15",
              "categories": "Development",
              "active": false,
              "new": false,
              "completed": false,
              "failed": true,
              "ignored": false
          }
      ]
  },
  {
      "id": 4,
      "firstname": "Krishna",
      "email": "krishna@example.com",
      "password": "123",
      "tasks": [
          {
              "title": "Create Marketing Plan",
              "description": "Develop a marketing plan for the new product launch.",
              "date": "2024-10-04",
              "categories": "Design",
              "active": true,
              "new": false,
              "completed": false,
              "failed": false,
              "ignored": false
          },
          {
              "title": "Website Update",
              "description": "Update the website with new content.",
              "date": "2024-10-09",
              "categories": "Development",
              "active": false,
              "new": false,
              "completed": true,
              "failed": false,
              "ignored": false
          },
          {
              "title": "Feedback Collection",
              "description": "Collect feedback from users after the launch.",
              "date": "2024-10-14",
              "categories": "Design",
              "active": false,
              "new": true,
              "completed": false,
              "failed": false,
              "ignored": false
          }
      ]
  },
  {
      "id": 5,
      "firstname": "Anaya",
      "email": "anaya@example.com",
      "password": "123",
      "tasks": [
          {
              "title": "Research Competitors",
              "description": "Analyze competitor products and strategies.",
              "date": "2024-10-06",
              "categories": "Design",
              "active": true,
              "new": true,
              "completed": false,
              "failed": false,
              "ignored": false
          },
          {
              "title": "Mobile App Testing",
              "description": "Test the mobile app for any issues.",
              "date": "2024-10-11",
              "categories": "Development",
              "active": true,
              "new": false,
              "completed": false,
              "failed": false,
              "ignored": false
          },
          {
              "title": "Finalize Reports",
              "description": "Prepare final reports for the project.",
              "date": "2024-10-16",
              "categories": "Development",
              "active": false,
              "new": false,
              "completed": true,
              "failed": false,
              "ignored": false,
          }
      ]
  }
];


const updateCount = (employees) => {
  employees.map(employee => {
    const taskCounts = {
        active: 0,
        completed: 0,
        new: 0, 
        failed: 0,
        ignored: 0
    };
  
    employee.tasks.forEach(task => {
        if (task.active) taskCounts.active++;
        else if (task.completed) taskCounts.completed++;
        else if (task.new) taskCounts.new++;
        else if (task.failed) taskCounts.failed++;
        else if (task.ignored) taskCounts.ignored++;
    });

    employee['taskCount'] = taskCounts;
  });
}

const admin = 
  {
    "id": 1,
    "firstname" : "Chhatish",
    "email": "admin@example.com",
    "password": "123",
  }

localStorage.setItem('employee', JSON.stringify(employees))
export const setLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employee'))
  updateCount(employees)
  localStorage.setItem('employee', JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin))
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employee'))
  const admin = JSON.parse(localStorage.getItem('admin'))

  return {employees, admin}
}
