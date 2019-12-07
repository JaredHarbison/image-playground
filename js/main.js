let spans = document.querySelectorAll('.word span');
spans.forEach((span, idx) => {
  span.addEventListener('click', (e) => {
    e.target.classList.add('active');
  });
  span.addEventListener('animationend', (e) => {
    e.target.classList.remove('active');
  });
  
  // Initial animation
  setTimeout(() => {
    span.classList.add('active');
  }, 750 * (idx+1))
});

/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/* Wait for background image to load ////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////*/

document.body.classList.add('js-loading');

window.addEventListener("load", showPage, false);

function showPage() {
  document.body.classList.remove('js-loading');
}

/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/* Retrieve SVG path lengths ////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

Use the JS below to compile the CSS for each character in the SVG "logo".
You'll need to delete the unecessary text with a multi-line cursor in your editor. 
You can omit or alter the animation delay in the last console.log() 
            for example:  [     ${i*.5}   or  ${0}      ]

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
*/
const logo = document.querySelectorAll('#logo path')
for (let i = 0; i < logo.length; i++){
    console.log(`#logo path:nth-child(${i}){`);
    console.log(`stroke-dasharray: ${logo[i].getTotalLength()}px;`);
    console.log(`stroke-dashoffset: ${logo[i].getTotalLength()}px;`);
    console.log(`animation: line-anim 2s ease forwards ${i*.25}s}`);
}


