/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready

let loginForm = document.getElementById('loginForm');
let registerForm = document.getElementById('registerForm');

let loginButton = document.getElementById('loginButton');
let registerButton = document.getElementById('registerButton');

let users = [];

function login() {
    let username = document.getElementById('usuari').value;
    let password = document.getElementById('contrasenya').value;
    let user = checkUser(username, password);
    console.log(user);
    console.log(username);
    console.log(password);
    console.log(users);
    if (user !== undefined) {
        alert('Login exitós');
    } else {
        alert('Login incorrecte');
    }
}

function register() {
    let username = document.getElementById('reg_usuari').value;
    let password = document.getElementById('reg_contrasenya_1').value;
    let passwordConfirm = document.getElementById('reg_contrasenya_2').value;
    let email = document.getElementById('reg_email').value;
    if (password !== passwordConfirm) {
        alert('Error en les contrasenyes');
    } else if (checkDuplicateUser(username,email)) {
        alert('El nom o l\'email ja existeix a la base de dades');
    } else {
        addUser(username, password, email);
        alert('Nou usuari registrat correctament');
        console.log(users);
    }
    username = '';
    password = '';
    passwordConfirm = '';
    email = '';
}

function checkUser(username, password) {
    return users.find(user => user.username === username && user.password === password);
}

function checkDuplicateUser(username,email) {
    return users.some(user => user.username === username || user.email === email);
}

function addUser(username, password, email) {
    users.push({ username, password, email });
}

function initUsers() {
    users.push({ username: 'pepe', password: 'pepe123', email: 'pepe@example.com' });
    users.push({ username: 'lola', password: 'lola123', email: 'lola@example.com' });
    users.push({ username: 'ieti', password: 'cordova', email: 'ieti@example.com' });
}

function main() {
    initUsers();
    loginButton.addEventListener('click', login);
    registerButton.addEventListener('click', register);
}

document.addEventListener('DOMContentLoaded', main);