function calculateBMI() {
    // Mendapatkan nilai berat badan dari input dengan id "weight" dan mengonversi menjadi angka (float).
    var weight = parseFloat(document.getElementById("weight").value);
    
    // Mendapatkan nilai tinggi badan dari input dengan id "height" dan mengonversi menjadi angka (float).
    var height = parseFloat(document.getElementById("height").value);

    // Memeriksa apakah berat atau tinggi badan tidak valid (tidak berupa angka atau bernilai negatif atau nol).
    if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
        // Jika data tidak valid, tampilkan pesan kesalahan.
        alert("Masukkan berat badan dan tinggi badan yang valid.");
        return; // Keluar dari fungsi.
    }

    // Menghitung BMI dengan rumus: berat badan / (tinggi badan dalam meter)^2
    var bmi = weight / Math.pow(height / 100, 2);

    // Mendapatkan elemen dengan id "result" untuk menampilkan hasil BMI.
    var result = document.getElementById("result");

    // Menentukan status BMI berdasarkan nilai BMI yang dihitung.
    if (bmi < 18.5) {
        result.textContent = "BMI Anda: " + bmi.toFixed(2) + " (Underweight)";
    } else if (bmi >= 18.5 && bmi < 25) {
        result.textContent = "BMI Anda: " + bmi.toFixed(2) + " (Normal weight)";
    } else if (bmi >= 25 && bmi < 30) {
        result.textContent = "BMI Anda: " + bmi.toFixed(2) + " (Overweight)";
    } else {
        result.textContent = "BMI Anda: " + bmi.toFixed(2) + " (Obesity)";
    }
}
