const footerIcons = [...document.querySelectorAll(".fa-brands")];

footerIcons.forEach(x => {
    x.style.cursor = "pointer"
    if (x.id == "Facebook") {
        x.addEventListener("click", () => page("www", "facebook"))
    } else if(x.id == "Instagram") {
        x.addEventListener("click", () => page("www","instagram"))
    } else if(x.id == "WhatsApp") {
        x.addEventListener("click", () => page("web","whatsapp"))
    }

    const page = (subdomain = "www", page) => {
        window.open(`https://${subdomain}.${page}.com/`)
    }
})