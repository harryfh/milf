const allLinks = document.querySelectorAll("a:link")
//const mybutton = document.getElementById("goBack")
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href")
    if (href === "#" || href.startsWith("#")) {
      e.preventDefault()
    }

    console.log(href)
    // Scroll To Top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })

    // Scroll Else
    if (href !== "#" && href.startsWith("#")) {
      const sectionElement = document.querySelector(href)
      sectionElement.scrollIntoView({ behavior: "smooth" })
    }

    // if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    //     mybutton.style.opacity = "1";
    // } else {
    //     mybutton.style.opacity = "0";
    // }
  })
})
function checkFlexGap() {
  var flex = document.createElement("div")
  flex.style.display = "flex"
  flex.style.flexDirection = "column"
  flex.style.rowGap = "1px"

  flex.appendChild(document.createElement("div"))
  flex.appendChild(document.createElement("div"))
  if (document.body) {
    document.body.appendChild(flex)
    var isSupported = flex.scrollHeight === 1
    flex.parentNode.removeChild(flex)
    console.log(isSupported)
  }

  if (!isSupported) document.body.classList.add("no-flexbox-gap")
}
checkFlexGap()
