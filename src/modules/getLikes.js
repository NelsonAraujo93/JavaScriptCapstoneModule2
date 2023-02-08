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

const createLike = async (itemId) => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/gcxOnR7Ou6sAxWdfnAQw/likes', {
    method: 'POST',
    body: JSON.stringify({
      item_id: itemId,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const hearts = await response.json();
  window.location.reload();
  return hearts;
};

export {
  getAllLikes,
  getItemLikes,
  createLike,
};