const btnChangeColor = document.getElementById('change')
const spanColorCode = document.getElementById('color')

btnChangeColor.addEventListener('click', randomColor)

function randomColor() {
    const arr = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
    let colorCode = ""
    for (let i = 0; i < 6; i++) {
        let code = Math.floor(Math.random()*16)
        colorCode+=arr[code]
    }
    spanColorCode.innerHTML = "#"+colorCode
    document.body.style.background = "#"+colorCode
}
