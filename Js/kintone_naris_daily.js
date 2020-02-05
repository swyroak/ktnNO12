(function () {
    'use strict'
    // 処理対象の会員生協の情報-coopName:会員生協名-orderDay:発注曜日-distination:納品曜日
    let coops = {
        toutoMarche: { coopName: '東都マルシェ', orderDay: ['金', '月'], distination: ['木', '月'] },
        toukaiCoop: { coopName: '東海コープ', orderDay: ['水', '木', '金', '土', '月'], distination: ['金', '土', '月', '火', '水'] },
        csNet: { coopName: 'CSネット', orderDay: ['水', '木', '金', '土', '月'], distination: ['金', '土', '月', '火', '火水'] },
        coopDeli: { coopName: 'デリ', orderDay: ['水', '木', '金', '土', '月'], distination: ['金土', '日', '月', '火', '水'] },
        coopKinki: { coopName: 'きんき', orderDay: ['水', '木', '金', '土', '月'], distination: ['金', '土', '月', '火', '水'] },
        coopKyusyu: { coopName: 'コープ九州', orderDay: ['水', '木', '金', '土', '月'], distination: ['金土', '日', '月', '火水', '水'] },
        toutoLand: { coopName: '東都らんど', orderDay: ['火', '水', '木', '金', '月'], distination: ['金', '金', '土', '月', '火'] },
        csNet1600: { coopName: 'CSネット1600', orderDay: ['火'], distination: ['木'] },
        coopKyusyuTsuika: { coopName: 'コープ九州追加', orderDay: ['日', '月', '火', '水', '木', '金', '土'], distination: ['不定', '不定', '不定', '不定', '不定', '不定', '不定'] },
        touhoku: { coopName: '東北', orderDay: ['火', '水', '木', '金', '土'], distination: ['金', '金', '土', '月', '火'] },
        kinkiReturn: { coopName: 'きんき返品', orderDay: [], distination: [] }
    }


    let showHiddenList = {
        remnantCheck: { fieldName: '桶川残発生チェック', showDay: ['火'] },
        moveingCheck: { fieldName: '計画数移動起案', showDay: ['月'] }
    }

    // 変更チェック対象のフィールド
    let kintoneTorigger = [
        'app.record.edit.change.東都マルシェ受注チェック_無',
        'app.record.create.change.東都マルシェ受注チェック_無',
        'app.record.edit.change.東海コープ受注チェック_無',
        'app.record.create.change.東海コープ受注チェック_無',
        'app.record.edit.change.CSネット受注チェック_無',
        'app.record.create.change.CSネット受注チェック_無',
        'app.record.edit.change.デリ受注チェック_無',
        'app.record.create.change.デリ受注チェック_無',
        'app.record.edit.change.きんき受注チェック_無',
        'app.record.create.change.きんき受注チェック_無',
        'app.record.edit.change.コープ九州受注チェック_無',
        'app.record.create.change.コープ九州受注チェック_無',
        'app.record.edit.change.東都らんど受注チェック_無',
        'app.record.create.change.東都らんど受注チェック_無',
        'app.record.edit.change.CSネット1600受注チェック_無',
        'app.record.create.change.CSネット1600受注チェック_無',
        'app.record.edit.change.コープ九州追加受注チェック_無',
        'app.record.create.change.コープ九州追加受注チェック_無',
        'app.record.edit.change.東北受注チェック_無',
        'app.record.create.change.東北受注チェック_無',
        'app.record.edit.change.東北受注チェック_無',
        'app.record.create.change.東北受注チェック_無',
        'app.record.edit.change.きんき返品受注チェック_無',
        'app.record.create.change.きんき返品受注チェック_無',
        'app.record.detail.show',
        'app.record.edit.show'
    ]

    // レコード作成時処理
    kintone.events.on(['app.record.create.show', 'app.record.create.change.対応日付', 'app.record.edit.change.対応日付'], function (event) {
        // 当日曜日の取得
        console.log(event)
        let date = new Date(event.record.対応日付.value)
        let nameOfDays = ['日', '月', '火', '水', '木', '金', '土']
        let dayName = nameOfDays[date.getDay()]

        // coops.会員.orderDayに当日の曜日がない時、「対象無」フィールドにチェックを入れる。ある場合は「発注納品日」フィールドを記載する。
        for (const key in coops) {
            let targetIndex = coops[key].orderDay.findIndex(item => item === dayName)
            if (coops[key].coopName != 'きんき返品') {

                let noOrderfieldname = coops[key].coopName + '受注チェック_無'

                if (targetIndex === -1) {
                    // 対象無フィールドの名前→対象にチェック
                    console.log(noOrderfieldname)
                    event.record[noOrderfieldname]['value']['0'] = '対象無'
                } else {
                    // 「発注納品日」フィールドの名前→納品フィールドのvalue→納品フィールドにvalueを設定。
                    event.record[noOrderfieldname]['value'] = []
                    let orderDisDayField = coops[key].coopName + '_発注納品日'
                    console.log(orderDisDayField)
                    let orderDisDayVlaue = coops[key].orderDay[targetIndex] + '曜発注→' + coops[key].distination[targetIndex] + '曜納品'
                    console.log(orderDisDayVlaue)
                    event.record[orderDisDayField]['value'] = orderDisDayVlaue
                }
            }


        }



        return event
    })

    // 「対象無」フィールドのチェック変更時処理
    kintone.events.on(kintoneTorigger, function (event) {
        let record = event.record
        console.log('event occered change')
        // フィールドにチェックが入ったら右のチェックリストを隠し、チェックが外れたら出す。
        for (const key in coops) {
            let noOrderfieldname = coops[key].coopName + '受注チェック_無'
            let orderCheckList = coops[key].coopName + '受注チェック'
            let orderDisDayField = coops[key].coopName + '_発注納品日'
            if (record[noOrderfieldname]['value']['0'] === '対象無') {
                kintone.app.record.setFieldShown(orderCheckList, false)
                kintone.app.record.setFieldShown(orderDisDayField, false)
            } else {
                kintone.app.record.setFieldShown(orderCheckList, true)
                kintone.app.record.setFieldShown(orderDisDayField, true)
            }
        }

        let date = new Date(event.record.対応日付.value)
        let nameOfDays = ['日', '月', '火', '水', '木', '金', '土']
        let dayName = nameOfDays[date.getDay()]

        // 特定の曜日のみ出すフィールド
        for (const key in showHiddenList) {
            let targetDay = showHiddenList[key].showDay.findIndex(item => item === dayName)
            if (targetDay === -1) {
                console.log(showHiddenList[key].fieldName + 'は表示しない')
                kintone.app.record.setFieldShown(showHiddenList[key].fieldName, false)
            } else {
                console.log(showHiddenList[key].fieldName + 'は表示する')
                kintone.app.record.setFieldShown(showHiddenList[key].fieldName, true)
            }
        }

        return event
    })




})();