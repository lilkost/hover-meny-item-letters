document.addEventListener('DOMContentLoaded', ()=> {
    let list = document.querySelectorAll('.list li a');
    list.forEach(link => {
        let letters = link.textContent.split("");
        link.textContent = "";
        letters.forEach((leter, i) => {
            i += 1;
            let span = document.createElement('span');
            let delay = i/15;
            let letterOut = document.createElement('span')
            letterOut.textContent = leter;
            letterOut.style.transitionDelay = `${delay}s`;
            letterOut.classList.add('out');
            span.append(letterOut)
            link.append(span);

            let letterin = document.createElement('span')
            letterin.textContent = leter;
            letterin.style.transitionDelay = `${delay}s`;
            letterin.classList.add('in');
            span.append(letterin)
        });

    });

});