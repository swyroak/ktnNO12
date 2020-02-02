(function () {
    'use strict'
    // 処理対象の会員生協の情報-coopName:会員生協名-orderDay:発注曜日-distination:納品曜日
    let coops = {
        touhoku={ coopName='東北', orderDay: ['火', '水', '木', '金', '月',], destination: ['金', '金', '土', '月', '火'] },
        toutoMarche = { coopName='東都マルシェ', orderDay: ['金', '月',], destination: ['木', '月'] },
        toutoLand={ coopName: '東都らんど', orderDay: ['火', '水', '木', '金', '月',], destination: ['金', '金', '土', '月', '火'] }
    }
    // 当日曜日の取得
    let date = new Date()
    let nameOfDays = ['日', '月', '火', '水', '木', '金', '土']
    let dayName = nameOfDays[date.getDay()]

    // レコード作成時処理-当日発注日でないものは「対象無」フィールドにチェックを入れてチェックリストを隠す。
    kintone.events.on('app.record.create.show', function (event) {
        // coops.会員.orderDayに当日の曜日がない時、「対象無」フィールドにチェックを入れる。ある場合は発注納品日欄を記載する。
        coops.forEach(coop => {
            if (coop.orderDay.findIndex(item => item === dayName) = -1) {
                // 対象無フィールドの名前→対象にチェック
                let fieldname = coop.coopName + 'チェック_無'
                event.record[fieldname]['value']['0'] = '対象無'
            } else {

            }
        });

        return event
    })
})();