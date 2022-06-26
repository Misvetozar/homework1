let userName = prompt("Логин");

if (userName == 'admin') {

    let pass = prompt('Пароль');

    if (pass == 'qWeRty123') {
        alert('Доступ предоставлен');
    } else if (pass == '' || pass == null) {
        alert('Отмена');
    } else {
        alert('Ошибка');
    }


} else if (userName == '' || userName == null) {
    alert('Отмена');
} else {
    alert("Не в этот раз");
}