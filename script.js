reload()

function generateQR() {
    document.querySelector('#qr-image').style.display = 'block'
    let qr_text = document.querySelector('#text').value

    if(qr_text.trim().length === 0) {
        document.querySelector('#qr-image .error').innerHTML = 'Please enter text!'
        document.querySelector('#img').style.display = 'none'
        document.querySelector('#text').style.borderColor = 'red'
    } else {
        document.querySelector('#text').style.borderColor = 'black'
        document.querySelector('#img').style.display = 'block'
        document.querySelector('#qr-image .error').innerHTML = ''
        document.querySelector('#img').src = 'https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=' + qr_text
    }
}

function reload() {
    document.querySelector('#qr-image').style.display = 'none'
}