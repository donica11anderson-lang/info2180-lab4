document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("search-btn");
  const input = document.getElementById("query");
  const result = document.getElementById("result");

  button.addEventListener("click", () => {
    const query = input.value.trim();

    fetch("superheroes.php?query=" + encodeURIComponent(query))
      .then(response => response.text())
      .then(data => {
        result.innerHTML = data;
      })
      .catch(error => {
        console.error("Error:", error);
        result.innerHTML = "<p class='error'>Something went wrong.</p>";
      });
  });
}); 