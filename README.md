(Estrutura do HTML)
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Track List</title>
    <link rel="stylesheet" href="main.css">
    
</head>
<body class="light-theme">
    <h1>Track List </h1>
    <p id="msg"> Current tasks:</p>
    <ul>
        <li class="list">Add visual style</li>
        <li class="list">Add light and Dark themes</li>
        <li>Enable switching the theme</li>
    </ul>
    <div>
        <button class="bld">Escuro</button>
    </div>
    <script src="light-dark.js"></script>
    <noscript>Você precisa habilitar JavaScript para ver este site completo </noscript>
</body>
</html>

(JAVASCRIPT)
'use strict';

const switcher = document.querySelector('.bld');

switcher.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme')

    var className = documente.body.className; 
    if (className == 'light-theme') {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }
});

(CSS)
:root { /*Declarando uma variável aqui */
    --green: #00FF00;
    --white: #ffffff;
    --black: #000000;
}

*{
    color: var(--fontColor);
    font-family: Arial, Helvetica, sans-serif;
}

body {
    background: var(--bg);
}

h1{
    font-size: 40px;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
}

ul {
    font-family: Arial, Helvetica, sans-serif;
    display: grid;
    justify-content: center;
}

li {
    list-style: circle;
}

.list {
    list-style: square;
}

#msg {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    margin-top: 5px;
}

.light-theme {
    --bg:var(--white);
    --fontColor: var(--black);
    --bldbg: var(--black);
    --bldFontColor: var(--white);
}

.dark-theme {
    --bg: var(--black); /*O var indica uma variável, como foi definido no :root*/
    --fontColor: var(--white);
    --bldbg: var(--white)
    --bldFontColor: var(--black)
}

.bld {
    position: absolute;
    top:20px;
    left: 250px;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: none;
    color: var(--bldFontColor);
    background-color: var(--bldbg);
}

.bld:focus {
    outline-style: none;
}

