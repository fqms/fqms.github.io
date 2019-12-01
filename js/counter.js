var placeCounters = function placeCounters (duration=1000) {
    // Get and set downloads from sourcefoge
    // TODO: Add github release counter metadata
    $.ajax({
        url: 'https://sourceforge.net/projects/free-queue-manager/' +
             'files/stats/json?start_date=2017-01-29&end_date=' +
             new Date().toISOString().split('T')[0],
        success: function(r) { $('.downloadsCounter').text(r.total) },
    })
    // Get and set github stars
    $.ajax({
        url: 'https://api.github.com/repos/mrf345/fqm',
        success: function(r) { $('.starsCounter').text(r.stargazers_count) }
    })
}