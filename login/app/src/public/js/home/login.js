"use strict"

const id = document.querySelector("#userid"),
  pw = document.querySelector("#userpw"),
  loginbtn = document.querySelector("#btn");

loginbtn.addEventListener("click", login);

function login()
{
  const req = 
  {
    id : id.value,
    pw : pw.value,
  };
  
  alert(JSON.stringify(req));

  fatch("/login", 
  {
    method: "post",
    headers: 
    {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  });
}