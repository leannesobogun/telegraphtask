const protocol = window.location.protocol;
const host = window.location.host;
const hostname = window.location.hostname;

async function getStory(id) {
    try {
        const response = await fetch(`${protocol}//${hostname}:3000/story/${id}`);
        const data = await response.json();
        return data;
    } catch (err) {
        console.warn(err);
    }
}

async function postStory(title, name, story){
    try {
        const options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({title: title, name: name, story: story})
        }
        
        const response = await fetch(`${protocol}//${hostname}:3000/story`, options);
        const { id, err } = await response.json();
        if(err) { 
            throw Error(err) 
        } else {
            window.location.href = `${protocol}//${host}/story?id=${id}`
        }
    } catch (err) {
        console.warn(err);
    }
}

