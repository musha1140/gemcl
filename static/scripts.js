function addGemSlot() {
    const gemContainer = document.getElementById('gemContainer');

    if (gemContainer.childElementCount < 13) {
        let newGemSelection = document.createElement('div');
        newGemSelection.className = 'gemSelection';
        newGemSelection.innerHTML = `
            <select class="gemType">
                <option value="0">Select Gem</option>
                <option value="topaz">Topaz</option>
                <option value="citrine">Citrine</option>
                <option value="sapphire">Sapphire</option>
                <option value="aquamarine">Aquamarine</option>
                <option value="tourmaline">Tourmaline</option>
                <option value="ruby">Ruby</option>
            </select>
            <select class="gem</select>
        `;
        gemContainer.appendChild(newGemSelection);
    } else {
        alert('Maximum of 13 gem slots reached.');
    }
}

function removeGemSlot() {
    const gemContainer = document.getElementById('gemContainer');

    if (gemContainer.childElementCount > 1) {
        gemContainer.removeChild(gemContainer.lastElementChild);
    } else {
        alert('At least 1 gem slot is required.');
    }
}

function calculateGems() {
    const gemSelections = document.getElementsByClassName('gemSelection');
    const result = document.getElementById('result');
    const selections = [];

    for (let gemSelection of gemSelections) {
        let gemType = gemSelection.getElementsByClassName('gemType')[0].value;
        let gemRank = parseInt(gemSelection.getElementsByClassName('gemRank')[0].value);

        if (gemType === '0' || isNaN(gemRank)) {
            result.textContent = 'Please select gem type and rank for all gem slots.';
            return;
        }

        selections.push({gemType, gemRank});
    }

    fetch('/calculate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(selections)
    })
    .then(response => response.json())
    .then(data => {
        result.textContent = JSON.stringify(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}