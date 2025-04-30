const guruData = [
    { nip: 1001, nama: "Pak Ahmad", mapel: "PPLG", kelas: "XI PPLG 1" },
    { nip: 1002, nama: "Bu Sinta", mapel: "Matematika", kelas: "XI DKV 1" },
    { nip: 1003, nama: "Pak Budi", mapel: "PPLG", kelas: "X PPLG 2" },
    { nip: 1004, nama: "Bu Rani", mapel: "DKV", kelas: "XI DKV 2" },
  ];
  
  function tampilkanGuru(mapelFilter = "all") {
    const tbody = document.getElementById("guru-body");
    tbody.innerHTML = "";
  
    const hasil = guruData.filter(guru =>
      mapelFilter === "all" || guru.mapel === mapelFilter
    );
  
    hasil.forEach(guru => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="highlight">${guru.nip}</td>
        <td>${guru.nama}</td>
        <td>${guru.mapel}</td>
        <td>${guru.kelas}</td>
      `;
      tbody.appendChild(tr);
    });
  }
  
  document.getElementById("filter").addEventListener("change", function () {
    tampilkanGuru(this.value);
  });
  
  window.onload = () => tampilkanGuru(); // tampilkan semua saat pertama dibuka
  