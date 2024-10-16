const firstDropdown = document.querySelector('.mobile--dropdown_wrapper')

firstDropdown.addEventListener('click', () => {
    firstDropdown.classList.toggle('open')
})

const secondDropdown = document.querySelector('.mobile__item--second_dropdown')

secondDropdown.addEventListener('click', (e) => {
    e.stopPropagation()
    secondDropdown.classList.toggle('open')
})