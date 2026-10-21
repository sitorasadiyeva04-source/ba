// Используем HTTPS-ссылку на ipapi.co вместо старой
fetch('https://ipapi.co/json/')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        // Заполняем текст (у ipapi.co названия полей чуть-чуть другие, но мы их подстроим)
        document.getElementById('ip').textContent = data.ip;
        document.getElementById('city').textContent = data.city;
        document.getElementById('country').textContent = data.country_name;
        document.getElementById('isp').textContent = data.org;

        // Вставляем карту по координатам (latitude и longitude)
        var mapUrl = 'https://www.google.com/maps?q=' + data.latitude + ',' + data.longitude + '&output=embed';
        document.getElementById('map').src = mapUrl;
    })
    .catch(function(error) {
        console.log('Ошибка при загрузке:', error);
    });

