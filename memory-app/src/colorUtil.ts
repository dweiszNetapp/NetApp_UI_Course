export const getUniqueColors = (count: number): string[] => {
    const colors: Set<string> = new Set();
    while (colors.size < count) {
        // Generate a random hex color
        const color = '#' + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');
        colors.add(color);
    }
    return Array.from(colors);
}