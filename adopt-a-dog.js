function dogInfo(dog, breed) {
  alert(dog + '\r\n' + breed + '\r\n' + '$40.00');
}

let fees1 = 40.00;
let fees = 0.00;

function adoptionFees() {
  fees = fees + fees1
  alert (fees)
}
$(function(){
  console.log("DOM is READY, javascript a go")
  $('.homepage').mouseenter(function(){
    console.log("adopt me!")
    $(this).addClass('profile-card-hover')
    $('.profile-card-hover > div').removeClass('adopt-button').addClass('adopt-button-hover')
  }).mouseleave(function(){
    console.log("please")
    $(this).removeClass('profile-card-hover')
    $('.adopt-button-hover').addClass('adopt-button').removeClass('adopt-button-hover')
  })
})
