// Hesap makinesinin sonuçlarının görüntüleneceği giriş kutusunu seçer
let input = document.getElementById('inputBox');

// Sayfadaki tüm düğmeleri seçer
let buttons = document.querySelectorAll('button');

// Kullanıcının girdiği ifadeleri tutmak için boş bir string
let string = "";

// Düğme NodeList'ini bir diziye dönüştürür
let arr = Array.from(buttons);

// Her bir düğme için bir döngü oluşturur
arr.forEach(button => {
    // Her bir düğmeye tıklama olayı için bir dinleyici ekler
    button.addEventListener('click', (a) => {
        // Eğer tıklanan düğmenin içeriği '=' ise
        if (a.target.innerHTML == '=') {
            // String içindeki matematiksel ifadeyi değerlendirir
            string = eval(string);
            // Sonucu giriş kutusuna yazar
            input.value = string;
        }
        // Eğer tıklanan düğmenin içeriği 'AC' ise
        else if (a.target.innerHTML == 'AC') {
            // String'i sıfırlar
            string = "";
            // Giriş kutusunu temizler
            input.value = string;
        }
        // Eğer tıklanan düğmenin içeriği 'DEL' ise
        else if (a.target.innerHTML == 'DEL') {
            // String'in son karakterini kaldırır
            string = string.substring(0, string.length - 1);
            // Güncellenmiş string'i giriş kutusuna yazar
            input.value = string;
        }
        // Diğer tüm düğmeler (sayılar ve operatörler) için
        else {
            // Düğmenin içeriğini string'e ekler
            string += a.target.innerHTML;
            // Güncellenmiş string'i giriş kutusuna yazar
            input.value = string;
        }
    })
})
