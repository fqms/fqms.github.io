var getDownloads = function getDownloads () {
    // To count the numbers of downloads and refresh it every given seconds
    // using archive, sourceforge apis
    return new Promise(function (resolve, reject) {
        var toPromiseArchive = function (l) {
            return new Promise(function (resolve, reject) {
                $.ajax({
                    url: l,
                    dataType: "jsonp",
                    data: {
                        format: "json"
                    },
                    success: function(response) {
                        resolve(response.item.downloads)
                        // resolve(0)
                    },
                    fail: function (e) {
                        resolve(0)
                    }
                })
            })
        }
        var toPromiseForge = function (l) {
            return new Promise(function (resolve, reject) {
                fetch(l)
                .then(function (r) { return r.json() })
                .then(function (j) {
                    resolve(j.total)
                    // resolve(0)
                }).catch(function (e) {
                    resolve(0)
                })
            })
        }
        Promise.all([
            'https://sourceforge.net/projects/free-queue-manager/files/stats/json?start_date=2017-01-29&end_date=' + new Date().toISOString().split('T')[0],
            'https://archive.org/details/FQM0.4.3?output=json',
            'https://archive.org/details/free_queue_manager_0.4.1?output=json',
            'https://archive.org/details/free_queue_manager_0.4?output=json',
            'https://archive.org/details/FreeQueueManagement?output=json',
            'https://archive.org/details/Free_Queue_Manager_0.2.5?output=json',
            'https://archive.org/details/Free_Queue_Manager_0.2?output=json',
            'https://archive.org/details/FQM0.2.6?output=json',
            'https://archive.org/details/free_queue_manager03?output=json',
            'https://archive.org/details/FQM01?output=json'
        ].map(function (item) {
            return item.indexOf('sourceforge') === -1 ? toPromiseArchive(item) : toPromiseForge(item)
            // return toPromiseForge(item)
        })).then(function (items) {
            var downloadsToReturn = 0
            items.forEach(function (i) {
                downloadsToReturn += i
            })
            resolve(downloadsToReturn)
        })
    })
}

var getStars = function getStars () {
    return new Promise(function (resolve, reject) {
        fetch('https://api.github.com/repos/mrf345/fqm')
        .then(function (r) { return r.json() })
        .then(function (j) {
            resolve(j.stargazers_count)
        }).catch(function (e) {
            resolve(0)
        })
    })
}

var placeCounters = function placeCounters (duration=1000) {
    getDownloads()
    .then(function (nDownloads) {
        $('.downloadsCounter').text(nDownloads)
    })
    getStars()
    .then(function (nStars) {
        $('.starsCounter').text(nStars)
    })
}