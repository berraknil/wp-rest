window.addEventListener('load', function() {

let postsButton = document.getElementById('posts-btn');
let postsContainer = document.getElementById('posts-container');
    if (postsButton) {     
        postsButton.addEventListener('click', function loader() {
            let dataReq = new XMLHttpRequest();
            dataReq.open('GET', 'https://blog.berraknil.com/wp-json/wp/v2/posts');
            dataReq.onload = function() {
                if(dataReq.status >= 200 && dataReq.status < 400) {
                    let data = JSON.parse(dataReq.responseText);
                   createHTML(data);
                } else {
                    console.log('We connected but got an error');
                }
            };
            dataReq.onerror = function() {
                console.log('Connection error');
            };

            dataReq.send();
        });
    }
    function createHTML(postsData) {

    }
});