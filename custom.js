var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.querySelector(".info button");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    function openModal() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    function closeModal() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Function to handle the buy button click
    function buy() {
        // Implement your buy functionality here
        alert("Product bought!");
        // Close the modal after buying
        closeModal();
    }