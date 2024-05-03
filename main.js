// Function to set opacity to 1 for the Lite option and change background color of body to green
function setLiteOpacity() {
    document.querySelectorAll(".mynav button").forEach(function(btn) {
        if (btn.innerText === "Lite") {
            btn.style.opacity = "1";
        } else {
            btn.style.opacity = "0.50";
        }
    });
    document.querySelector(".pckInfo1").style.display = "block";
    document.querySelector(".pckInfo2").style.display = "none";
    document.querySelector(".pckInfo3").style.display = "none";

    // Move the target behind Lite
    const liteBtn = document.querySelector(".mynav button:nth-child(1)");
    const width = liteBtn.getBoundingClientRect().width;
    const height = liteBtn.getBoundingClientRect().height;
    const left = liteBtn.getBoundingClientRect().left + window.scrollX;
    const top = liteBtn.getBoundingClientRect().top + window.scrollY;
    const target = document.querySelector(".target");
    target.style.width = `${width}px`;
    target.style.height = `${height}px`;
    target.style. left = `${left}px`;
    target.style.top = `${top}px`;
    target.style.transform = "none";
}

// Function to set opacity to 1 for the Standard option and change background color of body to red
function setStandardOpacity() {
    document.querySelectorAll(".mynav button").forEach(function(btn) {
        if (btn.innerText === "Standard") {
            btn.style.opacity = "1";
        } else {
            btn.style.opacity = "0.50";
        }
    });
    document.querySelector(".pckInfo1").style.display = "none";
    document.querySelector(".pckInfo2").style.display = "block";
    document.querySelector(".pckInfo3").style.display = "none";

    // Move the target behind Standard
    const standardBtn = document.querySelector(".mynav button:nth-child(2)");
    const width = standardBtn.getBoundingClientRect().width;
    const height = standardBtn.getBoundingClientRect().height;
    const left = standardBtn.getBoundingClientRect().left + window.scrollX;
    const top = standardBtn.getBoundingClientRect().top + window.scrollY;
    const target = document.querySelector(".target");
    target.style.width = `${width}px`;
    target.style.height = `${height}px`;
    target.style.left = `${left}px`;
    target.style.top = `${top}px`;
    target.style.transform = "none";
}

// Function to set opacity to 1 for the Premium option and change background color of body to blue
function setPremiumOpacity() {
    document.querySelectorAll(".mynav button").forEach(function(btn) {
        if (btn.innerText === "Premium") {
            btn.style.opacity = "1";
        } else {
            btn.style.opacity = "0.50";
        }
    });
    document.querySelector(".pckInfo1").style.display = "none";
    document.querySelector(".pckInfo2").style.display = "none";
    document.querySelector(".pckInfo3").style.display = "block";

    // Move the target behind Premium
    const premiumBtn = document.querySelector(".mynav button:nth-child(3)");
    const width = premiumBtn.getBoundingClientRect().width;
    const height = premiumBtn.getBoundingClientRect().height;
    const left = premiumBtn.getBoundingClientRect().left + window.scrollX;
    const top = premiumBtn.getBoundingClientRect().top + window.scrollY;
    const target = document.querySelector(".target");
    target.style.width = `${width}px`;
    target.style.height = `${height}px`;
    target.style.left = `${left}px`;
    target.style.top = `${top}px`;
    target.style.transform = "none";
}

// Set Lite as initially selected and display its associated package info
setLiteOpacity();

// Event listener to call respective opacity setting functions on click
document.querySelectorAll(".mynav button").forEach(function(btn, index) {
    btn.addEventListener("click", function() {
        if (index === 0) {
            setLiteOpacity();
        } else if (index === 1) {
            setStandardOpacity();
        } else if (index === 2) {
            setPremiumOpacity();
        }
    });
});
// Code for updating target position
(function () {
    const target = document.querySelector(".target");
    const buttons = document.querySelectorAll(".mynav button");

    function updateTargetPosition() {
        const activeBtn = document.querySelector(".mynav button.active");
        if (activeBtn) {
            const width = activeBtn.getBoundingClientRect().width;
            const height = activeBtn.getBoundingClientRect().height;
            const left = activeBtn.getBoundingClientRect().left + window.scrollX;
            const top = activeBtn.getBoundingClientRect().top + window.scrollY;

            target.style.width = `${width}px`;
            target.style.height = `${height}px`;
            target.style.left = `${left}px`;
            target.style.top = `${top}px`;
            target.style.transform = "none";
        }
    }

    function clickFunc() {
        if (!this.classList.contains("active")) {
            buttons.forEach(function(btn) {
                btn.classList.remove("active");
                btn.style.opacity = "0.50";
            });

            this.classList.add("active");
            this.style.opacity = "1";

            updateTargetPosition();
        }
    }

    window.addEventListener("resize", updateTargetPosition);
    window.addEventListener("scroll", updateTargetPosition);

    buttons.forEach(function(btn) {
        btn.addEventListener("click", clickFunc);
    });
})();