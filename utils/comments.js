import axios from 'axios';

export default class Comments {
  constructor() {
    this.comments = [];
  }

  createComment = async (bookId, user, comment) => {
    if (bookId === '' || user === '' || comment === '') {
      return false;
    }
    await axios.post('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/gcxOnR7Ou6sAxWdfnAQw/comments', {
      item_id: bookId,
      username: user,
      comment,
    });
    await this.getComments(bookId);
    return this.comments;
  }

  getComments = async (bookId) => {
    const { data } = await axios(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/gcxOnR7Ou6sAxWdfnAQw/comments?item_id=${bookId}`);
    if (!data.error) {
      this.comments = data;
      return this.comments;
    }
    return this.comments;
  };
}