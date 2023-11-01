"use strict";

const $ = selector => document.querySelector(selector);

const img_cache = [];
let img_counter = 0;
let timer = null;
let image = null;

const main_img = $("#main_image");
const caption = $("#caption");
    img_counter = (img_counter + 1) % img_cache.length;
    image = img_cache[img_counter];
    main_img.src = image.src;
    main_img.alt = image.alt;
    caption.textContent = image.alt;
;
         
document.addEventListener("DOMContentLoaded", () => {
    const links = $("#image_list").querySelectorAll("a");
    for ( let link of links ) {
        image = new Image();
        image.src = link.href;
        image.alt = link.title;

        img_cache[img_cache.length] = image;
    }

    $("#start").addEventListener("click", () => {
        $("#start").disabled = true;
        $("#pause").disabled = false;

         runSlideShow();
         timer = setInterval(runSlideShow, 2000);
    });

    $("#pause").addEventListener("click", () => {
        $("#start").disabled = false;
        $("#pause").disabled = true;

        clearInterval(timer);
    });
});