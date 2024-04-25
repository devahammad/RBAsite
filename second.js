$("#submit-form").submit((e) => {
    e.preventDefault();
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbwW4MXsRvIqU1K5Ws4vxcpEfPMRAI9Qy1o3kVQiImxj8VVY2K2nfYI29blK9OZy2dg/exec",
        data: $("#submit-form").serialize(),
        method: "post",
        success: function(response) {
            $("#submit-form")[0].reset();
        },
        error: function(err) {
            alert("Something Error");
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const formParent = document.querySelector('.parentSupport');
    const thankYouDiv = document.querySelector('.thanku');

    const form = formParent.querySelector('.supportForm');
    const formDiv = formParent.querySelector('.formDiv');

    form.addEventListener('submit', function (event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Assuming the form is successfully submitted
        // Change the visibility and display properties of the elements
        formDiv.style.visibility = 'hidden';
        formDiv.style.display = 'none';

        thankYouDiv.style.visibility = 'visible';
        thankYouDiv.style.display = 'flex';
    });
});
