import _ from 'lodash';

function getHome() {

    let home = document.createElement('div');
    home.id = 'home';
    home.classList.add('card', 'text-center', 'mt-2');

    let home_header = document.createElement('div');
    home_header.classList.add('card-header', 'p-1');
    home_header.innerHTML = 'Simple to do';

    let home_body = document.createElement('div');
    home_body.classList.add('card-body', 'p-3');

    let home_title = document.createElement('h5');
    home_title.classList.add('card-title');
    home_title.innerHTML = 'Creating a to-do list';

    let home_text = document.createElement('p');
    home_text.classList.add('card-text');
    home_text.innerHTML = 'You can create and customize your own to-do list.';


    let login_btn = document.createElement('button');
    login_btn.classList.add('btn', 'btn-primary', 'me-4');
    login_btn.innerHTML = 'Login';
    login_btn.addEventListener('click', getLogin);

    let register_btn = document.createElement('button');
    register_btn.classList.add('btn', 'btn-primary');
    register_btn.innerHTML = 'Register';
    register_btn.addEventListener('click', getRegister);


    let home_footer = document.createElement('div');
    home_footer.classList.add('card-footer', 'text-muted');
    home_footer.innerHTML = 'by  m.fuad yerdelen';

    home.appendChild(home_header);
    home.appendChild(home_body);
    home_body.appendChild(home_title);
    home_body.appendChild(home_text);
    home_body.appendChild(login_btn);
    home_body.appendChild(register_btn);
    home.appendChild(home_footer);


    return home;
};

document.getElementById('main').appendChild(getHome());

function register(username, password) {

    let getName = document.getElementById('name').value;
    let getEmail = document.getElementById('email').value;
    let getPassword = document.getElementById('password').value;

    email = getEmail;
    username = getName;
    password = getPassword;

    let newUser = {

        email: email,
        username: username,
        password: password,

    }

    localStorage.setItem(email, JSON.stringify(newUser));
};

function logout() {
    document.getElementById('user_page').classList.add('d-none');
    document.getElementById('home').classList.remove('d-none');
}

function getRegister() {

    let register_content = document.createElement('div');
    register_content.classList.add('container', 'd-flex', 'flex-column', 'flex-wrap', 'align-content-center');

    let register_title = document.createElement('h5');
    register_title.classList.add('text-center');
    register_title.innerHTML = 'Register';

    let register_form = document.createElement('form');
    register_form.classList.add('w-25', 'd-flex', 'flex-column');

    let div_name = document.createElement('div');
    div_name.classList.add('mb-3');

    let label_name = document.createElement('label');
    label_name.classList.add('form-label');
    label_name.setAttribute('for', 'name');
    label_name.innerHTML = 'Name';

    let input_name = document.createElement('input');
    input_name.classList.add('form-control');
    input_name.id = 'name';
    input_name.type = 'text';


    let div_email = document.createElement('div');
    div_email.classList.add('mb-3');

    let label_email = document.createElement('label');
    label_email.classList.add('form-label');
    label_email.setAttribute('for', 'email');
    label_email.innerHTML = 'Email address';

    let input_email = document.createElement('input');
    input_email.classList.add('form-control');
    input_email.id = 'email';
    input_email.type = 'email';

    let div_password = document.createElement('div');
    div_password.classList.add('mb-3');


    let label_password = document.createElement('label');
    label_password.classList.add('form-label');
    label_password.setAttribute('for', 'password');
    label_password.innerHTML = 'Password';

    let input_password = document.createElement('input');
    input_password.classList.add('form-control');
    input_password.id = 'password';
    input_password.type = 'password';


    let register_submit = document.createElement('button');
    register_submit.type = 'submit';
    register_submit.innerHTML = 'Submit';
    register_submit.classList.add('btn', 'btn-primary');
    register_submit.addEventListener('click', register);



    register_content.appendChild(register_title);
    register_content.appendChild(register_form);
    register_form.appendChild(div_name);
    div_name.appendChild(label_name);
    div_name.appendChild(input_name);

    register_form.appendChild(div_email);
    div_email.appendChild(label_email);
    div_email.appendChild(input_email);

    register_form.appendChild(div_password);
    div_password.appendChild(label_password);
    div_password.appendChild(input_password);

    register_content.appendChild(register_submit);

    document.getElementById('content').innerHTML = "";

    document.getElementById('content').appendChild(register_content);

}

function getLogin() {

    let login_content = document.createElement('div');
    login_content.classList.add('container', 'd-flex', 'flex-column', 'flex-wrap', 'align-content-center');

    let login_title = document.createElement('h5');
    login_title.classList.add('text-center');
    login_title.innerHTML = 'Login';

    let login_form = document.createElement('form');
    login_form.classList.add('w-25', 'd-flex', 'flex-column');

    let div_email = document.createElement('div');
    div_email.classList.add('mb-3');

    let label_email = document.createElement('label');
    label_email.classList.add('form-label');
    label_email.setAttribute('for', 'email');
    label_email.innerHTML = 'Email address';

    let input_email = document.createElement('input');
    input_email.classList.add('form-control');
    input_email.id = 'email';
    input_email.type = 'email';

    let div_password = document.createElement('div');
    div_password.classList.add('mb-3');


    let label_password = document.createElement('label');
    label_password.classList.add('form-label');
    label_password.setAttribute('for', 'password');
    label_password.innerHTML = 'Password';

    let input_password = document.createElement('input');
    input_password.classList.add('form-control');
    input_password.id = 'password';
    input_password.type = 'password';


    let login_submit = document.createElement('button');
    login_submit.type = 'submit';
    login_submit.innerHTML = 'Login';
    login_submit.classList.add('btn', 'btn-primary');
    login_submit.addEventListener('click', login);



    login_content.appendChild(login_title);
    login_content.appendChild(login_form);

    login_form.appendChild(div_email);
    div_email.appendChild(label_email);
    div_email.appendChild(input_email);

    login_form.appendChild(div_password);
    div_password.appendChild(label_password);
    div_password.appendChild(input_password);

    login_content.appendChild(login_submit);



    document.getElementById('content').innerHTML = "";
    document.getElementById('content').appendChild(login_content);

}

function addToDo() {

    let doList = document.createElement('div');
    doList.id = 'do_list';
    doList.classList.add('container', 'mt-5');

    let title = document.createElement('h5');
    title.classList.add('text-center');
    title.innerHTML = 'To Do List';

    let userName = document.createElement('p');
    userName.classList.add('text-center');
    userName.innerHTML = 'fuad';

    let doUl = document.createElement('ul');
    doUl.classList.add('list-group', 'list-group-flush', 'w-50', 'm-auto', 'p-3');
    doUl.id = 'list';

    doList.appendChild(title);
    doList.appendChild(userName);
    doList.appendChild(doUl);

    document.getElementById('user_section').appendChild(doList);

};

addToDo();


function getList() {

    let getmail = document.getElementById('user_email').innerHTML;
    let user = JSON.parse(localStorage.getItem(getmail));
    let list = document.getElementById('list');

    user.toDoList.forEach(element => {

        let do_title = element.title;
        let do_details = element.details;
        let do_date = element.date;


        let doLi = document.createElement('li');
        doLi.classList.add('list-group-item', 'list-group-item-secondary', 'fw-bold', 'm-1');


        let header = document.createElement('div');
        header.classList.add('d-flex');

        let do_name = document.createElement('h6');
        do_name.innerHTML = do_title;

        let done = document.createElement('button');
        done.type = 'button';
        done.classList.add('btn', 'btn-success', 'me-5');
        done.innerHTML = 'DONE';
        done.addEventListener('click', () => {
            console.log(user.toDoList);
            user.toDoList = user.toDoList.filter(function (obj) {
                return obj.title !== element.title;
            });
            localStorage.setItem(user.email, JSON.stringify(user));
            list.innerHTML = "";
            getList();
        })



        let details = document.createElement('div');
        details.classList.add('d-flex', 'justify-content-between', 'fw-light');


        let details_text = document.createElement('p');
        details_text.classList.add('mb-1');
        details_text.innerHTML = do_details;

        let details_date = document.createElement('small');
        details_date.innerHTML = do_date;

        doLi.appendChild(header);
        header.appendChild(done);
        header.appendChild(do_name);
        doLi.appendChild(details);
        details.appendChild(details_text);
        details.appendChild(details_date);

        list.appendChild(doLi);

    });

};

function add() {

    let get_title = document.getElementById('do_title').value;
    let get_details = document.getElementById('do_details').value;
    let get_date = document.getElementById('do_date').value;

    let list = document.getElementById('list');

    let duty = {

        title: get_title,
        details: get_details,
        date: get_date,

    };

    let getmail = document.getElementById('user_email').innerHTML;

    let user = JSON.parse(localStorage.getItem(getmail));

    if (!user.toDoList) {
        user.toDoList = [];
    };

    user.toDoList.push(duty);

    localStorage.setItem(getmail, JSON.stringify(user));
    list.innerHTML = "";
    getList();

};


function login() {

    let getEmail = document.getElementById('email').value;
    let getPassword = document.getElementById('password').value;

    let user = JSON.parse(localStorage.getItem(getEmail));

    if (!!user && user.email === getEmail && user.password === getPassword) {
        window.alert('Wellcome' + ' ' + user.username)
        document.getElementById('home').classList.add('d-none');
        document.getElementById('content').classList.add('d-none');
        document.getElementById('user_page').classList.remove('d-none');

        document.getElementById('user_name').innerText = "Welcome " + user.username;
        document.getElementById('user_email').innerHTML = user.email;

        getList();


    } else {
        window.alert('Password ore email is not valid!')
    };
};

document.getElementById('add_btn').addEventListener('click', add);
document.getElementById('out_btn').addEventListener('click', logout);