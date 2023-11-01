"use strict";
$(document).ready( () => {
    const slider = $("#image_list");
    $("#right_button").click( () => { 
        const leftProperty = parseInt(slider.css("left"));
        let newLeftProperty = 0;
        if (leftProperty - 100 > -900) {
            newLeftProperty = leftProperty - 100;
        }
    slider.animate({left: newLeftProperty}, 1000);    
    }); 
    $("#left_button").click( () => {
            const leftProperty = parseInt(slider.css("left"));
                let newLeftProperty = 0;
        if (leftProperty < 0) {
            newLeftProperty = leftProperty + 100;
        }
        else {
            newLeftProperty = -800;
        }
                slider.animate({left: newLeftProperty}, 1000);
    });

});