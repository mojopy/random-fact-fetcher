// Fetches a random fact from a public API.
async function fetchRandomFact() {
    try {
        const resp = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random');
        const data = await resp.json();
        return data.text;
    } catch (e) {
        console.error("Something went wrong: ", e);
        return "Apologies. Something went wrong and we failed to fetch a new fact.";
    }
}

export default fetchRandomFact;