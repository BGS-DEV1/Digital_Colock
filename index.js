
const watch = document.querySelector('.watch');
console.log(watch)
setInterval(function() {
    watch.innerHTML = new Date().toLocaleTimeString()
},1000)
console.log(new Date().toLocaleTimeString())