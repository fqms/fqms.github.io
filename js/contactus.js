// Dependencies: jQuery, jQuery-ui, FontAwesome

var contactUs = function (options={}, callback=function () {}) {
    returnCUS = {
        loop: false // to store effect loop
    } // unique object name to return
    
    returnCUS.options = {
        title: options.title || 'ContactUs',
        email: options.email || '',
        nextUrl: options.nextUrl || '',
        formClass: options.formClass || '',
        titleText: options.titleText || 'Contact Us',
        titleClass: options.titleClass || '',
        titleStyle: options.titleStyle || {},
        nameText: options.nameText || 'Name : ',
        nameClass: options.nameClass || '',
        nameStyle: options.nameStyle || {},
        emailText: options.emailText || 'E-mail : ',
        emailClass: options.emailClass || '',
        emailStyle: options.emailStyle || {},
        commentText: options.commentText || 'Enter you message : ',
        commentClass: options.commentClass || '',
        commentStyle: options.commentStyle || {},
        submitText: options.submitText || 'Send',
        submitClass: options.submitClass || '',
        submitStyle: options.submitStyle || {},
        cancelText: options.cancelText || 'Cancel',
        cancelClass: options.cancelClass || '',
        cancelStyle: options.cancelStyle || {},
        inputStyle: options.inputStyle || {},
        errorStyle: options.errorStyle || {},
        overlayColor: options.overlayColor || 'rgba(0,0,0,0.85)',
        overlayClass: options.overlayClass || '',
        overlayStyle: options.overlayStyle || {},
        effectDuration: options.effectDuration * 1000 || 1000
        
    }

    returnCUS.toEffectMsg = function (id) {
        if ($(id).val().length < 3 || $(id).val().indexOf('@') || $(id).val().indexOf('.')) {
            event.preventDefault()
            $(id).after($('<h3>').addClass(returnCUS.options.titleClass).css(returnCUS.options.titleStyle)
            .text('| Please, enter a valid email ... |').attr('id', id + Eff))
            $(id + Eff).stop()
            .animate({'opacity': '0'}, 1000).animate({'opacity': '1'}, 1000)
            .animate({'opacity': '0'}, 1000).animate({'opacity': '1'}, 1000)
            .animate({'opacity': '0'}, 1000).animate({'opacity': '1'}, 1000)
            .animate({'opacity': '0'}, 1000).animate({'opacity': '1'}, 1000)
        } else $(id + Eff).remove()
    }

    returnCUS.elements = { // list of jQuery elements to be appended
        title: $('<div>').css({'display': 'flex', 'flex-direction': 'row', 'justify-content': 'center'}).append($('<h1>').addClass(returnCUS.options.titleClass).css(returnCUS.options.titleStyle).text(returnCUS.options.titleText)),
        form: $('<form>').attr('method', 'POST').addClass(returnCUS.options.formClass).attr('action', returnCUS.options.email)
        .append($('<div>').css({'margin-top': '3%'}).addClass('form-group').append(
            $('<label>').attr('for', 'inpName').addClass(returnCUS.options.nameClass).text(returnCUS.options.nameText).css(returnCUS.options.nameStyle)
        ).append(
            $('<input>').attr('type', 'text').attr('name', 'name').attr('id', 'inpName').addClass('form-control')
            .attr('placeholder', 'Bertrand Russell').css(returnCUS.options.inputStyle)
        )).append($('<div>').css({'margin-top': '3%'}).addClass('form-group').append(
            $('<label>').attr('for', 'inpEmail').addClass(returnCUS.options.emailClass).text(returnCUS.options.emailText).css(returnCUS.options.emailStyle)
        ).append(
            $('<input>').attr('type', 'email').attr('name', 'email').attr('id', 'inpEmail').addClass('form-control')
            .attr('placeholder', 'bertrand@gmail.com').css(returnCUS.options.inputStyle)
        )).append($('<div>').css({'margin-top': '3%'}).addClass('form-group').append(
            $('<label>').attr('for', 'inpCom').addClass(returnCUS.options.commentClass).text(returnCUS.options.commentText).css(returnCUS.options.commentStyle)
        ).append(
            $('<textarea>').attr('rows', '7').attr('name', 'comment').attr('id', 'inpCom').addClass('form-control')
            .attr('placeholder', 'Hello dear developer ...').css(returnCUS.options.inputStyle)
        )).submit(
          function (event) {
            if ($('#inpName').val().length < 2) {
                event.preventDefault()
                if (!$('#nameToEff').length) {
                    $('#inpName').after($('<h4>').addClass(returnCUS.options.titleClass).css(Object.assign({'text-align': 'center', 'margin-top': '2%'}, returnCUS.options.errorStyle))
                    .text('| Please, enter a valid name |').attr('id', 'nameToEff'))
                }
                $('#nameToEff').stop()
                .animate({'opacity': '0'}, 1000).animate({'opacity': '1'}, 1000)
                .animate({'opacity': '0'}, 1000).animate({'opacity': '1'}, 1000)
                .animate({'opacity': '0'}, 1000).animate({'opacity': '1'}, 1000)
                .animate({'opacity': '0'}, 1000).animate({'opacity': '1'}, 1000)
            } else $('#nameToEff').remove()
            if ($('#inpEmail').val().length < 3 || $('#inpEmail').val().indexOf('@') === -1 || $('#inpEmail').val().indexOf('.') === -1) {
                event.preventDefault()
                if (!$('#emailToEff').length) {
                    $('#inpEmail').after($('<h4>').addClass(returnCUS.options.titleClass).css(Object.assign({'text-align': 'center', 'margin-top': '2%'}, returnCUS.options.errorStyle))
                    .text('| Please, enter a valid email |').attr('id', 'emailToEff'))
                }
                $('#emailToEff').stop()
                .animate({'opacity': '0'}, 1000).animate({'opacity': '1'}, 1000)
                .animate({'opacity': '0'}, 1000).animate({'opacity': '1'}, 1000)
                .animate({'opacity': '0'}, 1000).animate({'opacity': '1'}, 1000)
                .animate({'opacity': '0'}, 1000).animate({'opacity': '1'}, 1000)
            } else $('#emailToEff').remove()
            if ($('#inpCom').val().length < 5) {
                event.preventDefault()
                if (!$('#comToEff').length) {
                    $('#inpCom').after($('<h4>').addClass(returnCUS.options.titleClass).css(Object.assign({'text-align': 'center', 'margin-top': '2%'}, returnCUS.options.errorStyle))
                    .text('| Please, enter a proper message |').attr('id', 'comToEff'))
                }
                $('#comToEff').stop()
                .animate({'opacity': '0'}, 1000).animate({'opacity': '1'}, 1000)
                .animate({'opacity': '0'}, 1000).animate({'opacity': '1'}, 1000)
                .animate({'opacity': '0'}, 1000).animate({'opacity': '1'}, 1000)
                .animate({'opacity': '0'}, 1000).animate({'opacity': '1'}, 1000)
            } else $('#comToEff').remove()
          }
        )
        .append($('<input>').attr('type', 'hidden').attr('name', '_subject').attr('value', returnCUS.options.title))
        .append($('<input>').attr('type', 'text').attr('name', '_gotcha').css({'display': 'none'}))
        .append($('<input>').attr('type', 'hidden').attr('name', '_next').attr('value', returnCUS.options.nextUrl)),
        submit: $('<h2>').css(returnCUS.options.submitStyle).addClass(returnCUS.options.submitClass).text(returnCUS.options.submitText).click(
            function () {
                $(returnCUS.elements.form).submit()
            }
        ).hover(
            function () {
                returnCUS.__effect__()
                $(this).stop().animate({'opacity': '0.4'})
            }, function () {
                $(this).animate({'opacity': '1'})
                returnCUS.__effect__()
            }
        )
    }

    returnCUS.elements.row = $('<div>').css({
        'display': 'flex',
        'flex-direction': 'row',
        'justify-content': 'space-around'
    }).append(
        $('<h2>').css(returnCUS.options.cancelStyle).addClass(returnCUS.options.cancelClass).text(returnCUS.options.cancelText).click(
            function () {
                returnCUS.__exit__()
            }
        ).hover(
            function () {
                returnCUS.__effect__()
                $(this).stop().animate({'opacity': '0.4'})
            }, function () {
                $(this).animate({'opacity': '1'})
                returnCUS.__effect__()
            }
        )
    ).append(
        returnCUS.elements.submit
    )

    returnCUS.elements.overlay = $('<div>')
    .addClass(returnCUS.options.overlayClass)
    .css(Object.assign({
        'display': 'flex',
        'position': 'fixed',
        'opacity': '0',
        'background-color': returnCUS.options.overlayColor,
        'width': '100%',
        'height': '100%',
        'top': '0',
        'bottom': '0',
        'left': '0',
        'right': '0',
        'z-index': '10',
        'flex-direction': 'column',
        'align-items': 'stretch',
        'justify-content': 'space-around',
        'padding-left': '20%',
        'padding-right': '20%'
    }, returnCUS.options.overlayStyle))
    .append(returnCUS.elements.title)
    .append(returnCUS.elements.form)
    .append(returnCUS.elements.row)

    returnCUS.__effect__ = function (toKill=false) {
        if (returnCUS.loop || toKill) {
            clearInterval(returnCUS.loop)
            returnCUS.loop = false
        } else {
            var toSubEffect = function () {
                $(returnCUS.elements.submit).stop().animate({'opacity': '0'}, 1000).animate({'opacity': '1'}, 1000)
            }
            returnCUS.loop = setInterval(toSubEffect, 2000)
        }
    }

    returnCUS.__init__ = function () {
        $('body').append(returnCUS.elements.overlay)
        $(returnCUS.elements.overlay).animate({'opacity': '1'}, returnCUS.options.effectDuration)
        returnCUS.__effect__()
    }

    returnCUS.__exit__ = function () {
        $(returnCUS.elements.overlay).animate({'opacity': '0'}, (returnCUS.options.effectDuration),
        complete=function () {
            $(returnCUS.elements.overlay).remove()
            returnCUS.__effect__(true)
            callback()
        })
    }

    return returnCUS
}