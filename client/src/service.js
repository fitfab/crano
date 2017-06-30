export async function fetchIt(url) {
    const res = await fetch(url);
    return await res.json()
}
