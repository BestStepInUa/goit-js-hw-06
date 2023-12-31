// TASK № 3

// Напиши скрипт для створення галереї зображень на підставі масиву даних. HTML містить список ul.gallery.

// <ul class="gallery"></ul>

// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>.
// Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.

/* <ul class="gallery">
      <li class="gallery-item">
        <img
          class="gallery-img"
          src="https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="White and Black Long Fur Cat"
        />
      </li>
      <li class="gallery-item">
        <img
          class="gallery-img"
          src="https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="Orange and White Koi Fish Near Yellow Koi Fish"
        />
      </li>
      <li class="gallery-item">
        <img
          class="gallery-img"
          src="https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="Group of Horses Running"
        />
      </li>
</ul> */
    
const images = [
 {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const ulGalleryListRef = document.querySelector('.gallery');

const makeGalleryListItem = ({url, alt}) => {
  return `
  <li class="gallery-item">
        <img
          class="gallery-img"
          src=${url}
          alt="${alt}"
        />
      </li>`;
};

const makeGalleryListItems = images.map(makeGalleryListItem).join('');
// console.log(makeGalleryListItems);

ulGalleryListRef.insertAdjacentHTML('afterbegin', makeGalleryListItems);