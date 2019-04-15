// $('#contact-me-form').submit(function(e){
//     var name = document.querySelector('#name'),
//         email = document.querySelector('#email'),
//         msg = document.querySelector('#msg');

//     if(!name.value || !email.value || !msg.value){
//         alertify.error(`Please check you enter the correct data.`);
//     }else{
//         $.ajax({
//             url: "https://formspree.io/dimitramazaraki@gmail.com",
//             method: "POST",
//             data: $(this).serialize(),
//             dataType: "json"
//         });
//         e.preventDefault();
//         $(this).get(0).reset();
//         alertify.success(`Message send.`);
//     }
// });