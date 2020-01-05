(function () {
    kintone.events.on('app.record.index.show', function (event) {
        'use strict'
        let mybutton = document.createElement('button');
        let records = event.records;
        const BASEDAY = new Date('1982/10/20 09:00')
        mybutton.id = 'mybutton';
        mybutton.innerText = 'データコピー';
        mybutton.onclick = function () {
            console.log(records);
            records.forEach((value) => {
                const TARGETDAY = BASEDAY.getDate() + value['号数']['value']
                console.log(TARGETDAY)
                console.log((value['号数']['value'] % 52 - 17) * 7)
            });

        }
        kintone.app.getHeaderMenuSpaceElement().appendChild(mybutton);
    })
})();