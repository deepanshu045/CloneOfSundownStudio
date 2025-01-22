const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    scroll:true,
});
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    
  });



function imageseffect() {
    const container = document.querySelectorAll(".container");
    const containerElements = document.querySelector('#container-elements')

    const fixedImage = document.querySelector("#fixed-image")
    const Image = document.querySelector("#fixed-image img")
    const fixedOverlay = document.querySelector("#fixedOverlay")
    containerElements.addEventListener('mouseenter', () => {
        fixedImage.style.display = 'block'
   
       
    })
    containerElements.addEventListener('mouseleave', () => {
        fixedImage.style.display = 'none'
      
    })

   


    container.forEach((item) => {
      
        item.addEventListener("mouseenter", () => {
            var url = item.getAttribute('data-image')
           
            fixedImage.innerHTML = `<img src="${url}" alt="not found">`
        })

    })
}


function switchbutton() {
    const headings = document.querySelectorAll(".heading h1");
    const paragraphs = ['Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.', 'Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.', 'We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.']
    const images = ['https://sundown-ivory.vercel.app/page4-1.webp', 'https://sundown-ivory.vercel.app/page4-2.webp', 'https://sundown-ivory.vercel.app/page4-3.webp']

    const p = document.querySelector(".page3left p")
    const page3right = document.querySelector('.page3right')


    headings.forEach((elem, index) => {
        elem.style.color = index === 0 ? 'white' : '#504A45'
        elem.style.paddingLeft = index === 0 ? '0px' : '30px'
        page3right.innerHTML = `<img src="${images[0]}" alt="">`
        p.innerHTML = `${paragraphs[0]}`
        elem.addEventListener('click', function () {
            page3right.innerHTML = `<img src="${images[index]}" alt="">`
            p.innerHTML = `${paragraphs[index]}`
            headings.forEach((heading, i) => {
                heading.style.color = index === i ? 'white' : '#504A45'
                heading.style.paddingLeft = index === i ? '0px' : '30px'

            })


        })

    })
}

imageseffect();

  
  switchbutton();