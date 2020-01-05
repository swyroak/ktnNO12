(function () {
    kintone.events.on('app.record.index.show', function (event) {
        'use strict'
        let mybutton = document.createElement('button');
        let records = event.records;

        mybutton.id = 'mybutton';
        mybutton.innerText = 'データコピー';
        mybutton.onclick = function () {
            console.log(records);
            records.forEach((value) => {
                const scCode = 550018215
                const keikakuSuu = value['計画数']['value']
                const gouSuu = value['号数']['value']
                const janCode = value['ＪＡＮコード']['value']
                let percentage = [{ "per": 15, "day": -1 }, { "per": 5, "day": 1 }, { "per": 16, "day": 2 }, { "per": 34, "day": 3 }, { "per": 17, "day": 5 }, { "per": 13, "day": 6 }]
                percentage.forEach((currentValue, index) => {
                    let id = scCode + '_' + gouSuu + '_' + janCode + '_0' + (index + 1)
                    let baseDay = new Date('1982/10/20 09:00')
                    let targetDay = new Date(baseDay.setDate(baseDay.getDate() + gouSuu * 7 + currentValue['day']))
                    let targetDayKtn = targetDay.getFullYear() + '-' + ("0" + (targetDay.getMonth() + 1)).slice(-2) + '-' + ("0" + targetDay.getDate()).slice(-2)
                    let targetDayStr = targetDayKtn.replace(/-/g, '')
                    let query = "ID=" + id
                    let finder = {
                        "app": 47,
                        "query": query,
                        "fields": ["ID", "納品先コード"]
                    };
                    let body = {
                        "app": 47,
                        "record": {
                            "支所倉庫コード": { "value": "86700" },
                            "荷主コード": { "value": "0514507" },
                            "商品コード": { "value": janCode },
                            "納品先コード": { "value": scCode },
                            "納品先分割識別子": { "value": 0 },
                            "日付": { "value": targetDayStr },
                            "企画回": { "value": gouSuu },
                            "予測数": { "value": Math.ceil(keikakuSuu * currentValue['per'] / 100) },
                            "アバウト数": { "value": 0 },
                            "ID": { "value": id },
                            "日付シリアル": { "value": targetDayKtn }
                        }
                    }
                    console.log(body)
                    kintone.api(kintone.api.url('/k/v1/records', true), 'GET', finder, function (resp) {
                        console.log(resp);
                        if (resp['records']['length'] === 0) {
                            kintone.api(kintone.api.url('/k/v1/record', true), 'POST', body, function (ans) {
                                console.log(ans);
                            }, function (error) {
                                console.log(error);
                            });
                        }
                    }, function (error) {
                        console.log('取り込みエラーが出たよ--------------------------------')
                        console.log(error);
                        console.log('------------------------------------------------------')
                    });

                });
            });

        }
        kintone.app.getHeaderMenuSpaceElement().appendChild(mybutton);
    })
})();