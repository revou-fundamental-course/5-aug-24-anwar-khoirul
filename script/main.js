function hitungbmi() {
            var berat = $("#bmiWeight").val();
            var tinggi = $("#bmiHeight").val()/100;
            var umur = $("#bmiAge").val();
            if (umur < 18) {
                mscAlert("Informasi !", "Kalkulator hanya untuk 18 tahun ke atas ya kaa :)");
            } else {
                var bmi = berat / (tinggi * tinggi);
                document.getElementById("contenthasil").style.display = "block";
                document.getElementById("contentunderweight").style.display = "none";
                document.getElementById("contentoverweight").style.display = "none";
                document.getElementById("hasilBMI").innerHTML = bmi.toFixed(1).toString();
                if (bmi < 18.5) {
                    document.getElementById("hasilKualitas").innerHTML = "Berat Badan Kurang";
                    document.getElementById("hasilKet").innerHTML = "Anda kekurangan berat badan";
                    document.getElementById("saranBMI").innerHTML = "Anda berada dalam kategori kekurangan berat badan. <br /> Hubungi dokter lebih lanjut mengenai pola makan dan gizi yang baik untuk meningkatkan kesehatan.";
                    document.getElementById("kualitasBMI").innerHTML = "Hasil BMI < 18.5";
                    document.getElementById("contentunderweight").style.display = "block";
                } else if (bmi < 22.9) {
                    document.getElementById("hasilKualitas").innerHTML = "Normal";
                    document.getElementById("hasilKet").innerHTML = "Anda memiliki berat badan ideal.<br />Good job!!";
                    document.getElementById("saranBMI").innerHTML = "Anda berada dalam kategori berat badan yang normal. <br /> Tetap pertahankan berat badan Anda dan jaga berat badan Anda dengan mengatur keseimbangan antara pola makan dan aktivitas fisik Anda. ";
                    document.getElementById("kualitasBMI").innerHTML = "Hasil BMI diantara 18.5 dan 22.9";
                } else if (bmi < 25) {
                    document.getElementById("hasilKualitas").innerHTML = "Berat Badan Lebih";
                    document.getElementById("hasilKet").innerHTML = "Anda memiliki berat badan berlebih";
                    document.getElementById("saranBMI").innerHTML = "Anda berada dalam kategori overweight atau berat badan berlebih. <br /> Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga.  <br /> Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
                    document.getElementById("kualitasBMI").innerHTML = "Hasil BMI diantara 23 dan 25 ";
                    document.getElementById("contentoverweight").style.display = "block";
                } else {
                    document.getElementById("hasilKualitas").innerHTML = "Obesitas";
                    document.getElementById("hasilKet").innerHTML = "Anda berada dalam kategori obesitas";
                    document.getElementById("saranBMI").innerHTML = "Anda berada dalam kategori obesitas. <br /> Usahakan untuk menurunkan berat badan dan menerapkan pola hidup sehat dengan menjaga makan dan aktivitas fisik. <br /> Segera kunjungi dokter untuk dilakukan pemeriksaan kesehatan lanjutan untuk mengetahui risiko yang Anda miliki terkait berat badan Anda.";
                    document.getElementById("kualitasBMI").innerHTML = "Hasil BMI lebih dari 25";
                    document.getElementById("contentoverweight").style.display = "block";
                }
            }
        }

        function clearbmi() {
            $("#frmbmi").trigger("reset");
            document.getElementById("contenthasil").style.display = "none";
            document.getElementById("contentoverweight").style.display = "none";
            document.getElementById("contentunderweight").style.display = "none";
            document.getElementById("hasilKualitas").innerHTML = "";
            document.getElementById("hasilKet").innerHTML = "";
            document.getElementById("saranBMI").innerHTML = "";
            document.getElementById("kualitasBMI").innerHTML = "";
            document.getElementById("hasilBMI").innerHTML = "";
            window.location.href = '#datapengguna';
        }
