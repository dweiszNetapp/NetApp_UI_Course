import { useEffect, useState } from "react";

export const useGetUniqueColors = (count: number): string[] => {
    const [colors, setColors] = useState<string[]>([]);
    // const [counter, setCounter] = useState(count);

    // useEffect(() => {
    //     setColors(getUniqueColors(counter));
    // }, [counter])

    const getUniqueColors = (count: number): string[] => {
        const pastelColors: string[] = [];
        const saturation = 70; // pastel saturation
        const lightness = 85; // pastel lightness
        for (let i = 0; i < count; i++) {
            const hue = Math.floor(Math.random() * 360);
            pastelColors.push(`hsl(${hue}, ${saturation}%, ${lightness}%)`);
        }

        return pastelColors;
    }

    // Generate random pastel colors using HSL
    useEffect(() => {
        setColors(prev => prev.length === 0 ? getUniqueColors(count) : prev);

        const intervalId = setInterval(() => {
            setColors(getUniqueColors(count));
        }, 13000);

        return () => {
            clearInterval(intervalId);
        }
    }, [colors.length, count])

    return colors
}