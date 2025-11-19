document.addEventListener("DOMContentLoaded", function () {
    // Show current date on home page
    var dateSpan = document.getElementById("currentDate");
    if (dateSpan) {
        var today = new Date();
        dateSpan.textContent = today.toDateString();
    }

    // Enlarge one image on hover using JavaScript
    var zoomImg = document.getElementById("galleryZoom") || document.getElementById("heroImage");
    if (zoomImg) {
        zoomImg.addEventListener("mouseover", function () {
            zoomImg.style.transform = "scale(1.2)";
        });
        zoomImg.addEventListener("mouseout", function () {
            zoomImg.style.transform = "scale(1)";
        });
    }

    // Show thank-you message after form submission
    var form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Thank you! Your request has been sent to Diriyah Heritage Village.");
            form.reset();
        });
    }
});
