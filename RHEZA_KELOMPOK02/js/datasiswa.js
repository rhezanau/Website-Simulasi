const siswaData = [
    { nisn: 12345, nama: "Ahmad Fikri", kelas: "XI PPLG 1", jurusan: "PPLG" },
    { nisn: 12346, nama: "Budi Santoso", kelas: "XI DKV 2", jurusan: "DKV" },
    { nisn: 12347, nama: "Citra Dewi", kelas: "X Akuntansi 1", jurusan: "Akuntansi" },
    { nisn: 12348, nama: "Dina Lestari", kelas: "XI PPLG 2", jurusan: "PPLG" },
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
        <td class="highlight">${siswa.nisn}</td>
        <td>${siswa.nama}</td>
        <td>${siswa.kelas.replace(/1$/, '<span class="highlight">1</span>')}</td>
        <td>${siswa.jurusan}</td>
      `;
      tbody.appendChild(tr);
    });
  }
  
  document.getElementById("filter").addEventListener("change", function () {
    tampilkanSiswa(this.value);
  });
  
  window.onload = () => tampilkanSiswa();
  