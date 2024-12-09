let elWrapInput = document.getElementById('wrap-input')
let elWrapBtn = document.getElementById('wrap-btn')
let elResult = document.getElementById('wrap-result')


elWrapBtn.addEventListener('click', () => {

    let inputValue = elWrapInput.value

    if (inputValue >= 90) {
        elResult.textContent = "Ajoyib! Sizning bahingiz: A"
        elResult.style.backgroundColor = 'green'
        document.body.style.backgroundColor = 'green'
    }

    else if (inputValue >= 75) {
        elResult.textContent = "Yaxshi! Sizning bahingiz: B"
        elResult.style.backgroundColor = 'deepskyblue'
        document.body.style.backgroundColor = 'deepskyblue'
    }

    else if (inputValue >= 50) {
        elResult.textContent = "Qoniqarli! Sizning bahingiz: C"
        elResult.style.backgroundColor = 'darkorange'
        document.body.style.backgroundColor = 'darkorange'
    }

    else {
        elResult.textContent = "Kechirasiz, siz imtihondan o'tolmadingiz!"
        elResult.style.backgroundColor = 'red'
        document.body.style.backgroundColor = 'red'
    }
})