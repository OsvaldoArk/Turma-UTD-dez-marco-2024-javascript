const resultado = async (spell) => {

    const dado = await fetch(`https://www.dnd5eapi.co/api/spells/${spell}`);

    const resposta = await dado.json();

    console.log(resposta);
}

resultado('zephyr-strike');