$(document).ready(function () {
  $("#table-kategori").DataTable({
    ajax: {
      method: "GET",
      url: "api/peminjaman",
      dataSrc: "",
    },
    columns: [
      {
        data: null,
        render: (data, type, row, meta) => {
          return meta.row + 1;
        },
        className: "text-center",
      },
      { data: "guest.name", className: "text-center" },
      {
        data: "pinjam",
        render: function (data) {
          // Mengonversi tanggal ke format YYYY-MM-DD
          return new Date(data).toISOString().split("T")[0];
        },
        className: "text-center",
      },
      {
        data: "kembali",
        render: function (data) {
          // Mengonversi tanggal ke format YYYY-MM-DD
          return new Date(data).toISOString().split("T")[0];
        },
        className: "text-center",
      },
      { data: "buku.judul" , className: "text-center" },
      { data: "status.status" },
    ],
  });
});
