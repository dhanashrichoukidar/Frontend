const Request = fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((data) => {
    const table = document.querySelector(".table tbody");
    data.map((ele) => {
      console.log(ele);
      table.innerHTML += `
        <tr>
        <td>${ele.userId}</td>
        <td>${ele.id}</td>
        <td>${ele.title}</td>
        <td>${ele.completed}</td>
        </tr>
        `;
    });
  });
