/* global location, $, localStorage, alert, jQuery, beloading, ARABIC, ENGLISH */ // to avoide false linter

var version = ' 0.3.1 beta' // current version to modify all, easily
var loader = false // global name for beloader to get duration
var unique = false // global name for uniqueness
var allIn = {} // private object

allIn.links = {
  sourceforge: {
    windows: 'https://sourceforge.net/projects/free-queue-manager/files/FQM%200.3.1/FQM_Windows_0.3.1.zip/download',
    linux: 'https://sourceforge.net/projects/free-queue-manager/files/FQM%200.3/FQM_Linux_0.3.zip/download',
    macos: 'https://sourceforge.net/projects/free-queue-manager/files/FQM%200.3/FQM_MacOS_0.3.zip/download'
  },
  archive: {
    windows: 'https://archive.org/download/free_queue_manager03/FQM_Windows_0.3.1.zip',
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
    $('#winl').attr('thelink', allIn.links.sourceforge.windows).attr('target', '_blank')
    $('#linl').attr('thelink', allIn.links.sourceforge.linux).attr('target', '_blank')
    $('#macl').attr('thelink', allIn.links.sourceforge.macos).attr('target', '_blank')
  } else {
    $('#sourceforge').removeClass('active')
    $('#sourceforge').prop('disabled', false)
    $('#archive').prop('disabled', true)
    $('#archive').addClass('active')
    $('#winl').attr('thelink', allIn.links.archive.windows).attr('target', '')
    $('#linl').attr('thelink', allIn.links.archive.linux).attr('target', '')
    $('#macl').attr('thelink', allIn.links.archive.macos).attr('target', '')
  }
  $('#winl').fadeOut().fadeIn()
  $('#linl').fadeOut().fadeIn()
  $('#macl').fadeOut().fadeIn()
}

var toShare = function toShare (id) {
  // to load shareUs easily or easierly 
  if (shareus) {
    $('.navbar').removeClass('fixed-top')
    shareus({
      text: 'Make queue management systems great again !',
      textStyle: {'font-family': '"Changa", sans-serif'},
      buttonText: "I don't care. Download",
      buttonClass: 'h3 navbar-btn btn-secondary ar1',
      buttonLink: $('#' + id).attr('thelink'),
      shareLink: 'https://fqms.github.io'
    }, callback=function () {
      $('.navbar').addClass('fixed-top')
    }).__init__()
  }
}

jQuery(document).ready(function ($) {
  // things todo when jquery loads
  $('.version').append(version)
  loader = beloading({
    duration: 2,
    text_font: '"Changa", sans-serif',
    text: "Free Queue Manager is loading ..."
  }, callback=function () {
    setTimeout(
      function () {
        allIn.toCallForAll = function () {
          $('#thev').addClass('fixed-top')
        }
        msgNotifier({
          url_hash: ['thanke', 'thankj'],
          iconClass: ['fa fa-envelope', 'fa fa-address-card'],
          text: [
            'Thanks for contacting us, will replay as soon as possible.',
            'Thanks for joining our mailing list, Will keep you updated.'
          ],
          textStyle: {
            'color': 'white',
            'font-family': '"Changa", sans-serif',
            'text-shadow': '0 0 30px rgba(255,255,255,0.5)'
          },
          buttonStyle: {
            'color': 'white',
            'font-family': '"Changa", mono',
            'font-size': '140%',
            'font-stretch': 'ultra-expanded'
          }
        }, callback=allIn.toCallForAll)
      }, 1800
    )
  })
  unique = uniqueness({
    effect: 'fade',
    effect_duration: 1.2
  })
})
