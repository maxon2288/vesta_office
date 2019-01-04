function forms() {

    $('input[name="ecpKey"]').mask('0000 0000 0000 0000');

    
    $('.form').each(function() {
        var it = $(this);
         it.validate({
             rules: {
                 email: {
                     required: true,
                     email: true,
                 },
                 phone: {
                     required: true,
                     minlength: 11
                 },
                 vote: {
                    required: true,
                 },
                 messages: {
                     required: true,
                 },
                 name: {
                     required: false,
                 },
                 password: {
                     required: true,
                 },
                 votename: {
                     required: true,
                     maxlength: 10,
                 },
                 passwordYet: {
                     required: true,  
                     equalTo: "#password"          
                 }
             },
         
             errorPlacement: function (error, element) {
             },
    
             submitHandler: function() {
                 // console.log(1)
                 // $(".form input, .form textarea").val('');
                 $.ajax({
                     // type: 'POST',
                     // url: 'mail.php',
                     success: function(){
                         it.find("input").val("");
                     }
                 });
             },  
         
         });
     });
    $('.ecp-form').each(function() {
        var it = $(this);
         it.validate({
             rules: {
                 email: {
                     required: true,
                     email: true,
                 },
                 phone: {
                     required: true,
                     minlength: 11
                 },
                 vote: {
                    required: true,
                 },
                 messages: {
                     required: true,
                 },
                 name: {
                     required: false,
                 },
                 password: {
                     required: true,
                 },
                 votename: {
                     required: true,
                     maxlength: 10,
                 },
                 passwordYet: {
                     required: true,  
                     equalTo: "#password"          
                 },
                ecpKey: {
                    required: true,
                    minlength: 19,
                },
                ecpPassword: {
                    required: true,
                    minlength: 5,
                }

             },
         
             errorPlacement: function (error, element) {
             },
    
             submitHandler: function() {
                 // console.log(1)
                 // $(".form input, .form textarea").val('');
                 $.ajax({
                     // type: 'POST',
                     // url: 'mail.php',
                     success: function(){
                         it.find("input").val("");
                     }
                 });
             },  
         
         });
     });
    $('.form-vote').each(function() {
        var it = $(this);
         it.validate({
             rules: {
                 email: {
                     required: true,
                     email: true,
                 },
                 phone: {
                     required: true,
                     minlength: 11
                 },
                 vote: {
                    required: true,
                 },
                 messages: {
                     required: true,
                 },
                 name: {
                     required: false,
                 },
                 password: {
                     required: true,
                 },
                 votename: {
                     required: true,
                     maxlength: 10,
                 },
                 passwordYet: {
                     required: true,  
                     equalTo: "#password"          
                 },
                ecpKey: {
                    required: true,
                    minlength: 19,
                },
                ecpPassword: {
                    required: true,
                    minlength: 5,
                }

             },
         
             errorPlacement: function (error, element) {
             },
    
             submitHandler: function() {
                 // console.log(1)
                 // $(".form input, .form textarea").val('');
                 $.ajax({
                     // type: 'POST',
                     // url: 'mail.php',
                     success: function(){
                        it.find("input").val("");
                        $('.radio').each(function () {
                            var it = $(this);
                            it.closest(".vote").find(".radio-thanx").css({
                                "display": "flex",
                            });
                            it.remove();        
                            $(".form-vote__submit").remove();
                        });
                     }
                 });
             },  
         
         });
     });
}
