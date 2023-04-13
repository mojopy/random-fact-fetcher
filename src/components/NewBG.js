// Fetches a random background from a public API.
async function fetchRandomBG() {
    try {
        const resp = await fetch('https://picsum.photos/1920/1080');
        return resp.url;
    } catch (e) {
        console.error("Something went wrong: ", e);
    }
}

export default fetchRandomBG;