(function () {
    "use strict";
    kintone.events.on('portal.show', function () {
        let el = kintone.portal.getContentSpaceElement();

        let div_container = document.createElement("div");
        div_container.setAttribute("class", "top_container");
        
        let div_container_right=document.createElement("div")
        div_container_right.setAttribute("class","mid_container_right")

        let div_container_left=document.createElement("div")
        div_container_left.setAttribute("class","mid_container_left")

        let div_up = document.createElement("div");
        let div_down = document.createElement("div");

        let head_tag01 = document.createElement("p");
        head_tag01.innerHTML = ("ナリス化粧品企画：")

        let head_tag02 = document.createElement("p");
        head_tag02.innerHTML = ("その他：")

        let link01_01 = document.createElement("a");
        link01_01.setAttribute("href", "https://cxg-syohinkanri.cybozu.com/k/46/");
        link01_01.setAttribute("class", "quick_link")
        link01_01.innerHTML = "東海コープ"

        let link01_02 = link01_01.cloneNode(true);
        link01_02.innerHTML = "コープきんき"

        let link02_01 = link01_01.cloneNode(true);
        link02_01.innerHTML = "リンク予定地02"

        let link03_01=link01_01.cloneNode(true);
        link03_01.innerHTML="計算機"

        el.appendChild(div_container);
        div_container.appendChild(div_container_left);
        div_container_left.appendChild(div_up);
        div_up.appendChild(head_tag01);
        div_up.appendChild(link01_01);
        div_up.appendChild(link01_02);
        div_container_left.appendChild(div_down);
        div_down.appendChild(head_tag02);
        div_down.appendChild(link02_01);
        div_container.appendChild(div_container_right);
        div_container_right.appendChild(link03_01)

        //日次ルーチンの追加
        let day = new Date()
        if (day.getDay() != 0) {
            let body = {
                "app": 12,
                "query": "対応日付 = TODAY()",
                "fields": ["対応日付", "対応者"]
            };

            kintone.api(kintone.api.url('/k/v1/records', true), 'GET', body, function (resp) {
                console.log(resp);
                if (resp['records']['length'] == 0) {
                    let daily_body = {
                        "app": 12
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
        } else {
            console.log('日曜なので作らない')
        }

    });
})();