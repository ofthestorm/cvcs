$('#start-btn').click(function () {
    console.log("click");
    document.getElementById("section1").scrollIntoView();
    $('#text1').addClass('animated fadeInLeft');
    // moveSectionDown();
});

$('#img1').addClass("animated swing infinite");
$('#img2').addClass("animated tada infinite");
$('#img3').addClass("animated shake infinite");
$('#img4').addClass("animated swing infinite");
$('#img5').addClass("animated tada infinite");
$('#img6').addClass("animated rotateIn infinite");
$('#img7').addClass("animated jello infinite");
$('#img8').addClass("animated  bounce infinite");
$('#img9').addClass("animated jackInTheBox infinite");
$('#img10').addClass("animated bounceIn infinite");
$('#img11').addClass("animated swing infinite");
$('#img12').addClass("animated rotateIn infinite");


console.log("my.js");
fullpage.initialize('#fullpage', {

    anchors: ['page0','page1', 'page2', 'page3', 'page4', 'page5','page6',
        'page7', 'page8', 'page9', 'page10', 'page11','page12'],
    menu: '#menu',
    css3:true,

    onLeave: function(index, nextIndex, direction) {

        // console.log(index);
        if (direction == "down") {
            switch (index) {

                case 1: {
                    // $('#text1').removeClass('animated fadeInLeft');
                    $('#text2').addClass('animated fadeInRight');
                }
                    break;
                case 2: {
                    // $('#text2').removeClass('animated fadeInRight');
                    $('#text3').addClass('animated fadeInLeft');
                }
                    break;
                case 3: {
                    // $('#text3').removeClass('animated fadeInLeft');
                    $('#text4').addClass('animated fadeInRight');
                }
                    break;
                case 4: {
                    // $('#text4').removeClass('animated fadeInRight');
                    $('#text5').addClass('animated fadeInLeft');
                }
                    break;
                case 5: {
                    // $('#text5').removeClass('animated fadeInLeft');
                    $('#text6').addClass('animated fadeInRight');
                }break;
                case 6: {
                    // $('#text5').removeClass('animated fadeInLeft');
                    $('#text7').addClass('animated fadeInLeft');
                }
                    break;
                case 7: {
                    // $('#text2').removeClass('animated fadeInRight');
                    $('#text8').addClass('animated fadeInRight');
                }
                    break;
                case 8: {
                    // $('#text3').removeClass('animated fadeInLeft');
                    $('#text9').addClass('animated fadeInLeft');
                }
                    break;
                case 9: {
                    // $('#text4').removeClass('animated fadeInRight');
                    $('#text10').addClass('animated fadeInRight');
                }
                    break;
                case 10: {
                    // $('#text5').removeClass('animated fadeInLeft');
                    $('#text11').addClass('animated fadeInLeft');
                }
                case 11: {
                    // $('#text4').removeClass('animated fadeInRight');
                    $('#text12').addClass('animated fadeInRight');
                }
                    break;

                // case 7: {
                //     // $('#text6').removeClass('animated bounceInRight');
                // }
                default:
                    break;
            }
        }
        // } else {
        //     switch (index) {
        //         // case 1: {
        //         //
        //         // }
        //         case 2: {
        //             $('#text1').removeClass('animated bounceInLeft');
        //             // $('#text2').addClass('animated bounceInRight');
        //         }
        //             break;
        //         case 3: {
        //             $('#text2').removeClass('animated fadeInRight');
        //             $('#text1').addClass('animated fadeInLeft');
        //         }
        //             break;
        //         case 4: {
        //             $('#text3').removeClass('animated fadeInLeft');
        //             $('#text2').addClass('animated fadeInRight');
        //
        //         }
        //             break;
        //         case 5: {
        //             $('#text4').removeClass('animated fadeInRight');
        //             $('#text3').addClass('animated fadeInLeft');
        //
        //         }
        //             break;
        //         case 6: {
        //             $('#text5').removeClass('animated fadeInLeft');
        //             $('#text4').addClass('animated fadeInRight');
        //
        //         }
        //             break;
        //         case 7: {
        //             $('#text6').removeClass('animated fadeInRight');
        //             $('#text5').addClass('animated fadeInLeft');
        //         }
        //         default:
        //             break;
        //     }
        // }
    }
});
