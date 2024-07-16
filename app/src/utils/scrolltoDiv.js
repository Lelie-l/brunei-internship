export function scrollToDiv(divId) {
    const targetDiv = document.getElementById(divId);
    if (targetDiv) {
        console.log("tvue")
        targetDiv.scrollIntoView({ behavior: 'smooth' });
    }
}
