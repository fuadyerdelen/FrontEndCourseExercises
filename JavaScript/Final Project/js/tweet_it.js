function tweet_it() {

    let floatingTextarea = document.getElementById('floatingTextarea');

    profile_name.innerText = document.getElementById('name').innerText;
    profile_name_et.innerText = '@' + document.getElementById('name').innerText;
    tweet_text.innerText = floatingTextarea.value;
    tweet_profile_photo.src = 'images/user.png';

    tweets.innerHTML = '';
    tweets.appendChild(tweet);
    floatingTextarea.value = '';
};

function tweetItMain() {
    let floatingTextarea = document.getElementById('tweet_textarea');
    let name = document.getElementById('name');

    profile_name.innerText = name.innerText;
    profile_name_et.innerText = '@' + name.innerText;
    tweet_text.innerText = floatingTextarea.value;
    tweet_profile_photo.src = 'images/user.png';

    tweets.innerHTML = ' ';
    tweets.appendChild(tweet);
    floatingTextarea.value = '';
}

function get_login() {
    document.getElementById('register_content').classList.add('d-none');

    document.getElementById('login_content').classList.remove('d-none');
    document.getElementById('login_content').classList.add('d-flex');
};

function register(username, password) {
    let get_name = document.getElementById('register_name').value;
    let get_email = document.getElementById('register_mail').value;
    let get_password = document.getElementById('register_password').value;

    let newUser = {

        email: get_email,
        username: get_name,
        password: get_password,

    }

    localStorage.setItem(newUser.email, JSON.stringify(newUser));
    location.reload();

};

function login() {
    let get_email = document.getElementById('login_mail').value;
    let get_password = document.getElementById('login_password').value;

    let user = JSON.parse(localStorage.getItem(get_email));


    if (!!user && user.email === get_email && user.password === get_password) {
        document.getElementById('login_content').classList.remove('d-flex');
        document.getElementById('login_content').classList.add('d-none');
        document.getElementById('content').classList.add('d-flex');
        document.getElementById('content').classList.remove('d-none');

        document.getElementById('name').innerText = user.username;
        document.getElementById('name_et').innerText = '@' + user.username;
    } else {
        window.alert('Password ore email is not valid!')
    };
};


function saveTweets() {

    let profileName = document.getElementById('name').innerText;
    let userTweet = document.getElementById('floatingTextarea').value;

    let get_email = document.getElementById('login_mail').value;
    let user = JSON.parse(localStorage.getItem(get_email));

    if (!user.tweets) {
        user.tweets = [];
    };
}