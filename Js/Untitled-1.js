

// 処理対象の会員生協の情報-coopName:会員生協名-orderDay:発注曜日-distination:納品曜日
let coops = {
    touhoku: { coopName: '東北', orderDay: ['火', '水', '木', '金', '月'], distination: ['金', '金', '土', '月', '火'] },
    toutoMarche: { coopName: '東都マルシェ', orderDay: ['日', '金', '月'], distination: ['木', '月'] },
    toutoLand: { coopName: '東都らんど', orderDay: ['火', '水', '木', '金', '月'], distination: ['金', '金', '土', '月', '火'] }
}

// 変更チェック対象のフィールド
let kintoneTorigger = []

// 当日曜日の取得
let date = new Date()
let nameOfDays = ['日', '月', '火', '水', '木', '金', '土']
let dayName = nameOfDays[date.getDay()]


