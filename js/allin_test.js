/* global location, $, localStorage, alert, jQuery, beloading, ARABIC, ENGLISH */ // to avoide false linter

var version = ' 0.3 beta' // current version to modify all, easily
var loader = false // global name for beloader to get duration
var noi = 44 // number of elements to translate
var links = {
  sourceforge: {
    windows: 'https://sourceforge.net/projects/free-queue-manager/files/FQM%200.3/FQM_Windows_0.3.zip/download',
    linux: 'https://sourceforge.net/projects/free-queue-manager/files/FQM%200.3/FQM_Linux_0.3.zip/download',
    macos: 'https://sourceforge.net/projects/free-queue-manager/files/FQM%200.3/FQM_MacOS_0.3.zip/download'
  },
  archive: {
    windows: 'https://archive.org/download/free_queue_manager03/FQM_Windows_0.3.zip',
    linux: 'https://archive.org/download/free_queue_manager03/FQM_Linux_0.3.zip',
    macos: 'https://archive.org/download/free_queue_manager03/FQM_MacOS_0.3.zip'
  }
}

// setting formspree emails with js to avoide spam
$('#femail').attr('action', '//formspree.io/' + 'freequem' + '@' + 'gmail' + '.' + 'com')
$('#femailar').attr('action', '//formspree.io/' + 'freequem' + '@' + 'gmail' + '.' + 'com')
$('#fnews').attr('action', '//formspree.io/' + 'freequem' + '@' + 'gmail' + '.' + 'com')
$('#fnewsar').attr('action', '//formspree.io/' + 'freequem' + '@' + 'gmail' + '.' + 'com')


var wmsg = function wmsg () {
  // just a warning message
  alert('Notice: this website is still under construction ...\n\n\n')
}

var lswitch = function lswitch () {
  // function to switch links
  if ($('#archive').hasClass('active')) {
    $('#archive').removeClass('active')
    $('#sourceforge').addClass('active')
    $('#sourceforge').prop('disabled', true)
    $('#archive').prop('disabled', false)
    $('#winl').attr('href', links.sourceforge.windows).attr('target', '_blank')
    $('#linl').attr('href', links.sourceforge.linux).attr('target', '_blank')
    $('#macl').attr('href', links.sourceforge.macos).attr('target', '_blank')
  } else {
    $('#sourceforge').removeClass('active')
    $('#sourceforge').prop('disabled', false)
    $('#archive').prop('disabled', true)
    $('#archive').addClass('active')
    $('#winl').attr('href', links.archive.windows).attr('target', '')
    $('#linl').attr('href', links.archive.linux).attr('target', '')
    $('#macl').attr('href', links.archive.macos).attr('target', '')
  }
  $('#winl').fadeOut().fadeIn()
  $('#linl').fadeOut().fadeIn()
  $('#macl').fadeOut().fadeIn()
}

jQuery(document).ready(function ($) {
  // things todo when jquery loads
  // setting loading screen
  $('.version').append(version)
  loader = beloading({
    duration: 2,
    text_font: '"Changa", sans-serif',
    text: "Free Queue Manager is loading ...",
    callback: function () {
      $('#thev').addClass('fixed-top')
    }
  })
})

window.addEventListener('load', function () {
  // things todo, when everything loaded
  // displaying messages if found urls hashtag
  if (location.href.substr(location.href.length - 6) === 'thanke') {
    $('#thanke').removeClass('hide')
    $(window).scrollTop('#thanke')
    setTimeout(function () {
      $('#thanke').fadeOut()
    }, 10000)
  }
  if (location.href.substr(location.href.length - 6) === 'thankj') {
    $('#thankj').removeClass('hide')
    $(window).scrollTop('#thankj')
    setTimeout(function () {
      $('#thankj').fadeOut()
    }, 10000)
  }
})
