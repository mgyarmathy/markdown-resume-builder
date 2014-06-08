$(document).ready(function() {
    $.get('resume.html', function(data) {
        $('#resume .resume-markdown').html(data);
    });

    setTimeout(function() {
        window.print();
    }, 2000);
});