jQuery(document).ready(function($){
    var header_toggler = $('.header__toggler');
    var nav = $('.nav');
    var filter = $('.filter');
    var portfolio_box = $('.portfoliobox');
    var contact_form = $('#contact__form');
    var btn_backtop = $('.btn__backtop');

    const on__none= (e) => e.addClass('d_none');
    const off__none = (e) => e.removeClass('d_none');
    const on__flex = (e) => e.addClass('d_flex');
    const on__active = (e) => e.addClass('active');
    const off__active = (e) => e.removeClass('active');
    const on__slideInDown = (e) => e.addClass('animation__slideInDown');
    const off__slideInDown = (e) => e.removeClass('animation__slideInDown');
    const on__slideOutUp = (e) => e.addClass('animation__slideOutUp');
    const off__slideOutUp = (e) => e.removeClass('animation__slideOutUp');
    const on__slideInRight = (e) => e.addClass('animation__slideInRight');
    const off__slideInRight = (e) => e.removeClass('animation__slideInRight');
    const on__slideOutRight = (e) => e.addClass('animation__slideOutRight');
    const off__slideOutRight = (e) => e.removeClass('animation__slideOutRight');
    
    /** DESPLIEGUE MENU MOVIL **/
    header_toggler.on('click', (e) => {
        if( nav.hasClass('d_none') ) { off__none(nav); on__slideInDown(nav); on__active(header_toggler); } 
        else if( nav.hasClass('animation__slideInDown') ) { off__slideInDown(nav); on__slideOutUp(nav); off__active(header_toggler); } 
        else if( nav.hasClass('animation__slideOutUp') ) { off__slideOutUp(nav); on__slideInDown(nav); on__active(header_toggler); }
    });

    nav.on('click', (e) => {
        if( nav.hasClass('animation__slideInDown') ) { off__slideInDown(nav); on__slideOutUp(nav); off__active(header_toggler); }
    });

    /** SCROLL TOP **/
    $(window).on('scroll', (e) => {
        var scroll = $(window).scrollTop();
        var scrollTop = 50;
        if ( scroll > scrollTop && btn_backtop.hasClass('d_none') ) { off__none(btn_backtop); on__flex(btn_backtop); on__slideInRight(btn_backtop); }
        else if ( scroll < scrollTop && btn_backtop.hasClass('animation__slideInRight') ) { off__slideInRight(btn_backtop); on__slideOutRight(btn_backtop); }
        else if ( scroll > scrollTop && btn_backtop.hasClass('animation__slideOutRight') ) { off__slideOutRight(btn_backtop); on__slideInRight(btn_backtop); }
        else { e.preventDefault(); }
    });

    /** FILTRO CATEGORIAS **/
    filter.on('click', (e) => {
        let filter_target = $(e.target);
        let filter_attr =  filter_target.attr('data-filter-btn');
        let filter_boxes = $('[data-filter-box="'+ filter_attr +'"]');

        if(!filter_target.hasClass('active') && !filter_target.hasClass('all')) { off__active(filter); on__active(filter_target); on__none(portfolio_box); off__none(filter_boxes); }
        else if(filter_target.hasClass('all') && !filter_target.hasClass('active')) { off__active(filter); on__active(filter_target); off__none(portfolio_box); }
        else { e.preventDefault(); }
        
    });

    /** VALIDACIÓN FORMULARIO CONTACTO **/
    contact_form.validate();
});