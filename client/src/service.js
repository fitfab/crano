async function fetchIt(url) {
  const res = await fetch(url);
  return res.json();
}

export default fetchIt;
