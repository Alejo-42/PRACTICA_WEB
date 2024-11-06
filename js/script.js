const $pag1 = document.querySelector(".pag-1")
const $pag2 = document.querySelector(".pag-2")
const $nav1 = document.querySelector(".nav1")
const $nav2 = document.querySelector(".nav2")
const $main1 = document.querySelector(".main1")
const $main2 = document.querySelector(".main2")
const $footer1 = document.querySelector(".footer1")
const $footer2 = document.querySelector(".footer2")
const $volver1 = document.querySelector(".volver1")
const $volver2 = document.querySelector(".volver2")

$nav1.classList.add("ocultar")
$nav2.classList.add("ocultar")
$main1.classList.add("ocultar")
$main2.classList.add("ocultar")
$footer1.classList.add("ocultar")
$footer2.classList.add("ocultar")
function ocultarTodo1(){
    $pag1.classList.add("ocultar")
    $pag2.classList.add("ocultar")
    $nav1.classList.remove("ocultar")
    $main1.classList.remove("ocultar")
    $footer1.classList.remove("ocultar")
}
function ocultarTodo2() {
    $pag1.classList.add("ocultar")
    $pag2.classList.add("ocultar")
    $nav2.classList.remove("ocultar")
    $main2.classList.remove("ocultar")
    $footer2.classList.remove("ocultar")
}
function volver1() {
    $pag1.classList.remove("ocultar")
    $pag2.classList.remove("ocultar")
    $nav1.classList.add("ocultar")
    $main1.classList.add("ocultar")
    $footer1.classList.add("ocultar")
}
function volver2() {
    $pag1.classList.remove("ocultar")
    $pag2.classList.remove("ocultar")
    $nav2.classList.add("ocultar")
    $main2.classList.add("ocultar")
    $footer2.classList.add("ocultar")
}
$volver1.addEventListener("click",volver1)
$volver2.addEventListener("click",volver2)

$pag1.addEventListener("click",ocultarTodo1)
$pag2.addEventListener("click",ocultarTodo2)