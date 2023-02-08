const getAllLikes = async () => {
  const res = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/gcxOnR7Ou6sAxWdfnAQw/likes');
  const data = await res.json();
  return data;
};

const getItemLikes = async (itemId) => {
  const likesData = await getAllLikes();
  const filteredItem = likesData.filter((item) => item.id === itemId);
  return filteredItem.likes;
};

export {
  getAllLikes,
  getItemLikes,
};