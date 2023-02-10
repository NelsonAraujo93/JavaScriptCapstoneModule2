import totalItems from '../utils/fetchBooks.js';

describe('Testing if the books are retrieved from API perfectly', () => {
  test('Testing item counter function is working', async () => {
    // Act
    const response = await totalItems();
    // Assert
    expect(response.items.length).toBe(10);
  });
});
