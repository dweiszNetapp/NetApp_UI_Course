export const getPairedNumbers = (n: number): number[] => {
    if (n % 2 !== 0) {
        throw new Error('Input number must be even to form pairs.');
    }
    // Generate n/2 unique random numbers
    const uniqueNumbers = Array.from({ length: n / 2 }, () => Math.floor(Math.random() * 100));
    // Duplicate each number to form pairs
    const pairedNumbers = [...uniqueNumbers, ...uniqueNumbers];
    // Shuffle the array
    for (let i = pairedNumbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pairedNumbers[i], pairedNumbers[j]] = [pairedNumbers[j], pairedNumbers[i]];
    }
    return pairedNumbers;
};
