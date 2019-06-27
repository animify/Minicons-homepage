minicons.icons.forEach(icon => {
    const aliases = icon.aliases.length > 0 ? icon.aliases.join(' ') : null;
    const template = `
        <div class="col xs-12 m-3">
            <div class="wrap">
                <div class="desc">
                    <p>${icon.name}</p>
                    <small>Aliases: N/A</small>
                </div>
                <div class="icon">
                    <i data-minicon="${icon.name}"/>
                </div>
            </div>
        </div>`;

    const templateElement = $(template);
    $('#icons').append(templateElement);

    if (aliases !== null) {
        templateElement.find('.desc small').html(`Aliases: <strong>${aliases}</strong>`);
    }
});

$('.total').text(minicons.icons.length - 1);

minicons.setOptions({
    observe: true,
    config: {
        name: 'theme_config',
        props: {
            width: 24,
            height: 24,
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: '#000',
            'stroke-width': 2,
            'stroke-linejoin': 'round',
            'stroke-linecap': 'round',
        },
    },
});

minicons.swap();
