export async function loadMarkdownFile(fileName: string): Promise<string> {
    const basePath = import.meta.env.BASE_URL || '/';
    const fullPath = `${basePath}content/${fileName}.md`;
    console.log(`Attempting to load: ${fullPath}`);
    try {
        const response = await fetch(fullPath);
        console.log('Response:', response);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const text = await response.text();
        console.log('Loaded content:', text.substring(0, 100) + '...'); // Log the first 100 characters
        return text;
    } catch (error) {
        console.error(`Error loading markdown file: ${fileName}`, error);
        return '';
    }
}