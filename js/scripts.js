//contactus


$(document).on('click', '.close', function() {

    $('#myModal').modal('hide');

});

$('.numbersOnly').keyup(function() {
    if (this.value != this.value.replace(/[^0-9\.]/g, '')) {
        this.value = this.value.replace(/[^0-9\.]/g, '');
    }
});



$(document).ready(function()



    {



        $('#addressform').validate({



            rules: {



                add_phone:

                {

                    required: true,

                    minlength: 10,

                    maxlength: 10



                },



                add_pincode:

                {

                    required: true,

                    minlength: 6,

                    maxlength: 6



                },







            },



            submitHandler: function(form)

            {

                $(".add_submit").html('Wait...');


                if ($('#cityID').val() == '') {

                    $(".add_submit").html('Submit');
                    jAlert("Please Select City");

                    return false;
                }


                form.submit();


                //alert($('#cityID').val());



            }





        });







    });










$(document).ready(function()



    {



        $('#bookingaddressform').validate({



            rules: {



                add_phone:

                {

                    required: true,

                    minlength: 10,

                    maxlength: 10



                },



                add_pincode:

                {

                    required: true,

                    minlength: 6,

                    maxlength: 6



                },







            },



            submitHandler: function(form)

            {

                $(".add_submit").html('Wait...');


                if ($('#cityID').val() == '') {

                    $(".add_submit").html('Submit');
                    jAlert("Please Select City");

                    return false;
                }


                form.submit();


                //alert($('#cityID').val());



            }





        });







    });



function remove_address1(id)

{

    jConfirm('Are you sure to want to delete this address?', 'Confirmation Dialog', function(r)

        {

            if (r == true) {
                window.location.href = 'index.php?view=address&act=delete_address&id=' + id;
            }

        });

}


function remove_address_booking(id)

{

    jConfirm('Are you sure to want to delete this address?', 'Confirmation Dialog', function(r)

        {

            if (r == true) {
                window.location.href = 'index.php?view=booking&act=delete_address&id=' + id;
            }

        });

}


function cancel_order(id)

{

    jConfirm('Are you sure to want to cancel this order?', 'Confirmation Dialog', function(r)

        {

            if (r == true) {
                window.location.href = 'index.php?view=orders&act=cancel_order&orderID=' + id;
            }

        });

}




function resend_otp() {




    $('#suc_message').hide();

    $('#resend_sms_msg').html('');

    $('#resend_otp').html("Wait..");

    jQuery.ajax({

        url: 'scripts/ajax/index.php',

        type: 'post',

        dataType: 'json',

        data: 'method=resend_otp',

        success: function(data, textStatus, XMLHttpRequest)

        {

            if (data.RESULT == "1")

            {



                $('#resend_sms_msg').html('OTP Sent Successfully.');

                $('#resend_otp').html('Click Here');

            } else

            {



                $('#resend_otp').html('Click Here');

                $('#resend_sms_msg').html('Try Again.');

            }

        }

    });




}







function change_city(id, current_page) {





    jQuery.ajax({

        url: 'scripts/ajax/index.php',

        type: 'post',

        dataType: 'json',

        data: 'method=change_city&city_id=' + id + '&current_page=' + current_page,

        success: function(data, textStatus, XMLHttpRequest)

        {

            if (data.RESULT == "1")

            {



                alert("Please Try again");

            } else

            {





                window.location.href = "https://www.serviceonwheel.com/" + data.current_city + ".html";



                /*if(data.current_page=="cityservices")
                {
                	window.location.href = "https://www.serviceonwheel.com/"+data.current_city+".html";
                	
                }
                else
                {
                	
                	
                	window.location.href = "https://www.serviceonwheel.com/index.html";
                	
                	//location.reload();
                	
                }*/





            }

        }

    });




}











$(document).ready(function()

    {

        $('#otp_form').validate({



            rules: {

                user_otp: {
                    required: true,
                    minlength: 4,
                    maxlength: 4

                },



            },


        });



    });





$(document).ready(function()

    {

        $('#careerform').validate({



            rules: {

                phone: {
                    required: true,
                    minlength: 10,
                    maxlength: 10

                },



            },


        });



    });







$(document).ready(function()

    {

        $('#signinform').validate({



            rules: {

                user_phone: {
                    required: true,
                    minlength: 10,
                    maxlength: 10

                },



            },


        });



    });




$(document).ready(function()

    {

        $('#signupform').validate({



            rules: {

                user_phone: {

                    required: true,
                    minlength: 10,
                    maxlength: 10
                },

                pincode: {
                    required: true,
                    minlength: 6,
                    maxlength: 6

                },



            },



            submitHandler: function(form)

            {

                $(".deco_submit").html('Wait...');


                if ($('#cityID').val() == '') {
                    alert("Please Select City");
                    $(".deco_submit").html('Sign Up');
                    return false;
                }


                form.submit();


                //alert($('#cityID').val());



            }





        });



    });






$(document).ready(function()

    {

        $('#linkform_popup').validate({



            rules: {

                cust_phone: {

                    required: true,
                    minlength: 10,
                    maxlength: 10



                },




            },



            submitHandler: function(form)

            {






                $('#eroormessage_l').hide();

                $('#suc_message_l').hide();

                $('.link_submit').html('Wait...');

                var dataString = 'method=link_send&' + $('#linkform_popup').serialize();

                $.ajax({



                    dataType: 'json',

                    type: "POST",

                    url: "scripts/ajax/index.php",

                    data: dataString,



                    success: function(responseData)

                    {

                        if (responseData.RESULT == 1)

                        {



                            $('.link_submit').html('Send Link');


                            $('#eroormessage_l').html(responseData.MSG);


                            $('#eroormessage_l').fadeIn(700).show();

                            $('#suc_message_l').fadeOut(700).hide();



                        } else if (responseData.RESULT == 0)

                        {

                            $('.link_submit').html('Send Link');

                            $('#suc_message_l').html(responseData.MSG);

                            $('#suc_message_l').fadeIn(700).show();

                            $('#eroormessage_l').fadeOut(700).hide();






                        }



                    },

                    error: function(responseData) {

                        console.log('Ajax request not recieved!');

                    }

                });



                $('input#name').val("");

                $('input#cemail').val("");
                $('input#phone').val("");

                $('input#subject').val("");

                $('textarea#message').val("");



                return false;

            }





        });



    });








$(document).ready(function()

    {

        $('#signform_popup').validate({



            rules: {

                user_phone1: {

                    required: true,
                    minlength: 10,
                    maxlength: 10



                },




            },



            submitHandler: function(form)

            {






                $('#eroormessage').hide();

                $('#suc_message').hide();

                $('.sign_submit').html('Wait...');

                var dataString = 'method=login&' + $('#signform_popup').serialize();

                $.ajax({



                    dataType: 'json',

                    type: "POST",

                    url: "scripts/ajax/index.php",

                    data: dataString,



                    success: function(responseData)

                    {

                        if (responseData.RESULT == 1)

                        {



                            $('.sign_submit').html('Submit');


                            $('#eroormessage').html(responseData.MSG);


                            $('#eroormessage').fadeIn(700).show();

                            $('#suc_message').fadeOut(700).hide();



                        } else if (responseData.RESULT == 0)

                        {

                            $('.sign_submit').html('Submit');

                            $('#suc_message').html(responseData.MSG);

                            $('#suc_message').fadeIn(700).show();

                            $('#eroormessage').fadeOut(700).hide();


                            $('#login_div').fadeOut(700).hide();

                            $('#otp_div').fadeIn(700).show();





                        }



                    },

                    error: function(responseData) {

                        console.log('Ajax request not recieved!');

                    }

                });



                $('input#name').val("");

                $('input#cemail').val("");
                $('input#phone').val("");

                $('input#subject').val("");

                $('textarea#message').val("");



                return false;

            }





        });



    });






$(document).ready(function()

    {

        $('#referphoneform').validate({



            rules: {

                phone: {

                    required: true,
                    minlength: 10,
                    maxlength: 10



                },




            },



            submitHandler: function(form)

            {






                $('#eroormessage_refer').hide();

                $('#suc_message_refer').hide();

                $('.phone_btn').html('Wait...');

                var dataString = 'method=refer_phone&' + $('#referphoneform').serialize();

                $.ajax({



                    dataType: 'json',

                    type: "POST",

                    url: "scripts/ajax/index.php",

                    data: dataString,



                    success: function(responseData)

                    {

                        if (responseData.RESULT == 1)

                        {



                            $('.phone_btn').html('Invite');


                            $('#eroormessage_refer').html(responseData.MSG);


                            $('#eroormessage_refer').fadeIn(700).show();

                            $('#suc_message_refer').fadeOut(700).hide();



                        } else if (responseData.RESULT == 0)

                        {

                            $('.phone_btn').html('Invite');

                            $('#suc_message_refer').html(responseData.MSG);

                            $('#suc_message_refer').fadeIn(700).show();

                            $('#eroormessage_refer').fadeOut(700).hide();







                        }



                    },

                    error: function(responseData) {

                        console.log('Ajax request not recieved!');

                    }

                });



                $('input#phone').val("");





                return false;

            }





        });



    });











$(document).ready(function()

    {

        $('#referemailform').validate({



            rules: {

                email: {

                    required: true,




                },




            },



            submitHandler: function(form)

            {






                $('#eroormessage_refer').hide();

                $('#suc_message_refer').hide();

                $('.email_btn').html('Wait...');

                var dataString = 'method=refer_email&' + $('#referemailform').serialize();

                $.ajax({



                    dataType: 'json',

                    type: "POST",

                    url: "scripts/ajax/index.php",

                    data: dataString,



                    success: function(responseData)

                    {

                        if (responseData.RESULT == 1)

                        {



                            $('.email_btn').html('Invite');


                            $('#eroormessage_refer').html(responseData.MSG);


                            $('#eroormessage_refer').fadeIn(700).show();

                            $('#suc_message_refer').fadeOut(700).hide();



                        } else if (responseData.RESULT == 0)

                        {

                            $('.email_btn').html('Invite');

                            $('#suc_message_refer').html(responseData.MSG);

                            $('#suc_message_refer').fadeIn(700).show();

                            $('#eroormessage_refer').fadeOut(700).hide();







                        }



                    },

                    error: function(responseData) {

                        console.log('Ajax request not recieved!');

                    }

                });



                $('input#email').val("");





                return false;

            }





        });



    });





$(document).ready(function()

    {

        $('#otpform_popup').validate({



            rules: {

                user_otp: {

                    required: true,
                    minlength: 4,
                    maxlength: 4



                },




            },



            submitHandler: function(form)

            {






                $('#eroormessage').hide();

                $('#suc_message').hide();
                $('#resend_sms_msg').hide();

                $('.otp_submit').html('Wait...');

                var dataString = 'method=otp&' + $('#otpform_popup').serialize();

                $.ajax({



                    dataType: 'json',

                    type: "POST",

                    url: "scripts/ajax/index.php",

                    data: dataString,



                    success: function(responseData)

                    {

                        if (responseData.RESULT == 1)

                        {



                            $('.otp_submit').html('Submit');


                            $('#eroormessage').html(responseData.MSG);


                            $('#eroormessage').fadeIn(700).show();

                            $('#suc_message').fadeOut(700).hide();



                        } else if (responseData.RESULT == 0)

                        {

                            $('.otp_submit').html('Submit');

                            location.reload();





                        }



                    },

                    error: function(responseData) {

                        console.log('Ajax request not recieved!');

                    }

                });



                $('input#name').val("");

                $('input#cemail').val("");
                $('input#phone').val("");

                $('input#subject').val("");

                $('textarea#message').val("");



                return false;

            }





        });



    });



























$(document).ready(function()

    {

        $('#inqForm').validate({



            rules: {

                subject: {

                    required: true,



                },

                email: {

                    email: true,

                },



            },



            submitHandler: function(form)

            {

                $('.deco_submit').html('Sending...');

                var dataString = 'method=inquiry_page&' + $('#inqForm').serialize();

                $.ajax({



                    dataType: 'html',

                    type: "POST",

                    url: "scripts/ajax/index.php",

                    data: dataString,



                    success: function(responseData)

                    {

                        if (responseData == 1)

                        {



                            $('.deco_submit').html('Submit');

                            $('#eroormessage').fadeIn(700).show();

                            $('#suc_message').fadeOut(700).hide();

                            $('#loader').fadeOut(700).hide();

                        } else

                        {

                            $('.deco_submit').html('Submit');

                            $('#suc_message').fadeIn(700).show();

                            $('#eroormessage').fadeOut(700).hide();

                            $('#loader').fadeOut(700).hide();

                        }



                    },

                    error: function(responseData) {

                        console.log('Ajax request not recieved!');

                    }

                });



                $('input#name').val("");

                $('input#cemail').val("");
                $('input#phone').val("");

                $('input#subject').val("");

                $('textarea#message').val("");



                return false;

            }





        });



    });
















//contactus

$(document).ready(function()

    {

        $('#contactForm').validate({



            rules: {

                subject: {

                    required: true,



                },

                phone: {

                    required: true,
                    minlength: 10,
                    maxlength: 10



                },

                email: {

                    email: true,

                },



            },



            submitHandler: function(form)

            {


                var city_id = $("#city_id").val();


                if (city_id == '') {
                    $('#city_help').fadeIn(700).show();
                    return false;

                } else {
                    $('#city_help').hide();

                }

                $('.deco_submit').html('Sending...');

                var dataString = 'method=contact&' + $('#contactForm').serialize();

                $.ajax({



                    dataType: 'html',

                    type: "POST",

                    url: "scripts/ajax/index.php",

                    data: dataString,



                    success: function(responseData)

                    {




                        if (responseData == 1)

                        {



                            $('.deco_submit').html('Submit');

                            $('#eroormessage_help').fadeIn(700).show();

                            $('#suc_message_help').fadeOut(700).hide();

                            $('#loader').fadeOut(700).hide();

                        } else

                        {

                            $('.deco_submit').html('Submit');

                            $('#suc_message_help').fadeIn(700).show();

                            $('#eroormessage_help').fadeOut(700).hide();

                            $('#loader').fadeOut(700).hide();

                        }



                    },

                    error: function(responseData) {

                        console.log('Ajax request not recieved!');

                    }

                });



                $('input#name').val("");

                $('input#email').val("");
                $('input#phone').val("");

                $('input#subject').val("");

                $('textarea#message').val("");



                return false;

            }





        });



    });







//Contact Inq

$(document).ready(function()

    {

        $('#inq_form').validate({



            rules: {

                subject: {

                    required: true,



                },

                email: {

                    email: true,

                },



            },



            submitHandler: function(form)

            {

                $('.submit_inq').html('Sending...');

                var dataString = 'method=product_inq&' + $('#inq_form').serialize();

                $.ajax({



                    dataType: 'html',

                    type: "POST",

                    url: "scripts/ajax/index.php",

                    data: dataString,



                    success: function(responseData)

                    {

                        if (responseData == 1)

                        {



                            $('.submit_inq').html('Submit');

                            $('#eroormessage').fadeIn(700).show();

                            $('#suc_message').fadeOut(700).hide();

                            $('#loader').fadeOut(700).hide();

                        } else

                        {

                            $('.deco_submit').html('Submit');

                            $('#suc_message').fadeIn(700).show();

                            $('#eroormessage').fadeOut(700).hide();

                            $('#loader').fadeOut(700).hide();

                        }



                    },

                    error: function(responseData) {

                        console.log('Ajax request not recieved!');

                    }

                });



                $('input#name').val("");

                $('input#cemail').val("");
                $('input#phone').val("");

                $('input#subject').val("");

                $('textarea#message').val("");



                return false;

            }





        });



    });

function fill_combo_data(id) {





    $.ajax(

        {

            type: "POST",

            dataType: 'json',

            url: "scripts/ajax/index.php",

            data: "method=get_subcategory_list&id=" + id,

            success: function(data) {

                $('#subcategory_id').find('option').remove().end();

                var newopt = '<option value="0">-- Select --</option>';

                $('#subcategory_id').append(newopt);

                for (i = 0; i < data.DATA.length; i++) {

                    //var newopt='<option value="'+data.DATA[i].id+'">'+data.DATA[i].city_name+'</option>';					

                    if (data.DATA[i].id == $('#selected_id').val()) {

                        var newopt = '<option value="' + data.DATA[i].id + '" selected="selected">' + data.DATA[i].category_name + '</option>';





                    } else {

                        var newopt = '<option value="' + data.DATA[i].id + '">' + data.DATA[i].category_name + '</option>';

                    }





                    $('#subcategory_id').append(newopt);



                }

            }

        }

    );

}



function add_to_cart(service_id, qty_type)

{




    var main_service_id = $("#mainServiceID").val();

    var quantity = 1;
    $('.detail_qty_p_m_' + service_id).attr("disabled", "disabled");

    var dataString = 'method=add_to_cart&service_id=' + service_id + '&quantity=' + quantity + '&main_service_id=' + main_service_id + '&add_type=' + qty_type;

    $.ajax(

        {

            type: "POST",

            url: "scripts/ajax/index.php",

            dataType: 'json',

            data: dataString,

            success: function(data, textStatus, XMLHttpRequest) {

                if (data.RESULT == "1")

                {



                    //$.notify(data.MSG, "success");


                    $().toastmessage('showSuccessToast', data.MSG);

                    if (data.items_o_html != '') {
                        $(".pr_" + service_id).html(data.items_o_html);


                    }



                    $(".detail_qty_" + service_id).val(data.P_QTY);

                    $('.detail_qty_p_m_' + service_id).removeAttr("disabled", "disabled");
                    cartItems();





                } else

                {



                    $(".detail_qty_" + service_id).val(data.P_QTY);

                    $('.detail_qty_p_m_' + service_id).removeAttr("disabled", "disabled");
                    cartItems();

                    $().toastmessage('showErrorToast', data.MSG);
                    return false;

                }




            }

        }

    );






}

function cartItems() {

    var main_service_id = $("#mainServiceID").val();
    var dataString = 'method=cart&actionType=list&main_service_id=' + main_service_id;

    $(".cart_checkout_btn").addClass("disable_btn");

    $.ajax(

        {

            type: "POST",
            url: "scripts/ajax/index.php",
            dataType: 'json',
            data: dataString,
            success: function(data, textStatus, XMLHttpRequest) {
                if (data.RESULT == "0") {
                    $(".carsummaryForMobile").html(data.mobilehtml);
                    $(".cartDiv").html(data.html);
                    $(".cart_checkout_btn").removeClass("disable_btn");
                    return false;


                } else if (data.RESULT == "2") {
                    $(".carsummaryForMobile").html(data.mobilehtml);
                    $(".cartDiv").html(data.html);


                } else {
                    $(".cart_checkout_btn").removeClass("disable_btn");
                    return false;


                }




            }

        }

    );

}