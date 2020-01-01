(function () {
    "use strict";
    kintone.events.on('portal.show', function () {
        let el = kintone.portal.getContentSpaceElement();
        let div = document.createElement("div");
        let div_up = document.createElement("div");
        let div_down = document.createElement("div");
        let obj = document.createElement("a");
        div.setAttribute("class", "container")
        obj.setAttribute("href", "https://cxg-syohinkanri.cybozu.com/k/46/");
        obj.innerHTML = "リンク予定地2098"
        let obj2 = obj.cloneNode(true);
        obj2.innerHTML = "リンク予定地02"
        el.appendChild(div);
        div.appendChild(div_up);
        div_up.appendChild(obj);
        div.appendChild(div_down);
        div_down.appendChild(obj2);

        //日次ルーチンの追加
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

    });
})();