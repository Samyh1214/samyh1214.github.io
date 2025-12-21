document.getElementById("cv-button").addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "https://drive.google.com/file/d/1-x8mfiRor7w8NNTBqSk6nKZHo74jcFGE/view?usp=sharing";
  link.download = "CV-Samuel-Fehrm.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});