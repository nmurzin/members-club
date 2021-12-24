document.addEventListener('DOMContentLoaded', function () {
    const clearBtn = document.getElementById("clear-member");
    const nameInput = document.getElementById("member-name");
    const emailInput = document.getElementById("member-email");

    clearBtn.addEventListener("click", function (event){
        event.preventDefault();

        nameInput.value = '';
        emailInput.value = '';
    });
}, false);


