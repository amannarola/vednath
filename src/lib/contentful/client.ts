import { createClient } from "contentful";

export const client = createClient({
    space: 'xny05j7d084c',
    accessToken: 'JEZaagS_QURc6mcNYvdqVBDek-9SIA2UNz_HokdIdVg'
})

export const getSliderData = async () => {
    try {
        const entries = await client.getEntries({ content_type: 'homeSlider' });
        return entries.items;
    } catch (error) {
        console.error("Error fetching entries from Contentful:", error);
        return [];
    }
};