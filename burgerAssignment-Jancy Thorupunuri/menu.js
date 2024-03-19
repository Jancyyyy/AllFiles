const items = [
    {
        id: 1,
        name: "Crispy supreme",
        img:"nhu",
    },
    {
        id: 2,
        name: "surprise",
        img:"ch",
    }
]
var tag = document.createElement("p");
       var text = document.createTextNode("Burger O'clock");
        tag.appendChild(text);
        var element = document.getElementById("new");
        element.appendChild(tag);