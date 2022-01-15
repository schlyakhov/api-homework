const div = document.querySelector(".user-info");

let fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
  .then((Response) => {
    return Response.json();
  })
  .then((data) => {
    data.forEach((el, i) => {
      const li = document.createElement("li");
      li.classList.add("list-item");
      const ul = document.querySelector("ul");
      li.setAttribute("id", el.id);
      li.textContent = el.name;
      ul.append(li);
    });
  });
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("list-item")) {
    const url = "https://jsonplaceholder.typicode.com/users/" + e.target.id;
    const getInfo = fetch(url)
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        const info = data;
        const infoHTML = `
        <li>${info.name}</li>
          <li>${info.email}</li>
            <li>${info.phone}</li>
            <li>${info.website}</li>
      `;
        div.innerHTML = infoHTML;
      });
  }
});
