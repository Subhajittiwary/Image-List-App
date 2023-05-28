let imgContent = [{
    imgAddress: 'https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    imgLabel: 'Cat.jpeg'
},
{
    imgAddress: 'https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    imgLabel: 'Cookie Couple.jpeg'
},
{
    imgAddress: 'https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    imgLabel: 'Beach.jpeg'
},
{
    imgAddress: 'https://images.unsplash.com/photo-1623206837956-07dab21608f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    imgLabel: 'Investment Pitch.jpeg'
},
{
    imgAddress: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    imgLabel: 'Interns Performance.jpeg'
}]

let id = 0;

for(let img of imgContent){
    div = document.createElement('div');
    div.className = 'All-Image-Details';
    div.dataset.id = id++;
    
    let content = `<img src='${img.imgAddress}' class='Image-Details-Img'>
                   <p class='Image-Details-Label'>${img.imgLabel}</p>`;
    div.innerHTML = content;
    document.querySelector('#Image-List').append(div);
}

let indexOfImgSelected = 0;
document.querySelectorAll('.All-Image-Details')[indexOfImgSelected].classList.add('selectedImg');
let imgSrc = imgContent[indexOfImgSelected].imgAddress;
let imgCap = imgContent[indexOfImgSelected].imgLabel;

document.querySelector('#Image').setAttribute('src', imgSrc);
document.querySelector('figcaption').textContent = imgCap;

document.querySelector("#Image-List").addEventListener('click', handleImgSelection);

function handleImgSelection(event){
    document.querySelectorAll('.All-Image-Details')[indexOfImgSelected].classList.remove('selectedImg');
    let curImgDiv = event.target.closest('.All-Image-Details');
    curImgDiv.classList.add('selectedImg');
    indexOfImgSelected=curImgDiv.dataset.id;
    imgSrc = imgContent[indexOfImgSelected].imgAddress;
    imgCap = imgContent[indexOfImgSelected].imgLabel;
    document.querySelector('#Image').setAttribute('src', imgSrc);
    document.querySelector('figcaption').textContent = imgCap;
}