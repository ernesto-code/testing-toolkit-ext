
//Form scriptToInjection.js

let codeToDOM = `<div class="layout-container" id="layout-container">
<div id="marked-headings"></div>
<div id="marked-listslistitems"></div>
<div id="marked-brs"></div>
<div id="marked-liveregions"></div>
<div id="marked-images-alt-text"></div>
<div id="marked-images-null-alt-text"></div>
<div id="marked-hrefs"></div>
<div id="marked-aria-label"></div>
</div>

<!--div id='page-title-container' class="tooltip">
<div class="tooltip-text"> Page title: <strong>Starbucks Home page</strong> </div>
<button id="close-page-title-btn" class="tooltip-btn"><i class="fa-solid fa-times"></i></button>
</div-->
<div class="toolkit">
<!-- Tooltip -->
<!--div class="tooltip">
    <div class="tooltip-icon"><i class="fa-solid fa-caret-left"></i></div>
    <div class="tooltip-text">Heading asdasdas das</div>
</div   -->
<!-- Headings -->
<button id = "headings-btn" class="centered btn-dark toolkit-btn">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20px" height="20px" fill="white">
        <path d="M0 64C0 46.3 14.3 32 32 32H80h48c17.7 0 32 14.3 32 32s-14.3 32-32 32H112V208H336V96H320c-17.7 0-32-14.3-32-32s14.3-32 32-32h48 48c17.7 0 32 14.3 32 32s-14.3 32-32 32H400V240 416h16c17.7 0 32 14.3 32 32s-14.3 32-32 32H368 320c-17.7 0-32-14.3-32-32s14.3-32 32-32h16V272H112V416h16c17.7 0 32 14.3 32 32s-14.3 32-32 32H80 32c-17.7 0-32-14.3-32-32s14.3-32 32-32H48V240 96H32C14.3 96 0 81.7 0 64z"/>
    </svg>  
</button>

<div id="expandable-section" style="display:none">
        <!-- Lists/Listitems -->
    <button id = "lists-btn" class="centered btn-dark toolkit-btn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20px" height="20px" fill="white">
            <path d="M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM64 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48-208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"/>
        </svg>
    </button>
    <!-- Alternative text -->
    <button id = 'image-alt-text-btn' class="centered btn-dark toolkit-btn" >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20px" height="20px" fill="white">
            <path d="M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/>
        </svg>
        <i class="fa-regular fa-image fa-lg"></i>
    </button>
    <!-- Null alternative text -->
    <button id = 'image-null-alt-text-btn' class="centered btn-dark toolkit-btn" >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="20px" height="20px" fill="white">
            <path d="M160 80H512c8.8 0 16 7.2 16 16V320c0 8.8-7.2 16-16 16H490.8L388.1 178.9c-4.4-6.8-12-10.9-20.1-10.9s-15.7 4.1-20.1 10.9l-52.2 79.8-12.4-16.9c-4.5-6.2-11.7-9.8-19.4-9.8s-14.8 3.6-19.4 9.8L175.6 336H160c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16zM96 96V320c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H160c-35.3 0-64 28.7-64 64zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120V344c0 75.1 60.9 136 136 136H456c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-48.6 0-88-39.4-88-88V120zm208 24a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/>
        </svg>
    </button>
    <!-- href -->
    <button id='href-btn' class="centered btn-dark toolkit-btn">
        href
    </button>
    <!-- Br finder -->
    <button id='brfinder-btn' class="centered btn-dark toolkit-btn" >
        Br
    </button>
    <!-- Live regions -->
    <button id = 'liveregions-btn' class="centered btn-dark toolkit-btn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20px" height="20px" fill="white">
            <path d="M480 32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9L381.7 53c-48 48-113.1 75-181 75H192 160 64c-35.3 0-64 28.7-64 64v96c0 35.3 28.7 64 64 64l0 128c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V352l8.7 0c67.9 0 133 27 181 75l43.6 43.6c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V300.4c18.6-8.8 32-32.5 32-60.4s-13.4-51.6-32-60.4V32zm-64 76.7V240 371.3C357.2 317.8 280.5 288 200.7 288H192V192h8.7c79.8 0 156.5-29.8 215.3-83.3z"/>
        </svg>
    </button>
    <!-- Focus indicator -->
    <button id ='focus-indicator-btn' class="centered btn-dark toolkit-btn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20px" height="20px" fill="white">
            <path d="M368 80h32v32H368V80zM352 32c-17.7 0-32 14.3-32 32H128c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64v64c0 17.7 14.3 32 32 32V352c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H96c17.7 0 32-14.3 32-32H320c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V384c0-17.7-14.3-32-32-32V160c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H352zM96 160c17.7 0 32-14.3 32-32H320c0 17.7 14.3 32 32 32V352c-17.7 0-32 14.3-32 32H128c0-17.7-14.3-32-32-32V160zM48 400H80v32H48V400zm320 32V400h32v32H368zM48 112V80H80v32H48z"/>
        </svg>
        
    </button>
    <!-- currently focused-->
    <button id ='currently-focused-btn' class="centered btn-dark toolkit-btn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20px" height="20px" fill="white">
            <path d="M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"/>
        </svg>
    </button>
    <!-- Text spacing -->
    <button id ='text-spacing-btn' class="centered btn-dark toolkit-btn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="20px" height="20px" fill="white">
            <path d="M64 128V96h64l0 320H96c-17.7 0-32 14.3-32 32s14.3 32 32 32H224c17.7 0 32-14.3 32-32s-14.3-32-32-32H192l0-320h64v32c0 17.7 14.3 32 32 32s32-14.3 32-32V80c0-26.5-21.5-48-48-48H160 48C21.5 32 0 53.5 0 80v48c0 17.7 14.3 32 32 32s32-14.3 32-32zM502.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8h32V352H416c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8H512V160h32c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-64-64z"/></svg>
        <i class="fa-solid fa-text-height"></i>
    </button>
    <!-- Aria-label -->
    <button id = "aria-labels-btn" class="centered btn-dark toolkit-btn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="20px" height="20px" fill="white">
            <path d="M112 0C99.1 0 87.4 7.8 82.5 19.7l-66.7 160-13.3 32c-6.8 16.3 .9 35 17.2 41.8s35-.9 41.8-17.2L66.7 224h90.7l5.1 12.3c6.8 16.3 25.5 24 41.8 17.2s24-25.5 17.2-41.8l-13.3-32-66.7-160C136.6 7.8 124.9 0 112 0zm18.7 160H93.3L112 115.2 130.7 160zM256 32v96 96c0 17.7 14.3 32 32 32h80c44.2 0 80-35.8 80-80c0-23.1-9.8-43.8-25.4-58.4c6-11.2 9.4-24 9.4-37.6c0-44.2-35.8-80-80-80H288c-17.7 0-32 14.3-32 32zm96 64H320V64h32c8.8 0 16 7.2 16 16s-7.2 16-16 16zm-32 64h32 16c8.8 0 16 7.2 16 16s-7.2 16-16 16H320V160zM566.6 310.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L352 434.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l192-192z"/>
        </svg>
    </button>
    <!-- Page title -->
    <button id="page-title-btn" class="centered btn-dark toolkit-btn" >
        Title
    </button>
</div>

<button id = "expand-collapse-btn" class="centered btn-dark toolkit-btn" style="border-bottom: none;" >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="20px" height="20px" fill="white">
        <path d="M214.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 402.7 329.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 210.7 329.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z"/>
    </svg> 
</button>

</div>`

let toolkitScript = `const headingBtn = document.getElementById('headings-btn')

// Event listener adding
headingBtn.addEventListener("click",(evt)=>{
    console.log("showing headings")
    activateStyle(evt.target)
})

//Event handlers


// Functions
const activateStyle = (elm) => {
    elm.classList.add('toolkit-active-btn')
}`

const bodyElement = document.querySelector('body')

const divContainer = document.createElement("div")
divContainer.innerHTML = codeToDOM
bodyElement.appendChild(divContainer)
const layoutContainer = document.getElementById('layout-container')

//Form script.js

const headingBtn = document.getElementById('headings-btn')
const expandCollapseBtn = document.getElementById('expand-collapse-btn')
const listsBtn = document.getElementById('lists-btn')
const brFinderBtn = document.getElementById('brfinder-btn')
const liveRegionsBtn = document.getElementById('liveregions-btn')
const imageAltText = document.getElementById('image-alt-text-btn')
const imageNullAltTextbtn = document.getElementById('image-null-alt-text-btn')
const hrefBtn = document.getElementById('href-btn')
const focusIndicatorBtn = document.getElementById('focus-indicator-btn')
const currentlyFocusedBtn = document.getElementById('currently-focused-btn')
const textSpacingBtn = document.getElementById('text-spacing-btn')
const ariaLabelsBtn = document.getElementById('aria-labels-btn')

const expandableSection = document.getElementById('expandable-section')

const pageTitleBtn = document.getElementById('page-title-btn')
let pageTitleContainer = ""

let tooltip = null
let tooltipCoords = null

let topStyle = "top:-28px;left:-4px;border-bottom-left-radius:0;"
let leftStyle = "top:-4px;left:-28px;"

let parentElementLayoutContainer = null
let linksHref = []

// Focus indicator
let cssRule = `a:focus, *:focus {
    box-shadow: rgb(0 255 255) 0px 0px 0px 8px;
    outline: rgb(255, 0, 0) solid 4px !important;
    outline-offset: 1px !important;
    border-radius: 2px;
}`
let style = document.createElement("style")
style.appendChild(document.createTextNode(""))
document.head.appendChild(style)

// for removing event
const controller = new AbortController()


// Functions
const scrollToTop = () => {
    window.scrollTo(0, 0)
}
const activateStyle = (elm) => {
    elm.classList.add('toolkit-active-btn')
}
const toggleButton =(elm)=>{
    if(elm.classList.contains('toolkit-active-btn')){
        elm.classList.remove('toolkit-active-btn')
    }
    else
        {elm.classList.add('toolkit-active-btn')
    }
}
const showTooltip = (textToShow,targetButton, coords)=>{
    coords = calculateTooltipCoords(targetButton)
    tooltip = document.getElementById('button-tooltip')
    if(!tooltip){ 
        const tooltipContainer = document.createElement("div")
        tooltipContainer.innerHTML = `<div class="tooltip" id='button-tooltip' style='position:fixed; top:${coords[0]}px;left:${coords[1]}px'>
        <div class="tooltip-text">${textToShow}</div>
        </div>`
        targetButton.insertAdjacentElement('afterend',tooltipContainer)
    }
}
const hideTooltip = ()=>{
    tooltip = document.getElementById('button-tooltip')
        if(tooltip) tooltip.parentElement.remove()
}
const calculateTooltipCoords = (elm) => {
    targetElmCoords = elm.getBoundingClientRect()
    return [targetElmCoords.top , targetElmCoords.left + targetElmCoords.width + 15]
    
}
const calculateCoordsForMarker = (elm) => {
    let markerCoords = elm.getBoundingClientRect()
    return {
        top: markerCoords.top - 5,
        left: markerCoords.left - 5,
        width: markerCoords.width + 5,
        height: markerCoords.height + 5
    }
}
const markElement = (elm, color, style, containerId) => {
    
    let coords = calculateCoordsForMarker(elm)
    const outlineDiv = document.createElement("div")
    parentElementLayoutContainer = document.getElementById(containerId)
    //position = top / left

    outlineDiv.style.position = "absolute"
    outlineDiv.style.top = `${coords.top}px`
    outlineDiv.style.left = `${coords.left}px`
    outlineDiv.style.width = `${coords.width}px`
    outlineDiv.style.height = `${coords.height}px`
    outlineDiv.style.borderRadius = "3px"
    outlineDiv.style.borderTopLeftRadius = "0"

    outlineDiv.style.outline = `${color} 2px solid`
    outlineDiv.style.outlineOffset = "2px"

    outlineDiv.innerHTML = `<div style="
    position:absolute;${style}width:fit-content;height:25px;padding:0 3px;
    border-radius:3px;background-color:${color};color:white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
    ${elm.tagName}
    </div>`

    parentElementLayoutContainer.insertAdjacentElement("beforeend",outlineDiv)
    //layoutContainer.insertAdjacentElement("beforeend",outlineDiv)
}
const markElementDisplayAttribute = (elm, attribute, color, style, containerId) => {
    
    let coords = calculateCoordsForMarker(elm)
    const outlineDiv = document.createElement("div")
    parentElementLayoutContainer = document.getElementById(containerId)
    //position = top / left

    outlineDiv.style.position = "absolute"
    outlineDiv.style.top = `${coords.top}px`
    outlineDiv.style.left = `${coords.left}px`
    outlineDiv.style.width = `${coords.width}px`
    outlineDiv.style.height = `${coords.height}px`
    outlineDiv.style.borderRadius = "3px"
    outlineDiv.style.borderTopLeftRadius = "0"

    outlineDiv.style.outline = `${color} 2px solid`
    outlineDiv.style.outlineOffset = "2px"

    outlineDiv.innerHTML = `<div style="
    position:absolute;${style}width:max-content;height:25px;padding:0 3px;
    border-radius:3px;background-color:${color};color:white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
    <strong style="text-transform: capitalize;filter: invert(1);">${attribute}: </strong>${elm.getAttribute(attribute)}
    </div>`

    parentElementLayoutContainer.insertAdjacentElement("beforeend",outlineDiv)
    //layoutContainer.insertAdjacentElement("beforeend",outlineDiv)
}
const markElementDisplayAttributeValue = (elm, attribute, color, style, containerId) => {
    
    let coords = calculateCoordsForMarker(elm)
    const outlineDiv = document.createElement("div")
    parentElementLayoutContainer = document.getElementById(containerId)
    //position = top / left

    outlineDiv.style.position = "absolute"
    outlineDiv.style.top = `${coords.top}px`
    outlineDiv.style.left = `${coords.left}px`
    outlineDiv.style.width = `${coords.width}px`
    outlineDiv.style.height = `${coords.height}px`
    outlineDiv.style.borderRadius = "3px"
    outlineDiv.style.borderTopLeftRadius = "0"

    outlineDiv.style.outline = `${color} 2px solid`
    outlineDiv.style.outlineOffset = "2px"

    outlineDiv.innerHTML = `<div style="
    position:absolute;${style}width:max-content;height:25px;padding:0 3px;
    border-radius:3px;background-color:${color};color:white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
    ${elm.getAttribute(attribute)}
    </div>`

    parentElementLayoutContainer.insertAdjacentElement("beforeend",outlineDiv)
    //layoutContainer.insertAdjacentElement("beforeend",outlineDiv)
}
const clearOverlay = (containerId) => {
    parentElementLayoutContainer = document.getElementById(containerId)
    parentElementLayoutContainer.innerHTML=''
}
const isActivatedTheBtn = (btn) => {
    if(!btn.classList.contains('toolkit-active-btn')) 
        return true
    else
        return false
}
const toggleButtonSection = ()=>{

    if(expandableSection.style.display == "block"){
        expandableSection.style.display = "none"
    }else{
        expandableSection.style.display = "block"
    }
}
const toggleIconRotation = (elm)=>{
    if(!elm.style.transform || elm.style.transform == 'rotate(0deg)'){
        elm.style.transform = 'rotate(180deg)'
    }
    else{
        elm.style.transform = 'rotate(0deg)'
    }
}


// Marking Functions

const markHeadings = () => {
    const pageHeadings = Array.from(document.querySelectorAll("h1,h2,h3,h4,h5,h6"))
    const ariaHeadings = null

    pageHeadings.forEach((heading)=>{
        markElement(heading,"red",topStyle,'marked-headings')
    })
}
const markListsListitems = () => {
    const pageLists = Array.from(document.querySelectorAll("ul,ol"))
    const ariaListsListitems = null
    const pageListitems = Array.from(document.querySelectorAll("li"))

    pageLists.forEach((elm)=>{
        markElement(elm,"blue",topStyle,'marked-listslistitems')
    })
    pageListitems.forEach((elm)=>{
        markElement(elm,"green",leftStyle,"marked-listslistitems")
    })
}
const markBrs = () =>{

    const brElements = document.querySelectorAll("br")
     brElements.forEach(elm=>{
        markElement(elm,"red",topStyle,"marked-brs")
    })
    console.clear()
    console.log(brElements.length + ' br elements found on the page')
}
const markLiveRegions = () =>{
    const liveRegions = document.querySelectorAll("[aria-live='polite'],[aria-live='assertive'],[role='status'],[role='alert']")
    liveRegions.forEach(elm=>{
        markElement(elm,"red",topStyle,"marked-liveregions")
    })
    console.clear()
    console.log(liveRegions.length + ' live regions elements found on the page')
}
const markImageAltText = () =>{
    const images = document.querySelectorAll("img")
    const ariaImages = document.querySelectorAll("[role='img']")
    
    images.forEach(elm=>{
        markElementDisplayAttribute(elm,"alt","red",topStyle,"marked-images-alt-text")
    })
    ariaImages.forEach(elm=>{
        markElementDisplayAttribute(elm,"aria-label","red",topStyle,"marked-images-alt-text")
    })
    console.clear()
    console.log(images.length + ariaImages.length + ' images found on the page')
}
const markImageNullAlt = () =>{
    let counter = 0
    const images = document.querySelectorAll("img")

    images.forEach(elm=>{
        if(!elm.getAttribute("alt")){
            markElementDisplayAttribute(elm,"alt","red",topStyle,"marked-images-null-alt-text")
            counter++
        }
    })
    console.clear()
    console.log(counter + ' images found on the page with null attribute.')
}
const markHrefs = () =>{
    let linksSameUrls = 0
    const links = document.querySelectorAll("a")

    links.forEach(elm=>{
        if(elm.getAttribute("href")){
            
            if(linksHref.includes(elm.getAttribute('href'))){
                markElementDisplayAttribute(elm,"href","red",topStyle,"marked-hrefs")
                linksSameUrls++
            }
            else {
                linksHref.push(elm.getAttribute('href'))
                markElement(elm,"blue",topStyle,'marked-hrefs')
            }
                
        }
    })
    console.clear()
    console.log(links.length + ' links found on the page.')
    console.log(linksSameUrls + ' links with the same URL than the original one.')


}
const markAriaLabels = () =>{
    const elementsWithAriaLabel = document.querySelectorAll("[aria-label]")
    elementsWithAriaLabel.forEach(elm=>{
        markElementDisplayAttributeValue(elm,"aria-label","tomato",topStyle,"marked-aria-label")
    })
    
    console.clear()
    console.log(elementsWithAriaLabel.length + ' elements found on the page with aria-label attribute.')
}


// Buttons calls

const headings = () =>{

    scrollToTop()
    if(isActivatedTheBtn(headingBtn)) 
        markHeadings()
    else 
        clearOverlay('marked-headings')

    toggleButton(headingBtn)
}
const expandCollapse = () =>{

    toggleButtonSection()
    toggleButton(expandCollapseBtn)
    toggleIconRotation(expandCollapseBtn.firstElementChild)
}

 

const listsListitems = () =>{

    scrollToTop()
    if(isActivatedTheBtn(listsBtn)) 
        markListsListitems()
    else 
        clearOverlay('marked-listslistitems')

    toggleButton(listsBtn)
}
const brFinder = () => {

    scrollToTop()
    if(isActivatedTheBtn(brFinderBtn)) 
        markBrs()
    else 
        clearOverlay('marked-brs')

    toggleButton(brFinderBtn)
}
const liveRegions = () => {

    scrollToTop()
    if(isActivatedTheBtn(liveRegionsBtn)) 
        markLiveRegions()
    else 
        clearOverlay('marked-liveregions')

    toggleButton(liveRegionsBtn)
}
const imageAlText = () =>{
    scrollToTop()
    if(isActivatedTheBtn(imageAltText)) 
        markImageAltText()
    else 
        clearOverlay('marked-images-alt-text')

    toggleButton(imageAltText)
}
const imageWithNullAltText = () =>{
    scrollToTop()
    if(isActivatedTheBtn(imageNullAltTextbtn)) 
        markImageNullAlt()
    else 
        clearOverlay('marked-images-null-alt-text')

    toggleButton(imageNullAltTextbtn)
}
const hrefs = () =>{
    scrollToTop()
    if(isActivatedTheBtn(hrefBtn)) 
        markHrefs()
    else 
        clearOverlay('marked-hrefs')

    toggleButton(hrefBtn)
}
const focusIndicator = () => {

    if(isActivatedTheBtn(focusIndicatorBtn))
        style.sheet.insertRule(cssRule, 0);
    
    else 
        style.sheet.deleteRule(0)

    toggleButton(focusIndicatorBtn)
}

const currentlyFocused = () =>{

    if(isActivatedTheBtn(currentlyFocusedBtn)) {
        document.addEventListener("keydown", () => {
            setTimeout(() => {
                console.clear()
                console.log("Current Focused Element:")
                console.log(document.activeElement)
            }, 55)
        },
            { signal: controller.signal }
        )
    }
    else {
        controller.abort()
    }
    
    toggleButton(currentlyFocusedBtn)
    
}
const textSpacing = () => {

    if(isActivatedTheBtn(textSpacingBtn)) {

        document.querySelectorAll("*").forEach((el)=>{
            el.style.setProperty('word-spacing','0.16em','important')
            el.style.setProperty('line-height','1.5','important')
            el.style.setProperty('letter-spacing','0.12em','important')
        
        })
    }
    else{
        document.querySelectorAll("*").forEach((el)=>{
            el.style.removeProperty('word-spacing')
            el.style.removeProperty('line-height')
            el.style.removeProperty('letter-spacing')
        
        })

    }

    toggleButton(textSpacingBtn)


    
}
const ariaLabels = () => {

    scrollToTop()
    if(isActivatedTheBtn(ariaLabelsBtn)){
        markAriaLabels()
    }
    else{
        clearOverlay('marked-aria-label')
    }

    toggleButton(ariaLabelsBtn)
}
const pageTitle = () => {
    const titleElement = document.getElementsByTagName("title")[0]
    pageTitleContainer = `<div id='page-title-container' class="tooltip">
    <div class="tooltip-text"> Page title: <strong>${titleElement.innerHTML}</strong> </div>
    </div>`
    const titleContainer = document.createElement("div")
    const titleContainerInDOM = document.getElementById('page-title-container')

    if( !titleContainerInDOM ){
        titleContainer.innerHTML = pageTitleContainer
        document.querySelector('body').appendChild(titleContainer)
    }
    else{
        if(isActivatedTheBtn(pageTitleBtn)){
            titleContainerInDOM.style = 'display:flex'
        }
        else{
            //console.log('Hiding ...'+ titleContainerInDOM.innerHTML)
            titleContainerInDOM.style = 'display:none'
        }

    }

    
    toggleButton(pageTitleBtn)
}
const closePageTitle = () =>{
    pageTitleContainer.style = 'display:none'
}

// Listeners templates

const clickEventListenerAssigner = (elm, type, funct) => {
    elm.addEventListener(type,()=>{
       funct(elm)
    })
}
const mouseoverEventListenerAssigner = (elm, type, funct,text,coords) => {
    elm.addEventListener(type,()=>{ 
       funct(text,elm, coords)
    })
}
const mouseoutEventListenerAssigner = (elm, type, funct) => {
    elm.addEventListener(type,()=>{
    funct()
    })
}

// Listeners calls

clickEventListenerAssigner(headingBtn,"click", headings )
mouseoverEventListenerAssigner(headingBtn,"mouseover", showTooltip,'Headings' )
mouseoutEventListenerAssigner(headingBtn,"mouseout", hideTooltip )

clickEventListenerAssigner(expandCollapseBtn,"click", expandCollapse )
mouseoverEventListenerAssigner(expandCollapseBtn,"mouseover", showTooltip,'Expand/Collapse Toolkit' )
mouseoutEventListenerAssigner(expandCollapseBtn,"mouseout", hideTooltip )

clickEventListenerAssigner(listsBtn,"click", listsListitems )
mouseoverEventListenerAssigner(listsBtn,"mouseover", showTooltip,'Lists / Listitems' )
mouseoutEventListenerAssigner(listsBtn,"mouseout", hideTooltip )

clickEventListenerAssigner(brFinderBtn,"click", brFinder )
mouseoverEventListenerAssigner(brFinderBtn,"mouseover", showTooltip,'Br finder' )
mouseoutEventListenerAssigner(brFinderBtn,"mouseout", hideTooltip )

clickEventListenerAssigner(liveRegionsBtn,"click", liveRegions )
mouseoverEventListenerAssigner(liveRegionsBtn,"mouseover", showTooltip,'Live Regions finder' )
mouseoutEventListenerAssigner(liveRegionsBtn,"mouseout", hideTooltip )

clickEventListenerAssigner(imageAltText,"click", imageAlText )
mouseoverEventListenerAssigner(imageAltText,"mouseover", showTooltip,'Images alt text' )
mouseoutEventListenerAssigner(imageAltText,"mouseout", hideTooltip )

clickEventListenerAssigner(imageNullAltTextbtn,"click", imageWithNullAltText )
mouseoverEventListenerAssigner(imageNullAltTextbtn,"mouseover", showTooltip,'Images with null alt' )
mouseoutEventListenerAssigner(imageNullAltTextbtn,"mouseout", hideTooltip)

clickEventListenerAssigner(hrefBtn,"click", hrefs )
mouseoverEventListenerAssigner(hrefBtn,"mouseover", showTooltip,'Link / Equal hrefs' )
mouseoutEventListenerAssigner(hrefBtn,"mouseout", hideTooltip)

clickEventListenerAssigner(focusIndicatorBtn,"click", focusIndicator )
mouseoverEventListenerAssigner(focusIndicatorBtn,"mouseover", showTooltip,'Focus indicator' )
mouseoutEventListenerAssigner(focusIndicatorBtn,"mouseout", hideTooltip)

clickEventListenerAssigner(currentlyFocusedBtn,"click", currentlyFocused )
mouseoverEventListenerAssigner(currentlyFocusedBtn,"mouseover", showTooltip,'Print currently focused element in console' )
mouseoutEventListenerAssigner(currentlyFocusedBtn,"mouseout", hideTooltip)

clickEventListenerAssigner(textSpacingBtn,"click", textSpacing )
mouseoverEventListenerAssigner(textSpacingBtn,"mouseover", showTooltip,'Text spacing' )
mouseoutEventListenerAssigner(textSpacingBtn,"mouseout", hideTooltip)

clickEventListenerAssigner(ariaLabelsBtn,"click", ariaLabels )
mouseoverEventListenerAssigner(ariaLabelsBtn,"mouseover", showTooltip,'Aria labels' )
mouseoutEventListenerAssigner(ariaLabelsBtn,"mouseout", hideTooltip)

clickEventListenerAssigner(pageTitleBtn,"click", pageTitle )
mouseoverEventListenerAssigner(pageTitleBtn,"mouseover", showTooltip,'Page title' )
mouseoutEventListenerAssigner(pageTitleBtn,"mouseout", hideTooltip)
