const booksTotal = (totalItems, search) => {
  const totalBooks = document.querySelector('.total-books');
  totalBooks.innerHTML = `"${totalItems}" Books about ${search}`;
};

export default booksTotal;