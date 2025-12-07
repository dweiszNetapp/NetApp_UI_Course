export const getUniqueColors = (count) => {
    // Generate pastel colors using HSL, evenly spaced hues for complimentary effect
    const pastelColors = [];
    const saturation = 70; // pastel saturation
    const lightness = 85; // pastel lightness
    for (let i = 0; i < count; i++) {
        const hue = Math.round((360 / count) * i);
        pastelColors.push(`hsl(${hue}, ${saturation}%, ${lightness}%)`);
    }
    return pastelColors;
}