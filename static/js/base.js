
$(document).ready(function() {
    $("#java_edition_selection_image").hover(function() {
        $(this).attr("src", "/static/resources/buttons/big_buttons/java_edition_selected.png.webp");
        
    }, function() {
        $(this).attr("src", "/static/resources/buttons/big_buttons/java_edition.png.webp");
    });

    $("#bedrock_edition_selection_image").hover(function() {
        $(this).attr("src", "/static/resources/buttons/big_buttons/bedrock_edition_selected.png.webp");
        
    }, function() {
        $(this).attr("src", "/static/resources/buttons/big_buttons/bedrock_edition.png.webp");
    });

    $("#x-mas_edition_selection_image").hover(function() {
        $(this).attr("src", "/static/resources/buttons/big_buttons/x-mas_edition_selected.png");
        
    }, function() {
        $(this).attr("src", "/static/resources/buttons/big_buttons/x-mas_edition.png");
    });

    $("#cubechaos_addons_selection_image").hover(function() {
        $(this).attr("src", "/static/resources/buttons/big_buttons/addons_selected.png.webp");
        
    }, function() {
        $(this).attr("src", "/static/resources/buttons/big_buttons/addons.png.webp");
    });

    $("#more_selection_image").hover(function() {
        $(this).attr("src", "/static/resources/buttons/big_buttons/more_selected.png.webp");
        
    }, function() {
        $(this).attr("src", "/static/resources/buttons/big_buttons/more.png.webp");
    });

    //Hardcore Screenshot selector in screenshot slide
    // Java Screenshots
    $(".simg_0").click(function() {
        $("#slider_left_img").attr("src", "/static/resources/screenshots/java_edition/forest_vanilla.png.webp");
        $("#slider_right_img").attr("src", "/static/resources/screenshots/java_edition/forest_cubechaos.png.webp");
    });

    $(".simg_1").click(function() {
        $("#slider_left_img").attr("src", "/static/resources/screenshots/java_edition/cave_vanilla.png.webp");
        $("#slider_right_img").attr("src", "/static/resources/screenshots/java_edition/cave_cubechaos.png.webp");
    });

    $(".simg_2").click(function() {
        $("#slider_left_img").attr("src", "/static/resources/screenshots/java_edition/bee_hive_vanilla.png.webp");
        $("#slider_right_img").attr("src", "/static/resources/screenshots/java_edition/bee_hive_cubechaos.png.webp");
    });

    $(".simg_3").click(function() {
        $("#slider_left_img").attr("src", "/static/resources/screenshots/java_edition/jungle_vanilla.png.webp");
        $("#slider_right_img").attr("src", "/static/resources/screenshots/java_edition/jungle_cubechaos.png.webp");
    });

    $(".simg_4").click(function() {
        $("#slider_left_img").attr("src", "/static/resources/screenshots/java_edition/badlands_vanilla.png.webp");
        $("#slider_right_img").attr("src", "/static/resources/screenshots/java_edition/badlands_cubechaos.png.webp");
    });

    $(".simg_5").click(function() {
        $("#slider_left_img").attr("src", "/static/resources/screenshots/java_edition/desert_vanilla.png.webp");
        $("#slider_right_img").attr("src", "/static/resources/screenshots/java_edition/desert_cubechaos.png.webp");
    });

    $(".simg_6").click(function() {
        $("#slider_left_img").attr("src", "/static/resources/screenshots/java_edition/pillager_outpost_vanilla.png.webp");
        $("#slider_right_img").attr("src", "/static/resources/screenshots/java_edition/pillager_outpost_cubechaos.png.webp");
    });

    $(".simg_7").click(function() {
        $("#slider_left_img").attr("src", "/static/resources/screenshots/java_edition/monument_vanilla.png.webp");
        $("#slider_right_img").attr("src", "/static/resources/screenshots/java_edition/monument_cubechaos.png.webp");
    });

    $(".simg_8").click(function() {
        $("#slider_left_img").attr("src", "/static/resources/screenshots/java_edition/mansion_vanilla.png.webp");
        $("#slider_right_img").attr("src", "/static/resources/screenshots/java_edition/mansion_cubechaos.png.webp");
    });

    $(".simg_9").click(function() {
        $("#slider_left_img").attr("src", "/static/resources/screenshots/java_edition/snowy_tundra_vanilla.png.webp");
        $("#slider_right_img").attr("src", "/static/resources/screenshots/java_edition/snowy_tundra_cubechaos.png.webp");
    });

    $(".simg_10").click(function() {
        $("#slider_left_img").attr("src", "/static/resources/screenshots/java_edition/fortress_vanilla.png.webp");
        $("#slider_right_img").attr("src", "/static/resources/screenshots/java_edition/fortress_cubechaos.png.webp");
    });

    $(".simg_11").click(function() {
        $("#slider_left_img").attr("src", "/static/resources/screenshots/java_edition/bastion_vanilla.png.webp");
        $("#slider_right_img").attr("src", "/static/resources/screenshots/java_edition/bastion_cubechaos.png.webp");
    });

    $(".simg_12").click(function() {
        $("#slider_left_img").attr("src", "/static/resources/screenshots/java_edition/basalt_deltas_vanilla.png.webp");
        $("#slider_right_img").attr("src", "/static/resources/screenshots/java_edition/basalt_deltas_cubechaos.png.webp");
    });

    $(".simg_13").click(function() {
        $("#slider_left_img").attr("src", "/static/resources/screenshots/java_edition/soul_sand_valley_vanilla.png.webp");
        $("#slider_right_img").attr("src", "/static/resources/screenshots/java_edition/soul_sand_valley_cubechaos.png.webp");
    });

    $(".simg_14").click(function() {
        $("#slider_left_img").attr("src", "/static/resources/screenshots/java_edition/warped_forest_vanilla.png.webp");
        $("#slider_right_img").attr("src", "/static/resources/screenshots/java_edition/warped_forest_cubechaos.png.webp");
    });

    $(".simg_15").click(function() {
        $("#slider_left_img").attr("src", "/static/resources/screenshots/java_edition/end_vanilla.png.webp");
        $("#slider_right_img").attr("src", "/static/resources/screenshots/java_edition/end_cubechaos.png.webp");
    });

    // Bedrock Screenshots
    $(".simg_16").click(function() {
        $("#slider_left_img").attr("src", "/static/resources/screenshots/bedrock_edition/forest_vanilla.png.webp");
        $("#slider_right_img").attr("src", "/static/resources/screenshots/bedrock_edition/forest_cubechaos.png.webp");
    });

    $(".simg_17").click(function() {
        $("#slider_left_img").attr("src", "/static/resources/screenshots/bedrock_edition/jungle_vanilla.png.webp");
        $("#slider_right_img").attr("src", "/static/resources/screenshots/bedrock_edition/jungle_cubechaos.png.webp");
    });

    $(".simg_18").click(function() {
        $("#slider_left_img").attr("src", "/static/resources/screenshots/bedrock_edition/pillager_outpost_vanilla.png.webp");
        $("#slider_right_img").attr("src", "/static/resources/screenshots/bedrock_edition/pillager_outpost_cubechaos.png.webp");
    });

    $(".simg_19").click(function() {
        $("#slider_left_img").attr("src", "/static/resources/screenshots/bedrock_edition/mansion_vanilla.png.webp");
        $("#slider_right_img").attr("src", "/static/resources/screenshots/bedrock_edition/mansion_cubechaos.png.webp");
    });

    $(".simg_20").click(function() {
        $("#slider_left_img").attr("src", "/static/resources/screenshots/bedrock_edition/mineshaft_vanilla.png.webp");
        $("#slider_right_img").attr("src", "/static/resources/screenshots/bedrock_edition/mineshaft_cubechaos.png.webp");
    });

    $(".simg_21").click(function() {
        $("#slider_left_img").attr("src", "/static/resources/screenshots/bedrock_edition/village_vanilla.png.webp");
        $("#slider_right_img").attr("src", "/static/resources/screenshots/bedrock_edition/village_cubechaos.png.webp");
    });

    $(".simg_22").click(function() {
        $("#slider_left_img").attr("src", "/static/resources/screenshots/bedrock_edition/dripstone_cave_vanilla.webp");
        $("#slider_right_img").attr("src", "/static/resources/screenshots/bedrock_edition/dripstone_cave_cubechaos.webp");
    });
    $(".simg_23").click(function() {
        $("#slider_left_img").attr("src", "/static/resources/screenshots/bedrock_edition/ice_spikes_vanilla.webp");
        $("#slider_right_img").attr("src", "/static/resources/screenshots/bedrock_edition/ice_spikes_cubechaos.webp");
    });

    $(".simg_24").click(function() {
        $("#slider_left_img").attr("src", "/static/resources/screenshots/bedrock_edition/mansion_inside_vanilla.webp");
        $("#slider_right_img").attr("src", "/static/resources/screenshots/bedrock_edition/mansion_inside_cubechaos.webp");
    });

    $(".simg_25").click(function() {
        $("#slider_left_img").attr("src", "/static/resources/screenshots/bedrock_edition/fortress_vanilla.webp");
        $("#slider_right_img").attr("src", "/static/resources/screenshots/bedrock_edition/fortress_cubechaos.webp");
    });

    $(".simg_26").click(function() {
        $("#slider_left_img").attr("src", "/static/resources/screenshots/bedrock_edition/bastion_vanilla.webp");
        $("#slider_right_img").attr("src", "/static/resources/screenshots/bedrock_edition/bastion_cubechoas.webp");
    });


    // Addons
    $("#3d_blocks_card").click(function() {
        window.location.replace("/static/html/addons_html/3d_blocks.html");
    });

    // Addons
    $("#3d_ores_card").click(function() {
        window.location.replace("/static/html/addons_html/3d_ores.html");
    });

    // Addons
    $("#3d_crystals_card").click(function() {
        window.location.replace("/static/html/addons_html/3d_crystals.html");
    });


    $("#more_versions_button").click(() => {
        let more_versions_button = $("#more_versions_button");
        if (more_versions_button.hasClass("active")) {
            more_versions_button.removeClass("active");
            more_versions_button.attr("src", "/static/resources/buttons/download_buttons/more_button.png");
            $(".additional_version").hide();
            //more_versions_button.show();
        } else {
            more_versions_button.addClass("active");
            //more_versions_button.hide();
            more_versions_button.attr("src", "/static/resources/buttons/download_buttons/less_button.png");
            $(".additional_version").show();
        }
    });

    $("#more_versions_button_addons").click(() => {
        let more_versions_button = $("#more_versions_button_addons");
        if (more_versions_button.hasClass("active")) {
            more_versions_button.removeClass("active");
            more_versions_button.attr("src", "/static/resources/buttons/download_buttons/more_button.png");
            $(".additional_version").hide();
            //more_versions_button.show();
        } else {
            more_versions_button.addClass("active");
            //more_versions_button.hide();
            more_versions_button.attr("src", "/static/resources/buttons/download_buttons/less_button.png");
            $(".additional_version").show();
        }
    });

    $("#header_twitter_icon").hover(function() {
        $(this).attr("src", "/static/resources/icons/twitter_selected.png");
        
    }, function() {
        $(this).attr("src", "/static/resources/icons/twitter.png");
    });

    $("#header_github_icon").hover(function() {
        $(this).attr("src", "/static/resources/icons/github_selected.png");
        
    }, function() {
        $(this).attr("src", "/static/resources/icons/github.png");
    });

    $("#header_mr3dalien_icon").hover(function() {
        $(this).attr("src", "/static/resources/icons/mr3dalien_selected.png");
        
    }, function() {
        $(this).attr("src", "/static/resources/icons/mr3dalien.png");
    });
    
});

$(window).on('load resize', function() { //Fires when window is loaded or resized
    var div1 = $('#textbox_to_swap_0');
    var div2 = $('#team_picture_to_swap_0');
    var wrapper = $('#team_member_to_swap_0');

    if ($(window).width() > 1000) {
      wrapper.prepend(div1).append(div2); // move div 1 to start & div2 to end
    } else {
      wrapper.prepend(div2).append(div1); // move div 2 to start & div 1 to end
    }
});

function swapNodes(n1, n2) {

    var p1 = n1.parentNode;
    var p2 = n2.parentNode;
    var i1, i2;
    
    if ( !p1 || !p2 || p1.isEqualNode(n2) || p2.isEqualNode(n1) ) return;
    
    for (var i = 0; i < p1.children.length; i++) {
        if (p1.children[i].isEqualNode(n1)) {
            i1 = i;
        }
    }
    for (var i = 0; i < p2.children.length; i++) {
        if (p2.children[i].isEqualNode(n2)) {
            i2 = i;
        }
    }
    
    if ( p1.isEqualNode(p2) && i1 < i2 ) {
        i2++;
    }
    p1.insertBefore(n2, p1.children[i1]);
    p2.insertBefore(n1, p2.children[i2]);
    }
    
        var mobile = false;
        $(window).on('load resize', function() {
          var div1 = $('.footer_about_left');
          var div2 = $('.footer_logo');
          if (($(window).width() > 900) && (mobile == true)){
            swapNodes(div1[0], div2[0]);
            mobile = false;
          } else if (($(window).width() < 900) && (mobile == false)){
            swapNodes(div1[0], div2[0]);
            mobile = true;
          }
        });