function calculateInterpolatedTValue(t15, t20, percent) {
    // Memeriksa apakah percent merupakan bilangan bulat
    if (!Number.isInteger(percent)) {
      return "Persentase yang diberikan harus berupa angka integer.";
    }
  
    // Menghitung selisih persentase
    var percentDiff = percent - 15;
  
    // Menghitung selisih nilai t
    var tDiff = t20 - t15;
  
    // Menghitung nilai interpolasi
    var interpolatedTValue = t15 + (percentDiff / 5) * tDiff;
  
    return interpolatedTValue;
  }
  
  // Contoh penggunaan dengan data yang diberikan
  var t15Value = 2.113;
  var t20Value = 3.225;
  var t18Percent = "18";
  
  var interpolatedT18Value = calculateInterpolatedTValue(t15Value, t20Value, t18Percent);
  
  console.log(interpolatedT18Value);
  