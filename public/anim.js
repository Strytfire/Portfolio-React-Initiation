
/*console.log(document.querySelector('.reaveal'))

const ratio = .1
const options = {
    root : null,
    rootMargin:'0px',
    threshold: ratio
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if(entry.intersectionRatio > ratio){
            console.log('TAMERELAPUTE')
            entry.target.classList.add('reaveal-visible')
            observer.unobserve(entry.target)
        }
        
    })
}

const observer = new IntersectionObserver(handleIntersect , options)
observer.observe(document.querySelector('.reaveal'))*/

/*const cursor = document.querySelector('.cursor');
        document.addEventListener('mousemove', e => {
            cursor.setAttribute("style", "top: " + (e.pageY - 7.5) + "px; left: " + (e.pageX - 7.5) + "px;");
        })

        document.addEventListener('click', () => {
            cursor.classList.add("expand");
            setTimeout(() => {
                cursor.classList.remove("expand");
            }, 500)
        })*/