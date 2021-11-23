document.querySelectorAll('button').forEach((btn) => {
    btn.onclick = (e) => {
        if (btn.textContent === '+') {
            document.querySelector("#result").innerText++
        } else if (btn.textContent === '-' && document.querySelector("#result").innerText > 0) {
            document.querySelector("#result").innerText--
        } else if (btn.textContent === 'reset') {
            document.querySelector("#result").innerText = 0
        }
    }
})