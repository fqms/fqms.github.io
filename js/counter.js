/* globals $, */

function addDownloadsTotal(numbers) {
  $('.downloadsCounter').text(parseInt($('.downloadsCounter').text() || 0) + numbers)
}

function placeCounters () {
  $.ajax({
    url: 'https://sourceforge.net/projects/free-queue-manager/' +
           'files/stats/json?start_date=2017-01-29&end_date=' +
           new Date().toISOString().split('T')[0]
  })
    .then(function (resp) { addDownloadsTotal(resp.total || 0) })

  $.ajax({ url: 'https://api.github.com/repos/mrf345/fqm/releases' })
    .then(function (releases) {
      releases.forEach(function(r) {
        r.assets.forEach(function (a) { addDownloadsTotal(a.download_count || 0) })
      })
    })

  $.ajax({ url: 'https://api.github.com/repos/mrf345/fqm' })
    .then(function (r) { $('.starsCounter').text(r.stargazers_count) })
}
