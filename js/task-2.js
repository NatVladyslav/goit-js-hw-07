const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];

const makeGalleryCard = (imgInfo) => {
  const liElement = document.createElement("li");
  liElement.classList.add("gallery-item");
  liElement.style.width = "calc((100% - 48px) / 3)"

  const cardImg = document.createElement("img");
  cardImg.src = imgInfo.url;
  cardImg.alt = imgInfo.alt;
  cardImg.width = "360";
  cardImg.height = "300";
  

  liElement.append(cardImg);
  return liElement;
}

const gelleryCardArr = images.map(imgInfo => makeGalleryCard(imgInfo));

const listOfCard = document.querySelector(".gallery");
listOfCard.append(...gelleryCardArr);

listOfCard.style.listStyleType = "none";
listOfCard.style.display = "flex";
listOfCard.style.flexWrap = "wrap";
listOfCard.style.columnGap = "24px";
listOfCard.style.rowGap = "48px";
listOfCard.style.margin = "100px auto 100px auto";
listOfCard.style.padding = "0";
listOfCard.style.justifyContent = "center";
listOfCard.style.maxWidth = "1128px";




