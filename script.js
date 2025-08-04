// This script contains shared functionality for the Kodi addon website.
// It should be linked to every HTML page that needs it.
// Example: <script src="script.js"></script>

document.addEventListener('DOMContentLoaded', function() {
    // Check if the copy button and code content elements exist on the page
    const copyButton = document.getElementById('copyButton');
    const codeContent = document.getElementById('codeContent');

    if (copyButton && codeContent) {
        // Add a click event listener to the copy button
        copyButton.addEventListener('click', function() {
            const textToCopy = codeContent.innerText.trim();
            
            // Use the document.execCommand('copy') fallback for broader compatibility
            // as navigator.clipboard may be restricted in some environments (like iframes)
            const textArea = document.createElement('textarea');
            textArea.value = textToCopy;
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand('copy');
                // Give user feedback that the content was copied
                copyButton.textContent = 'Copied!';
                setTimeout(() => {
                    copyButton.textContent = 'Copy';
                }, 2000);
            } catch (err) {
                console.error('Failed to copy text: ', err);
                copyButton.textContent = 'Error';
            }
            document.body.removeChild(textArea);
        });
    }
});
