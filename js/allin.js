/* global location, $, localStorage, alert, jQuery, releases */ // to avoide false linter

var version = false
Object.keys(releases).forEach(function (v) {
  if (window.navigator.userAgent.indexOf(v) !== -1) {
    version = releases[v] // current version to modify all, easily
  }
})
if (!version) version = releases['Windows']
var loader = false // global name for beloader to get duration
var unique = false // global name for uniqueness
var allIn = {} // private object

allIn.links = {
  sourceforge: {
    windows: 'https://sourceforge.net/projects/free-queue-manager/files/0.8.1/FQM_win_081.zip/download',
    linux: 'https://sourceforge.net/projects/free-queue-manager/files/0.8.1/FQM_linux_081.zip/download',
    macos: 'https://sourceforge.net/projects/free-queue-manager/files/0.8.1/FQM_mac_081.zip/download'
  },
  github: {
    windows: 'https://github.com/mrf345/FQM/releases/download/0.8.1/FQM_win_081.zip',
    linux: 'https://github.com/mrf345/FQM/releases/download/0.8.1/FQM_linux_081.zip',
    macos: 'https://github.com/mrf345/FQM/releases/download/0.8.1/FQM_mac_081.zip'
  }
}

var wmsg = function wmsg () {
  // just a warning message
  alert('Notice: this website is still under construction ...\n\n\n')
}

var lswitch = function lswitch () {
  // function to switch links
  if ($('#github').hasClass('active')) {
    $('#github').removeClass('active')
    $('#sourceforge').addClass('active')
    $('#sourceforge').prop('disabled', true)
    $('#github').prop('disabled', false)
    $('#winl').attr('href', allIn.links.sourceforge.windows).attr('target', '_blank')
    $('#linl').attr('href', allIn.links.sourceforge.linux).attr('target', '_blank')
    $('#macl').attr('href', allIn.links.sourceforge.macos).attr('target', '_blank')
  } else {
    $('#sourceforge').removeClass('active')
    $('#sourceforge').prop('disabled', false)
    $('#github').prop('disabled', true)
    $('#github').addClass('active')
    $('#winl').attr('href', allIn.links.github.windows).attr('target', '')
    $('#linl').attr('href', allIn.links.github.linux).attr('target', '')
    $('#macl').attr('href', allIn.links.github.macos).attr('target', '')
  }
  $('#winl').fadeOut().fadeIn()
  $('#linl').fadeOut().fadeIn()
  $('#macl').fadeOut().fadeIn()
}

// var toShare = function toShare (id) {
//   // to load shareUs easily or easierly 
//   if (shareus) {
//     $('.navbar').removeClass('fixed-top')
//     shareus({
//       text: 'Make queue management systems great again !',
//       textStyle: {'font-family': '"Changa", sans-serif'},
//       buttonText: "I don't care. Download",
//       buttonClass: 'h3 navbar-btn btn-secondary ar1',
//       buttonLink: $('#' + id).attr('thelink'),
//       shareLink: 'https://fqms.github.io'
//     }, callback=function () {
//       $('.navbar').addClass('fixed-top')
//     }).__init__()
//   }
// }

allIn.typicalStyle = {
  'color': 'white',
  'font-family': '"Changa", sans-serif',
  'text-shadow': '0 0 30px rgba(255,255,255,0.5)'
}

allIn.emailText = '| Please, enter a valid email ... |'
allIn.emailValidator = function (data) {
  return data.length > 3 && data.indexOf('@') !== -1 && data.indexOf('.') !== -1
}

var contactUsStore  = function () {
  $('.navbar').removeClass('fixed-top')
  contactUs({
    title: 'FQM ' + version,
    titleText: 'Contact Us',
    email: '//us-central1-fqms-202404.cloudfunctions.net/api/support',
    nextUrl: '//fqms.github.io/#thanke',
    titleStyle: allIn.typicalStyle,
    nameStyle: allIn.typicalStyle,
    emailStyle: allIn.typicalStyle,
    commentText: 'Your message : ',
    commentStyle: allIn.typicalStyle,
    errorStyle: allIn.typicalStyle,
    submitStyle: Object.assign({
      'margin-right': '10%',
      'cursor': 'pointer'
    }, allIn.typicalStyle),
    cancelStyle: Object.assign({
      'margin-left': '10%',
      'cursor': 'pointer'
    }, allIn.typicalStyle),
    inputStyle: {'font-family': '"Changa", sans-serif'}
  }, callback=function () {
    $('.navbar').addClass('fixed-top')
  }).__init__()
}
