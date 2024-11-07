// register.js

document
  .getElementById("registerForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("YOUR_REGISTER_API_URL", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        // Handle successful registration, e.g., redirect to login
        alert("Registration successful! Please log in.");
        window.location.href = "login.html"; // Redirect to login page
      } else {
        const errorData = await response.json();
        alert(`Registration failed: ${errorData.message}`);
      }
    } catch (error) {
      alert("An error occurred during registration. Please try again.");
      console.error("Registration error:", error);
    }
  });

// login.js

document
  .getElementById("loginForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    try {
      const response = await fetch("YOUR_LOGIN_API_URL", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        // Handle successful login, e.g., store token and redirect
        alert("Login successful!");
        // Example: store token in local storage
        localStorage.setItem("token", data.token);
        window.location.href = "dashboard.html"; // Redirect to dashboard or homepage
      } else {
        const errorData = await response.json();
        alert(`Login failed: ${errorData.message}`);
      }
    } catch (error) {
      alert("An error occurred during login. Please try again.");
      console.error("Login error:", error);
    }
  });
