// when click on searchicon increase input width(navInput)

$('#about-content').hide()
$('#galleries-content').hide()
$('#contact-content').hide()
const ul2 = document.getElementById('ul2')
$(document).ready(function () {
    
    // NAVBAR ========
    // navbar links underline 
    const ul1Link = document.querySelectorAll('.ul1-link');
    ul1Link.forEach(link => {
        link.addEventListener('mouseover', (e) => {
            e.target.nextElementSibling.style.visibility = 'visible'
        });
        link.addEventListener('mouseleave', (e) => {
            e.target.nextElementSibling.style.visibility = 'hidden'
        });
    });
    
    // toggle 
    const x = window.matchMedia("(max-width:800px)");
    phoneToggle(x);
    x.addListener(phoneToggle);
    
    function phoneToggle(x){
        if(x.matches){
            $(".ul1-link").on('click',()=>{
                $("#ul1").slideToggle();
            })
        };

        //   toggle bar in phone   
        $('#toggle').on('click', () => {
            $('#ul1').slideToggle()
        });
    }
    
    //  input event for home searchbar 
    const homeSearchBar = document.querySelector('.home-srch-bar')
    const featuredCards = document.querySelectorAll('.ftrd-card');
    // const featuredDiv = document.getElementById('featured')
    homeSearchBar.addEventListener('input', () => {
        let inputVal = homeSearchBar.value.toUpperCase()
        featuredCards.forEach(card => {
            let heading = card.firstElementChild.nextElementSibling.innerHTML.toUpperCase()
            let paragraph = card.firstElementChild.nextElementSibling.nextElementSibling.innerHTML.toUpperCase()
            if (inputVal.length > 0) {
                if (paragraph.includes(inputVal) || heading.includes(inputVal)) {
                    featured.style.padding = "100px 0px"
                    card.style.display = 'block'
                    $('#image').hide()
                    $('#section2').hide()
                }
                else {
                    card.style.display = 'none'
                }
            }
            else if (inputVal.length === 0) {
                $('#image').show()
                $('#section2').show()
            }
        });
    });
    
    $('.back-btn-home').on('click',()=>{
        $("#home-page-section").show()
            $('#home-dtls').hide()
        });
        const homeDtls = document.getElementById('home-dtls')
        // feature cards on click 
        $('.ftrd-card').on('click', (e) => {
        $('#home-dtls').show()
        e.preventDefault()
        $("#home-page-section").hide();
        console.log('hello world');
        let image = e.target.src
        let heading = e.target.parentElement.nextElementSibling.innerHTML
        let para = e.target.parentElement.nextElementSibling.nextElementSibling.innerText
        homeDtls.innerHTML = `
    <div class = "details-box">
    <h1>${heading}</h1>
    <div class="gallery-box">
    <img src="${image}" alt="">
    <div class="para">${para}</div>
    </div>
    <a href="" class="back-btn-home">Back</a>
    </div>`
    }); 
    
    // HOME ========
    $(".home-link").on('click',(e)=>{
        e.preventDefault()
        ul2.style.visibility = "visible"
        $('#home-content').show()
        $('#about-content').hide()
        $('#galleries-content').hide()
        $('#contact-content').hide()
    });
    
    // event listener for videobox 
    const navLi = document.querySelectorAll('.nav-li');
    const video = document.getElementById("video")
    $('.vid-cntnt').hide()
    $('.cntnt3').show()
    navLi.forEach(li => {
        li.addEventListener('click', (e) => {
            e.preventDefault()
            let id = e.target.getAttribute('id');
            video.src = `./images/video${id}.mp4`
            $('.vid-cntnt').hide()
            $(`.cntnt${id}`).show()
        });
        li.addEventListener('mouseover', (e) => {
            e.target.nextElementSibling.style.visibility = 'visible'
        });
        li.addEventListener('mouseleave', (e) => {
            e.target.nextElementSibling.style.visibility = 'hidden'
        });
    });
    
    // ABOUT ==========
    $(".about-link").on('click',(e)=>{
        ul2.style.visibility = "hidden"
        e.preventDefault()
        $('#about-content').show()
        $('#home-content').hide()
        $('#galleries-content').hide()
        $('#contact-content').hide()
    });
    
    // GALLERY ============
    $(".galleries-link").on('click',(e)=>{
        ul2.style.visibility = "visible"
        e.preventDefault()
        $('#galleries-content').show()
        $('#home-content').hide()
        $('#about-content').hide()
        $('#contact-content').hide()
    });
    
    // input event for gallery page searchbar 
    const gllryCards = document.querySelectorAll('.card');
    const gllrySearch = document.querySelector('.gallery-srch-bar')

    gllrySearch.addEventListener('input', () => {
        gllryCards.forEach(card => {

            let cardHeading = card.firstElementChild.nextElementSibling.innerHTML.toUpperCase()
            let inputVal = gllrySearch.value.toUpperCase()
            if (cardHeading.includes(inputVal)) {
                card.style.display = 'block'
            }
            else if(inputVal === 0){
                gllryCards.style.display = 'block'
            }
            else {
                card.style.display = 'none'
            }
        });

    });
    
    // gallery images click eventlistener 
    const cardImg = document.querySelectorAll('.card-img');
    let section2 = document.getElementById('gllry-section2')
    cardImg.forEach(img => {
        img.addEventListener('click', getDetails)

        function getDetails(e) {
            $('#section1').hide();

            let xhr = new XMLHttpRequest();

            xhr.open('GET', "js/gallery.json", true);

            xhr.onprogress = function () {
                section2.innerHTML = "loading"
            }

            xhr.onload = function () {
                if (this.status === 200) {
                    let obj = JSON.parse(this.responseText);
                    let heading = e.target.nextElementSibling.innerHTML

                    if (heading === "Paris") {
                        img = obj["paris"]["img"];
                        heading = obj['paris']['heading'];
                        para = obj['paris']['para'];
                    }
                    else if (heading === "Moscow") {
                        img = obj["moscow"]["img"];
                        heading = obj['moscow']['heading'];
                        para = obj['moscow']['para'];
                    }
                    else if (heading === "Tokyo") {
                        img = obj["tokyo"]["img"];
                        heading = obj['tokyo']['heading'];
                        para = obj['tokyo']['para'];
                    }
                    else if (heading === "Dubai") {
                        img = obj["dubai"]["img"];
                        heading = obj['dubai']['heading'];
                        para = obj['dubai']['para'];
                    }
                    else if (heading === "Singapore") {
                        img = obj["singapore"]["img"];
                        heading = obj['singapore']['heading'];
                        para = obj['singapore']['para'];
                    }
                    else if (heading === "London") {
                        img = obj["london"]["img"];
                        heading = obj['london']['heading'];
                        para = obj['london']['para'];
                    }
                    else if (heading === "New York") {
                        img = obj["new york"]["img"];
                        heading = obj['new york']['heading'];
                        para = obj['new york']['para'];
                    }
                    else if (heading === "Los Angeles") {
                        img = obj["mlos angeles"]["img"];
                        heading = obj['los angeles']['heading'];
                        para = obj['los angeles']['para'];
                    }
                    else if (heading === "Jaipur") {
                        img = obj["mjaipur"]["img"];
                        heading = obj['jaipur']['heading'];
                        para = obj['jaipur']['para'];
                    }
                    else if (heading === "Rome") {
                        img = obj["rome"]["img"];
                        heading = obj['rome']['heading'];
                        para = obj['rome']['para'];
                    }
                    else if (heading === "Chicago") {
                        img = obj["chicago"]["img"];
                        heading = obj['chicago']['heading'];
                        para = obj['chicago']['para'];
                    }
                    else {
                        img = obj["san francisco"]["img"];
                        heading = obj['san francisco']['heading'];
                        para = obj['san francisco']['para'];
                    }
                    section2.style.justifyContent = "flex-end"
                    section2.innerHTML = `
                                        <div class = "details-box">
                                        <h1>${heading}</h1>
                                        <div class="gallery-box">
                                        <img src="${img}" alt="">
                                        <div class="para">${para}</div>
                                        </div>
                                        <a href="" class="back-btn-gllry">Back</a>
                                        </div>`
                } //if closing tag
                else {
                    console.error('some error occured');
                }
            };
            
            xhr.send()
        }
    });

    // CONTACT 
    $(".contact-link").on('click',(e)=>{
        ul2.style.visibility = "hidden"
        e.preventDefault()
        $('#galleries-content').hide()
        $('#home-content').hide()
        $('#about-content').hide()
        $('#contact-content').show()
    });
    
    $('.back-btn-gllry').on('click',()=>{
        $('#contact-content').hide()
        $('#home-content').show()
        $('#about-content').hide()
        $('#galleries-content').hide()
    });

    // validation for contact form 
    const cntctFN = document.getElementById('contact-form-Fname');
    const cntctLN = document.getElementById('contact-form-Lname');
    const cntctEmail = document.getElementById('contact-form-EmailInp');
    let validCLN = false
    let validCFN = false
    let validCEmail = false
    $('#error').hide()
    $('#success').hide()
    
    cntctFN.addEventListener('blur', () => {
        let fName = cntctFN.value
        let regex = /[a-zA-Z]{3,15}/
        if (regex.test(fName)) {
            cntctFN.classList.remove('is-invalid')
            validCFN = true;
        }
        else {
            cntctFN.classList.add('is-invalid')
            validCFN = false;
        }
    });
    cntctLN.addEventListener('blur', () => {
        let LName = cntctLN.value
        let regex = /[a-zA-Z\.\ ]{3,15}/
        if (regex.test(LName)) {
            cntctLN.classList.remove('is-invalid')
            validCLN = true;
        }
        else {
            cntctLN.classList.add('is-invalid')
            validCLN = false;
        }
    });
    cntctEmail.addEventListener('blur', () => {
        let email = cntctEmail.value
        let regex = /([a-zA-Z0-9\.\*\-\_\&]{3,15}@[a-zA-Z]{1,5}\.[a-zA-Z]{2,3})/
        if (regex.test(email)) {
            cntctEmail.classList.remove('is-invalid')
            validCEmail = true;
        }
        else {
            cntctEmail.classList.add('is-invalid')
            validCEmail = false;
        }
    });
    
    let contactFormBtn = document.getElementById('contactFormBtn')
    const form = document.getElementById('cntct-form')
    contactFormBtn.addEventListener('click', (e) => {
        e.preventDefault()
        if (validCEmail && validCFN && validCLN) {
            console.log("all set");
            $('#success').show()
            $('#error').hide()
            setTimeout(() => {
                $('#success').hide()
            }, 4000);
            form.reset()
        }
        else {
            $('#error').show()
            $('#success').hide()
            setTimeout(() => {
                $('#error').hide()
            }, 4000);
        }
    });



    // srchicon click function 
    const navInput = document.getElementById('nav-input')
    $('#nav-input').hide();
    $('#srch-icon').on('click', () => {
        if (navInput.style.display === "none") {
            $('#nav-input').show();
        }
        else {
            $('#nav-input').hide();
        }
    });


}); //document ready function