minicons.icons.forEach(icon => {
    const iconContainer = document.createElement('div');
    const iconName = document.createElement('p');
    const iconElement = document.createElement('i');
    const testIcons = document.getElementById('icons');
    iconName.innerText = icon.name;
    iconContainer.classList.add('col');
    iconContainer.classList.add('xs-3');
    iconElement.setAttribute('data-minicon', icon.name);
    iconContainer.appendChild(iconElement);
    iconContainer.appendChild(iconName);
    testIcons.appendChild(iconContainer);
});
minicons.setOptions({
    "observe" : true,
    "config" : {
        "name" : "theme_config",
        "props" : {
            "stroke" : "#000"
        }
    }
});
minicons.swap();
