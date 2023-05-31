const elementTemplate = document.querySelector('#element');
const visualCards = [
    {
     /* link: ".\img\cases\visual_1.JPG"*/
      link:"https://i.postimg.cc/6qYZnkjC/visual-1.jpg"
    },
    {
      link: "https://i.postimg.cc/G3QGWDL9/visual-2.jpg"
    },
    {
      link: "https://i.postimg.cc/GhmGdptK/visual-3.jpg"
    },
    {
      link: "https://i.postimg.cc/9Q49wNGq/visual-4.jpg"
    },
    {
         link:"https://i.postimg.cc/YqDg9wmH/visual-5.jpg"
       },
       {
         link: "https://i.postimg.cc/2SPZQFw9/visual-6.jpg"
       },
       {
         link: "https://i.postimg.cc/6QnGY2bW/visual-7.jpg"
       },
       {
         link: "https://i.postimg.cc/Twc5X8XB/visual-8.jpg"
       },
       {
        link: "https://i.postimg.cc/RhV6SPSh/visual-9.jpg"
      },
      {
        link: "https://i.postimg.cc/Jn8HgrSb/visual-10.jpg"
      },
      {
        link: "https://i.postimg.cc/TY1LBHNH/visual-11.jpg"
      },
      {
        link: "https://i.postimg.cc/SNP247wQ/visual-12.jpg"
      },
  ]; 
  const closeButtons=Array.from(document.querySelectorAll('.popup__exit-button'));
const elements=document.querySelector('.elements')
  const addItem = (link)=>{
  const placeElement = elementTemplate.content.cloneNode(true);
  const fullImgPopup=document.querySelector('.popup_full-image');
  const cardImg=placeElement.querySelector('.element__img');
  cardImg.src=link;

  const fullImage=document.querySelector('.popup__image');
  cardImg.addEventListener('click', function(){
    console.log("dfghfdsfgds")
    fullImage.src=link;
    open(fullImgPopup);

    closeButtons.forEach(btn=>{
        btn.addEventListener('click',()=>{
            close(btn.closest('.popup'))
        })
    })
  });
  return placeElement;
}

const renderCard = (link)=>{
elements.append(addItem(link));
}
function displayCards(){
  visualCards.forEach(function(item){
  renderCard(item.link);
  
})
}
function open(popup){
    popup.classList.add('popup_active');
}
function close(popup){
    popup.classList.remove('popup_active');
}

/*function classAdd(){

    const cardImgs=Array.from(document.querySelectorAll('.element'));
    for (let i=0;i<=cardImgs.length;i+=3){
        cardImgs[i].classList.add('modified')
        cardImgs[i+1].classList.add('modified')
    }
      console.log(cardImgs)
}*/
displayCards()
/*classAdd()*/