function imageLoader (selector) {
  selector = selector ||'.imageLoader'
  var images = Array.prototype.slice.call(document.querySelectorAll(selector))
  var loadingCss = 'fa fa-refresh fa-spin fa-5x fa-fw mb-2'.split(' ')

  images.forEach(function (image) {
    var parent = image.parentElement
    var src = image.getAttribute('loader')
    var span = document.createElement('span')
    span.style.setProperty('display', 'none', 'important')
    image.style.setProperty('display', 'none', 'important')

    loadingCss.forEach(function (css) { span.classList.add(css) })
    parent.insertBefore(span, parent.firstChild)
    $(span).fadeIn(1000)

    $(image).on('load', function () {
      $(span).fadeOut(1500)
      $(image).fadeIn(2500)
    })

    image.src = src
  })
}
