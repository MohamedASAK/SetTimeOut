let displayContent = document.querySelector(".hiddenContent");
let holdHere = document.querySelector(".holdHere")
let course = document.querySelector(".course");
let name = document.querySelector(".name");
let faculty = document.querySelector(".faculty");
let university = document.querySelector(".university");
displayContent.style.userSelect = "none"; // disable text from select

holdHere.addEventListener("mouseenter",()=>{
    setTimeout(()=>{
        displayContent.style.backgroundColor = "beige";
        displayContent.style.transition = "all 1s";
        setTimeout(()=>{
            course.style.color = "black";
        },1000);
        setTimeout(()=>{
            name.style.color = "black";
        },2000);
        setTimeout(()=>{
            university.style.color = "black";
        },3000);
        setTimeout(()=>{
            faculty.style.color = "black";
        },4000);
    });
});

holdHere.addEventListener("mouseleave",()=>{
    setTimeout(()=>{
        setTimeout(()=>{
            faculty.style.color = "";
            faculty.style.transition = "all 1s";
        },1000);
        setTimeout(()=>{
            university.style.color = "";
            university.style.transition = "all 1s";
        },2000);
        setTimeout(()=>{
            name.style.color = "";
            name.style.transition = "all 1s";
        },3000);
        setTimeout(()=>{
            course.style.color = "";
            course.style.transition = "all 1s";
            displayContent.style.backgroundColor = "";
            displayContent.style.transition = "all 0.5s";
        },4000);
    });
});