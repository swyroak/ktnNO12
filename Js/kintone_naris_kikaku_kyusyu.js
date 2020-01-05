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
                let BASEDAY = new Date('1982/10/20 09:00')
                let TARGETDAY = new Date(BASEDAY.setDate(BASEDAY.getDate() + value['号数']['value'] * 7))
                console.log(TARGETDAY.toLocaleDateString())
                console.log(TARGETDAY)
                console.log(TARGETDAY.getFullYear() +'-'+(TARGETDAY.getMonth()+1)+'-'+TARGETDAY.getDate())
            });

        }
        kintone.app.getHeaderMenuSpaceElement().appendChild(mybutton);
    })
})();