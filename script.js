let imgContent = [
    {
        imgAddress: 'https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
        imgLabel: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
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
    }
]

let id = 0;

for(let img of imgContent){
div = document.createElement('div');
div.className = 'All-Image-Details';
div.dataset.id = id++;

let content = `<img src='${img.imgAddress}' class='Image-Details-Img'>
               <div class='Image-Details-Label'> <span style = "overflow: hidden">${img.imgLabel}</span> </div>`;
div.innerHTML = content;

div.addEventListener('click', handleImgSelection)
document.querySelector('#Image-List').append(div);

}

let indexOfImgSelected = 0;
document.querySelectorAll('.All-Image-Details')[indexOfImgSelected].classList.add('selectedImg');
let imgSrc = imgContent[indexOfImgSelected].imgAddress;
let imgCap = imgContent[indexOfImgSelected].imgLabel;

document.querySelector('#Image').setAttribute('src', imgSrc);
document.querySelector('figcaption').textContent = imgCap;


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