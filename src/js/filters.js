// Filter

document.querySelector('#btnFilter').addEventListener('click', filterVisits);

function filterVisits() {
    const visitStatus = document.querySelector('#status').value;
    const visitPriority = document.querySelector('#priority').value;
    const visitPatient = document.querySelector('#patient').value;
    let filterStatus, filterPriority, filterPatient;
        visits.innerHTML = '';
        fetch("https://ajax.test-danit.com/api/v2/cards", {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(response => {
            // Filter by status
                if(visitStatus == 'all') {
                    filterStatus = response;
                } else {
                    filterStatus = response.filter((visit) => visit.status == visitStatus);
                }

            // Filter by priority
                if(visitPriority == 'all') {
                    filterPriority = filterStatus;
                } else {
                    filterPriority = filterStatus.filter((visit) => visit.priority == visitPriority);
                }

            // Filter by patient
                if(visitPatient == '') {
                    filterPatient = filterPriority;
                } else {
                    filterPatient = filterPriority.filter((visit) => visit.visitor.includes(visitPatient));
                }

                if (filterPatient.length == 0) {
                    visits.innerHTML = '<h2>Немає візитів, що відповідають заданим критеріям</h2>';
                } else {
                    filterPatient.forEach(visit => renderVisit(visit, visit.doctor));
                }
            });
}