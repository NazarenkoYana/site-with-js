let accordions = document.querySelectorAll('.accordion-list');

accordions.forEach((accordion) => {

    const accordionItems = accordion.querySelectorAll('.accordion-list-item');
    accordionItems.forEach(accordionItem => {

        accordionItem.querySelector('.accordion-list-item-title').addEventListener('click', () => {
            const anotherExistOpened = accordion.querySelector('.accordion-list-item.opened');
            if (anotherExistOpened && anotherExistOpened !== accordionItem)
                anotherExistOpened.classList.remove('opened');
            accordionItem.classList.toggle('opened');
        });
    });
})

