$('#text1').addClass('animated fadeInLeft');

fullpage.initialize('#fullpage', {
    anchors: ['page1', 'page2', 'page3', 'page4', 'page5','page6'],
    menu: '#menu',
    css3:true,
    // afterLoad: function( anchorLink, index){
    //     switch(anchorLink) {
    //         case 'page1': {
    //             $('#text1').addClass('animated bounceInLeft');
    //         }break;
    //         case 'page2': {
    //             $('#text2').addClass('animated bounceInRight');
    //         }break;
    //         case 'page3': {
    //             $('#text3').addClass('animated bounceInLeft');
    //         }break;
    //         case 'page4': {
    //             $('#text4').addClass('animated bounceInRight');
    //         }break;
    //         case 'page5': {
    //             $('#text5').addClass('animated bounceInLeft');
    //         }break;
    //         case 'page6': {
    //             $('#text6').addClass('animated bounceInRight');
    //         }
    //         default: break;
    //     }
    // },
    onLeave: function(index, nextIndex, direction){
        if(index + 1 === nextIndex) {
            switch(index) {
                case 1: {
                    $('#text1').removeClass('animated fadeInLeft');
                    $('#text2').addClass('animated fadeInRight');
                }break;
                case 2: {
                    $('#text2').removeClass('animated fadeInRight');
                    $('#text3').addClass('animated fadeInLeft');
                }break;
                case 3: {
                    $('#text3').removeClass('animated fadeInLeft');
                    $('#text4').addClass('animated fadeInRight');
                }break;
                case 4: {
                    $('#text4').removeClass('animated fadeInRight');
                    $('#text5').addClass('animated fadeInLeft');
                }break;
                case 5: {
                    $('#text5').removeClass('animated fadeInLeft');
                    $('#text6').addClass('animated fadeInRight');
                }break;
                case 6: {
                    // $('#text6').removeClass('animated bounceInRight');
                }
                default: break;
            }
        } else {
            switch(index) {
                case 1: {
                    // $('#text1').removeClass('animated bounceInLeft');
                    // $('#text2').addClass('animated bounceInRight');
                }break;
                case 2: {
                    $('#text2').removeClass('animated fadeInRight');
                    $('#text1').addClass('animated fadeInLeft');
                }break;
                case 3: {
                    $('#text3').removeClass('animated fadeInLeft');
                    $('#text2').addClass('animated fadeInRight');

                }break;
                case 4: {
                    $('#text4').removeClass('animated fadeInRight');
                    $('#text3').addClass('animated fadeInLeft');

                }break;
                case 5: {
                    $('#text5').removeClass('animated fadeInLeft');
                    $('#text4').addClass('animated fadeInRight');

                }break;
                case 6: {
                    $('#text6').removeClass('animated fadeInRight');
                    $('#text5').addClass('animated fadeInLeft');

                }
                default: break;
            }
        }

    }
});
