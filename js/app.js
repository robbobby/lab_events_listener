document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');
  document.querySelector('#new-item-form').addEventListener('submit', handleFormSubmit);
  document.querySelector('#delete-form').addEventListener('submit', handleDelete);
});

const handleFormSubmit = function(event) {
  event.preventDefault();
  const title = document.createElement('p');
  const author = document.createElement('p');
  const category = document.createElement('p');

  // title.textContent = `${this.title.value}`
  // author.textContent = `${this.author.value}`
  // category.textContent = `${this.category.value}`
  title.textContent = `Bob`
  author.textContent = `Jeff`
  category.textContent = `Barbera`
 
  const list = document.querySelector('#reading-list');
  const newList = document.createElement('ul');
  newList.classList.add('cool-books');
  newList.appendChild(title)
  newList.appendChild(author);
  newList.appendChild(category);
  list.appendChild(newList);

  this.reset();
}

const handleDelete = function(event) {
  event.preventDefault();
  list.children.array.forEach(element => {
    console.log("Deleted a child hopefully")
    list.children.removeChild(element)
  });
  }
  
