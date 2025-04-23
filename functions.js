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

theme.stripe.content = "<div>Frete grátis nas compras acima de R$ 1.999,00</div><div>Parcele em até 6x sem juros</div><div>5% de desconto pagando via pix ou boleto</div>";
theme.stripe.color = "#fff";
theme.stripe.background = "#000";
theme.stripe.position = 1;
theme.stripe.fixed = false;

theme.settings.imageSize = 1;

theme.benefitsStripe.active = 0;

theme.benefitsStripe.list.push({img:'https://cdn.awsli.com.br/2792/2792604/arquivos/credit-card-thin--3-.svg',title:'6x sem juros',subtitle:'no cartão de crédito',link:''})
theme.benefitsStripe.list.push({img:'https://cdn.awsli.com.br/2792/2792604/arquivos/trophy-thin.svg',title:'9 anos',subtitle:'de história',link:''})
theme.benefitsStripe.list.push({img:'https://cdn.awsli.com.br/2792/2792604/arquivos/truck-thin.svg',title:'Envio imediato',subtitle:'para todo o Brasil',link:''})
theme.benefitsStripe.list.push({img:'https://cdn.awsli.com.br/2792/2792604/arquivos/shield-check-thin.svg',title:'Site seguro',subtitle:'compre com segurança',link:''})
theme.benefitsStripe.list.push({img:"https://cdn.awsli.com.br/2792/2792604/arquivos/seal-percent-thin.svg",title:'5% de desconto',subtitle:'pagando via pix ou boleto',link:''})

theme.build.header = function(template){
    theme.icon.sideCartClose = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>';

  theme.icon.cart = '<i class="p-svg-ico cart"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V72H40V56Zm0,144H40V88H216V200Zm-40-88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z"></path></svg></i>';
  theme.icon.search = '<i class="p-svg-ico"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path></svg></i>';
  theme.icon.account = '<i class="p-svg-ico"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path></svg></i>';
  theme.icon.wishlist = '<i class="p-svg-ico"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M223,57a58.07,58.07,0,0,0-81.92-.1L128,69.05,114.91,56.86A58,58,0,0,0,33,139l89.35,90.66a8,8,0,0,0,11.4,0L223,139a58,58,0,0,0,0-82Zm-11.35,70.76L128,212.6,44.3,127.68a42,42,0,0,1,59.4-59.4l.2.2,18.65,17.35a8,8,0,0,0,10.9,0L152.1,68.48l.2-.2a42,42,0,1,1,59.36,59.44Z"></path></svg></i>';

  theme.templates.header = `<div id="theme_header_1"><div class="conteiner-fluid"><div class="row-flex align-items-center"><div class="theme_search header_search col"><div id="theme_search"></div></div><div class="col-auto"><button type="button" id="theme_header-menu-trigger"></button></div><div class="col-auto" id="theme_header-logo"></div><div class="col-auto justify-content-center" id="theme_header-menu"></div><div class="col theme_header-functions"><ul id="theme_header-functions"></ul></div></div></div></div>
    
    ${!theme.templates.account ? theme.templates.account = `<div class="theme_aside theme_account right"><div class="theme_aside-header"><button type="button" class="account-trigger" >${theme.icon.sideCartClose}</button><span>${theme.lang.accountTitle}</span></div><div class="theme_aside-content" id="theme_account"></div></div>` : ''}
    ${!theme.templates.filters ? theme.templates.filters = `<div class="theme_aside theme_filter right"><div class="theme_aside-header"><button type="button" class="filter-trigger" >${theme.icon.sideCartClose}</button><span>${theme.lang.filtersTitle}</span></div><div class="theme_aside-content" id="theme_filter"></div></div>` : ''}`;

  $('#cabecalho').html(theme.templates.header);
  $('#theme_header-logo').append(theme.logo);
  $('#theme_header-menu').html(theme.headerMenu);
  $('#theme_header-functions').append('<li>' + theme.headerCart + '</li>');

  $('#theme_header-functions').prepend('<li><button type="button" class="account-trigger">'+ theme.icon.account +'</button></li>');
  $('#theme_header-functions').prepend('<li><a href="/conta/favorito/listar">'+ theme.icon.wishlist +'</a></li>');
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
        for(let i =0; i < 6; i++){
            $('#theme_header-stripe').append(theme.stripe.content)
        }
        $('#theme_header-stripe > *').wrapAll('<div class="animated"></div>');


        // Create mobile fixed menu
        const mobileMenu = `
            <nav class="theme_mobileMenu">
                <ul>
                    <li>
                        <a href="/" title="Home">
                            <i class="p-svg-ico"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#393232" viewBox="0 0 256 256"><path d="M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z"></path></svg></i>
                            <span>Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="${theme.whatsapp ? theme.whatsapp : '#'}" target="_blank" rel="noopener" title="WhatsApp">
                            <i class="p-svg-ico"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#393232" viewBox="0 0 256 256"><path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"></path></svg></i>
                            <span>WhatsApp</span>
                        </a>
                    </li>
                    <li>
                        <button type="button" class="account-trigger">
                            ${theme.icon.account}
                            <span>Minha Conta</span>
                        </button>
                    </li>
                    <li>
                        <a href="/carrinho/index" title="Carrinho" class="float-cart">
                            <div>${theme.icon.cart}<span class="cart-count">${$('.carrinho .qtd-carrinho').first().text()}</span></div>
                            <span>Carrinho</span>
                            
                        </a>
                    </li>
                </ul>
            </nav>
        `;

        // Append mobile menu to body
        $('body').append(mobileMenu);

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

  //daqui para baixo somente os que tem mobile
  
  //banners mobile
  $('.secao-banners .banner.cheio img').each(function(){
      let alt = $(this).attr('alt');        
      if(!alt.includes('[mobile]') && theme.isMobile){
          $(this).closest('li').remove();                        
      }
      if(alt.includes('[mobile]') && !theme.isMobile){
          $(this).closest('li').remove();                        
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
  $('.theme_customBanners li').wrap('<div class="item col"/>').contents().unwrap();
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
    
theme.functions.customBanners();

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

    // $(window).load(function(){
    //     $('.info-principal-produto').prependTo('.produto')
    // })
    
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

    $.ajax({
        url: "/_search?q=" + name,
    }).done(function(response){
        console.log(response)
        if(response.products && response.products.length > 1){
            let products = response.products;
            $('<div class="otherOptions"><label>Tamanho:<span></span></label><div class="items"></div></div>').insertAfter('.info-principal-produto');

            $.each(products, function(k,i){
                let sizeToShow = ""
                window.sizes.forEach(size => {
                    if (i.name.toLowerCase().includes(size)) {
                        sizeToShow = size;
                    }
                });
                console.log(MEDIA_URL+i.images[0].path.slice(1,i.images[0].path.length))
                $(`<a href="/${i.slug}" class="${thisSize == sizeToShow ? 'active' : ''} ${thisSize == sizeToShow ? 'disabled' : ''}"><img src="${MEDIA_URL+i.images[0].path.slice(1,i.images[0].path.length)}" title="${i.name}"><span>${sizeToShow}</span></a>`).appendTo('.otherOptions .items')
            })
        }
    });    
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