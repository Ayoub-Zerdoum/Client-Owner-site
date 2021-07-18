var client_btn = document.querySelector(".client-button"),
    owner_btn= document.querySelector(".owner-button"),
    form_client =document.querySelector(".form-client"),
    form_owner =document.querySelector(".form-owner");

    client_btn.addEventListener("click", appear1);
    owner_btn.addEventListener("click", appear2);

    function appear1() {
        form_client.style.display = "block";
        owner_btn.style.display ="none";
    }

    function appear2() {
        form_owner.style.display = "block";
        client_btn.style.display = "none";
    }

    
