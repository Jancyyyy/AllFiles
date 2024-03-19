const items = [
    {
        id: 1,
        name: "Crispy supreme",
        img:"xyz",
    },
    {
        id: 2,
        name: "surprise",
        img:"bc",
    }
]
var tag = document.createElement("p");
        var text = document.createTextNode("Tutorix is the best e-learning platform");
        tag.appendChild(text);
        var element = document.getElementById("new");
        element.appendChild(tag);