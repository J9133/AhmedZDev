//css {
let v = 0
let p = 0
const boxes = document.querySelectorAll('.videos')
boxes.forEach((box, i) => {
  box.style.top = `${i * 25}vw`
  v += 1
})

const pro = document.querySelectorAll('.projects')
boxes.forEach((box, i) => {
  box.style.top = `${i * 25}vw`
  p += 1
})

document.getElementById("all_project").style.top = 25 + (v * 25) + "vw"


const totalHeight = document.documentElement.scrollHeight 
const screenHeight = window.innerHeight
const percentOfScreen = (totalHeight / screenHeight) * 100
const conter = document.getElementById("conter")
const conter2 = document.getElementById("conter2")
const all_videos = document.getElementById("all_videos")
const pos_top = percentOfScreen
conter.style.height = percentOfScreen * 3 + "vh"
conter.style.top = pos_top + "%"

function title_size() {
    const img = document.getElementById("AhmedZDev_img");
    const title = document.getElementById("title");

    function updateSize() {
        const H = img.offsetHeight
        const W = img.offsetWidth

        title.style.height = (H * 2) + "px"
        title.style.width = (W * 2) + "px"
    }

    if (img.complete && img.naturalHeight !== 0) {
        updateSize()
    } else {
        img.onload = updateSize
    }
}

window.addEventListener("load", title_size)
window.addEventListener("resize", title_size)

// } css

// js code {

//varebol & const
let data
let data2
let ligh_mod = false
let langu = "en"
const sh = document.getElementById("sh")
const night_sum = document.getElementsByClassName("night_sum")
const m_s_img = document.getElementById("moon_s_img1")

const text1 = document.getElementById("text1")
const text11 = document.getElementById("text11")
const videos_title = document.getElementById("videos_title")
const project_title = document.getElementById("project_title")
const moon_s_img6 = document.getElementById("moon_s_img6")



//json
fetch('./data/url/url.json')
  .then(response => response.json())
  .then(rdata => {
    data = rdata
  })
  .catch(error => console.error('Error:', error))

fetch('./data/url/url2.json')
  .then(response => response.json())
  .then(rdata => {
    data2 = rdata
  })
  .catch(error => console.error('Error:', error))


// clicks

document.addEventListener("DOMContentLoaded", function () {
    const videos = document.querySelectorAll('.videos')
    
    videos.forEach((video) => {
        video.addEventListener('click', function () {
            const videoId = video.id
            console.log(videoId)
            const lastChar = videoId.charAt(videoId.length - 1)
            let ii = parseInt(lastChar) + 1
            click(ii)
        })
    })
})

document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll('.projects')
    
    projects.forEach((project) => {
        project.addEventListener('click', function () {
            const projectId = project.id
            console.log('Clicked project with ID:', projectId)
            const lastChar = projectId.charAt(projectId.length - 1)
            let ii = parseInt(lastChar)

            click2(ii)
        })
    })
})

document.getElementById("d").addEventListener("click", function () {
    window.open("https://discord.com/users/1313619474552983684", "_blank")
})

document.getElementById("y").addEventListener("click", function () {
    window.open("https://www.youtube.com/@AhmedZDev", "_blank")
})


document.addEventListener("DOMContentLoaded", function() {
    const videos = document.querySelectorAll('#moon_s_img6')
    videos.forEach((video, index) => {
        video.addEventListener('click', function() {
            lang()
        })
    })
})

document.addEventListener("DOMContentLoaded", function() {
    const videos = document.querySelectorAll('#AhmedZDev_img')
    videos.forEach((video, index) => {
        video.addEventListener('click', function() {
            click(1)
        })
    })
})

document.addEventListener("DOMContentLoaded", function() {
    const videos = document.querySelectorAll('#moon_s_img2')
    videos.forEach((video, index) => {
        video.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: "smooth" });
        })
    })
})

document.addEventListener("DOMContentLoaded", function() {
    const videos = document.querySelectorAll('#moon_s_img3')
    videos.forEach((video, index) => {
        video.addEventListener('click', function() {
            const target = document.querySelector("#videos_title")
            const vwOffset = 8
            const offsetInPx = vwOffset * window.innerWidth / 100
            const y = target.getBoundingClientRect().top + window.pageYOffset - offsetInPx
            window.scrollTo({
                top: y,
                behavior: 'smooth'
            })
        })
    })
})

document.addEventListener("DOMContentLoaded", function() {
    const videos = document.querySelectorAll('#moon_s_img4')
    videos.forEach((video, index) => {
        video.addEventListener('click', function() {
            const target = document.querySelector("#project_title")
            const vwOffset = 8
            const offsetInPx = vwOffset * window.innerWidth / 100
            const y = target.getBoundingClientRect().top + window.pageYOffset - offsetInPx
            window.scrollTo({
                top: y,
                behavior: 'smooth'
            })
        })
    })
})

document.addEventListener("DOMContentLoaded", function() {
    const videos = document.querySelectorAll('#moon_s_img5')
    videos.forEach((video, index) => {
        video.addEventListener('click', function() {
            const target = document.querySelector("#AhmedZDev_img")
            const vwOffset = 9.5
            const offsetInPx = vwOffset * window.innerWidth / 100
            const y = target.getBoundingClientRect().top + window.pageYOffset - offsetInPx
            window.scrollTo({
                top: y,
                behavior: 'smooth'
        })
        })
    })
})



// functions


function lang(){
    if (langu == "ar"){
        text1.innerHTML = "Hello my name is"
        text11.innerHTML = "Game Developer"
        text1.style.left = 0 + "%"
        text11.style.left = 0 + "%"
        videos_title.innerHTML = "videos"
        project_title.innerHTML = "project"
        moon_s_img6.innerHTML = "en"
        langu = "en"
    }else if (langu == "en"){
        text1.innerHTML = "مرحبا اسمي"
        text11.innerHTML = "مطور العاب"
        text1.style.left = 23.5 + "%"
        text11.style.left = 21 + "%"
        videos_title.innerHTML = "الفيديوهات"
        project_title.innerHTML = "المشاريع"
        moon_s_img6.innerHTML = "ar"
        langu = "ar"
    }
}

function click(par) {
  console.log(data)
  console.log(par)
  if (data){
    const url = data["url" + par]
    window.open(url, "_blank")
  }
}

function click2(par) {
  console.log(data2)
  console.log(par)
  if (data2){
    const url = data2["url" + par]
    console.log(url)
    window.open(url, "_blank")
  }
}


function c_night_sum(){
    if (ligh_mod){
        document.body.style.backgroundColor = "rgb(74, 15, 15)"
        conter.style.backgroundColor = "rgb(120, 26, 26)"
        conter2.style.backgroundColor = "rgb(160, 34, 34)"
        sh.style.backgroundColor = "rgb(187, 30, 30)"
        for (const el of night_sum) {
            el.style.backgroundColor = "red"
        }
        m_s_img.src = "../imgs/moon.png"
    }else{ 
        document.body.style.backgroundColor = "rgba(212, 181, 88, 1)"
        conter.style.backgroundColor = "rgba(207, 183, 111, 1)"
        conter2.style.backgroundColor = "rgba(215, 196, 138, 1)"
        sh.style.backgroundColor = "rgba(231, 195, 87, 1)"
        for (const el of night_sum) {
            el.style.backgroundColor = "rgba(214, 179, 73, 1)"
        }
        m_s_img.src = "../imgs/summer.png"
    }
    ligh_mod = !ligh_mod
}

// } js code
