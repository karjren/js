document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Get form data
        var formData = new FormData(this);
        var load = document.getElementById("form-loading-wrapper");
        load.style.display = "flex";
        // Fetch API POST request
        fetch('contact/process-form', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text(); // Assuming the server returns text (HTML in this case)
        })
        .then(responseHtml => {
            // Parse the response HTML into a document
            var parser = new DOMParser();
            var htmlDoc = parser.parseFromString(responseHtml, 'text/html');
            // Extract the specific element you want from the parsed document
            var elementToUpdate = htmlDoc.getElementById('thank-you');
            var spin = document.getElementById("form-loading");
            // Check if the element is found
            if (elementToUpdate) {
                // Update the element in your current document
                spin.style.display = "none";
                document.getElementById('form-response').innerHTML = elementToUpdate.innerHTML;
            } else {
                // Handle case where the element is not found
                alert('Could not find the specified element in the server response.');
            }
        })
        .catch(error => {
            // Error handling
            console.error('Error occurred while submitting the form:', error);
            alert('An error occurred while submitting the form.');
        });
});