function func() {
    $.ajax({
        url: '/login/login', type: 'post',
        data: { name: Math.random(), func: 'send' },
        success: function (data, status) {
            console.log(JSON.stringify(data));
        },
        error: function (data, status) { }
    });
}
$('#goNext').click(function () {
    location.href = '/404/404';
});