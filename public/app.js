
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
        dropIndicator.addEventListener(eventName, highlight, false)
    })
      
    // ['dragleave', 'drop'].forEach(eventName => {
    //     dropArea.addEventListener(eventName, unhighlight, false)
    // })
    
    function highlight(e) {

        dropIndicator.style.borderColor =  'red';
        // dropIndicator.classList.remove('border-slate-300');
        // dropIndicator.classList.add('border-red-500');
        console.log('helo')
    }
})


function handleDrop(event) {
    event.preventDefault();
    unhighlight();
    loader();

    let dt = event.dataTransfer;
    let files = dt.files;
    
    handleFiles(files);
}


function handleFiles(files) {
    ([...files]).forEach((file) => uploadFile(file))
}

function uploadFile(file) {
    let url = 'http://localhost:3000/upload';
    let formData = new FormData();

    formData.append('file', file);

    fetch(url, {
        method: 'POST',
        body: formData
    }).then(() => console.log('fetched')).catch((error) => console.log(error))
}

function loader() {
  

    const loaderBar = document.getElementById('loader');
    let width = 0;
    const interval = setInterval(() => {
      width += 2;
      loaderBar.style.width = width + '%';
      if (width >= 100) {
   
        clearInterval(interval);
      }
    }, 10);
    console.log(loaderBar)
}
  

function handleLeave(event) {
    event.preventDefault();
    unhighlight();
}

function unhighlight(e) {
    const dropIndicator = document.getElementById('dropIndicator');
    dropIndicator.style.borderColor = 'lightGray'
    // dropIndicator.classList.remove('border-red-500');
    // dropIndicator.classList.add('border-slate-300');
}


function showSection() {

}
  