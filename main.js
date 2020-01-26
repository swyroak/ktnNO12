
window.onload = function () {
    let container = document.getElementById('container')
    let title = document.createElement('p')
    let answer = document.createElement('p')
    answer.setAttribute('id', 'answer')
    title.setAttribute('class', 'parts01')
    let input = document.createElement('input')
    input.oninput = function (e) {
        console.log(e.target.value)
        
        let ans = document.getElementById('answer')
        ans.innerHTML = e.target.value

    }
    title.innerHTML = '日付変換'
    container.appendChild(title)
    container.appendChild(input)
    container.appendChild(answer)

}