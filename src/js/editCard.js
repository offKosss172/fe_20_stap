// Edit card

function editVisit(body, id) {
    fetch(`https://ajax.test-danit.com/api/v2/cards/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(body)
    })
        .then(()=> {
            closeModal();
            getVisits();
        })
}