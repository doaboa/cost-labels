var POLL_INTERVAL = 600
var GMAIL_ELEMENT_SELECTOR = "h2.hP"
// span.yP

var currentUrl = document.location.href
setInterval(function(){
  if (document.location.href != currentUrl) {
    injectProfileWidget()
    currentUrl = document.location.href
  }
}, POLL_INTERVAL)

function injectProfileWidget(){
  waitForElement(GMAIL_ELEMENT_SELECTOR, function(el) {
    addCustomSidebarElement(el)
  })
}

function waitForElement(selector, callback) {
  var timer = setInterval(function() {
    var el = document.querySelector(selector)
    if (el) {
      clearTimeout(timer)
      callback(el)
    }
  }, POLL_INTERVAL)
}

function addCustomSidebarElement(el) {
  // var email = $(".yP").first().attr("email")
  // var price = "300"
  //
  // if (email == 'influencers@fohrcard.com') {
  //   $(".yP").append("<div class='fohr-label'>$" + price + "</div>")
  // }

  var email = $("h3 span.gD").attr("email")
  var price = document.getElementsByClassName('a3s')[0].innerText.split('$')[1].split(' ')[0].slice(0, -1)

  if (email == 'influencers@fohrcard.com') {
    $(".ha").append("<div class='fohr-label'>$" + price + "</div>")
    $(".yP").append("<div class='fohr-label'>$" + price + "</div>")
  }

}
