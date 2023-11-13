"use strict";

const isDate = (date, datePattern) => {
    if (!datePattern.test(date)) { return false; }

    const dateParts = date.split("/");
    const month = parseInt( dateParts[0] );
    const day = parseInt( dateParts[1] );

    if ( month < 1 || month > 12 ) { return false; }
    if ( day > 31 ) { return false; }
    return true;
};

$( document ).ready( () => {

    $( "#save" ).click( () => {
        $("span").text("");   // clear any previous error messages
        
        // get values entered by user
        const email = $("#email").val();
        const phone = $("#phone").val();
        const zip = $("#zip").val();
        const dob = $("#dob").val();

        // regular expressions for validity testing
        const emailPattern = /^[\w{4}\.\-]+@[\w{3}\.\-]+\.[a-zA-Z]+$/;
        const phonePattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        const zipPattern = /^\d{5}(?:-?\d{4})?$/;
        const datePattern = /(0\d{1}|1[0-2])\/([0-2]\d{1}|3[0-1])\/(19|20)\d{2}/;
        
        // check user entries for validity
        let isValid = true;
        if ( email === "" || !emailPattern.test(email) ) {
            isValid = false;
            $("#email").next().text("Please enter a valid email.");
        }
        if ( phone === "" || !phonePattern.test(phone) ) {
            isValid = false;
            $("#phone").next().text("Please use a NNN-NNN-NNNN or +NNNNNNNNNNN format.");
        }
        if ( zip === "" || !zipPattern.test(zip) ) {
            isValid = false;
            $("#zip").next().text("Please enter a valid zip code.");
        }
        if ( dob === "" || !isDate(dob, datePattern) ) {
            isValid = false;
            $("#dob").next().text("Please enter a valid date in MM/DD/YYYY format.");
        }
        
        if ( isValid ) { 
            // code that saves profile info goes here
        }
        
        $("#email").focus(); 
    });
    
    // set focus on initial load
    $("#email").focus();
});