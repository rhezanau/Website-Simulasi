const siswaData = [
    { nama: "PPLG", jurusan: "120" },
    { nama: "DKV", jurusan: "120" },
  ];
  
  function tampilkanSiswa(jurusanFilter = "all") {
    const tbody = document.getElementById("siswa-body");
    tbody.innerHTML = "";
  
    const hasil = siswaData.filter(siswa =>
      jurusanFilter === "all" || siswa.jurusan === jurusanFilter
    );
  
    hasil.forEach(siswa => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${siswa.nama}</td>
        <td>${siswa.jurusan}</td>
      `;
      tbody.appendChild(tr);
    });
  }
  
  document.getElementById("filter").addEventListener("change", function () {
    tampilkanSiswa(this.value);
  });
  
  window.onload = () => tampilkanSiswa();
  