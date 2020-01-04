(function () {
    kintone.events.on('app.record.detail.show', function (event) {
        "use strict";
        let mybutton = document.createElement('button');
        let record = event.record
        mybutton.id = 'mybutton';
        mybutton.innerText = 'データコピー';
        mybutton.onclick = function () {
            let table_data = record['商品詳細']['value']
            console.log(table_data)
            table_data.forEach((value) => {
                let body = {
                    "app": "47",
                    "records": [
                        {
                            "支所倉庫コード": { "value": record['支所倉庫コード']['value'] },
                            "荷主コード": { "value": "0514507" },
                            "商品コード": { "value": value['value']['JANコード']['value'] },
                            "納品先コード": { "value": record['納品先コード']['value'] },
                            "納品先分割識別子": { "value": 0 },
                            "日付": { "value": value['value']['引当1']['value'].replace(/-/g, '') },
                            "企画回": { "value": record['企画回']['value'] },
                            "予測数": { "value": Math.ceil(value['value']['数量1']['value']) },
                            "アバウト数": { "value": 0 },
                            "ID": { "value": record['納品先コード']['value'] + '_' + record['企画回']['value'] + '_' + value['value']['JANコード']['value'] + '_01' },
                            "日付シリアル": { "value": value['value']['引当1']['value'] }
                        },
                        {
                            "支所倉庫コード": { "value": record['支所倉庫コード']['value'] },
                            "荷主コード": { "value": "0514507" },
                            "商品コード": { "value": value['value']['JANコード']['value'] },
                            "納品先コード": { "value": record['納品先コード']['value'] },
                            "納品先分割識別子": { "value": 0 },
                            "日付": { "value": value['value']['引当2']['value'].replace(/-/g, '') },
                            "企画回": { "value": record['企画回']['value'] },
                            "予測数": { "value": Math.ceil(value['value']['数量2']['value']) },
                            "アバウト数": { "value": 0 },
                            "ID": { "value": record['納品先コード']['value'] + '_' + record['企画回']['value'] + '_' + value['value']['JANコード']['value'] + '_02' },
                            "日付シリアル": { "value": value['value']['引当2']['value'] }
                        },
                        {
                            "支所倉庫コード": { "value": record['支所倉庫コード']['value'] },
                            "荷主コード": { "value": "0514507" },
                            "商品コード": { "value": value['value']['JANコード']['value'] },
                            "納品先コード": { "value": record['納品先コード']['value'] },
                            "納品先分割識別子": { "value": 0 },
                            "日付": { "value": value['value']['引当3']['value'].replace(/-/g, '') },
                            "企画回": { "value": record['企画回']['value'] },
                            "予測数": { "value": Math.ceil(value['value']['数量3']['value']) },
                            "アバウト数": { "value": 0 },
                            "ID": { "value": record['納品先コード']['value'] + '_' + record['企画回']['value'] + '_' + value['value']['JANコード']['value'] + '_03' },
                            "日付シリアル": { "value": value['value']['引当3']['value'] }
                        },
                        {
                            "支所倉庫コード": { "value": record['支所倉庫コード']['value'] },
                            "荷主コード": { "value": "0514507" },
                            "商品コード": { "value": value['value']['JANコード']['value'] },
                            "納品先コード": { "value": record['納品先コード']['value'] },
                            "納品先分割識別子": { "value": 0 },
                            "日付": { "value": value['value']['引当4']['value'].replace(/-/g, '') },
                            "企画回": { "value": record['企画回']['value'] },
                            "予測数": { "value": Math.ceil(value['value']['数量4']['value']) },
                            "アバウト数": { "value": 0 },
                            "ID": { "value": record['納品先コード']['value'] + '_' + record['企画回']['value'] + '_' + value['value']['JANコード']['value'] + '_04' },
                            "日付シリアル": { "value": value['value']['引当4']['value'] }
                        },
                        {
                            "支所倉庫コード": { "value": record['支所倉庫コード']['value'] },
                            "荷主コード": { "value": "0514507" },
                            "商品コード": { "value": value['value']['JANコード']['value'] },
                            "納品先コード": { "value": record['納品先コード']['value'] },
                            "納品先分割識別子": { "value": 0 },
                            "日付": { "value": value['value']['引当5']['value'].replace(/-/g, '') },
                            "企画回": { "value": record['企画回']['value'] },
                            "予測数": { "value": Math.ceil(value['value']['数量5']['value']) },
                            "アバウト数": { "value": 0 },
                            "ID": { "value": record['納品先コード']['value'] + '_' + record['企画回']['value'] + '_' + value['value']['JANコード']['value'] + '_05' },
                            "日付シリアル": { "value": value['value']['引当5']['value'] }
                        }
                    ]
                }
                console.log(body)

                kintone.api(kintone.api.url('/k/v1/records', true), 'POST', body, function (resp) {
                    // success
                    console.log(resp);
                }, function (error) {
                    // error
                    console.log(error);
                    window.alert(error['message'] + '画面をそのままにして誰か呼んでください')
                });
            });
        }
        kintone.app.record.getHeaderMenuSpaceElement().appendChild(mybutton);
    });
})();
