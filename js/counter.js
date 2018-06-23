window.getDownloads = function getDownloads () {
    // To count the numbers of downloads and refresh it every given seconds
    // using archive, sourceforge apis
    var currentDate = new Date().toISOString().split('T')[0]
    return new Promise(function (resolve, reject) {
        fetch(
            'https://sourceforge.net/projects/free-queue-manager/files/stats/json?start_date=2017-01-29&end_date='
            + currentDate
        ).then(function (r) { return r.json() })
        .then(function (j) {
            var downloadToReturn = j.total
            console.log(j.total)
            fetch('https://archive.org/details/free_queue_manager_0.4?output=json')
            .then(function (r) { r.json() })
            .then(function (j) {
                downloadToReturn += j.downloads
                console.log(j.downloads)
                resolve(downloadToReturn)
            }).catch(function () {
                resolve(downloadToReturn)
            })
        }).catch(function () {
            resolve(0)
        })
    })
}
