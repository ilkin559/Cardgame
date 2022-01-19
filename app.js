const imageArray = [
  {
    id: 1,
    img: "https://static.toiimg.com/photo/msid-75506382/75506382.jpg?695767",
  },
  {
    id: 2,
    img: "https://www.filmstories.co.uk/wp-content/uploads/2020/05/transformers-850x600.jpg",
  },
  {
    id: 3,
    img: "https://i.gadgets360cdn.com/large/age_extinction_grimlock_1498733666022.jpg",
  },
  {
    id: 4,
    img: "https://static3.srcdn.com/wordpress/wp-content/uploads/2017/06/Transformers-The-Last-Knight-banner.jpg",
  },
];

const cardWrapper = document.querySelector(".card__wrapper");
const startBtn = document.querySelector(".card__find");
const currentImage = document.querySelector(".card__currentImage");

imageArray.forEach((item) => {
  cardWrapper.innerHTML += `
    <div class="card__item">
        <img src=${item.img} data-id=${item.id - 1} />
    </div>
  `;
});

const cardWrapperItem = document.querySelectorAll(".card__item");

let randomSelectImage = {};

let selectedCardImage = {};

const setRandom = (e) => {
  e.preventDefault();
  const randomId = Math.floor(Math.random() * imageArray.length);
  const Img = `<img src=${imageArray[randomId].img} />`;
  randomSelectImage.id = imageArray[randomId].id;
  randomSelectImage.img = imageArray[randomId].img;
};

const animate = () => {
  let index = -1;

  const interval = setInterval(() => {
    index++;
    if (index > imageArray.length - 1) {
      clearInterval(interval, 1);
      cardWrapperItem.forEach((item) => {
        item.classList.remove("animate");
      });
    } else {
      cardWrapperItem[index].classList.add("animate");
    }
  }, 300);
};

cardWrapperItem.forEach((item) => {
  item.onclick = (e) => {
    cardWrapperItem.forEach((item) => {
      item.classList.remove("border");
    });

    item.classList.add("border");
    selectedCard.call(null, e);
  };
});

startBtn.onclick = (e) => {
  randomSelectImage = {};
  setRandom.call(null, e);
  animate();
  currentImage.innerHTML = "";
  cardWrapperItem.forEach((item) => {
    item.classList.remove("border");
  });
};

// chooseCard

const selectedCard = (e) => {
  selectedCardImage.id =
    imageArray[Number(e.target.getAttribute("data-id"))].id;
  selectedCardImage.img =
    imageArray[Number(e.target.getAttribute("data-id"))].img;
};

// checkCard

const checkCard = () => {
  if (selectedCardImage.id === randomSelectImage.id) {
    currentImage.innerHTML = `<img src=${randomSelectImage.img} />`;
    setTimeout(() => {
      alert("You Win");
    }, 1000);
  } else {
    currentImage.innerHTML = `<img src=${randomSelectImage.img} />`;
    setTimeout(() => {
      alert("You Lose");
    }, 1000);
  }
};

currentImage.onclick = () => {
  checkCard();
};
