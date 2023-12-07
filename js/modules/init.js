// Within the init.js file, use async / await to load the JSON data and return it back into the buildGrid() function.

async function fetchEmployees() {
    try {
      const response = await fetch('/data/employees.json');
      const users = await response.json();
      return users;
      } catch (e) {
      console.error(e.message);
    }
}

export {fetchEmployees};
