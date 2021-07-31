
$(document).ready(function() {
    $("#java_edition_selection_image").hover(function() {
        $(this).attr("src", "https://static.wixstatic.com/media/44b079_00380c948e7f437bb0805035f618747a~mv2.png/v1/fill/w_956,h_199,al_c,q_85,usm_0.66_1.00_0.01/Bedrock%20Edition.webp");
        
    }, function() {
        $(this).attr("src", "https://static.wixstatic.com/media/44b079_ceef92a5ad064ca7a70bcdeb09d4a601~mv2.png/v1/fill/w_956,h_199,al_c,q_85,usm_0.66_1.00_0.01/Java%20Edition.webp");
    });

    $("#bedrock_edition_selection_image").hover(function() {
        $(this).attr("src", "https://static.wixstatic.com/media/44b079_ceef92a5ad064ca7a70bcdeb09d4a601~mv2.png/v1/fill/w_956,h_199,al_c,q_85,usm_0.66_1.00_0.01/Java%20Edition.webp");
        
    }, function() {
        $(this).attr("src", "https://static.wixstatic.com/media/44b079_00380c948e7f437bb0805035f618747a~mv2.png/v1/fill/w_956,h_199,al_c,q_85,usm_0.66_1.00_0.01/Bedrock%20Edition.webp");
    });

    $("#cubechaos_addons_selection_image").hover(function() {
        $(this).attr("src", "https://static.wixstatic.com/media/44b079_ceef92a5ad064ca7a70bcdeb09d4a601~mv2.png/v1/fill/w_956,h_199,al_c,q_85,usm_0.66_1.00_0.01/Java%20Edition.webp");
        
    }, function() {
        $(this).attr("src", "https://static.wixstatic.com/media/44b079_9773a702cc5941d3ba07f95de613835a~mv2.png/v1/fill/w_956,h_199,al_c,q_85,usm_0.66_1.00_0.01/Addons%20%5BNEW%5D.webp");
    });

    $("#more_selection_image").hover(function() {
        $(this).attr("src", "https://static.wixstatic.com/media/44b079_ceef92a5ad064ca7a70bcdeb09d4a601~mv2.png/v1/fill/w_956,h_199,al_c,q_85,usm_0.66_1.00_0.01/Java%20Edition.webp");
        
    }, function() {
        $(this).attr("src", "https://static.wixstatic.com/media/44b079_010d79d30e9e45078f529d3745fc4ce2~mv2.png/v1/fill/w_956,h_199,al_c,q_85,usm_0.66_1.00_0.01/More.webp");
    });

    $("#more_versions_button").click(() => {
        let more_versions_button = $("#more_versions_button");
        if (more_versions_button.hasClass("active")) {
            more_versions_button.removeClass("active");
            $(".additional_version").hide();
            //more_versions_button.show();
        } else {
            more_versions_button.addClass("active");
            //more_versions_button.hide();
            $(".additional_version").show();
        }
    });
});