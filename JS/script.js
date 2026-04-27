document.getElementById("cv-button").addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "CV-Samuel-Fehrm.pdf";
  link.download = "CV-Samuel-Fehrm.pdf";
  link.type = "application/pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});