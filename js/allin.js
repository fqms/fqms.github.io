/* global location, $, localStorage, alert, jQuery, beloading, ARABIC, ENGLISH */ // to avoide false linter

var version = ' 0.2.6 beta' // current version to modify all, easily
var loader = false // global name for beloader to get duration
var noi = 44 // number of elements to translate
var links = {
  sourceforge: {
    windows: 'https://sourceforge.net/projects/free-queue-manager/files/FQM%200.2.6/FQM_0.2.6_Windows.zip/download',
    linux: 'https://sourceforge.net/projects/free-queue-manager/files/FQM%200.2.6/FQM_0.2.6_Linux_SourceCode.zip/download',
    macos: 'https://sourceforge.net/projects/free-queue-manager/files/FQM%200.2.6/FQM_0.2.6_MacOS.zip/download'
  },
  archive: {
    windows: 'https://archive.org/download/FQM0.2.6/FQM_0.2.6_Windows.zip',
    linux: 'https://archive.org/download/FQM0.2.6/FQM_0.2.6_Linux_SourceCode.zip',
    macos: 'https://archive.org/download/FQM0.2.6/FQM_0.2.6_MacOS.zip'
  }
}

// setting formspree emails with js to avoide spam
$('#femail').attr('action', '//formspree.io/' + 'freequem' + '@' + 'gmail' + '.' + 'com')
$('#femailar').attr('action', '//formspree.io/' + 'freequem' + '@' + 'gmail' + '.' + 'com')
$('#fnews').attr('action', '//formspree.io/' + 'freequem' + '@' + 'gmail' + '.' + 'com')
$('#fnewsar').attr('action', '//formspree.io/' + 'freequem' + '@' + 'gmail' + '.' + 'com')

var addStyle = function () {
  var fontFamilies = {
    all: {
      'font-family': '"Changa", sans-serif'
    }, // all font-families
    8: {
      'font-family': '"Lateef", cursive',
      'font-size': '170%'
    },
    12: {
      'font-family': '"Lateef", cursive',
      'font-size': '170%'
    },
    36: {
      'font-size': '250%',
      'font-family': '"Lateef", cursive'
    }
  }
  for (var i = 0; noi > i; i += 1) {
    if ($('#en' + i)) {
      if (fontFamilies.hasOwnProperty(i)) {
        if (i === 36) {
          $('#en' + i + ' thead > tr > th').css(fontFamilies[i])
          $('#en' + i + ' tbody > tr > td').css(fontFamilies.all)
        } else $('#en' + i).css(fontFamilies[i])
      } else {
        $('#en' + i).css(fontFamilies.all)
      }
    }
  }
}

var slang = function slang () {
  // function to toggle hide show english and arabic elments
  if (localStorage.arabic === 'Yes') {
    localStorage.arabic = 'No'
    for (var i = 0; i < noi; i += 1) {
      if ($('#en' + i)) { // check if element exist
        $('#en' + i).html(ENGLISH['en' + i])
      }
    }
    $('#ilogo').attr('src', 'images/logo.gif')
    $('#guig').attr('src', 'images/gui.gif')
    $('#uia').attr('src', 'images/version.gif')
    $('#pimg').attr('src', 'images/phone.png')
    $('#licl').attr('href', 'https://en.wikipedia.org/wiki/Mozilla_Public_License')
    $('.mlink').attr('data-target', '#mailus')
  } else {
    localStorage.arabic = 'Yes'
    for (i = 0; i < noi; i += 1) {
      if ($('#en' + i)) {
        $('#en' + i).html(ARABIC['en' + i])
      }
    }
    addStyle()
    $('#ilogo').attr('src', 'images/logo_ar.gif')
    $('#guig').attr('src', 'images/gui_ar.gif')
    $('#uia').attr('src', 'images/version_ar.gif')
    $('#pimg').attr('src', 'images/phone_ar.png')
    $('#licl').attr('href', 'https://ar.wikipedia.org/wiki/Mozilla_Public_License')
    $('.mlink').attr('data-target', '#mailus_ar')
  }
}

var wmsg = function wmsg () {
  // just a wraning message
  alert('Notice: this website is still under construction ..\n\n\n تنبيه: هذا الموقع لزال قيد الإنشاء ..')
}

var tlock = function tlock () {
  // to toggle lock or unlock navbar
  if ($('#lockit').hasClass('fa-lock')) {
    localStorage.lock = 'No'
    $('#lockit').removeClass('fa-lock')
    $('#lockit').addClass('fa-unlock')
    $('#thev').removeClass('fixed-top')
  } else {
    localStorage.lock = 'Yes'
    $('#lockit').removeClass('fa-unlock')
    $('#lockit').addClass('fa-lock')
    $('#thev').addClass('fixed-top')
  }
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
  if (localStorage.arabic === 'Yes') {
    loader = beloading({
      duration: 2,
      text_font: '"Changa", sans-serif',
      text: ARABIC['loading']
    })
  } else {
    loader = beloading({
      duration: 2,
      text: ENGLISH['loading']
    })
  }
  if (localStorage.arabic === undefined) localStorage.arabic = 'No'
  if (localStorage.arabic === 'Yes') slang()
  if (localStorage.lock === undefined) localStorage.lock = 'No'
  if (location.href.substr(location.href.length - 2) === 'ar') {
    if (localStorage.arabic === 'No' || localStorage.arabic === undefined) slang()
  }
})

window.addEventListener('load', function () {
  // things todo, when everything loaded
  addStyle() // add arabic fonts
  // locking if locked before
  if (localStorage.lock === 'Yes') {
    setTimeout(function () {
      tlock()
    }, loader.defaults.effect_duration)
  }
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
