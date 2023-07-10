
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

<!--div id='page-title-container' class="tk-tooltip">
<div class="tk-tooltip-text"> Page title: <strong>Starbucks Home page</strong> </div>
<button id="close-page-title-btn" class="tk-tooltip-btn"><i class="fa-solid fa-times"></i></button>
</div-->
<div class="toolkit transition-all" id='toolkit' translate="no">
<!-- Tooltip -->
<!--div class="tk-tooltip">
    <div class="tk-tooltip-icon"><i class="fa-solid fa-caret-left"></i></div>
    <div class="tk-tooltip-text">Heading </div>
</div   -->

<div id="expandable-section" class="transition-all d-flex">
        <!-- direction btn -->
        <button id = "direction-btn" class="tk-white-top-btn">
            <svg id='direction-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20px" height="18px" fill="#132342">
              <path d="M406.6 374.6l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224l-293.5 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288l293.5 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/>
            </svg>  
        </button>
    <div id="testing-toolkit">
        
        <!-- Headings -->
        <button id = "headings-btn" class="tk-centered tk-btn-dark tk-toolkit-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20px" height="20px" fill="white">
                <path d="M0 64C0 46.3 14.3 32 32 32H80h48c17.7 0 32 14.3 32 32s-14.3 32-32 32H112V208H336V96H320c-17.7 0-32-14.3-32-32s14.3-32 32-32h48 48c17.7 0 32 14.3 32 32s-14.3 32-32 32H400V240 416h16c17.7 0 32 14.3 32 32s-14.3 32-32 32H368 320c-17.7 0-32-14.3-32-32s14.3-32 32-32h16V272H112V416h16c17.7 0 32 14.3 32 32s-14.3 32-32 32H80 32c-17.7 0-32-14.3-32-32s14.3-32 32-32H48V240 96H32C14.3 96 0 81.7 0 64z"/>
            </svg>  
        </button>
        <!-- Lists/Listitems -->
        <button id = "lists-btn" class="tk-centered tk-btn-dark tk-toolkit-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20px" height="20px" fill="white">
                <path d="M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM64 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48-208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"/>
            </svg>
        </button>
        <!-- Alternative text -->
        <button id = 'image-alt-text-btn' class="tk-centered tk-btn-dark tk-toolkit-btn" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20px" height="20px" fill="white">
                <path d="M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/>
            </svg>
            <i class="fa-regular fa-image fa-lg"></i>
        </button>
        <!-- Null alternative text -->
        <button id = 'image-null-alt-text-btn' class="tk-centered tk-btn-dark tk-toolkit-btn" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="20px" height="20px" fill="white">
                <path d="M160 80H512c8.8 0 16 7.2 16 16V320c0 8.8-7.2 16-16 16H490.8L388.1 178.9c-4.4-6.8-12-10.9-20.1-10.9s-15.7 4.1-20.1 10.9l-52.2 79.8-12.4-16.9c-4.5-6.2-11.7-9.8-19.4-9.8s-14.8 3.6-19.4 9.8L175.6 336H160c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16zM96 96V320c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H160c-35.3 0-64 28.7-64 64zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120V344c0 75.1 60.9 136 136 136H456c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-48.6 0-88-39.4-88-88V120zm208 24a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/>
            </svg>
        </button>
        <!-- links -->
        <button id='links-btn' class="tk-centered tk-btn-dark tk-toolkit-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="18px" height="18px" fill="white">
                <path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/>
            </svg>
        </button>
        <!-- hrefs -->
        <button id='hrefs-btn' class="tk-centered tk-btn-dark tk-toolkit-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="18px" height="18px" fill="white">
                <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L489.3 358.2l90.5-90.5c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114l-96 96-31.9-25C430.9 239.6 420.1 175.1 377 132c-52.2-52.3-134.5-56.2-191.3-11.7L38.8 5.1zM239 162c30.1-14.9 67.7-9.9 92.8 15.3c20 20 27.5 48.3 21.7 74.5L239 162zM406.6 416.4L220.9 270c-2.1 39.8 12.2 80.1 42.2 110c38.9 38.9 94.4 51 143.6 36.3zm-290-228.5L60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5l61.8-61.8-50.6-39.9z"/>
            </svg>
        </button>
        <!-- Br finder -->
        <button id='brfinder-btn' class="tk-centered tk-btn-dark tk-toolkit-btn" >
            Br
        </button>
        <!-- Live regions -->
        <button id = 'liveregions-btn' class="tk-centered tk-btn-dark tk-toolkit-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20px" height="20px" fill="white">
                <path d="M480 32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9L381.7 53c-48 48-113.1 75-181 75H192 160 64c-35.3 0-64 28.7-64 64v96c0 35.3 28.7 64 64 64l0 128c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V352l8.7 0c67.9 0 133 27 181 75l43.6 43.6c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V300.4c18.6-8.8 32-32.5 32-60.4s-13.4-51.6-32-60.4V32zm-64 76.7V240 371.3C357.2 317.8 280.5 288 200.7 288H192V192h8.7c79.8 0 156.5-29.8 215.3-83.3z"/>
            </svg>
        </button>
        <!-- Focus indicator -->
        <button id ='focus-indicator-btn' class="tk-centered tk-btn-dark tk-toolkit-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20px" height="20px" fill="white">
                <path d="M368 80h32v32H368V80zM352 32c-17.7 0-32 14.3-32 32H128c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64v64c0 17.7 14.3 32 32 32V352c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H96c17.7 0 32-14.3 32-32H320c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V384c0-17.7-14.3-32-32-32V160c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H352zM96 160c17.7 0 32-14.3 32-32H320c0 17.7 14.3 32 32 32V352c-17.7 0-32 14.3-32 32H128c0-17.7-14.3-32-32-32V160zM48 400H80v32H48V400zm320 32V400h32v32H368zM48 112V80H80v32H48z"/>
            </svg>
            
        </button>
        <!-- currently focused-->
        <button id ='currently-focused-btn' class="tk-centered tk-btn-dark tk-toolkit-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20px" height="20px" fill="white">
                <path d="M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"/>
            </svg>
        </button>
        <!-- Text spacing -->
        <button id ='text-spacing-btn' class="tk-centered tk-btn-dark tk-toolkit-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="20px" height="20px" fill="white">
                <path d="M64 128V96h64l0 320H96c-17.7 0-32 14.3-32 32s14.3 32 32 32H224c17.7 0 32-14.3 32-32s-14.3-32-32-32H192l0-320h64v32c0 17.7 14.3 32 32 32s32-14.3 32-32V80c0-26.5-21.5-48-48-48H160 48C21.5 32 0 53.5 0 80v48c0 17.7 14.3 32 32 32s32-14.3 32-32zM502.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8h32V352H416c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8H512V160h32c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-64-64z"/></svg>
            <i class="fa-solid fa-text-height"></i>
        </button>
        <!-- Aria-label -->
        <button id = "aria-labels-btn" class="tk-centered tk-btn-dark tk-toolkit-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="20px" height="20px" fill="white">
                <path d="M112 0C99.1 0 87.4 7.8 82.5 19.7l-66.7 160-13.3 32c-6.8 16.3 .9 35 17.2 41.8s35-.9 41.8-17.2L66.7 224h90.7l5.1 12.3c6.8 16.3 25.5 24 41.8 17.2s24-25.5 17.2-41.8l-13.3-32-66.7-160C136.6 7.8 124.9 0 112 0zm18.7 160H93.3L112 115.2 130.7 160zM256 32v96 96c0 17.7 14.3 32 32 32h80c44.2 0 80-35.8 80-80c0-23.1-9.8-43.8-25.4-58.4c6-11.2 9.4-24 9.4-37.6c0-44.2-35.8-80-80-80H288c-17.7 0-32 14.3-32 32zm96 64H320V64h32c8.8 0 16 7.2 16 16s-7.2 16-16 16zm-32 64h32 16c8.8 0 16 7.2 16 16s-7.2 16-16 16H320V160zM566.6 310.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L352 434.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l192-192z"/>
            </svg>
        </button>
        <!-- Page title -->
        <button id="page-title-btn" class="tk-centered tk-btn-dark tk-toolkit-btn" >
            Title
        </button>
        
        <!-- Change Opacity button-->
        <button id = "change-opacity-btn" class="tk-centered tk-btn-dark tk-toolkit-btn" style="border-bottom: none;" >
            <svg id = 'chevron-svg' class="transition-all" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 512" width="20px" height="20px" fill="white" style="">
                <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z"/>
            </svg> 
        </button>

        <!-- UTest toolkit button-->
        <button id = "utest-toolkit-btn" class="tk-centered tk-btn-dark tk-toolkit-btn" style="background-color: #2d529a;border-radius: 10px;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 512" width="18px" height="18px" fill="white" style="padding-top: 5px;">
                <path d="M0 160v96C0 379.7 100.3 480 224 480s224-100.3 224-224V160H320v96c0 53-43 96-96 96s-96-43-96-96V160H0zm0-32H128V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64v64zm320 0H448V64c0-17.7-14.3-32-32-32H352c-17.7 0-32 14.3-32 32v64z"/>
            </svg>
        </button>
    </div>
    <div id="utest-toolkit" style="display:none" class='tk-light-blue'>
        <!-- Bold title : tk-separator-->
        <button id="bold-title-column-btn" class="tk-centered tk-btn-dark tk-toolkit-btn tk-light-blue" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="20px" height="20px" fill="white">
                <path d="M0 64C0 46.3 14.3 32 32 32H80 96 224c70.7 0 128 57.3 128 128c0 31.3-11.3 60.1-30 82.3c37.1 22.4 62 63.1 62 109.7c0 70.7-57.3 128-128 128H96 80 32c-17.7 0-32-14.3-32-32s14.3-32 32-32H48V256 96H32C14.3 96 0 81.7 0 64zM224 224c35.3 0 64-28.7 64-64s-28.7-64-64-64H112V224H224zM112 288V416H256c35.3 0 64-28.7 64-64s-28.7-64-64-64H224 112z"/>
            </svg><strong>:</strong>
        </button>
         <!-- Bold title / tk-separator -->
        <button id="bold-title-slash-btn" class="tk-centered tk-btn-dark tk-toolkit-btn tk-light-blue" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="20px" height="20px" fill="white">
                <path d="M0 64C0 46.3 14.3 32 32 32H80 96 224c70.7 0 128 57.3 128 128c0 31.3-11.3 60.1-30 82.3c37.1 22.4 62 63.1 62 109.7c0 70.7-57.3 128-128 128H96 80 32c-17.7 0-32-14.3-32-32s14.3-32 32-32H48V256 96H32C14.3 96 0 81.7 0 64zM224 224c35.3 0 64-28.7 64-64s-28.7-64-64-64H112V224H224zM112 288V416H256c35.3 0 64-28.7 64-64s-28.7-64-64-64H224 112z"/>
            </svg><strong>/</strong>
        </button>
        <!-- Hide my bugs -->
        <button id="hide-my-bugs-btn" class="tk-centered tk-btn-dark tk-toolkit-btn tk-light-blue" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="20px" height="20px" fill="white">
                <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z"/>
            </svg>
        </button> 
        <!-- Issues with +1s -->
        <button id="issues-with-plus-1-btn" class="tk-centered tk-btn-dark tk-toolkit-btn tk-light-blue" >
            <strong>+1s</strong>
        </button> 
        <!-- Filter selected bugs -->
        <button id="filter-selected-bugs-btn" class="tk-centered tk-btn-dark tk-toolkit-btn tk-light-blue" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="20px" height="20px" fill="white">
                <path d="M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
            </svg>
        </button> 
        <!-- Mark row by double click -->
        <button id="mark-row-dbl-click-btn" class="tk-centered tk-btn-dark tk-toolkit-btn tk-light-blue" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="20px" height="20px" fill="white">
                <path d="M192 64L160 0H128L96 64 64 0H48C21.5 0 0 21.5 0 48V256H384V48c0-26.5-21.5-48-48-48H224L192 64zM0 288v32c0 35.3 28.7 64 64 64h64v64c0 35.3 28.7 64 64 64s64-28.7 64-64V384h64c35.3 0 64-28.7 64-64V288H0zM192 432a16 16 0 1 1 0 32 16 16 0 1 1 0-32z"/>
            </svg>
        </button> 
        
            <!-- BBVA Session extension -->
            <button id="bbva-session-extension-btn" class="tk-centered tk-btn-dark tk-toolkit-btn tk-light-blue" >
                <div class="tk-pilled-button-container">
                    <div class = "tk-pill">BBVA</div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 512" width="20px" height="20px" fill="white">
                        <path d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"/>
                    </svg>
                </div>
            </button>    
  
            <!-- USBank filter by components -->
            <button id="usb-filter-by-components" class="tk-centered tk-btn-dark tk-toolkit-btn tk-light-blue" >
                <div class="tk-pilled-button-container">
                    <div class = "tk-pill">USBank</div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="20px" height="20px" fill="white">
                            <path d="M3.9 22.9C10.5 8.9 24.5 0 40 0H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L396.4 195.6C316.2 212.1 256 283 256 368c0 27.4 6.3 53.4 17.5 76.5c-1.6-.8-3.2-1.8-4.7-2.9l-64-48c-8.1-6-12.8-15.5-12.8-25.6V288.9L9 65.3C-.7 53.4-2.8 36.8 3.9 22.9zM432 512c-79.5 0-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144s-64.5 144-144 144zm59.3-180.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L432 345.4l-36.7-36.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L409.4 368l-36.7 36.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L432 390.6l36.7 36.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L454.6 368l36.7-36.7z"/>
                        </svg>
                </div>
            </button>

            <!-- Unclaimed Test case -->
            <button id="unclaimed-test-case-btn" class="tk-centered tk-btn-dark tk-toolkit-btn tk-light-blue" >
                <div class="tk-pilled-button-container ">
                    <div class = "tk-pill">BFV</div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 512" width="20px" height="20px" fill="white">
                        <path d="M32 0C49.7 0 64 14.3 64 32V48l69-17.2c38.1-9.5 78.3-5.1 113.5 12.5c46.3 23.2 100.8 23.2 147.1 0l9.6-4.8C423.8 28.1 448 43.1 448 66.1V345.8c0 13.3-8.3 25.3-20.8 30l-34.7 13c-46.2 17.3-97.6 14.6-141.7-7.4c-37.9-19-81.4-23.7-122.5-13.4L64 384v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V400 334 64 32C0 14.3 14.3 0 32 0zM64 187.1l64-13.9v65.5L64 252.6V318l48.8-12.2c5.1-1.3 10.1-2.4 15.2-3.3V238.7l38.9-8.4c8.3-1.8 16.7-2.5 25.1-2.1l0-64c13.6 .4 27.2 2.6 40.4 6.4l23.6 6.9v66.7l-41.7-12.3c-7.3-2.1-14.8-3.4-22.3-3.8v71.4c21.8 1.9 43.3 6.7 64 14.4V244.2l22.7 6.7c13.5 4 27.3 6.4 41.3 7.4V194c-7.8-.8-15.6-2.3-23.2-4.5l-40.8-12v-62c-13-3.8-25.8-8.8-38.2-15c-8.2-4.1-16.9-7-25.8-8.8v72.4c-13-.4-26 .8-38.7 3.6L128 173.2V98L64 114v73.1zM320 335.7c16.8 1.5 33.9-.7 50-6.8l14-5.2V251.9l-7.9 1.8c-18.4 4.3-37.3 5.7-56.1 4.5v77.4zm64-149.4V115.4c-20.9 6.1-42.4 9.1-64 9.1V194c13.9 1.4 28 .5 41.7-2.6l22.3-5.2z"/>
                    </svg>
                </div>
            </button> 

            <!-- Test case preview -->
            <button id="test-case-preview-btn" class="tk-centered tk-btn-dark tk-toolkit-btn tk-light-blue" >
                <div class="tk-pilled-button-container">
                    <div class = "tk-pill">BFV</div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 512" width="20px" height="20px" fill="white">
                        <path d="M224 0c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224zM64 160c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H304v64c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224c0-8.8 7.2-16 16-16h64V160H64z"/>
                    </svg>
                </div>
            </button>
        

        <!-- UTest toolkit button-->
        <button id = "testing-toolkit-btn" class="tk-centered tk-btn-dark tk-toolkit-btn tk-light-blue" style="background-color: #132342; padding: 3px; border-radius: 10px;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 512" width="18px" height="18px" fill="white"  style="padding-top: 5px;">
                <path d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4h54.1l109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109V104c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7H352c-8.8 0-16-7.2-16-16V102.6c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/>
            </svg>
        </button>       
    </div>
</div>

<button id = "expand-collapse-btn" class="tk-centered tk-btn-dark tk-toolkit-btn" style="border-bottom: none;" >
            <svg id = 'chevron-svg' class="transition-all" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="20px" height="20px" fill="white" style="transform: rotate(-90deg);">
                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path>
            </svg> 
        </button>

</div>`

const layoutContainer = document.getElementById('layout-container')

const bodyElement = document.querySelector('body')

const divContainer = document.createElement("div")
divContainer.innerHTML = codeToDOM
bodyElement.appendChild(divContainer)

// Testing toolkit 
const headingBtn = document.getElementById('headings-btn')
const expandCollapseBtn = document.getElementById('expand-collapse-btn')
const listsBtn = document.getElementById('lists-btn')
const brFinderBtn = document.getElementById('brfinder-btn')
const liveRegionsBtn = document.getElementById('liveregions-btn')
const imageAltText = document.getElementById('image-alt-text-btn')
const imageNullAltTextbtn = document.getElementById('image-null-alt-text-btn')
const linksBtn = document.getElementById('links-btn')
const hrefsBtn = document.getElementById('hrefs-btn')
const focusIndicatorBtn = document.getElementById('focus-indicator-btn')
const currentlyFocusedBtn = document.getElementById('currently-focused-btn')
const textSpacingBtn = document.getElementById('text-spacing-btn')
const ariaLabelsBtn = document.getElementById('aria-labels-btn')

const utestToolkitBtn = document.getElementById('utest-toolkit-btn')
const directionBtn = document.getElementById('direction-btn')
const directionSvg = document.getElementById('direction-svg')
const chevronSvg = document.getElementById('chevron-svg')

// UTest toolkit 
const testingToolkitBtn = document.getElementById('testing-toolkit-btn')
const testCasePreviewBtn = document.getElementById('test-case-preview-btn')
const unclaimedTestCaseBtn = document.getElementById('unclaimed-test-case-btn')
const boldTitleColumnSeparatorBtn = document.getElementById('bold-title-column-btn')
const boldTitleSlashSeparatorBtn = document.getElementById('bold-title-slash-btn')
const usbFilterByComponentsBtn = document.getElementById('usb-filter-by-components')
const hideMyBugsBtn = document.getElementById('hide-my-bugs-btn')
const issuesWithPlus1Btn = document.getElementById('issues-with-plus-1-btn')
const filterSelectedBugsBtn = document.getElementById('filter-selected-bugs-btn')
const markRowByDblClickBtn = document.getElementById('mark-row-dbl-click-btn')
const bbvaSessionExtentionBtn = document.getElementById('bbva-session-extension-btn')

// MISC
const expandableSection = document.getElementById('expandable-section')
const changeOpacityBtn = document.getElementById('change-opacity-btn')

const toolkitElement = document.getElementById('toolkit')
const utestToolkit = document.getElementById('utest-toolkit')
const testingToolkit = document.getElementById('testing-toolkit')

const pageTitleBtn = document.getElementById('page-title-btn')
let pageTitleContainer = ""

let tooltip = null
let tooltipCoords = null

let topStyle = "top:-28px;left:-4px;border-bottom-left-radius:0;"
let leftStyle = "top:-4px;left:-28px;"
let innerStyle = "top:-2px;left:-2px;border-bottom-left-radius:0;"

let parentElementLayoutContainer = null
let linksHref = []

let direction = 'column'

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
    elm.classList.add('tk-toolkit-active-btn')
}
const toggleButton =(elm)=>{

    if(elm.classList.contains('tk-light-blue')){
        if(elm.classList.contains('tk-light-blue-toolkit-active-btn')) 
            elm.classList.remove('tk-light-blue-toolkit-active-btn')
        else
            elm.classList.add('tk-light-blue-toolkit-active-btn')
    }
    else{

        if(elm.classList.contains('tk-toolkit-active-btn')) 
            elm.classList.remove('tk-toolkit-active-btn')
        else
            elm.classList.add('tk-toolkit-active-btn')
        
    }

    
}
const showTooltip = (textToShow,targetButton, coords)=>{
    coords = calculateTooltipCoords(targetButton)
    tooltip = document.getElementById('button-tooltip')
    if(!tooltip){ 
        const tooltipContainer = document.createElement("div")
        tooltipContainer.innerHTML = `<div class="tk-tooltip" id='button-tooltip' style='position:fixed; top:${coords[0]}px;left:${coords[1]}px'>
        <div class="tk-tooltip-text">${textToShow}</div>
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

        if(direction == 'column')
            return [targetElmCoords.top , targetElmCoords.left + targetElmCoords.width + 5]
        else
            return [targetElmCoords.top + 30 , targetElmCoords.left - 20 + targetElmCoords.width + 5]
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
    //outlineDiv.style.borderTopLeftRadius = "0"

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
    ${elm.getAttribute(attribute)? elm.getAttribute(attribute) : 'Empty' }
    </div>`

    parentElementLayoutContainer.insertAdjacentElement("beforeend",outlineDiv)
    //layoutContainer.insertAdjacentElement("beforeend",outlineDiv)
}
const clearOverlay = (containerId) => {
    parentElementLayoutContainer = document.getElementById(containerId)
    parentElementLayoutContainer.innerHTML=''
}
const isActivatedTheBtn = (btn) => {
    if(!btn.classList.contains('tk-toolkit-active-btn')) 
        return true
    else
        return false
}
const toggleButtonSection = ()=>{

    if(expandableSection.classList.contains("d-flex")){
        expandableSection.classList.add('d-none')
        expandableSection.classList.remove('d-flex')
    }
    else{
        expandableSection.classList.remove('d-none')
        expandableSection.classList.add('d-flex')
    }
}
const toggleIconRotation = (elm)=>{

    let initialRotateCSS = elm.style.transform
    let initialRotate = null
    let finalRotate = null

    initialRotate =  initialRotateCSS.split('(')[1].split('d')[0]

    if(direction == 'column'){

        if(initialRotate == '-90')
            finalRotate = parseInt(initialRotate) + 180
        else
            finalRotate = parseInt(initialRotate) - 180 
    }
    else{
        if(initialRotate == '-180')
            finalRotate = parseInt(initialRotate) + 180
        else
            finalRotate = parseInt(initialRotate) - 180
    }

    elm.style.transform = `rotate(${finalRotate}deg)`

}

const displayUtestToolkit = () =>{

    utestToolkit.classList.add('d-flex')
    testingToolkit.classList.add('d-none')

    if( direction == 'row' ){
        
        utestToolkit.classList.add('row-view-testing-toolkit')
        toolkitElement.classList.add('row-view-toolkit')
        directionBtn.classList.add('row-view-direction-btn')
        directionSvg.classList.add('row-view-direction-svg')
        expandableSection.classList.add('row-view-expandable-section')
        
    }

}
const displayTestingToolkit = () =>{
    utestToolkit.classList.remove('d-flex')
    testingToolkit.classList.remove('d-none')

    if( direction == 'row' ){
        
        utestToolkit.classList.add('row-view-testing-toolkit')
        toolkitElement.classList.add('row-view-toolkit')
        directionBtn.classList.add('row-view-direction-btn')
        directionSvg.classList.add('row-view-direction-svg')
        expandableSection.classList.add('row-view-expandable-section')
        
    }
}  

const isElementVisible = (element) =>{

    const displaying = window.getComputedStyle(element, null).display
    const visibility = window.getComputedStyle(element, null).visibility 

    if(displaying == 'none')
        return false
    else{
        if(visibility =='hidden')
            return false
        else
            return true

    }
}

const randomColor = () => {
    return Math.floor(Math.random()*16777215).toString(16);
}

// Marking Functions

const markElements = (elementsToOutline, outter, color, identifierClass, pos, attr) => {

    let counter = 0
    console.log('%cMarking native HTML elements...','background-color:black;color:white;')

    elementsToOutline.forEach((elm)=>{
        if(!document.getElementById('toolkit').contains(elm)){
            //console.log(elm)
            if( isElementVisible(elm) ){
                console.log('Element ', counter + 1)
                console.log(elm)
                pos == 'begin' ? markElementNode(elm, color, outter, identifierClass) : markElementNodeAfterEnd(elm, color, outter, identifierClass, attr)
                //!outter ? elm.classList.add('tk-red-outline') : elm.classList.add('tk-blue-outline-outter')
                counter++
            }
        }
    })

    console.log('%c' + +counter + ' elements found on the page','background-color:black;color:white;') 
}

const markAriaElements = (elementsToOutline, identifier, otherAttr, markerColor, identifierClass) => {

    let counter = 0

    console.log('%cMarking ARIA elements...','background-color:#666;color:white;')
    elementsToOutline.forEach((elm)=>{
        if(!document.getElementById('toolkit').contains(elm)){
            if( isElementVisible(elm) ){
                console.log('Element ', counter + 1)
                console.log(elm)
                
                // Adding marker element
                span = document.createElement("span")
                span.classList.add('tk-marker')
                span.classList.add(identifierClass)
                !otherAttr ? span.innerText = identifier : span.innerText = identifier + elm.getAttribute(otherAttr)
                applyStyle(span,markerColor)
                span.style.position = 'relative'
                elm.insertAdjacentElement("afterbegin",span)
                
                //elm.classList.add('tk-blue-outline') // Style headings nodes
                counter++
            }
        }
    })
        console.log('%c'+ counter + ' elements found on the page', 'background-color:#666;color:white;')   

}

const unmarkElements = (outlinedElements, identifierClass) =>{
    
    console.log("unmarking elements...")
    const markers = Array.from(document.getElementsByClassName(identifierClass))

    // Remove class form headings
    outlinedElements.forEach(elm =>{
        elm.classList.remove('tk-red-outline')
        elm.classList.remove('tk-blue-outline')
        elm.classList.remove('tk-blue-outline-outter')
        elm.classList.remove('tk-red-outline-outter')
    })
    // Remove markers
    if(markers)
        markers.forEach(marker => marker.remove())

}

const markElementByText = (elm, text, color) =>{
    if(!document.getElementById('toolkit').contains(elm)){
        //console.log(elm)
        if( isElementVisible(elm) ){
            span = document.createElement("span")
            span.classList.add('tk-marked-element-text')
            span.innerText = text
            applyOutterStyle(span,color)
            elm.insertAdjacentElement("afterbegin", span)
            
        }
    }

}
const outlineElements = (elementsToOutline, color) =>{
    
    elementsToOutline.forEach((elm)=>{
        if(!document.getElementById('toolkit').contains(elm)){
            if( isElementVisible(elm) ){
                elm.classList.add(`tk-${color}-outline`)
        
            }
        }
    })
}
const outlineContainerElements = (elementsToOutline, color) =>{
    
    elementsToOutline.forEach((elm)=>{
        if(!document.getElementById('toolkit').contains(elm)){
            if( isElementVisible(elm) ){
                elm.classList.add(`tk-${color}-outline-outter`)
            }
        }
    })
}

const outlineElement = (elm, color) =>{

        if(!document.getElementById('toolkit').contains(elm)){
            if( isElementVisible(elm) ){
                elm.setAttribute('data-tk-outlined','yes')
                elm.style.outline = `${color} 2px dashed`
                
            }
        }
}

const removeDashedOutline = () =>{

    const outlinedElements = document.querySelectorAll("[data-tk-outlined = 'yes']")

    outlinedElements.forEach( elm =>{
        elm.style.outline = 'none'
    })

}


// -------
const applyStyle = (elm, bgColor)=>{
    elm.style.cssText = `
    position: absolute;
    font-weight: bold !important;
    background-color: ${bgColor};
    color: white;
    padding: 0 4px;
    font: 18px 'Arial';
    letter-spacing: 0px;
    z-index: 2147483646;`
}
const applyOutterStyle = (elm, bgColor)=>{
    elm.style.cssText = `
    position: relative;
    font-weight: bold !important;
    background-color: ${bgColor};
    color: white;
    padding: 0 4px;
    font: 18px 'Arial';
    letter-spacing: 0px;
    z-index: 2147483646`
}

const markElementNode = (elm, color, outter, identifierClass) => {

    if( isElementVisible(elm) ){
        span = document.createElement("span")
        span.classList.add('tk-marker')
        span.classList.add(identifierClass)
        span.innerText = elm.tagName
        !outter ? applyStyle(span,color) : applyOutterStyle(span,color)
        elm.insertAdjacentElement("afterbegin", span)
    }
    else
        console.log('Hidden element found!')
}

const markElementNodeAfterEnd = (elm, color, outter, identifierClass, attr) => {

    if( isElementVisible(elm) ){
        span = document.createElement("span")
        span.classList.add('tk-marker')
        span.classList.add(identifierClass)
        !attr ? span.innerText = elm.tagName : span.innerText = elm.getAttribute(attr) ? elm.getAttribute(attr) : 'null'
        !outter ? applyStyle(span,color) : applyOutterStyle(span,color)
        elm.insertAdjacentElement("beforebegin", span)
    }
    else
        console.log('Hidden element found!')
}

// ---------
const markImageNullAlt = () =>{
    let counter = 0
    const images = document.querySelectorAll("img")
    
    console.clear()
    images.forEach(elm=>{
        if(!elm.getAttribute("alt")){
            if(!document.getElementById('toolkit').contains(elm)){
                if( isElementVisible(elm) ){
                    console.log('Element ', counter + 1)
                    console.log(elm)
                    markElementDisplayAttribute(elm,"alt","red",innerStyle,"marked-images-null-alt-text")
                    counter++
                }
            }
        }
    })
    
    console.log(counter + ' images found on the page with null attribute.')
}

const markBrs = () =>{

    console.clear()
    const brElements = document.querySelectorAll("br")
     brElements.forEach(elm=>{
        markElement(elm,"red",innerStyle,"marked-brs")
        console.log(elm)
    })
    
    console.log(brElements.length + ' br elements found on the page')
}
const markLiveRegions = () =>{
    const liveRegions = document.querySelectorAll("[aria-live='polite'],[aria-live='assertive'],[role='status'],[role='alert']")
    let counter = 0
    console.clear()
    console.log('------------------------')
    liveRegions.forEach(elm=>{
        console.log("Element ", counter + 1)
        console.log(elm)
        markElement(elm, "red", innerStyle, "marked-liveregions")
        counter++
    })

    console.log(counter + ' live regions elements found on the page')
    console.log('------------------------')
    
    //console.log(liveRegions.length + ' live regions elements found on the page')
}


const markHrefs = () =>{
    let linksSameUrls = 0
    const links = document.querySelectorAll("a")

    links.forEach(elm=>{
        if(elm.getAttribute("href")){
            
            if(linksHref.includes(elm.getAttribute('href'))){
                markElementDisplayAttribute(elm,"href","red",innerStyle,"marked-hrefs")
                linksSameUrls++
            }
            else {
                linksHref.push(elm.getAttribute('href'))
                markElement(elm,"blue",innerStyle,'marked-hrefs')
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

const directionChange = () =>{

    if(direction == 'column'){
        direction = 'row'
        testingToolkit.classList.add('row-view-testing-toolkit')
        utestToolkit.classList.add('row-view-testing-toolkit')
        toolkitElement.classList.add('row-view-toolkit')
        directionBtn.classList.add('row-view-direction-btn')
        directionSvg.classList.add('row-view-direction-svg')
        expandableSection.classList.add('row-view-expandable-section')
        chevronSvg.style.transform = 'rotate(-180deg)'

    }
    else{
        direction = 'column'
        testingToolkit.classList.remove('row-view-testing-toolkit')
        utestToolkit.classList.remove('row-view-testing-toolkit')
        toolkitElement.classList.remove('row-view-toolkit')
        directionBtn.classList.remove('row-view-direction-btn')
        directionSvg.classList.remove('row-view-direction-svg')
        expandableSection.classList.remove('row-view-expandable-section')
        chevronSvg.style.transform = 'rotate(-90deg)'
    }

    console.log('Direction changed to ' + direction)

}

const headings = () =>{

    const pageHeadings = Array.from(document.querySelectorAll("h1,h2,h3,h4,h5,h6"))
    const ariaHeadings = Array.from(document.querySelectorAll("[role='heading']"))
    
    if(isActivatedTheBtn(headingBtn)) {
        markElements(pageHeadings, null, 'red', 'tk-headings','begin')
        outlineElements(pageHeadings,'red')
        markAriaElements(ariaHeadings,'aH','aria-level','blue','tk-headings')
        outlineElements(ariaHeadings,'blue')
    }
    else {
        unmarkElements(pageHeadings, 'tk-headings')
        unmarkElements(ariaHeadings, 'tk-headings')
    }
    toggleButton(headingBtn)
}
const listsListitems = () =>{

    const pageLists = Array.from(document.querySelectorAll("ul,ol"))
    const pageListitems = Array.from(document.querySelectorAll("li"))

    const ariaLists = Array.from(document.querySelectorAll("[role='list']"))
    const ariaListitems = Array.from(document.querySelectorAll("[role='listitem']"))

    if(isActivatedTheBtn(listsBtn)){
        markElements(pageLists, 'outter','blue','tk-list', 'begin')
        outlineContainerElements(pageLists,'blue')
        markElements(pageListitems, null, 'red','tk-list', 'begin')
        outlineElements(pageListitems, 'red')

        markAriaElements(ariaLists, 'aL', null, 'blue','tk-list', 'begin')
        outlineContainerElements(ariaLists, 'blue')
        markAriaElements(ariaListitems, 'aLi', null, 'blue','tk-list', 'begin')
        outlineElements(ariaListitems, 'blue')
    }
    else {
        unmarkElements(pageLists,'tk-list')
        unmarkElements(pageListitems,'tk-list')
        unmarkElements(ariaLists, 'tk-list')
        unmarkElements(ariaListitems, 'tk-list')
    }

    toggleButton(listsBtn)

}
const imageAlText = () =>{

    const images = document.querySelectorAll("img")
    const ariaImages = document.querySelectorAll("[role='img']")
    
    if(isActivatedTheBtn(imageAltText)) {
    
        markElements(images, 'outter', 'red','tk-images','end','alt')
        outlineElements(images,'red')
        markElements(ariaImages, 'outter', 'red','tk-images','end','aria-label')
        outlineElements(ariaImages,'red')

    }
    else {
        unmarkElements(images,'tk-images')
        unmarkElements(ariaImages,'tk-images')
    }

    toggleButton(imageAltText)
}
const imageWithNullAltText = () =>{
    const images = document.querySelectorAll("img")
    const ariaImages = document.querySelectorAll("[role='img']")

    const imageNullAlt = []
    const ariaImageNullAlt = []

    images.forEach(img =>{
        !img.getAttribute('alt') ? imageNullAlt.push(img) : 0
    })
    ariaImages.forEach(img =>{
        !img.getAttribute('aria-label') ? ariaImageNullAlt.push(img) : 0
    })
    
    if(isActivatedTheBtn(imageNullAltTextbtn)) {
    
        markElements(imageNullAlt, 'outter', 'red','tk-images','end','alt')
        outlineElements(imageNullAlt,'red')
        markElements(ariaImageNullAlt, 'outter', 'red','tk-images','end','aria-label')
        outlineElements(ariaImageNullAlt,'red')
    }
    else {
        unmarkElements(imageNullAlt,'tk-images')
        unmarkElements(ariaImageNullAlt,'tk-images')
    }

    toggleButton(imageNullAltTextbtn)
}
const links = () =>{

    const links = document.querySelectorAll("a")
    const ariaLinks = document.querySelectorAll("[role='link']")

    if(isActivatedTheBtn(linksBtn)) {

        markElements(links,null,'red','tk-links','begin','href')
        outlineElements(links,'red')
        markAriaElements(ariaLinks,'aA',null,'blue','tk-links')
        outlineElements(ariaLinks,'blue')
    }
    else {
        unmarkElements(links,'tk-links')
        unmarkElements(ariaLinks,'tk-links')
    }

    toggleButton(linksBtn)
}

const equalHref = () =>{

    let repeatedHref = []
    let repeated = 0
    let colorToOutlineRepeated = randomColor()
    let makers = document.querySelectorAll('tk-marked-element-text')

    const links = document.querySelectorAll("a")

    if(isActivatedTheBtn(hrefsBtn)) {
        // Searching duplicated URLs and storing in repeatedHref array
        links.forEach(link =>{
            links.forEach(secLink =>{
                if(link.getAttribute('href') == secLink.getAttribute('href')){
                    repeated++
                }
            })
            if(repeated > 1){
                if(repeatedHref.indexOf(link.getAttribute('href')) == -1)
                    if(link.getAttribute('href')) repeatedHref.push(link.getAttribute('href'))
            }
            repeated = 0
        })

        // Finding every link with the repeated URL and styling them
        repeatedHref.forEach( href => {
            
            colorToOutlineRepeated = randomColor()
            console.log('________________________________________')
            console.log('%c  ', `background-color:#${colorToOutlineRepeated}`,repeatedHref.indexOf(href))
            console.log( href)
            
            links.forEach( link =>{ 

                if( isElementVisible(link)){
                    if(link.getAttribute('href') == href){
                        console.log(link)
                        outlineElement(link, `#${colorToOutlineRepeated}`)
                        markElementByText(link, repeatedHref.indexOf(href), `#${colorToOutlineRepeated}`)
                    }
                }
            })

        })
    }
    else{
        removeDashedOutline()
        unmarkElements(makers, 'tk-marked-element-text')
    }
    toggleButton(hrefsBtn)
}
const brFinder = () => {

    const brs = document.querySelectorAll('br')

    if(isActivatedTheBtn(brFinderBtn)) {
        
        markElements(brs,'outter','red','tk-br', 'end')
        outlineContainerElements(brs,'red')
        
        /*scrollToTop()
        markBrs()*/
    }
    else 
        clearOverlay('marked-brs')

    toggleButton(brFinderBtn)
}
const liveRegions = () => {

    if(isActivatedTheBtn(liveRegionsBtn)) {
        scrollToTop()
        markLiveRegions()
    }
    else 
        clearOverlay('marked-liveregions')

    toggleButton(liveRegionsBtn)
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

    
    if(isActivatedTheBtn(ariaLabelsBtn)){
        scrollToTop()
        markAriaLabels()
    }
    else
        clearOverlay('marked-aria-label')


    toggleButton(ariaLabelsBtn)
}
const pageTitle = () => {
    const titleElement = document.getElementsByTagName("title")[0]
    pageTitleContainer = `<div id='page-title-container' class="tk-tooltip">
    <div class="tk-tooltip-text"> Page title: <strong>${titleElement.innerHTML}</strong> </div>
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
const expandCollapse = () =>{

    toggleButtonSection()
    toggleButton(expandCollapseBtn)
    toggleIconRotation(expandCollapseBtn.firstElementChild)
}


const changeOpacity = () =>{

    if(isActivatedTheBtn(changeOpacityBtn)){
        toolkitElement.addEventListener("mouseover", () => {
            console.log('OVER ...')
            toolkitElement.style.opacity = 1
        },
            { signal: controller.signal }
        )

        toolkitElement.addEventListener("mouseout", () => {
            console.log('OUT...')
            toolkitElement.style.opacity = 0
        },
            { signal: controller.signal }
        )
    }
    else{
        controller.abort()
        changeOpacityBtn.style.opacity = '0.3'
    }

    toggleButton(changeOpacityBtn)
}

// UTEST toolkit

const testCasePreview = ()=>{
    const details = document.getElementsByClassName('details')[0];
    details.style.setProperty('white-space', 'pre-wrap', 'important');

    toggleButton(testCasePreviewBtn)
    
    function extractInfo(html) {
        var result = {};
        // Extract Action Details
        var actionDetails = html.match(/----\sACTION\sDETAILS\s----([\s\S]*?)(?=----\sENVIRONMENT\s----)/);
        result.actionDetails = actionDetails[1].trim().replace(/:\n/g, ":\n\n")

        // Extract Environment
        var environment = html.match(/----\sENVIRONMENT\s----([\s\S]*?)(?=----\sAPPLAUSE\sPROPERTIES\s----)/);
        result.environment = environment[1].trim().replace(/:\n/g, ":\n\n")

        // Extract Applause Properties
        var applauseProperties = /----\sAPPLAUSE\sPROPERTIES\s----([\s\S]*?)----\sAPPLAUSE\sATTACHMENT\(S\)\s----/.exec(html);
        result.applauseProperties = applauseProperties[0].trim();

        // Extract Applause Attachments
        var attachments = html.match(/(https:\/\/[^\s]+)/g);
        result.attachments = attachments.join(" ");

        //Make links
        result.attachments = result.attachments.replace(/(https:\/\/[^\s]+)/g, function(link){
        return "<a href='" + link + "' style='width: 500px;'>" + link + "</a>";
        });
        return result;
    }
    var html = details.innerHTML;
    var info = extractInfo(html);
    details.innerHTML = info.actionDetails + info.environment + info.applauseProperties + info.attachments;
}
const unclaimedTestCase = () =>{
    const claimsTd = Array.prototype.slice.call(document.querySelectorAll("[ng-if='ctrl.isTTL']"))
    const testCases = claimsTd.map(elt => elt.innerHTML == '0')
    const unclaimedTCs = testCases.filter(Boolean)
    console.log('Total TCs: ',testCases.length) 
    console.log('Unclaimed TCs : ',unclaimedTCs.length)

    // Display only the unclaimed Testcases

    document.getElementsByClassName('responsive-table-head')[1].nextElementSibling.innerHTML =`<b>Showing ' + ${unclaimedTCs.length} +' unclaimed TCs of ${testCases.length}</b>`
    const rowsTC = document.getElementsByTagName("tbody")[1].children

    let index = 0

    for(index=0; rowsTC.length > index; index++){
        if (rowsTC[index].children[6].innerHTML != "0")
        rowsTC[index].style.display = 'none'
    }
}
const boldTitleColumnSeparator = ()=>{
    // BOLD TITLES in platforms
    toggleButton(boldTitleColumnSeparatorBtn)

console.log('Bolding ...')
    var index;
    var first;
    var second;
    let obtenerDato = document.getElementsByTagName("td");
    let title = ''
    let titleDesc =''
    let arrTitle =[]
    for (index = 0; index < obtenerDato.length; index++ ){    
        if(obtenerDato[index].getAttribute('data-column-title')=='Title '){
        first= obtenerDato[index].childNodes;    
        second = first[3].childNodes; 
        //console.log(second[2])
        title = second[2].innerHTML
        arrTitle = title.split(':')
        titleDesc = '<b>'+ arrTitle[arrTitle.length -1]+'</b>'
        arrTitle.pop()
        arrTitle.push(titleDesc)
        second[2].innerHTML = arrTitle.join(':')
        }

    }
}
const boldTitleSlashSeparator = ()=>{

    toggleButton(boldTitleSlashSeparatorBtn)

    // BOLD TITLES in platforms
    console.log('Bolding ...')
    var index;
    var first;
    var second;
    let obtenerDato = document.getElementsByTagName("td");
    let title = ''
    let titleDesc =''
    let arrTitle =[]
    for (index = 0; index < obtenerDato.length; index++ ){    
        if(obtenerDato[index].getAttribute('data-column-title')=='Title '){
        first= obtenerDato[index].childNodes;    
        second = first[3].childNodes; 
        //console.log(second[2])
        title = second[2].innerHTML
        arrTitle = title.split(':')
        titleDesc = '<b>'+ arrTitle[arrTitle.length -1]+'</b>'
        arrTitle.pop()
        arrTitle.push(titleDesc)
        second[2].innerHTML = arrTitle.join(':')
        }

    }
}
const usbFilterByComponents = () =>{

    toggleButton(usbFilterByComponentsBtn)

    // Version 1.0
// Filter Layout
const targetElement = document.querySelector("#issueListTitle")
const newItem = document.createElement("div")
const itemsAmount = document.getElementsByTagName("table")[0].nextElementSibling

let checkbox = null
let selectComponent = null
var index;

newItem.id = "select-filter-script"
newItem.style.padding = "1em"
newItem.style.outline = "rgb(6, 107, 177) 1px solid"

// Layout set and adding to DOM
let obtenerDato = document.getElementsByTagName("a");
var resultfinal = []

for (var index = 0; index < obtenerDato.length; index++ ){  
    if(obtenerDato[index].getAttribute('ng-if')==='!ctrl.parent.insideTestCycle || !ctrl.parent.isFromKnownIssueList(row)'){
        var result = obtenerDato[index].firstChild.textContent
        var element = result.split('/');
        resultfinal.push(element[0])
    }  
}
var unicos = [... new Set(resultfinal)];
var unicoscoincidencia = []

for (index = 0; index < unicos.length; index++ ){
    unicoscoincidencia[index] = []
    valor = unicos[index];
    valor2 = valor.split(' ');
    for (index1 = index+1; index1 < unicos.length; ){
        valorlist = unicos[index1];
        valorlist2 = valorlist.split(' ');
        if(valor2[0] === valorlist2[0]){
        if(valor.length > valorlist.length) {
                unicoscoincidencia[index].push(valorlist)
                unicos = unicos.filter((item) => item !== valorlist);
        }
        else{
                unicoscoincidencia[index].push(valor)
                unicos = unicos.filter((item) => item !== valor);
        }
        } else {
            index1++;
        }
    }
}


var selectHTML = '<select id="select-component"><option disabled selected>Select a component</option>'
    
for (let component of unicos) {
    selectHTML += 
    `<option>`+component+`</option>`   
    }

selectHTML += '</select><button id="clear-button">Clear</button><button id="remove-button">Remove</button><label style="display:inline;margin-left:3em;"><input type="checkbox" id="bold-text-checkbox" style="display:inline;"> Bolded titles</label>'
newItem.innerHTML = selectHTML         
console.log(newItem.innerHTML);
targetElement.insertAdjacentElement("afterend",newItem)

// Event listeners adding
setTimeout(()=>{
    checkbox = document.querySelector("#bold-text-checkbox")
    selectComponent = document.querySelector("#select-component")
    clearButton = document.querySelector("#clear-button")
    removeButton = document.querySelector("#remove-button")

    let obtenerDato = document.getElementsByTagName("td");
    let tableRows =   document.getElementsByTagName("tr");
    var tdArray = Array.prototype.slice.call(document.getElementsByTagName("td"))

    // Bolded text
    checkbox.addEventListener('click',()=>{
        var first;
        var second;
        let title = ''
        let titleDesc =''
        let arrTitle =[]
        for (index = 0; index < obtenerDato.length; index++ ){    
                if(obtenerDato[index].getAttribute('data-column-title')=='Title '){
                    first= obtenerDato[index].childNodes;    
                    second = first[3].childNodes; 
                    title = second[2].innerHTML
                    arrTitle = title.split('/')
                    if(checkbox.checked)
                        titleDesc = '<b>'+ arrTitle[arrTitle.length -1]+'</b>'
                    else
                        titleDesc = arrTitle[arrTitle.length -1]
                    arrTitle.pop()
                    arrTitle.push(titleDesc)
                    second[2].innerHTML = arrTitle.join('/')
                }
        }
        
    })

    // Display issues per selected component
    clearButton.addEventListener('click',()=>{
        // Showing all issues
        let issuesCount = 0
        console.log('showing ....')
        for (index = 1; index < tableRows.length; index++ ){ 
            tableRows[index].style.display = 'table-row'
            issuesCount++
        }
        selectComponent.selectedIndex = 0;
        itemsAmount.innerHTML = 'Showing '+issuesCount+' for <b>all except '+ tableRows.length + '</b> component.'
    })

    // Display issues of all components except selected component
    removeButton.addEventListener('click',()=>{
        const selectElement = document.querySelector("#select-component")
        let comps = []
        let title = null
        let comp = null
        let issuesCount = 0
        let selectedComp = selectElement.options[selectElement.selectedIndex].text
        let selectedValue = selectElement.value
        console.log(selectedComp)
        console.log(selectedValue)

        for (index = 1; index < tableRows.length; index++ ){    
            title = tableRows[index].children[1].children[0].children[0].innerText
            if(!title.includes(selectedValue)) {
                encontrado = false;
                for (indexC = 0; indexC < unicoscoincidencia[selectElement.selectedIndex-1].length; indexC++) {
                    if (title.includes(unicoscoincidencia[selectElement.selectedIndex-1][indexC]))
                        encontrado = true; 
                }
                if (encontrado)
                    tableRows[index].style.display = 'none'
                else {
                    tableRows[index].style.display = 'table-row'
                    issuesCount++
                }
            } else 
                tableRows[index].style.display = 'none'
        }
        itemsAmount.innerHTML = 'Showing '+issuesCount+' for <b>all except '+ selectedComp + '</b> component.'

    })
    
    // Filter by components
    selectComponent.addEventListener('change',(event)=>{
        for (index = 1; index < tableRows.length; index++ ){ 
            tableRows[index].style.display = 'table-row'
        }
        
        const selectElement = event.target
        let comps = []
        let title = null
        let comp = null
        let issuesCount = 0
        let selectedComp = selectElement.options[selectElement.selectedIndex].text
        let selectedValue = selectElement.value
        console.log(selectedComp)
        console.log(selectedValue)

        for (index = 1; index < tableRows.length; index++ ){    
            title = tableRows[index].children[1].children[0].children[0].innerText
            if(!title.includes(selectedValue)) {
                encontrado = false;
                for (indexC = 0; indexC < unicoscoincidencia[selectElement.selectedIndex-1].length; indexC++) {
                    if(title.includes(unicoscoincidencia[selectElement.selectedIndex-1][indexC])) {
                        encontrado = true;
                        break;
                    }
                }
                if (!encontrado) 
                    tableRows[index].style.display = 'none'
                else
                    issuesCount++;
            } else 
                issuesCount++
        }
        itemsAmount.innerHTML = 'Showing '+issuesCount+' for <b>'+ selectedComp + '</b> component.'
    })
})
}
const hideMyBugs = () =>{

    toggleButton(hideMyBugsBtn)

    // Version 1.0
    const targetElement = document.querySelector("#issueListTitle")
    const checkbox = document.createElement('input');

    // Crea un elemento de etiqueta para el checkbox
    const label = document.createElement('label');
    label.htmlFor = ' bold-text-checkbox';
    label.innerHTML = 'Hide Yours';

    // Agrega el checkbox y la etiqueta al DOM
    targetElement.appendChild(checkbox);
    targetElement.appendChild(label);

    // Estiliza el checkbox
    checkbox.style.marginLeft = '10px';

    checkbox.type = 'checkbox';
    checkbox.id = 'bold-text-checkbox';

    let isHidden = false;
    checkbox.addEventListener('click', () => {
    // Obtiene todos los elementos que tienen el atributo ng-if con el valor 'row.testerId !== ctrl.parent.currentUser.id'
    let elements = document.querySelectorAll('[ng-if="row.testerId === ctrl.parent.currentUser.id"]');
    if (!isHidden) {
        // Oculta los elementos
        for (let element of elements) {
        element.parentNode.parentNode.style.display = 'none';
        }
    } else {
        // Muestra los elementos
        for (let element of elements) {
        element.parentNode.parentNode.style.display = '';
        }
    }
    isHidden = !isHidden;
    });
}
const issuesWithPlus1 = () =>{

    toggleButton(issuesWithPlus1Btn)

    console.log("issuesWithPlus1")
    // Version 1.0
    let obtenerDatos = document.getElementsByTagName("span");
    var result;
    var result2 = [];
    var mostrar;

    for (index = 0; index < obtenerDatos.length; index++ ){
        result= obtenerDatos[index].innerText;
        if((obtenerDatos[index].getAttribute('class') !='bug-status status-11'||
        obtenerDatos[index].getAttribute('class') !='bug-status status-2' ||
        obtenerDatos[index].getAttribute('class') !='bug-status status-12'||
        obtenerDatos[index].getAttribute('class') !='bug-status status-3' || 
        obtenerDatos[index].getAttribute('class') =='bug-status status-1')  && 
        (obtenerDatos[index].getAttribute('ng-if') =='row.numberOfReproducers > 0' && (result == '1'))){
            mostrar = obtenerDatos[index].parentNode.parentNode;
            mostrar.setAttribute('style', 'display:none');
        }
        console.log(mostrar);
    }

}
const filterSelectedBugs = () =>{

    toggleButton(filterSelectedBugsBtn)

    console.log("filterSelectedBugs")
    // Encontrar la tabla
    let table = document.querySelector(".responsive-table");

    // Agregar una columna con checkbox al inicio de cada fila, excluyendo la primera fila
    let rows = table.querySelectorAll("tbody tr:not(:first-child)");
    for (let row of rows) {
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    let td = document.createElement("td");
    td.appendChild(checkbox);
    row.insertBefore(td, row.firstChild);
    }

    // Agregar un botón filter
    let filterButton = document.createElement("button");
    filterButton.innerHTML = "Filter";
    filterButton.onclick = function() {
    let filteredRows = [];
    for (let row of rows) {
        let checkbox = row.querySelector("input[type='checkbox']");
        if (!checkbox.checked) {
        filteredRows.push(row);
        }
    }
    for (let row of filteredRows) {
        row.style.display = "none";
    }
    issuesCount = rows.length - filteredRows.length;
    itemsAmount.innerHTML = 'Showing '+issuesCount+' issues.';
    };

    // Agregar un botón Clear
    let clearButton = document.createElement("button");
    clearButton.innerHTML = "Clear";
    clearButton.onclick = function() {
    for (let row of rows) {
        let checkbox = row.querySelector("input[type='checkbox']");
        checkbox.checked = false;
        row.style.display = "table-row";
    }
    issuesCount = rows.length;
    itemsAmount.innerHTML = 'Showing '+issuesCount+' issues.';
    };

    // Agregar contenedor para los botones y fijarlos al principio de la tabla
    let buttonContainer = document.createElement("div");
    buttonContainer.appendChild(filterButton);
    buttonContainer.appendChild(clearButton);
    table.parentNode.insertBefore(buttonContainer, table);

    // Ocultar el elemento de paginación
    let paginationDiv = table.nextElementSibling;
    if (paginationDiv && paginationDiv.classList.contains("responsive-table-pagination")) {
    paginationDiv.style.display = "none";
    }

    // Agregar un elemento para mostrar la cantidad de elementos que se están mostrando
    let issuesCount = rows.length;
    let selectedComp = "Selected Component";
    let itemsAmount = document.createElement("p");
    itemsAmount.innerHTML = 'Showing '+issuesCount+' issues.';
    buttonContainer.insertBefore(itemsAmount, buttonContainer.firstChild);

    // Agregar el checkbox a la primera fila de la tabla y ocultarlo visualmente
    let firstRow = table.querySelector("tbody tr:first-child");
    let firstCheckbox = document.createElement("input");
    firstCheckbox.type = "checkbox";
    firstCheckbox.setAttribute("hidden", true);
    let firstTD = document.createElement("td");
    firstTD.appendChild(firstCheckbox);
    firstRow.insertBefore(firstTD, firstRow.firstChild);
}
const markRowDblClick = () =>{

    toggleButton(markRowByDblClickBtn)
    document.addEventListener('dblclick',(ev)=>{
        const targetElm = ev.target
        const parentElement = ev.target.parentElement
        console.log(targetElm)
        if(targetElm.tagName == 'TD'){
            console.log(parentElement.style.background)
            if(parentElement.style.background == "rgb(189, 223, 255)"){
                console.log('remove background')
                parentElement.style.background = "none";
            }
            else{
                parentElement.style.background = "rgb(189, 223, 255)";
                console.log('add background')
            }
                
        }
            
    })
}
const bbvaSessionExtention = ()=>{

    toggleButton(markRowByDblClickBtn)

    // ==UserScript==
    // @name         BBVA timeout killer
    // @author       Antoine Ferreira
    // @namespace    http://tampermonkey.net/
    // @version      0.1
    // @description  kill the bbva 60 second session timeout
    // @author       You
    // @match        https://web.bbva.es/*
    // @icon         https://www.google.com/s2/favicons?domain=bbva.es
    // @grant        none
    // @require http://code.jquery.com/jquery-3.6.0.min.js
    // ==/UserScript==
    (function() {
        'use strict';
        $(document).ready(function() {
            setInterval(function() {
                var button = $('span:contains("Seguir en bbva.es")');
                if (!!button[0]){
                    button[0].click();
                }
            }, 5000);
        })
    })();
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

// Testing toolkit

clickEventListenerAssigner(changeOpacityBtn,"click", changeOpacity )
mouseoverEventListenerAssigner(changeOpacityBtn,"mouseover", showTooltip,'Change opacity' )
mouseoutEventListenerAssigner(changeOpacityBtn,"mouseout", hideTooltip)

clickEventListenerAssigner(directionBtn,"click", directionChange )
mouseoverEventListenerAssigner(directionBtn,"mouseover", showTooltip,'Change direction' )
mouseoutEventListenerAssigner(directionBtn,"mouseout", hideTooltip)

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

clickEventListenerAssigner(linksBtn,"click", links )
mouseoverEventListenerAssigner(linksBtn,"mouseover", showTooltip,'Links' )
mouseoutEventListenerAssigner(linksBtn,"mouseout", hideTooltip)

clickEventListenerAssigner(hrefsBtn,"click", equalHref )
mouseoverEventListenerAssigner(hrefsBtn,"mouseover", showTooltip,'Equal hrefs' )
mouseoutEventListenerAssigner(hrefsBtn,"mouseout", hideTooltip)

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


// UTest toolkit

clickEventListenerAssigner(utestToolkitBtn,"click", displayUtestToolkit )
mouseoverEventListenerAssigner(utestToolkitBtn,"mouseover", showTooltip,'UTest Toolkit' )
mouseoutEventListenerAssigner(utestToolkitBtn,"mouseout", hideTooltip)

clickEventListenerAssigner(testingToolkitBtn,"click", displayTestingToolkit )
mouseoverEventListenerAssigner(testingToolkitBtn,"mouseover", showTooltip,'Testing Toolkit' )
mouseoutEventListenerAssigner(testingToolkitBtn,"mouseout", hideTooltip)

clickEventListenerAssigner(testCasePreviewBtn,"click", testCasePreview )
mouseoverEventListenerAssigner(testCasePreviewBtn,"mouseover", showTooltip,'Test Case preview' )
mouseoutEventListenerAssigner(testCasePreviewBtn,"mouseout", hideTooltip)

clickEventListenerAssigner(unclaimedTestCaseBtn,"click", unclaimedTestCase )
mouseoverEventListenerAssigner(unclaimedTestCaseBtn,"mouseover", showTooltip,'Unclaimed Testcases' )
mouseoutEventListenerAssigner(unclaimedTestCaseBtn,"mouseout", hideTooltip)


clickEventListenerAssigner(boldTitleColumnSeparatorBtn,"click", boldTitleColumnSeparator )
mouseoverEventListenerAssigner(boldTitleColumnSeparatorBtn,"mouseover", showTooltip,'Bold title for \':\' separator' )
mouseoutEventListenerAssigner(boldTitleColumnSeparatorBtn,"mouseout", hideTooltip)

clickEventListenerAssigner(boldTitleSlashSeparatorBtn,"click", boldTitleSlashSeparator )
mouseoverEventListenerAssigner(boldTitleSlashSeparatorBtn,"mouseover", showTooltip,'Bold title for \' \\  \' separator' )
mouseoutEventListenerAssigner(boldTitleSlashSeparatorBtn,"mouseout", hideTooltip)

clickEventListenerAssigner(usbFilterByComponentsBtn,"click", usbFilterByComponents )
mouseoverEventListenerAssigner(usbFilterByComponentsBtn,"mouseover", showTooltip,'USBank filter by components' )
mouseoutEventListenerAssigner(usbFilterByComponentsBtn,"mouseout", hideTooltip)

clickEventListenerAssigner(hideMyBugsBtn,"click", hideMyBugs )
mouseoverEventListenerAssigner(hideMyBugsBtn,"mouseover", showTooltip,'Hide my bugs from issues list' )
mouseoutEventListenerAssigner(hideMyBugsBtn,"mouseout", hideTooltip)

clickEventListenerAssigner(issuesWithPlus1Btn,"click", issuesWithPlus1 )
mouseoverEventListenerAssigner(issuesWithPlus1Btn,"mouseover", showTooltip,'Issues with +1s' )
mouseoutEventListenerAssigner(issuesWithPlus1Btn,"mouseout", hideTooltip)

clickEventListenerAssigner(filterSelectedBugsBtn,"click", filterSelectedBugs )
mouseoverEventListenerAssigner(filterSelectedBugsBtn,"mouseover", showTooltip,'Filter selected bugs' )
mouseoutEventListenerAssigner(filterSelectedBugsBtn,"mouseout", hideTooltip)

clickEventListenerAssigner(markRowByDblClickBtn,"click", markRowDblClick )
mouseoverEventListenerAssigner(markRowByDblClickBtn,"mouseover", showTooltip,'Mark row by double clicking' )
mouseoutEventListenerAssigner(markRowByDblClickBtn,"mouseout", hideTooltip)

clickEventListenerAssigner(bbvaSessionExtentionBtn,"click", bbvaSessionExtention )
mouseoverEventListenerAssigner(bbvaSessionExtentionBtn,"mouseover", showTooltip,'BBVA Session extension' )
mouseoutEventListenerAssigner(bbvaSessionExtentionBtn,"mouseout", hideTooltip)


