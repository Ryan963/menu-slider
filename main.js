function main(){
    const modalBtn = document.getElementById('sign-up')
    const modalContainer = document.querySelector('.modal-container')
    const toggleBtn = document.getElementById('toggle')
    const closeBtn = document.getElementById('close')
    const nav = document.getElementsByName('nav')
    modalBtn.addEventListener('click',() => {
        modalContainer.style.display = 'block'
    })
    closeBtn.addEventListener('click', () => {
        modalContainer.style.display = 'none'
    })
    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('show-nav')
    })
}
main()