
fetch("https://www.dnd5eapi.co/api/spells/acid-arrow")
                .then(response => response.json())
                .then(dado => console.log(dado));
