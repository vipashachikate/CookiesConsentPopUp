document.querySelector('.btn').onclick = () =>{
    document.querySelector(".cookies").classList.add("active");
}
document.querySelector(".close").onclick = () =>{
    document.querySelector(".cookies").classList.remove("active");
}