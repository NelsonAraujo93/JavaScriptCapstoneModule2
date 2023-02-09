import Comments from '../utils/comments.js';

describe('Comments', () => {
  const comments = new Comments();
  test('Add a comment to Book with id T7-bDwAAQBAJ, expected actual list.length + 1', async () => {
    const actual = await comments.getComments('T7-bDwAAQBAJ');
    await comments.createComment('T7-bDwAAQBAJ', 'Nelson', 'This is a test Comment');
    expect(comments.comments).toHaveLength(actual.length + 1);
  });

  test('Add a comment to Book without user name expected response false', async () => {
    const response = await comments.createComment('T7-bDwAAQBAJ', '', 'This is a test Comment');
    expect(response).toBe(false);
  });

  test('Add a comment to Book without comment expected response false', async () => {
    const response = await comments.createComment('T7-bDwAAQBAJ', 'Nelson', '');
    expect(response).toBe(false);
  });

  test('Add a comment to Book without bookId expected response false', async () => {
    const response = await comments.createComment('', 'Nelson', 'This is a test Comment');
    expect(response).toBe(false);
  });
});