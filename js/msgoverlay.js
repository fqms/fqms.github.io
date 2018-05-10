// Dependencies: jQuery, jQuery-UI, Bootstrap

var msgOverlay = function msgOverly (options={}) {
    var __toReturn__ = {}
    
    __toReturn__.options = {
        id: options.id || 'msgOverlay',
        text: options.text || '',
        textClass: options.textClass || '',
        textStyle: options.textStyle || {},
        textElement: options.textElement || 'h1',
        cancelText: options.cancelText || 'X',
        cancelClass: options.cancelClass || '',
        cancelStyle: options.cancelStyle || {},
        cancelElement: options.cancelElement || 'h2',
        overlayColor: options.overlayColor || 'rgba(0,0,0,0.85)',
        overlayStyle: options.overlayStyle || {},
        duration: options.duration * 1000 || 8000,
    }

    __toReturn__.timeout = false // to store overlay timeout in

    __toReturn__.elements = {
        text: $('<' + __toReturn__.options.textElement + '>').text(__toReturn__.options.text).addClass(__toReturn__.options.textClass).css(Object.assign({
            'color': 'white',
            'font-family': 'Georgia, Times, serif',
            'text-shadow': '0 0 30px rgba(255,255,255,0.5)',
            'flex': '3'
        }, __toReturn__.options.textStyle)).addClass('text-center'),
        cancel: $('<' + __toReturn__.options.cancelElement + '>').text(__toReturn__.options.cancelText).addClass('pull-left ' + __toReturn__.options.cancelClass).css(Object.assign({
            'color': 'white',
            'font-family': 'Georgia, Times, serif',
            'text-shadow': '0 0 30px rgba(255,255,255,0.5)',
            'cursor': 'pointer',
            'flex': '1'
        }, __toReturn__.options.cancelStyle)).hover(
            function () {
                this.animate({'color': 'gray'})
            },
            function () {
                this.animate({'color': 'white'})
            }
        ).click(function () {
            __toReturn__.__exit__()
        })
    }

    __toReturn__.overlay = $('<div>').attr('id', __toReturn__.options.id).css(Object.assign({
        'display': 'flex',
        'position': 'fixed',
        'opacity': '0',
        'background-color': __toReturn__.options.overlayColor,
        'width': '100%',
        'height': '100%',
        'top': '0',
        'bottom': '0',
        'left': '0',
        'right': '0',
        'z-index': '2',
        'flex-direction': 'column',
        'align-items': 'center',
        'justify-content': 'space-around'
    }, __toReturn__.options.overlayStyle)).append(__toReturn__.cancel).append(__toReturn__.text)

    __toReturn__.__init__ = function __init__ () {
        console.log('inside init')
        if (window.location.href.split('#').slice(-1)[0] === __toReturn__.options.id) {
            console.log('inside condition')
            $('body').append(__toReturn__.elements.overlay)
            $('#' + __toReturn__.options.id).animate({'opacity': '1'})
            __toReturn__.timeout = setTimeout(function () {
                __toReturn__.__exit__()
            }, __toReturn__.options.duration)
        }
    }

    __toReturn__.__exit__ = function __exit__ () {
        if (__toReturn__.timeout) clearTimeout(__toReturn__.timeout)
        $('#' + __toReturn__.options.msgOverlay).animate({'opacity': '0'}, complete=function () {
            $('#' + __toReturn__.options.id).remove()
        })
    }

    __toReturn__.__init__()
    return __toReturn__
}