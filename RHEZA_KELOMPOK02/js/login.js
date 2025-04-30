document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const role = form.role.value;
  
      if (role === "admin") {
        window.location.href = "../html/admin.html";
      } else if (role === "guru") {
        window.location.href = "../html/guru.html";
      } else if (role === "siswa") {
        window.location.href = "../html/siswa.html";
      } else {
        alert("Silakan pilih role terlebih dahulu.");
      }
    });
  });
  