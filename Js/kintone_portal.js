(function () {
    "use strict";
    kintone.events.on('portal.show', function () {
        let el = kintone.portal.getContentSpaceElement();

        let div_container = document.createElement("div");
        div_container.setAttribute("class", "top_container");

        let div_container_right = document.createElement("div")
        div_container_right.setAttribute("id", "mid_container_right")

        let div_container_left = document.createElement("div")
        div_container_left.setAttribute("class", "mid_container_left")

        let div_up = document.createElement("div");
        let div_down = document.createElement("div");

        let head_tag01 = document.createElement("p");
        head_tag01.innerHTML = ("ナリス化粧品企画：")

        let head_tag02 = document.createElement("p");
        head_tag02.innerHTML = ("その他：")

        let link01_01 = document.createElement("a");
        link01_01.setAttribute("href", "https://cxg-syohinkanri.cybozu.com/k/56/");
        link01_01.setAttribute("class", "quick_link")
        link01_01.innerHTML = "東北"

        let link01_02 = link01_01.cloneNode(true);
        link01_02.setAttribute("href", "https://cxg-syohinkanri.cybozu.com/k/55/")
        link01_02.setAttribute("class", "quick_link")
        link01_02.innerHTML = "東都マ"

        let link01_03 = link01_01.cloneNode(true);
        link01_03.setAttribute("href", "https://cxg-syohinkanri.cybozu.com/k/50/")
        link01_03.setAttribute("class", "quick_link")
        link01_03.innerHTML = "東都ら"

        let link01_04 = link01_01.cloneNode(true);
        link01_04.setAttribute("href", "https://cxg-syohinkanri.cybozu.com/k/53/")
        link01_04.setAttribute("class", "quick_link")
        link01_04.innerHTML = "デリ"

        let link01_05 = link01_01.cloneNode(true);
        link01_05.setAttribute("href", "https://cxg-syohinkanri.cybozu.com/k/46/")
        link01_05.setAttribute("class", "quick_link")
        link01_05.innerHTML = "東海"

        let link01_06 = link01_01.cloneNode(true);
        link01_06.setAttribute("href", "https://cxg-syohinkanri.cybozu.com/k/49/")
        link01_06.setAttribute("class", "quick_link")
        link01_06.innerHTML = "きんき"

        let link01_07 = link01_01.cloneNode(true);
        link01_07.setAttribute("href", "https://cxg-syohinkanri.cybozu.com/k/51/")
        link01_07.setAttribute("class", "quick_link")
        link01_07.innerHTML = "CS"

        let link01_08 = link01_01.cloneNode(true);
        link01_08.setAttribute("href", "https://cxg-syohinkanri.cybozu.com/k/48/")
        link01_08.setAttribute("class", "quick_link")
        link01_08.innerHTML = "CQ"

        let link01_09 = link01_01.cloneNode(true);
        link01_09.setAttribute("href", "https://cxg-syohinkanri.cybozu.com/k/47/?view=5521209")
        link01_09.setAttribute("class", "quick_link")
        link01_09.innerHTML = "企画出力"

        let link02_01 = link01_01.cloneNode(true);
        link02_01.setAttribute("href", "https://cxg-syohinkanri.cybozu.com/k/22/")
        link02_01.innerHTML = "ナリス日次ルーチン"

        let link02_02 = link01_01.cloneNode(true);
        link02_02.setAttribute("href", "https://cxg-syohinkanri.cybozu.com/k/47/?view=5521501")
        link02_02.innerHTML = "単価チェック"

        let link02_03 = link01_01.cloneNode(true);
        link02_03.setAttribute("href", "https://cxg-syohinkanri.cybozu.com/k/59/report?report=5521653")
        link02_03.innerHTML = "物流計画"

        let link02_04 = link01_01.cloneNode(true);
        link02_04.setAttribute("href", "https://cxg-syohinkanri.cybozu.com/k/57/")
        link02_04.innerHTML = "ロットサポート予約情報"

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

        let div_wrapper = document.createElement('div')
        div_wrapper.setAttribute('class', 'wrapper')

        let input = document.createElement('input')
        input.setAttribute('class', 'inp')
        input.setAttribute('value', '３桁ロットを入力')
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

        el.appendChild(div_container);
        div_container.appendChild(div_container_left);
        div_container_left.appendChild(div_up);
        div_up.appendChild(head_tag01);
        div_up.appendChild(link01_01);
        div_up.appendChild(link01_02);
        div_up.appendChild(link01_03);
        div_up.appendChild(link01_04);
        div_up.appendChild(link01_05);
        div_up.appendChild(link01_06);
        div_up.appendChild(link01_07);
        div_up.appendChild(link01_08);
        div_up.appendChild(link01_09);

        div_container_left.appendChild(div_down);
        div_down.appendChild(head_tag02);
        div_down.appendChild(link02_01);
        div_down.appendChild(link02_02);
        div_down.appendChild(link02_03);
        div_down.appendChild(link02_04);
        div_container.appendChild(div_container_right);


        //日次ルーチンの追加
        let day = new Date()
        if (day.getDay() != 0) {
            // 商品管理課とナリスNBの日次ルーチンを生成
            let appNumbers = [12, 22]
            let body

            appNumbers.forEach(appNumber => {

                body = {
                    "app": appNumber,
                    "query": "対応日付 = TODAY()",
                    "fields": ["対応日付"]
                };

                kintone.api(kintone.api.url('/k/v1/records', true), 'GET', body, function (resp) {

                    console.log(resp);
                    if (resp['records']['length'] == 0) {
                        let daily_body = {
                            "app": appNumber
                        };

                        kintone.api(kintone.api.url('/k/v1/record', true), 'POST', daily_body, function (ans) {
                            console.log(ans);
                        }, function (error) {
                            console.log(error);
                        });
                    }

                }, function (error) {
                    console.log(error);
                });
            });

        } else {
            console.log('日曜なので作らない')
        }

    });
})();