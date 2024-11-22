//Get Buttons
const axiosBtn = document.getElementById("axiosButton");
const fetchBtn = document.getElementById("fetchButton");
const pageOutput = document.getElementById("pageOutput");

const axiosPostBtn = document.getElementById("axiosPostButton");
const fetchPostBtn = document.getElementById("fetchPostButton");
const pagePostOutput = document.getElementById("pagePostOutput");

//Declare the fake URL
const apiUrl = "https://jsonplaceholder.typicode.com/todos/1";
const postUrl = "https://jsonplaceholder.typicode.com/posts";

//Make a get request using Fetch API
fetchBtn.addEventListener("click", () => {
    console.log("Fetch Button Clicked!!")

    pageOutput.innerHTML = `Loading ....`

    fetch(apiUrl).then((response) => {
        return response.json();
    }).then((data) => {
        pageOutput.innerHTML = `Body:${data.body}\n\nEmail:${data.email}`

        //Todo: Fetch a lot of content and display it
    }).catch((error) => {
        console.log({ error });
    });
});

//Make a get request using Axios
axiosBtn.addEventListener("click", () => {
    console.log("Axios Button Clicked!!")

    pageOutput.innerHTML = `Loading ....`

    axios.get(apiUrl).then((response) => {

        pageOutput.innerHTML = `Body:${response.data.body}\n\nEmail:${response.data.email}`;

    }).catch((error) => {
        console.log({ error });
    });
});

//Make a POST request using Fetch API 

//Create the information I want to Send
const postInfo = {
    title: "Learntivite",
    body: "The Body Of God",
    userid: 3
}

fetchPostBtn.addEventListener("click", () => {
    console.log("Post Button Clicked!!")

    pagePostOutput.innerHTML = `Loading ....`

    fetch(postUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postInfo)        
    }).then((response) => {
        return response.json();
    }).then((response) => {
       
        pagePostOutput.innerHTML = `Body:${response.title}\n\Id:${response.id}`

        //Todo: Fetch a lot of content and display it
    }).catch((error) => {
        console.log({ error });
    });
});

//Make a POST request using AXIOS 
axiosPostBtn.addEventListener("click", () => {
    console.log("Axios POST Button Clicked!!")

    pagePostOutput.innerHTML = `Loading ....`

    axios.post(postUrl, postInfo).then((response) => {

        pagePostOutput.innerHTML = `Body:${response.data.title}\n\Id:${response.data.id}`

    }).catch((error) => {
        console.log({ error });
    });
});

//Todo: Add Requests For Put