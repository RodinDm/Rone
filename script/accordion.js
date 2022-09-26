const accordionHeaders = document.querySelectorAll('.accordion-header');

for (const accordionHeader of accordionHeaders) {
    accordionHeader.onclick = function () {
        if (this.classList.contains('active')) {
            this.classList.remove('active');
        } else {
            this.classList.add('active');
        }

        // this.classList.toggle('active'); можно и так
    };
}