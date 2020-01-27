window.onload = function () {

    let years = {
        "D": "2013",
        "F": "2014",
        "G": "2015",
        "H": "2016",
        "J": "2017",
        "K": "2018",
        "M": "2019",
        "N": "2020",
        "O": "2021",
        "P": "2022",
        "Q": "2023",
        "R": "2024",
        "S": "2025",
        "T": "2026",
        "U": "2027",
        "W": "2028",
        "X": "2029",
        "Y": "2030",
        "Z": "2031",
        "1": "2032",
        "2": "2033",
        "3": "2034",
        "4": "2035",
        "5": "2036",
        "6": "2037",
        "7": "2038",
        "8": "2039",
        "9": "2040",
        "A": "2041",
        "B": "2042",
        "C": "2043"
    }

    let month = {
        "D": "1",
        "F": "2",
        "G": "3",
        "H": "4",
        "J": "5",
        "K": "6",
        "M": "7",
        "N": "8",
        "O": "9",
        "A": "10",
        "B": "11",
        "C": "12"
    }

    let days = {
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "6": "6",
        "7": "7",
        "8": "8",
        "9": "9",
        "A": "10",
        "B": "11",
        "C": "12",
        "D": "13",
        "F": "14",
        "G": "15",
        "H": "16",
        "J": "17",
        "K": "18",
        "M": "19",
        "N": "20",
        "O": "21",
        "P": "22",
        "Q": "23",
        "R": "24",
        "S": "25",
        "T": "26",
        "U": "27",
        "W": "28",
        "X": "29",
        "Y": "30",
        "Z": "31"
    }

    let div_container_right = this.document.getElementById('mid_container_right')

    let div_wrapper = document.createElement('div')
    div_wrapper.setAttribute('class', 'wrapper')

    let input = document.createElement('input')
    input.setAttribute('class', 'inp')
    input.setAttribute('value', 'ナリス３桁ロットを入力')
    input.onclick = function () {
        input.setAttribute('value', '')
    }
    input.onchange = function (e) {
        let textLine = e.target.value
        console.log(textLine)
        let firstText
        let secondText
        let thirdText
        let ansText
        switch (textLine.length) {
            case 1:
                firstText = textLine.slice(0, 1)
                ansText = years[firstText] + "/mm/dd"
                console.log(ansText)
                ans.innerHTML = ansText
                break;

            case 2:
                firstText = textLine.slice(0, 1)
                secondText = textLine.slice(1, 2)
                ansText = years[firstText] + "/" + month[secondText] + "/dd"
                console.log(ansText)
                ans.innerHTML = ansText
                break;

            case 3:
                firstText = textLine.slice(0, 1)
                secondText = textLine.slice(1, 2)
                thirdText = textLine.slice(2, 3)
                ansText = years[firstText] + "/" + month[secondText] + "/" + days[thirdText]
                console.log(ansText)
                ans.innerHTML = ansText
                break;

            default:
                break;
        }
    }

    let ans = document.createElement('p')
    ans.setAttribute('class', 'ans')
    ans.innerHTML = 'yyyy/mm/dd'

    div_wrapper.appendChild(input)
    div_wrapper.appendChild(ans)
    div_container_right.appendChild(div_wrapper)

}