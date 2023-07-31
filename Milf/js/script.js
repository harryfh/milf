const allLinks = document.querySelectorAll("a:link")
const mybutton = document.getElementById("goBack")
allLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
       
      
        const href = link.getAttribute("href")
        if (href === "#" || href.startsWith("#") ) {
            e.preventDefault();
        }
      
        
        console.log(href)
         // Scroll To Top
        if (href === "#") 
        
            window.scrollTo({
                top: 0,
                behavior: "smooth",
        });

        // Scroll Else
        if (href !== "#" && href.startsWith("#")) {
            
            const sectionElement = document.querySelector(href);
            sectionElement.scrollIntoView({behavior: "smooth"});
        }
       
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.opacity = "1";
        } else {
            mybutton.style.opacity = "0";
        }
    
            
    });
});
