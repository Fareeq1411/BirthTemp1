document.addEventListener('touchstart', function(event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, { passive: false });

document.addEventListener('touchmove', function(event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, { passive: false });

document.addEventListener('dblclick', function(event) {
    event.preventDefault();
}, { passive: false });


function home(){

    window.location.href = 'index.html'
}

function download(){

                // Replace 'image.jpg' with the path to your image
                const imageUrl = 'image/wish2.png';
            
                // Create a new anchor element
                const link = document.createElement('a');
                
                // Set the href attribute to the image URL
                link.href = imageUrl;
                
                // Set the download attribute to force download the image with the provided filename
                link.download = 'downloaded_image.jpg';
                
                // Append the anchor element to the body
                document.body.appendChild(link);
                
                // Trigger a click event on the anchor element
                link.click();
                
                // Remove the anchor element from the body
                document.body.removeChild(link);

}