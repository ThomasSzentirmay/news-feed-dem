function togglePasswordVisibility() {
  const passwordField = document.getElementById("password");
  if (passwordField.type === "password") {
    passwordField.type = "text";
  } else {
    passwordField.type = "password";
  }
}


// const blogCommentInput = document.getElementById('blog-comment');

// blogCommentInput.addEventListener('input', function () {
//   this.style.height = 'auto';
//   this.style.height = `${this.scrollHeight}px`; 
// });