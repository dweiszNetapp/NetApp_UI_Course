export const getPairedNumbers = (n) => {
    if (n % 2 !== 0) {
        throw new Error('Input number must be even to form pairs.');
    }
    // Generate n/2 unique random numbers using a Set
    const uniqueNumbers = new Set();
    while (uniqueNumbers.size < n / 2) {
        uniqueNumbers.add(Math.floor(Math.random() * 100));
    }
    const uniqueArr = Array.from(uniqueNumbers);
    // Duplicate each number to form pairs
    const pairedNumbers = [...uniqueArr, ...uniqueArr];
    // Improved shuffle: avoid placing pairs consecutively
    let shuffled = [];
    let attempts = 0;
    const maxAttempts = 1000;
    while (attempts < maxAttempts) {
        // Fisher-Yates shuffle
        const arr = pairedNumbers.slice();
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        // Check for adjacent pairs
        let hasAdjacent = false;
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] === arr[i - 1]) {
                hasAdjacent = true;
                break;
            }
        }
        if (!hasAdjacent) {
            shuffled = arr;
            break;
        }
        attempts++;
    }
    // If unable to avoid adjacent pairs, fallback to original shuffle
    return shuffled.length ? shuffled : pairedNumbers;
};
