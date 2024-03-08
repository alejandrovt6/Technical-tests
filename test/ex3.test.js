const daysDiff = require('../ex3');

test('daysDiff', () => {

    const date1 = new Date('Dec 1, 2023');
    const date2 = new Date('Dec 24, 2023');
    
    expect(daysDiff(date1, date2)).toBe('23 days');
});

  