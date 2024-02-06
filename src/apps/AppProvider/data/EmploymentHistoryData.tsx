export const emp_data = `
export const Employment_History_Data = [
  {
    id: 1,
    company_name: "TrustArc",
    position: "Quality Assurance Intern",
    date: 11 / 10 / 2000 - 10 / 20 / 2000,
  },
  {
    id: 2,
    company_name: "Timeriver Design",
    position: "Graphic Designer",
    date: 11 / 10 / 2000 - 10 / 20 / 2000,
  },
  {
    id: 3,
    company_name: "Proweaver",
    position: "Web Designer",
    date: 11 / 10 / 2000 - 10 / 20 / 2000,
  },
  {
    id: 4,
    company_name: "DNA Micro",
    position: "UI Developer",
    date: 11 / 10 / 2000 - 10 / 20 / 2000,
  },
];

`;

export const someCSSCodeExample = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  *::-webkit-scrollbar {
    display: none;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  [type=reset], [type=submit], button, html [type=button] {
      -webkit-appearance: button;
  }

  [type=button]{
    -webkit-appearance: none;
  }

  .full-width {
    width: 100%;
  }
  .full-height {
    height: 100%;
  }
  .full-size {
    width: 100%;
    height: 100%;
  }

  .ql-editor a {
    color: rgba(255, 255, 255, 0.20);
    cursor: pointer;
    padding-left: 8px;
    padding-right: 8px;
    text-decoration: none;
  }
  .ql-editor ul, .ql-editor li, .ql-editor ol {
    margin-left: 16px;
  }
  .ql-editor object {
    color: #d32f2f;
  }
  .ql-editor blockquote {
    border-left: 3px solid rgba(255, 255, 255, 0.12);
    padding-top: 8px;
    padding-left: 24px;
    padding-right: 16px;
    padding-bottom: 8px;
  }
  .ql-editor .ql-align-center {
    text-align: center;
  }
  .ql-editor .ql-align-justify {
    text-align: justify;
  }
  .ql-editor .ql-align-right {
    text-align: right;
  }
  .ql-editor a:hover {
    text-decoration: underline;
  }
`;

export const sampleJs = `
  // function add() {
//   let username = document.getElementById("user_name").value;
//   let firstname = document.getElementById("first_name").value;
//   let lastname = document.getElementById("last_name").value;
//   var error = document.getElementById("error");

//   console.log({ username, firstname, lastname }, "hhhhhhhhhh");

//   var new_arr = { username: username, firstname: username, lastname: lastname };

//   Object.entries(new_arr).forEach((entry) => {
//     if (!username || !firstname || !lastname) {
//       error.style.display = "flex";
//       return null;
//     }
//     error.style.display = "none";
//     const [key, value] = entry;
//     var ul = document.getElementById("new_list");
//     var li = document.createElement("li");
//     li.innerHTML = key + ": " + value;
//     li.setAttribute("id", key);
//     ul.appendChild(li);
//   });

//   username.value = " ";
//   console.log(username, "username empty");
// }

const btn = document.getElementById("btn");
const username = document.getElementById("user_name");
const firstname = document.getElementById("first_name");
const lastname = document.getElementById("last_name");
const error = document.getElementById("error");
const divList = document.getElementById("ul_list");

btn.addEventListener("click", function handleClick(event) {
  // 👇️ if you are submitting a form (prevents page reload)
  event.preventDefault();

  // Send value to server
  const new_arr = {
    username: username.value,
    firstname: firstname.value,
    lastname: lastname.value,
  };

  const ul_list = iterate(new_arr);

  divList.appendChild(ul_list);

  // 👇️ clear input field
  username.value = "";
  firstname.value = "";
  lastname.value = "";
});

function iterate(new_arr) {
  var ul = document.createElement("ul");
  Object.entries(new_arr).forEach((entry) => {
    if (!username.value || !firstname.value || !lastname.value) {
      error.style.display = "flex";
      return null;
    }
    error.style.display = "none";
    const [key, value] = entry;
    var li = document.createElement("li");
    li.innerHTML = key + ": " + value;
    li.setAttribute("id", key);
    ul.appendChild(li);
  });
  return ul;
}

`;

export const sampleHtml = `
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="style.css" />
  </head>
  <style>
    .error {
      color: red;
      display: none;
    }
  </style>
  <body>
    <h2>X State Practice</h2>
    <p id="demo">A Paragraph.</p>
    <div class="">
      <input type="text" id="user_name" placeholder="Username" />
      <input type="text" id="first_name" placeholder="First Name" />
      <input type="text" id="last_name" placeholder="Last Name" />
      <button id="btn" type="submit" onclick="add()">Add</button>
    </div>
    <div class="error" id="error">Error...</div>
    <div class="ul_list" id="ul_list">
      <ul>
        <li>Ivy</li>
        <li>Quillosa</li>
        <li>iquillosa</li>
      </ul>
      <ul>
        <li>Adrian</li>
        <li>Sumagang</li>
        <li>asumagang</li>
      </ul>
      <ul id="new_list"></ul>
    </div>

    <script src="index.js"></script>
  </body>
</html>


`;
