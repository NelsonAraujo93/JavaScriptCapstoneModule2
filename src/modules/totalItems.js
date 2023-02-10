const totalBooksItems = async () => {
  const options = ['html', 'css', 'javascript', 'ruby', 'react', 'node', 'jokes', 'java', 'maths', 'art', 'spanish', 'english', 'python', 'sql'];
  const num = Math.floor(Math.random() * 13);
  const search = document.getElementById('search').value || options[num];
  const url = `https://www.googleapis.com/books/v1/volumes?q=${search}`;
  const res = await fetch(url);
  const data = await res.json();
  const { items } = data;
  return { data, items, search };
};

export default totalBooksItems;