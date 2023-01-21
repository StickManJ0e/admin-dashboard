projectButtons = document.querySelectorAll(".project-buttons");


projectButtons.forEach((button) => {
    function createButton(link, altName) {
        let button = document.createElement("img");
        button.setAttribute('src', link);
        button.setAttribute('alt', altName)
        return button;
    };
    button.appendChild(createButton('icons/heart-outline.svg', 'favourite-icon'));
    button.appendChild(createButton('icons/comment-plus-outline.svg', 'comment-icon'));
    button.appendChild(createButton('icons/source-fork.svg', 'fork-icon'));
});