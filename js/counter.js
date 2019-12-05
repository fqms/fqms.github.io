/* globals $, */

var placeCounters = function placeCounters (duration) {
  duration = duration || 1000
  // Get and set downloads from sourcefoge
  // TODO: Add github release counter metadata
  $.ajax({
    url: 'https://sourceforge.net/projects/free-queue-manager/' +
           'files/stats/json?start_date=2017-01-29&end_date=' +
           new Date().toISOString().split('T')[0]
  }).then(function (resp) {
    var total = parseInt(resp.total || 0)

    $.ajax({ url: 'https://api.github.com/repos/mrf345/fqm/releases' })
      .then(function (resp) {
        var assets = resp.pop().assets
        assets.forEach(function (asset) { total += parseInt(asset.download_count) })
        $('.downloadsCounter').text(total)
      })
  })

  // Get and set github stars
  $.ajax({ url: 'https://api.github.com/repos/mrf345/fqm' })
    .then(function (r) { $('.starsCounter').text(r.stargazers_count) })
}
