
window.addEventListener('DOMContentLoaded', () => {

    const dropArea = document.getElementById('dropArea');
    const dropIndicator = document.getElementById('dropIndicator');
  
    
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, preventDefaults, false)
    })

    function preventDefaults (e) {
        e.preventDefault()
        e.stopPropagation()
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        dropArea.addEventListener(eventName, highlight, false)
      })
      
    // ['dragleave', 'drop'].forEach(eventName => {
    //     dropArea.addEventListener(eventName, unhighlight, false)
    // })
    
    function highlight(e) {
        dropIndicator.classList.remove('border-slate-300');
        dropIndicator.classList.add('border-red-500');
        console.log('helo')
    }
    
   



})

function handleDrop(event) {
    event.preventDefault();
    // Handle dropped files here
    unhighlight();
    console.log('dropeedd')
}

function handleLeave(event) {
    event.preventDefault();
    // Handle dropped files here
    unhighlight();
    console.log('left')
}

function unhighlight(e) {
    dropIndicator.classList.remove('border-red-500');
    dropIndicator.classList.add('border-slate-300');
    console.log('bye')
}
  