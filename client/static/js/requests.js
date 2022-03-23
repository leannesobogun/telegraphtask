const protocol = window.location.protocol;
const host = window.location.host;

async function getAll(category){
    try {
        const response = await fetch(`http://localhost:3000/${category}`);
        const data = await response.json()
        return data;
    } catch (err) {
        console.warn(err);
    }
}

async function getItem(category, id) {
    try {
        const response = await fetch(`http://localhost:3000/${category}/${id}`);
        const data = await response.json();
        return data;
    } catch (err) {
        console.warn(err);
    }
}

async function postStory(e){
    e.preventDefault();
    try {
        const options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
        }
        
        const response = await fetch(`${protocol}//${host}/story`, options);
        const { id, err } = await response.json();
        if(err) { 
            throw Error(err) 
        } else {
            window.location.href = `${protocol}//${host}/story/${id}`
        }
    } catch (err) {
        console.warn(err);
    }
}

async function deleteBook(id){
    try {
        const options = { method: 'DELETE' }
        await fetch(`http://localhost:3000/books/${id}`, options);
        window.location.hash = `#books`
    } catch (err) {
        console.warn(err);
    }
}

document.querySelector("#submitButton").addEventListener('click', e => {
    postStory(e);
});