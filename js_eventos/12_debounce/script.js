let timeOut;

window.addEventListener('mousemove', function(e) {
    this.clearTimeout(timeOut)
    timeOut = setTimeout(function() {
        console.log(e.x)
    }, 500)
})