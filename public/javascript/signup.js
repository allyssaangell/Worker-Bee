async function signupFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#inputPassword").value.trim();

  console.log(email)
  console.log(password)

  if (email && password) {
    const response = await fetch("/api/user", {
      method: "post",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector("#signup-form")
  .addEventListener("submit", signupFormHandler);
