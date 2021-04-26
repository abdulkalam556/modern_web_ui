const codes = document.querySelectorAll('.code')

codes[0].focus()

codes.forEach((code, indx) => {
  code.addEventListener('keydown', (e) => {
    if (e.key >= 0 && e.key <= 9) {
      codes[indx].value = ''
      setTimeout(() => codes[indx + 1].focus(), 10)
    } else if (e.key === 'Backspace') {
      setTimeout(() => codes[indx - 1].focus(), 10)
    }
  })
})
