const data = {
    "provinsi": "abc",
    "nilai-project": "4745.6",
    "kabupaten": [
      {
        "nama": "kab1",
        "nilai-project": "1828",
        "kecamatan": [
          {
            "nama": "kec1",
            "nilai-project": "290",
            "desa": [
              {
                "nama": "desa1",
                "nilai-project": 120
              },
              {
                "nama": "desa2",
                "nilai-project": 70
              },
              {
                "nama": "desa3",
                "nilai-project": 100
              }
            ]
          },
          {
            "nama": "kec2",
            "nilai-project": "368",
            "desa": [
              {
                "nama": "desa4",
                "nilai-project": 90
              },
              {
                "nama": "desa5",
                "nilai-project": 78
              },
              {
                "nama": "desa6",
                "nilai-project": 200
              }
            ]
          },
          {
            "nama": "kec3",
            "nilai-project": "1170",
            "desa": [
              {
                "nama": "desa7",
                "nilai-project": 300
              },
              {
                "nama": "desa8",
                "nilai-project": 70
              },
              {
                "nama": "desa9",
                "nilai-project": 800
              }
            ]
          }
        ]
      },
      {
        "nama": "kab2",
        "nilai-project": "2917.6",
        "kecamatan": [
          {
            "nama": "kec4",
            "nilai-project": "1037.8",
            "desa": [
              {
                "nama": "desa10",
                "nilai-project": 677
              },
              {
                "nama": "desa11",
                "nilai-project": 70.8
              },
              {
                "nama": "desa12",
                "nilai-project": 290
              }
            ]
          },
          {
            "nama": "kec5",
            "nilai-project": "1300",
            "desa": [
              {
                "nama": "desa13",
                "nilai-project": 380
              },
              {
                "nama": "desa14",
                "nilai-project": 120
              },
              {
                "nama": "desa15",
                "nilai-project": 800
              }
            ]
          },
          {
            "nama": "kec6",
            "nilai-project": "579.8",
            "desa": [
              {
                "nama": "desa16",
                "nilai-project": 300
              },
              {
                "nama": "desa17",
                "nilai-project": 80
              },
              {
                "nama": "desa18",
                "nilai-project": 199.8
              }
            ]
          }
        ]
      }
    ]
  };
  
  // Fungsi untuk menghitung total nilai proyek di kabupaten "kab2"
  function calculateTotalProjectValueKab2(data) {
    let total = 0;
    const kabupatenKab2 = data.kabupaten.find((kabupaten) => kabupaten.nama === "kab2");
  
    if (kabupatenKab2) {
      kabupatenKab2.kecamatan.forEach((kecamatan) => {
        kecamatan.desa.forEach((desa) => {
          total += desa["nilai-project"];
        });
      });
    }
  
    return total;
  }
  
  // Panggil fungsi untuk menghitung total nilai proyek di kabupaten "kab2"
  const totalProjectValueKab2 = calculateTotalProjectValueKab2(data);
  console.log("Total nilai proyek di kabupaten kab2:", totalProjectValueKab2);
  