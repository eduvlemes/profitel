
theme.settings.sliders.brands = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: theme.settings.sliders.config.prevArrow,
    nextArrow: theme.settings.sliders.config.nextArrow,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows : true,
                centerMode: false
            }
        }
    ]
}
theme.settings.avisoEstoque = 5;
theme.settings.sliders.benefitsStripe = {
    dots: false,
    infinite: true,
    autoplay:true,
    autoplaySpeed:3000,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows:false,
    dots:false,
    prevArrow: theme.settings.sliders.config.prevArrow,
    nextArrow: theme.settings.sliders.config.nextArrow,
    responsive: [
        {
        breakpoint: 9999,
        settings: "unslick"
        },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
        }
    ]
};

theme.settings.sliders.products = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow: theme.settings.sliders.config.prevArrow,
    nextArrow: theme.settings.sliders.config.nextArrow,
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,            
            centerMode:true
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode:false
        }
        }
    ]  
}

theme.stripe.content = "<div><a href='#'>Frete grátis nas compras acima de R$ 1.999,00</a></div><div>Parcele em até 6x sem juros</div><div>5% de desconto pagando via pix ou boleto</div><a href='#'>Atendimento</a></div>";
theme.stripe.color = "#fff";
theme.stripe.background = "#000";
theme.stripe.position = 1;
theme.stripe.fixed = false;

theme.settings.imageSize = 1;



theme.settings.footer.content1 = '';
theme.settings.footer.content2 = '';
theme.settings.footer.content3 = '';
theme.settings.footer.content4 = '';

theme.settings.footer.content5 = '';
theme.settings.footer.content6 = '';
theme.settings.footer.content7 = '';
theme.footerLegal = '<a href="'+ theme.info.external +'" target="_blank">'+ theme.info.icon +'</a><a href="'+ theme.info.ref +'" title="Loja Integrada - Plataforma de loja virtual." target="_blank"><img loading="lazy" src="https://cdn.awsli.com.br/production/static/whitelabel/lojaintegrada/img/logo-rodape-loja-pro.png?v=bf1207d" alt="Logomarca Loja Integrada" style="opacity: 1 !important; display: inline !important; visibility: visible !important; margin: 0 !important; position: static !important; max-width: 1000px !important; max-height: 1000px !important; width: auto !important; height: auto !important;">          </a>';
    // $('#rodape > div:last-child a').attr('href',theme.info.ref);
    // $('#rodape > div:last-child a').before('<a href="'+ theme.info.external +'" target="_blank">'+ theme.info.icon +'</a>');        
theme.build.footer = function(template){
    theme.templates.footer = `
        <div class="row-flex justify-content-between">
            <div class="col">
                <h4 class="toggler">Nossa Empresa</h4>
                <div id="theme_footer-content1">${theme.footerPages}</div>
            </div>
            <div class="col">
                <h4  class="toggler">Legal e Cookies</h4>
                <div id="theme_footer-content2">${theme.footerPages}</div>
            </div>
            <div class="col social">
                <h4>Siga-nos</h4>
                <div id="theme_footer-content3">${theme.socialIcons}</div>
            </div>
            <div class="col">
                <h4  class="toggler">Atendimento</h4>
                <div id="theme_footer-content4"><div id="custom_contato"></div></div>
            </div>
        </div>
        <div class="row-flex justify-content-between middle">
            <div class="col">
                <h4  class="toggler">Formas de Pagamento</h4>
                <div id="theme_footer-content5">${theme.footerPayments}${theme.footerGateways}</div>
            </div>
            <div class="col">
                <h4  class="toggler">Loja segura</h4>
                <div id="theme_footer-content6"><ul>${$(theme.footerSeals).find('ul').html()}</ul></div>
            </div>
            <div class="col">
                <h4>Desenvolvido por</h4>
                <div id="theme_footer-content7">${theme.footerLegal || ''}</div>
            </div>
        </div>
        <div class="row-flex justify-content-center copy">
            <div class="col-auto text-center">
                <p>Vendas no Cartão de Crédito sujeitas à análise e confirmação de dados, bem como análise e aprovação de sistema antifraude.
As fotos são ambientadas e meramente ilustrativas. Cada produto é composto apenas pelos itens relacionados na descrição do produto.<br><br>

© Desde 2016 - PROFITEL. Todos os direitos reservados.<br><br>
Todos os direitos dos materiais, incluindo textos, imagens e vídeos, são protegidos por direitos autorais e propriedade intelectual. O uso não autorizado desses materiais é proibido e pode resultar em sanções legais.</p><br><p>${$('#rodape > div:last-child p').text().trim()}</p>
            </div>
        </div>
    `;
    $('#barraNewsletter').remove();
    // Insere o conteúdo no rodapé
    $(theme.newsletter).insertBefore('#rodape');
    $('#rodape .institucional').html(theme.templates.footer);

    document.querySelectorAll('#theme_footer-content3 a').forEach(function(anchor) {
        // Extrai o nome da rede social do atributo "aria-label"
        const socialName = anchor.getAttribute('aria-label').replace('Siga nos no ', '').trim();
    
        // Cria o elemento <span> com o nome da rede social
        const span = document.createElement('span');
        span.textContent = socialName;
    
        // Adiciona o <span> ao link
        anchor.appendChild(span);
    });
    
    $('#rodape .pagamento-selos,#rodape .pagamento-selos ~ *').remove()


    if (theme.isMobile) {
        // Adiciona o ícone de toggle nos títulos
        $('#rodape .row-flex h4.toggler').each(function () {
            const $title = $(this);
            const $content = $title.next(); // Seleciona o conteúdo abaixo do título

            // Adiciona o botão de toggle
            $title.append('<button class="toggle-icon"><i class="fa fa-chevron-down"></i></button>');

            // Esconde o conteúdo inicialmente
            $content.hide();

            // Adiciona o evento de clique no botão de toggle
            $title.on('click', function (e) {
                e.preventDefault();
                $content.slideToggle(); // Expande ou recolhe o conteúdo
                $(this).find('i').toggleClass('fa-chevron-down fa-chevron-up'); // Alterna o ícone
            });
        });
        $('#rodape .row-flex h4:not(.toggler)').closest('.col').prependTo('#rodape .row-flex:last-child');
    }
    // $('#barraNewsletter, .pagamento-selos').remove();
    // $('#rodape .institucional').html(theme.templates.footer);
    // $('#theme_footer-content1').append(theme.footerPages);
    // $('#theme_footer-content2').append(theme.footerCategories);
    // $('#theme_footer-content3').append(theme.footerPayments);
    // $('#theme_footer-content3').append(theme.footerGateways);
    // $('#theme_footer-content3').append(theme.footerSeals);

    // if(theme.settings.footer.logo) $('#theme_footer-content-institutional').append($(theme.logo).find('a').html());
    // if(theme.settings.footer.institutional) $('#theme_footer-content-institutional').append('<p>' + theme.storeDescription + '</p>');
    // if(theme.settings.footer.institutional && theme.settings.footer.social) $('#theme_footer-content-institutional').append('<div id="theme_footer-content-institutional-social">' + theme.socialIcons + '</div>');
    
    // theme.newsletter == "" ? $('#theme_footer-content4').parent('.col-auto').remove() : $('#theme_footer-content4').append(theme.newsletter);
    
    // $('#rodape .selos').find('.titulo').remove();
    // $('#rodape .selos').attr('class','selos');
    if($('.pagina-carrinho').length > 0 && theme.isMobile){
        $('#rodape').prepend('<div id="custom_contato"></div>');
        theme.storeWhatsapp = '(11) 99999-9999';
    }
    $('#custom_contato').prepend('<div class="contact"><i class="fa fa-clock-o atendimento"></i><div><b>Atendimento</b><small style="font-weight:600;display:block;margin:.5rem 0 .25rem 0;">Segunda à Sexta</small><div style="font-size:12px;">08:30h às 11:30 - 13:15h às 17h30h</div></div></div>'); 
    $('#custom_contato').prepend('<div class="contact"><i class="fa fa-envelope-o email"></i><div><b>Email</b><a href="mailto:vendas@profitel.com.br" target="_blank">vendas@profitel.com.br</a></div></div>');
       
    if(theme.storeWhatsapp){
        $('#custom_contato').prepend('<div class="contact whatsapp"><i class="fa fa-whatsapp"></i><div><b>WhatsApp</b><a href="https://wa.me/55'+ (theme.storeWhatsapp.replaceAll('(','').replaceAll(')','').replaceAll('-','').replaceAll(' ','')) +'" target="_blank">'+ theme.storeWhatsapp +'</a></div></div>');    
    }    
    // if(theme.storePhone){
    //     //$('#custom_contato').prepend('<div class="contact phone"><i class="fa fa-phone"></i><div><b>Televendas</b><a href="tel:'+ (theme.storePhone.replaceAll('(','').replaceAll(')','').replaceAll('-','').replaceAll(' ','')) +'" target="_blank"><span>Compre pelo nosso televendas</span>'+ theme.storePhone +'</a></div></div>');    
    //     $('#custom_contato').append('<div style="margin-top:5px"><a href="tel:'+ (theme.storePhone.replaceAll('(','').replaceAll(')','').replaceAll('-','').replaceAll(' ','')) +'" target="_blank">'+ theme.storePhone +'</a></div>');    
    // }
};

theme.build.header = function(template){
    theme.icon.sideCartClose = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>';

  theme.icon.cart = '<i class="p-svg-ico cart"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512" x="0" y="0" viewBox="0 0 859 859.312" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M621.504 805.688H35.82c-1.175 0-2.355-.055-3.52-.141-22.253-2.05-38.616-21.676-36.6-43.785l48.835-537.07c1.895-20.883 19.13-36.633 40.102-36.633h488.05c20.938.023 38.168 15.773 40.07 36.632l48.829 537.07c.105 1.145.156 2.387.156 3.622.012 22.199-18.027 40.289-40.238 40.304zM84.637 214.91c-6.985 0-12.727 5.246-13.356 12.207L22.45 764.203c-.68 7.367 4.785 13.91 12.156 14.578l1.215.055h585.668c7.399-.016 13.403-6.031 13.403-13.441l-48.88-538.262c-.628-6.961-6.37-12.207-13.35-12.223zm136.61 67.172c-.02-7.406-6.067-13.45-13.458-13.465l.063-26.851c22.125.05 40.183 18.109 40.246 40.238zm0 0" fill="#000000" opacity="1" data-original="#000000"></path><path d="M449.5 322.324c-22.21 0-40.281-18.066-40.281-40.281 0-22.211 18.066-40.277 40.281-40.277 22.21 0 40.277 18.066 40.277 40.277 0 22.215-18.066 40.281-40.277 40.281zm0-53.707c-7.406 0-13.43 6.02-13.43 13.426 0 7.414 6.024 13.43 13.43 13.43 7.41 0 13.426-6.016 13.426-13.43 0-7.406-6.016-13.426-13.426-13.426zM207.816 322.324c-22.207 0-40.277-18.066-40.277-40.281 0-22.211 18.066-40.277 40.277-40.277v26.851c-7.398 0-13.425 6.016-13.425 13.426 0 7.406 6.027 13.43 13.425 13.43 7.403 0 13.43-6.024 13.43-13.43h26.852c0 22.215-18.067 40.281-40.282 40.281zm0 0" fill="#000000" opacity="1" data-original="#000000"></path><path d="M221.246 282.082c-.02-7.406-6.066-13.45-13.457-13.465l.063-26.851c22.125.05 40.183 18.109 40.246 40.238zm0 0" fill="#000000" opacity="1" data-original="#000000"></path><path d="M462.926 255.191H436.07v-120.84c0-59.226-48.183-107.413-107.41-107.413-59.226 0-107.414 48.187-107.414 107.414v120.84h-26.855v-120.84c0-74.04 60.23-134.27 134.27-134.27 74.03 0 134.265 60.23 134.265 134.27zm0 0" fill="#000000" opacity="1" data-original="#000000"></path></g></svg></i>';
  theme.icon.search = '<i class="p-svg-ico"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path></svg></i>';
  theme.icon.account = '<i class="p-svg-ico"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="128" cy="96" r="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M32,216c19.37-33.47,54.55-56,96-56s76.63,22.53,96,56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></svg></i>';
  theme.icon.wishlist = '<i class="p-svg-ico"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,224l89.36-90.64a50,50,0,1,0-70.72-70.72L128,80,109.36,62.64a50,50,0,0,0-70.72,70.72Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></svg></i>';

  theme.icon.atendimento = '<i class="p-svg-ico"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M32.5,138A72,72,0,1,1,62,167.5l-27.76,8.16a8,8,0,0,1-9.93-9.93Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M163.94,80.11A72,72,0,0,1,223.5,186l8.16,27.76a8,8,0,0,1-9.93,9.93L194,215.5A72.05,72.05,0,0,1,92.06,175.89" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg></i>'

  theme.templates.header = `<div id="theme_header_1"><div class="conteiner-fluid"><div class="row-flex align-items-center"><div class="theme_search header_search col"><div id="theme_search"></div></div><div class="col-auto"><button type="button" id="theme_header-menu-trigger"></button></div><div class="col-auto" id="theme_header-logo"></div><div class="col-auto justify-content-center" id="theme_header-menu"></div><div class="col theme_header-functions"><ul id="theme_header-functions"></ul></div></div></div></div>
    
    ${!theme.templates.account ? theme.templates.account = `<div class="theme_aside theme_account right"><div class="theme_aside-header"><button type="button" class="account-trigger" >${theme.icon.sideCartClose}</button><span>${theme.lang.accountTitle}</span></div><div class="theme_aside-content" id="theme_account"></div></div>` : ''}
    ${!theme.templates.filters ? theme.templates.filters = `<div class="theme_aside theme_filter right"><div class="theme_aside-header"><button type="button" class="filter-trigger" >${theme.icon.sideCartClose}</button><span>${theme.lang.filtersTitle}</span></div><div class="theme_aside-content" id="theme_filter"></div></div>` : ''}`;

  $('#cabecalho').html(theme.templates.header);
  $('#theme_header-logo').append(theme.logo);
  $('#theme_header-menu').html(theme.headerMenu);
  $('#theme_header-functions').append('<li>' + theme.headerCart + '</li>');

  $('#theme_header-functions').prepend('<li><button type="button" class="account-trigger">'+ theme.icon.account +'</button></li>');
  $('#theme_header-functions').prepend('<li><a href="/conta/favoritos/listar">'+ theme.icon.wishlist +'</a></li>');
  //$('#theme_header-functions').prepend('<li><button type="button" class="search-trigger">'+ theme.icon.search +'</button></li>');
  
  $('.carrinho .icon-shopping-cart').before(theme.icon.cart);
  $('.carrinho .icon-shopping-cart').remove();
  $('.barra-inicial').remove();

  if(theme.stripe.content){
      let stripe = $('<div id="theme_header-stripe" style="background:'+ theme.stripe.background +'; color:'+ theme.stripe.color +'">'+ theme.stripe.content+'</div>');
      if(theme.stripe.fixed){
          theme.stripe.position == 1 ? stripe.prependTo('#cabecalho') : stripe.appendTo('#cabecalho');
      }else{
          theme.stripe.position == 1 ? stripe.insertBefore('#cabecalho') : stripe.insertAfter('#cabecalho');
      }
      
  } 

  //theme.settings.invertHeader
    if(theme.settings.invertHeader == true){
        $('#cabecalho').addClass('theme_invert');
    }
    $('.menu.superior .nivel-dois').each(function(){
        $(this).find('> li:not(.com-filho):not(.theme_dropdown-image)').wrapAll('<ul class="agrupa-sem-filhos"></ul>');
        $(this).find('> .agrupa-sem-filhos').wrap('<li></li>');

        $(this).find('> li:not(.theme_dropdown-image)').wrapAll('<ul class="nav--links"></ul>');
        $(this).find('> .nav--links').wrap('<li></li>');
    })


    if(theme.isMobile){
       
        

    
        //bar top
        // for(let i =0; i < 6; i++){
        //     $('#theme_header-stripe').append(theme.stripe.content)
        // }
        // $('#theme_header-stripe > *').wrapAll('<div class="animated"></div>');

        $('#theme_header-stripe').apx_slick({
            dots: false,
            infinite: true,
            autoplay:true,
            autoplaySpeed:3000,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: theme.settings.sliders.config.prevArrow,
            nextArrow: theme.settings.sliders.config.nextArrow,
            
        })

        

        // // Create mobile fixed menu
        // const mobileMenu = `
        //     <nav class="theme_mobileMenu">
        //         <ul>
        //             <li>
        //                 <a href="/" title="Home">
        //                     <i class="p-svg-ico"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#393232" viewBox="0 0 256 256"><path d="M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z"></path></svg></i>
        //                     <span>Home</span>
        //                 </a>
        //             </li>
        //             <li>
        //                 <a href="${theme.whatsapp ? theme.whatsapp : '#'}" target="_blank" rel="noopener" title="WhatsApp">
        //                     <i class="p-svg-ico"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#393232" viewBox="0 0 256 256"><path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"></path></svg></i>
        //                     <span>WhatsApp</span>
        //                 </a>
        //             </li>
        //             <li>
        //                 <button type="button" class="account-trigger">
        //                     ${theme.icon.account}
        //                     <span>Minha Conta</span>
        //                 </button>
        //             </li>
        //             <li>
        //                 <a href="/carrinho/index" title="Carrinho" class="float-cart">
        //                     <div>${theme.icon.cart}<span class="cart-count">${$('.carrinho .qtd-carrinho').first().text()}</span></div>
        //                     <span>Carrinho</span>
                            
        //                 </a>
        //             </li>
        //         </ul>
        //     </nav>
        // `;

        // // Append mobile menu to body
        // $('body').append(mobileMenu);

        $('.float-cart').click(function(e){
            e.preventDefault();
            if($('#theme_sideCart #theme_sideCart-content').is(':empty')){
                $("#theme_sideCart-content").load("/carrinho/mini", function() {
                    theme.functions.sideCart()
                })
            }else{
                theme.functions.sideCartToggle();
            }
    
            let carrinho_id = sessionStorage.getItem('carrinho_id');
            let carrinho_minicart = sessionStorage.getItem(`carrinho_minicart`);
            
            if(carrinho_id && carrinho_minicart){
                let cart = {
                    currency: 'BRL',
                    id: carrinho_id,
                    value: JSON.parse(carrinho_minicart).totals.items,
                    coupon: '',
                    items: JSON.parse(carrinho_minicart).items.map(function(item) {
                        return {
                          item_id: item.id.toString(),
                          item_sku: item.sku,
                          item_name: item.name,
                          price: item.price.sellingPrice,
                          quantity: item.quantity
                        }
                      })
                };
                var eventID = sendMetrics({
                    type: 'pageview',
                    name: 'view_cart',
                    data: cart
                });
                $(document).trigger('li_view_cart', [eventID, cart]);            
            } 
        })
    
    

    }     
  
};
theme.build.search = function(template){
  $('body').append(theme.templates.search);
  $('#theme_search').append(theme.searchForm);

  $('#theme_search #auto-complete').attr('placeholder',theme.lang.searchPlaceholder);
  $('#theme_search .botao.icon-search').html(theme.icon.search);
  $('#theme_search .botao.icon-search').removeClass('icon-search');

  $('.search-trigger').click(function(){   
      $('body').toggleClass('asideSearch-visible');         
      $('#theme_search input').val('');
      //$('#theme_search input').autocomplete('destroy');
  });

  $("#theme_search input").autocomplete({
      delay: 300,
      minLength: 5,
      source: function(o, n) {
          $.ajax({
              url: "//api.awsli.com.br/v2/autocomplete/" + LOJA_ID,
              dataType: "json",
              data: {
                  q: o.term,
                  size: 3,
                  ttl: 300
              },
              success: function(p) {
                  n($.map(p.hits, function(q) {
                      console.log(q);
                      if (q.imagens) {
                          return {
                              label: '<span class="img"><img src="' + MEDIA_URL + "80x80/" + q.imagens[0].caminho + '?type=trim" /></span><span>' + q.nome + '</span>',
                              value: q.nome,
                              url: q.canonical_path
                          }
                      } else {
                          return {
                              label: '<span class="img"></span><span>' + q.nome + '</span>',
                              value: q.nome,
                              url: q.canonical_path
                          }
                      }
                  }))
              }
          })
      },
      open: function(n, o) {
          $(this).autocomplete("widget").css("z-index", 100000);
          $(this).autocomplete("widget").width($(this).parent().width())
      },
      select: function(n, o) {
          console.log(o);
          window.location = o.item.url
      }
  });
  $("#theme_search input").each(function() {
      $(this).data("ui-autocomplete")._renderItem = function(n, o) {
          return $("<li></li>").data("item.autocomplete", o).append("<a>" + o.label + "</a>").appendTo(n)
      }
  });
};

theme.functions.customBanners = function(ref){

    //banners mobile
    $('.secao-banners .banner.cheio img').each(function(){
        let alt = $(this).attr('alt');  
        if(alt.includes('[mobile]') && theme.isMobile){
            console.log(alt)
            let findFor = alt.replace('[mobile]','').trim();
            let matchDesktopImage = $(this).closest('.secao-banners').find('img[alt="'+ findFor +'"]');
            console.log('matchDesktopImage',findFor)
            if(matchDesktopImage.length > 0){
                matchDesktopImage.closest('li').remove();
            }
        }     
        // if(!alt.includes('[mobile]') && theme.isMobile){
        //     $(this).closest('li').remove();                        
        // }
        if(alt.includes('[mobile]') && !theme.isMobile){
            $(this).closest('li').remove();                        
        }
    });

    let movie = false;
    $('.secao-banners .banner.cheio img').each(function(){
        let alt = $(this).attr('alt');        
        if(alt.includes('[movie]')){
            movie = true;
            let iframeLink = $(this).closest('a').attr('href');
            let iframe = $('<iframe id="theme_fullMovie"  src="https://www.youtube-nocookie.com/embed/'+ iframeLink +'?'+ (alt.includes('[autoplay]') ? 'autoplay=1&mute=1&' : '') +'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>');
            let li = $(this).closest('li');
            li.find('img').remove();
            li.find('a').remove();
            li.append(iframe);     
            
            let regExp = /\[proporcao:(.*?)\]/;
            let match = regExp.exec(alt);
            console.log(match);
            if(match[1]){
                $('#theme_fullMovie').css('height',(window.innerWidth * parseFloat(match[1])) + 'px');
            }
            
            
        }        
    });
    $('.secao-banners .banner.cheio img').each(function(){
        let alt = $(this).attr('alt');    
        let img = $(this)            
        if(alt.includes('[section]')){
            let removeAfter = $(this).closest('li');
            let description = $(this).closest('li').find('p.info-banner.titulo');
            window.theme_section.items.push({
                img: img.attr('src'),
                title: img.attr('alt').replace(' [section]', '').trim(),
                description: description.text().trim(),
                button: `Comprar ${img.attr('alt').replace('[section]', '').trim()}`,
                link: img.closest('a').attr('href'),
            });  
            
            removeAfter.remove();
        }
    }); 

  //slider categorias    
  $('.secao-banners .banner.cheio img').each(function(){
      let alt = $(this).attr('alt');                
      if(alt.includes('[slider-categorias]')){
          if($('#theme_categorySlider').length == 0){
              $('<div id="theme_categorySlider"><div class="slides"></div></div>').prependTo('#corpo > .conteiner');
          }
          $(this).closest('li').appendTo('#theme_categorySlider > .slides');               
      }
  });
  $('#theme_categorySlider li').wrap('<div class="item"/>').contents().unwrap();
  $('#theme_categorySlider > .slides').apx_slick(theme.settings.sliders.categorySlider);

    //slider categorias    
    $('.banner.vitrine img').each(function(){
        let alt = $(this).attr('alt');                
        if(alt.includes('[bullet]')){
            if($('#theme_bullets').length == 0){
                $('<ul id="theme_bullets"></ul>').prependTo('#corpo > .conteiner');
            }
            $(this).closest('li').appendTo('#theme_bullets');               
        }
    });

    if(theme.isMobile && $('#theme_bullets').length > 0){
        $('#theme_bullets').wrap('<div id="bullets_slider"></div>');
        let html = $('#theme_bullets').html();
        $('#theme_bullets').html(html + html+ html+html+html+html)

    }

  //ícones do menu
  $('.secao-banners .banner.cheio img').each(function(){
      let alt = $(this).attr('alt');
      if(alt.includes('[icone-')){
          let regExp = /\[icone-(.*?)\]/;
          let target = regExp.exec(alt);
          let regExp2 = /\[posicao-(.*?)\]/;
          let position = regExp2.exec(alt);
          if($('.menu.superior .nivel-um > li > a[title="' + target[1] +'"]').length == 1){
              let removeAfter = $(this).closest('li');
              $('.menu.superior .nivel-um > li > a[title="' + target[1] +'"]').closest('li').addClass('theme_icon theme_icon-' + (theme.isMobile ? 'Esquerda' : position[1]));
              $('.menu.superior .nivel-um > li > a[title="' + target[1] +'"]').prepend('<div class="theme_icon-item"></div>');
              $(this).appendTo('.menu.superior .nivel-um > li > a[title="' + target[1] +'"] .theme_icon-item');
              removeAfter.remove();    
          }
      }
  });

  //dropdown
  $('.secao-banners .banner.cheio img').each(function(){
    let alt = $(this).attr('alt');
    if(alt.includes('[dropdown-')){
        let regExp = /\[dropdown-(.*?)\]/;
        let target = regExp.exec(alt);
        let regExp2 = /\[dropdown-(.*?)\]/;
        let position = regExp2.exec(alt);
        if($('.menu.superior .nivel-um > li > a[title="' + target[1] +'"] + ul').length == 1){
            let removeAfter = $(this).closest('li');
    
            $('.menu.superior .nivel-um > li > a[title="' + target[1] +'"] + ul').append('<li class="theme_dropdown-image"></div>');
            $('.menu.superior .nivel-um > li > a[title="' + target[1] +'"] + ul').addClass('with-banner')
            $(this).appendTo('.menu.superior .nivel-um > li > a[title="' + target[1] +'"] + ul .theme_dropdown-image');
            removeAfter.remove();    
        }
    }
});

  
  
    //banners vitrine
    $('.secao-banners .banner.cheio img').each(function(){
        let alt = $(this).attr('alt');
        if(alt.includes('[vitrine-')){
            let regExp = /\[vitrine-(.*?)\]/;
            let match = regExp.exec(alt);
            if($('.vitrine-' + match[1]).length == 1){
                if($('#theme_customBanners-' + match[1]).length == 0){
                    $('.vitrine-' + match[1] + ' + ul').after('<div class="theme_customBanners" id="theme_customBanners-' + match[1] + '"></div>');
                }
                $(this).closest('li').appendTo('#theme_customBanners-' + match[1]);               
            }
        }else{
            if(movie && !alt.includes('[movie]')){
                $(this).closest('li').remove();
            }
        }
    }); 



     
  $('.theme_customBanners li').wrap('<div class="item col-md-6 col-12"/>').contents().unwrap();
};

theme.functions.productListActions = function(){
  // $('.listagem-item').each(function(){
  //     let hasVariants = $(this).find('.botao-comprar-ajax').length > 0 ? true : false;
  //     let id = $(this).attr('class').split(' ')[1].replace('prod-id-','').trim();
  //     let url = $(this).find('.info-produto > a:first-child').attr('href');        
  //     let block = $('<div id="theme_list-functions"></div>');
  //     if(hasVariants){
  //         block.append($('<a href="/carrinho/produto/'+ id +'/adicionar" class="theme_buttonBuy-ajax">'+ theme.icon.cart +'<span>'+ theme.lang.productListAdd +'</span></a>'));
  //     }        
  //     block.append($('<a href="'+ url +'">'+ theme.icon.seeMore +'<span>'+ theme.lang.productListDetail +'</span></a>'));
  //     $(this).find('.imagem-produto').prepend(block);        
  // });
  $('.listagem-item .acoes-produto, .listagem-item .acoes-produto-responsiva').remove();    
}


theme.functions.productListImageSize = function(param){
    if(theme.settings.productListImageFill){
        $('.listagem-item').addClass('theme-imageFill');
    }
    
    let h = $('.listagem-item').first().find('.imagem-produto').innerWidth() * param;
    $('.listagem-item .imagem-produto').css('height',h + 'px');
    $('.listagem-item .imagem-produto').css('max-height',h + 'px');
    $('.listagem-item .imagem-produto').css('min-height',h + 'px');
    


    $('.listagem-item .imagem-produto').each(function(){
        $(this).find('img').each(function(){
            let url = $(this).attr('src').replace('300x300/','500x500/').replace('400x400/','600x600/');
            $(this).attr('src',url);
        })
    })

    //$('.listagem-item .imagem-produto').css('max-height','unset');
}
    


$(document).ready(function(){  
  if(theme.benefitsStripe.active == 0 && theme.benefitsStripe.list.length > 0  && $('.pagina-carrinho').length == 0){
    $('<div class="theme_benefitsStripe"><div class="items"></div></div>').insertBefore('#rodape')
    $.each(theme.benefitsStripe.list, function(key, item){
        let block = $('<div class="item"></div>');
        if(item.img){ block.append('<img src="'+ item.img +'"/>') }
        block.append('<div class="text"></div>');
        if(item.title){ block.find('.text').append('<strong>'+ item.title +'</strong>') }
        if(item.subtitle){ block.find('.text').append('<p>'+ item.subtitle +'</p>') }            
        if(item.link){ block.wrapInner('<a href="'+ item.link +'"></a>') }
        block.appendTo('.theme_benefitsStripe .items');
    });
    $('.theme_benefitsStripe .items').apx_slick(theme.settings.sliders.benefitsStripe);
  }else{
    $('.theme_benefitsStripe').insertBefore('#rodape');
  }

  if($('.pagina-produto').length > 0){
    theme.functions.groupProduct();
    $('.acoes-produto').first().before('<div class="apx_selos"></div>');
    // let disponibilidade = $('.disponibilidade.disp-entrega').first().find('b').text();
    if($('.acoes-produto.disponivel').length > 0){
        $('.apx_selos').append('<div class="selo disponibilidade">Pronta Entrega</div>');
    }
    // $(window).load(function(){
    //     $('.info-principal-produto').prependTo('.produto')
    // })

    $('.acoes-produto').each(function(){
        $('.acoes-produto .desconto-a-vista').html($('.desconto-a-vista').html().replace('ou',''))
    });
    if (theme.storeWhatsapp) {
        // Obtém o nome do produto e o link atual da página
        const productName = $('h1').text().trim();
        const currentPageLink = window.location.href;

        // Cria o link do WhatsApp com o número e a mensagem
        const whatsappLink = `https://wa.me/55${theme.storeWhatsapp.replaceAll('(','').replaceAll(')','').replaceAll('-','').replaceAll(' ','')}?text=Olá, gostaria de comprar o produto *${productName}*. Aqui está o link: ${currentPageLink}`;

        // Cria o botão de "COMPRAR PELO WHATSAPP"
        const whatsappButton = `
            <a href="${whatsappLink}" target="_blank" class="buy-whatsapp-button" style="">
                <i class="fa fa-whatsapp"></i>
                <span>COMPRE PELO WHATSAPP</span>
            </a>
        `;

        // Insere o botão no local desejado (exemplo: após o título do produto)
        $('.acoes-produto.disponivel').append(whatsappButton);
    }
    $('.acoes-produto.disponivel').each(function() {
        let precoVenda = $(this).find('.preco-venda').text().replace('R$', '').replace(',', '.').trim();
        let precoPromocional = $(this).find('.desconto-a-vista .titulo').text().replace('R$', '').replace(',', '.').trim();

        if (precoVenda && precoPromocional) {
            let venda = parseFloat(precoVenda);
            let promocional = parseFloat(precoPromocional);

            if (venda > promocional) {
                let desconto = Math.round(((venda - promocional) / venda) * 100);
                $(this).find('.desconto-a-vista').append(`<span class="desconto">${desconto}% OFF</span>`);
            }
        }
    });
  }

  if($('.pagina-carrinho').length > 0){
    $('[data-produto-id] .imagem img').each(function(){
        let src = $(this).attr('src');
        let regExp = /\/64x64\//;
        if (regExp.test(src)) {
            $(this).attr('src', src.replace('/64x64/', '/300x300/'));
        }
    });
  }

  
});

$(window).on('load', function(){
    $('.theme_aside .theme_menu-trigger, .theme_aside .account-trigger').html(theme.icon.sideCartClose);
})

window.sizes = ['solteiro', 'casal', 'queen', 'king', 'super king'];

theme.functions.groupProduct = function(){
    let name = $('h1').text().trim().toLowerCase();
    let thisSize = "";
    let flag = false;
    
    window.sizes.forEach(size => {
        if (name.includes(size)) {
            name = name.replace(size, '').trim();
            thisSize = size;
            flag = true;
            
        }
    });

    if(flag){
        $.ajax({
            url: "/_search?q=" + name,
        }).done(function(response){
            console.log(response)
            if(response.products && response.products.length > 1){
                let products = response.products;
                $('<div class="otherOptions"><label>Tamanho:<span></span></label><div class="items"></div></div>').insertAfter('.info-principal-produto');
                let anySizeAdd = false;
                $.each(products, function(k,i){
                    let sizeToShow = ""
                    window.sizes.forEach(size => {
                        if (i.name.toLowerCase().includes(size) && size != thisSize) {
                            sizeToShow = size;
                            $(`<a href="/${i.slug}" class="${thisSize == sizeToShow ? 'active' : ''} ${thisSize == sizeToShow ? 'disabled' : ''}"><img src="${MEDIA_URL+i.images[0].path.slice(1,i.images[0].path.length)}" title="${i.name}"><span>${sizeToShow}</span></a>`).appendTo('.otherOptions .items');
                            anySizeAdd = true;
                        }
                    });
                });

                if(!anySizeAdd){
                    $('.otherOptions').remove();
                }
            }
        });    
    }
}

theme.build.productFilter = function(template){
    if($('.coluna .filtro-coluna').length > 0){
        $('body').append(theme.templates.filters);
        $('body').on('click','.filter-trigger', function(){   
            $('body').toggleClass('asideFilter-visible');         
        });
        $('h1').after('<div id="theme_rowFilter" class="row-flex justify-content-center"></div>');
        if($('.coluna .atributo-cor').length > 0 ){
            $('.coluna .atributo-cor a > span').wrap("<i class='color-bg'></i>")
            // $('.filtro-coluna .atributo-cor span').each(function(){
            //     let css = $(this).attr('style').replace('border-color','background-color');
            //     $(this).attr('style', css);
            // })
        }
        $('.coluna .filtro-coluna').each(function(){
            let filterName = $(this).find('h4.titulo').text().replace('Filtrar por','').replace('Limpar','').trim();
            $('#theme_filter').append('<h4>' + filterName + '</h4>');
            $('#theme_filter').append($(this).find('h4.titulo').next().clone());
            

            let dropdownHTML = `
                <div class="col-auto">
                    <div class="dropdown">
                        <button class="dropdown-toggle" type="button">
                            <strong>${filterName}</strong>
                            <i class="fa fa-chevron-down"></i>
                        </button>
                        <div class="dropdown-menu">
                            ${$(this).find('h4.titulo').next().html()}
                        </div>
                    </div>
                </div>
            `;
            
            $('#theme_rowFilter').append(dropdownHTML);

          
            
        });  
    }
};


theme.build.account = function(template){
   theme.templates.account = `<div class="theme_aside theme_account right"><div class="theme_aside-header"><button type="button" class="account-trigger" >${theme.icon.sideCartClose}</button><span>${theme.lang.accountTitle}</span></div><div class="theme_aside-content" id="theme_account"></div></div>`;
   
    $('body').append(theme.templates.account);
    let menu = $('<ul></ul>');
    if(theme.isLogged){
        menu.append('<li><a href="/conta/index">Meus dados</a></li>');
        menu.append('<li><a href="/conta/pedido/listar">Meus pedidos</a></li>');
        menu.append('<li><a href="/conta/logout">Sair</a></li>');
    }else{
        //menu.append('<li><a href="">Login</a></li>');
        menu.append('<li><form id="apx_sideLogin" action="/conta/login" method="post"><label>E-mail<input id="id_email" maxlength="128" name="email" type="text"></label><label>Senha<input id="id_senha" maxlength="32" name="senha" type="password"></label><div><button type="submit" class="botao principal">Entrar</button><button id="recoverPassword" data-toggle="modal"> <i class="icon-lock cor-secundaria"></i> Esqueceu a senha? </button></div></form></li>');
        menu.append('<li><a href="/conta/criar?next=conta_index&email=_">Cliente novo? Cadastre-se</a></li>');
    }
    menu.append('<li class="divider"></li>');
    //menu.append('<li><a href="">Preciso de ajuda</a></li>');
    //menu.append('<li><a href="">Fale com a gente</a></li>');
    $('#theme_account').append(menu);
    $('.account-trigger').unbind();
    $('.account-trigger').click(function(){   
        $('body').toggleClass('asideAccount-visible');         
    });

    $('#recoverPassword').click(function(){
        let mail = $('#apx_sideLogin #id_email');
        $.get('/conta/recuperar_senha?email=' + mail.val(), function(data){
            let res = JSON.parse(data);
            console.log(res.mensagem);
            if(res.status == "erro"){
                mail.focus()
            }
            alert(res.mensagem);
        })
    });
}

$(document).ready(function () {
    $('.theme_customBanners').each(function () {
        const items = $(this).find('> .item');
        if (items.length % 2 !== 0) {
            items.last().addClass('last-item-odd');
        }
    });
});

//crie uma função para pegar um item do menu de acordo com o textoe adicionar uma classe especifica
theme.functions.addClassMenu = function(texto, classe, fundo, cor) {
    // Seleciona todos os links do menu
    const menuItems = document.querySelectorAll('.menu.superior .nivel-um > li > a');

    // Itera pelos itens do menu
    menuItems.forEach(function(item) {
        // Verifica se o título do link corresponde ao texto fornecido
        if (item.getAttribute('title') === texto) {
            // Adiciona a classe ao elemento pai <li>
            const parentLi = item.closest('li');
            if (parentLi) {
                parentLi.classList.add(classe);
                parentLi.classList.add('themed-menu-item'); // Adiciona a classe "themed-menu-item" para aplicar o estilo

                // Define as variáveis CSS no elemento
                parentLi.style.setProperty('--fundo', fundo);
                parentLi.style.setProperty('--cor', cor);
            }
        }
    });
};


$(document).ready(function () {
    // Chama a função para criar a estrutura
    if(window.theme_section.items.length > 0){
        theme.functions.createSectionFromJSON(window.theme_section);
    }
    
    if(theme.isMobile){
        theme.userFirstname = theme.isLogged ? $('#cabecalho .pequeno.dropdown-toggle[href$="/conta/index"]').text().trim().split(' ')[1] : 'Visitante';
        $('#theme_menu-aside').prepend('<div id="user-mobile"><a href="/conta/login">' + theme.icon.account + '<div><b>Olá, <span>' + theme.userFirstname + '</span></b>' + (theme.userFirstname == "Visitante" ? 'Faça login ou cadastre-se' : 'Minha Conta') + '</div></a></div>');

        $('#theme_menu-aside .nivel-um').append('<li class="latest"><a href="/conta/favoritos/listar"><div class="custom-lnk">' + theme.icon.wishlist + '<div>Favoritos</div></div></a></li>');
        $('#theme_menu-aside .nivel-um').append('<li class="latest"><a href="/atendimento"><div class="custom-lnk">' + theme.icon.atendimento + '<div>Atendimento</div></div></a></li>');
    }

   
    theme.functions.selos();
    
});

//crie uma função para adicionar uma tarja com texto rotativo igual o theme_header-stripe do mobile logo abaixo do banner principal. a função deverá receber o texto, a cor de fundo e a cor do texto
theme.functions.addRotatingBanner = function(texto, corFundo, corTexto) {
    // Cria o elemento da tarja
    const tarja = document.createElement('div');
    tarja.className = 'theme_rotating-banner';
    tarja.style.backgroundColor = corFundo;
    tarja.style.color = corTexto;
    const tarja_ = document.createElement('div');
    tarja_.className = 'animated-stripe';
    //separe o texto em partes por "---"
    const partesTexto = texto.split('---');
    // Cria os spans para cada parte do texto
    tarja_.innerHTML = ""
    partesTexto.forEach(function(parte) {
        const span = document.createElement('span');
        span.textContent = parte.trim(); // Adiciona o texto ao span
        tarja_.appendChild(span); // Adiciona o span à tarja
    });
    
    // //clone o conteúdo de tarja_ 5x
    // for(let i = 0; i < 3; i++){
    //     //aqui devemos pegar apenas o conteúdo html de tarja_ e adicionar ao final de tarja_
    //     tarja_.innerHTML += tarja_.innerHTML;
      

    // }

     tarja.appendChild(tarja_);

    // Adiciona a tarja ao corpo do documento ou a um contêiner específico
    $('.secao-banners').append(tarja);
}

theme.settings.sliders.JSONSection = {
    dots: false,
    infinite: true,
    autoplay:true,
    autoplaySpeed:3000,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: theme.settings.sliders.config.prevArrow,
    nextArrow: theme.settings.sliders.config.nextArrow    
}
theme.functions.createSectionFromJSON = function(data) {
    // Cria o container principal
    const section = $('<section class="theme_custom-section"></section>');

    // Adiciona o título e subtítulo
    const title = $(`<div class="titulo-categoria"><strong>${data.title}</strong></div>`);
    section.append(title);

    const subtitle = $(`<p class="text-center">${data.subtitle}</p>`);
    section.append(subtitle);

    // Cria o container para os itens
    const itemsContainer = $('<div class="items-container"></div>');

    // Cria o nav para os títulos (bullets)
    const navContainer = $('<div class="items-nav"></div>');

    // Itera pelos itens do JSON e cria os elementos
    $.each(data.items, function(index, item) {
        // Cria o item do slider
        const itemDiv = $(`<div class="item"><div class="row-flex align-items-center"><div class="col"><img src="${item.img}" class="mx-auto img-responsive" alt="${item.title}"></div><div class="col content"><h3>${item.title}</h3><p>${item.description}</p><a href="${item.link}" class="button">${item.button}</a></div></div></div>`);
        itemsContainer.append(itemDiv);

        // Cria o item do nav com o título
        const navItem = $(`<button class="nav-item">${item.title}</button>`);
        navItem.on('click', function () {
            // Navega para o slide correspondente
            $('.theme_custom-section .items-container').slick('slickGoTo', index);
        });
        navContainer.append(navItem);
    });

    // Adiciona o nav e o container de itens à seção
    section.append(navContainer);
    section.append(itemsContainer);

    // Adiciona a seção ao corpo ou a um container específico
    $('.secao-secundaria').append(section);

    // Inicializa o slick slider
    const slickInstance = $('.theme_custom-section .items-container').slick(theme.settings.sliders.JSONSection);

    // Atualiza os bullets (nav items) com a classe "active" ao mudar o slide
    slickInstance.on('afterChange', function(event, slick, currentSlide) {
        navContainer.find('.nav-item').removeClass('active');
        navContainer.find('.nav-item').eq(currentSlide).addClass('active');
    });

    // Define o primeiro bullet como ativo inicialmente
    navContainer.find('.nav-item').first().addClass('active');
};

theme.watch = function(){
    $(window).resize(function(){
        theme.functions.sideCartScroll();
        theme.functions.productListImageSize(theme.settings.imageSize);
    });
    $(window).scroll(function(){
        theme.functions.sideCartScroll();
    })
    // $('#rodape > div:last-child a').attr('href',theme.info.ref);
    // $('#rodape > div:last-child a').before('<a href="'+ theme.info.external +'" target="_blank">'+ theme.info.icon +'</a>');        
}


theme.functions.selos = function(){
    if(window.tags.length > 0){
        $.each(window.tags,function(tag){
            $('.listagem-item .bandeiras-produto').append('<span class="tag" style="color:'+ window.tags[tag].cor +'; background-color:'+ window.tags[tag].fundo +'">'+ window.tags[tag].texto +'</span>');
        });

        if($('.pagina-produto').length > 0){
            $.ajax({
            url: "/_search?q=" + $('h1').text().trim(),
            }).done(function(response){
                if(response && response.products && response.products[0]){
                    let product = response.products[0];
                    
                if (window.tags.some(tag => product.category_ids.includes(tag.id_categoria.toString()))) {
                    const matchingTag = window.tags.find(tag => ["23322354", "23322364"].includes(tag.id_categoria.toString()));
                    if (matchingTag) {
                        $('.apx_selos').append('<div class="selo" style="background-color:' + matchingTag.fundo + '; color:' + matchingTag.cor + '">' + matchingTag.texto + '</div>');
                    }
                }
                }
                
            });    
        }
    }
    
};