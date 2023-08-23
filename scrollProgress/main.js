const navi = document.querySelector(".navi");
const naviBtn = navi.querySelectorAll(".btn>li");
const content = document.querySelectorAll(".content");



window.addEventListener("scroll",()=>{
    if(window.pageYOffset > navi.offsetTop - 50) {
        navi.classList.add("fixed");
    }
    else {
        navi.classList.remove("fixed");
    }

    content.forEach((el, index)=>{
        let content_top = el.offsetTop;

        if (window.pageYOffset > content_top -30) {
            naviBtn[index].classList.add("on");
            content.forEach((el)=>{
                el.classList.remove("on");
            })
            content[index].classList.add("on");
        }

        else {
            naviBtn[index].classList.remove("on");
            content[index].classList.remove("on");
        }

    })

    naviBtn.forEach((el,index)=> {
        el.addEventListener("click", (e)=>{
            e.preventDefault();
            if (window.pageYOffset == 0) {
                window.scrollTo({top:content[index].offsetTop - 200, behavior:"smooth"})
            }
            else {
                window.scrollTo({top:content[index].offsetTop - 20, behavior:"smooth"})
            }
            
        })
    })
        

    scroll();
})






function scroll () {
    content.forEach((el, index)=>{
        if(el.classList.contains("on")) {
            var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            var height = content[index].offsetTop + content[index].offsetHeight;
            var scrolled = (winScroll / height) * 100;
            var progress = naviBtn[index];
            progress.style.height = scrolled + "%";
            console.log(progress);
        }
    })
}



