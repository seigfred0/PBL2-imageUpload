const dropSection = document.getElementById('dropSection');
const loaderSection = document.getElementById('loaderSection');
const previewSection = document.getElementById('previewSection');

const sections = [dropSection, loaderSection, previewSection];
function toShow(page){

    switch (page) {
        case 'one':
            sections[1].style.display = 'none';
            sections[0].style.display = 'flex';
            sections[2].style.display = 'none';
            break;
        case 'two':
            sections[1].style.display = 'flex';
            sections[0].style.display = 'none';
            sections[2].style.display = 'none';
            break;
        case 'three':
            sections[0].style.display = 'none';
            sections[1].style.display = 'none';
            sections[2].style.display = 'flex';
            break;
        default:
            sections[1].style.display = 'none';
            sections[2].style.display = 'none';
            break;
    }
}

toShow('one')


    
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
      
    function highlight(e) {

        dropIndicator.style.borderColor =  'red';
        // dropIndicator.classList.remove('border-slate-300');
        // dropIndicator.classList.add('border-red-500');
        console.log('helo')
    }



function handleDrop(event) {
    toShow('two');
    event.preventDefault();
    unhighlight();
    loader();
    


    console.log('drop');

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
    }).then(response => response.json()).then(data => setImage(data.imageUrl)).catch((error) => console.log(error))

    
}

function setImage(image) {
  
     let previewImage = document.getElementById('preview');
     previewImage.setAttribute('src', image)

     setTimeout(() => {
        console.log(previewImage)
     }, 1000)
    //  previewDiv.style.backgroundImage = `url('${image}')`;
}

function loader() {
    
    const loaderBar = document.getElementById('loader');
    let width = 0;
    const interval = setInterval(() => {
      width += 2;
      loaderBar.style.width = width + '%';
      if (width >= 100) {
        toShow('three')
   
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


