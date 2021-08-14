const faqItemHead = document.querySelectorAll('.faq-item-head');


faqItemHead.forEach((head, index) => {
    head.addEventListener('click', () => {
        let icon = head.querySelector('.faq-item-icon').firstElementChild;
        if(icon.className == "fa fa-chevron-down"){
            head.nextElementSibling.classList.add('show-para');
            icon.className = "fa fa-chevron-up";
        } else if(icon.className == "fa fa-chevron-up"){
            head.nextElementSibling.classList.remove('show-para');
            icon.className = "fa fa-chevron-down";
        }
    });
});