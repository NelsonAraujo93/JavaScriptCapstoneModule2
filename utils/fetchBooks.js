import axios from 'axios';

const totalItems = async () => {
  const search = 'english';
  const url = `https://www.googleapis.com/books/v1/volumes?q=${search}`;
  const { data } = await axios(url);
  return data;
};

export default totalItems;