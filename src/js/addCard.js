// Add card

function createVisitCardiologist (doctor, pressure, bmi, diseases, age, goal, description, priority, visitor, dateTime, status) {
  fetch("https://ajax.test-danit.com/api/v2/cards", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
    doctor: doctor,
    pressure: pressure,
    bmi: bmi,
    diseases: diseases,
    age: age,
    goal: goal,
    description: description,
    priority: priority,
    visitor: visitor,
    dateTime: dateTime,
    status: status
  })
})
  .then(response => response.json())
  .then(response => {
    console.log(response);
    const visitCard1 = new VisitCardCardiologist(response);
    visitCard1.render();
  }
  );
}

function createVisitDentist (doctor, lastVisit, goal, description, priority, visitor, dateTime, status) {
  fetch("https://ajax.test-danit.com/api/v2/cards", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
    doctor: doctor,
    lastVisit: lastVisit,
    goal: goal,
    description: description,
    priority: priority,
    visitor: visitor,
    dateTime: dateTime,
    status: status
  })
})
  .then(response => response.json())
  .then(response => {
    console.log(response);
    const visitCard1 = new VisitCardDentist(response);
    visitCard1.render();
  }
  );
}

function createVisitTherapist (doctor, age, goal, description, priority, visitor, dateTime, status) {
  fetch("https://ajax.test-danit.com/api/v2/cards", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
    doctor: doctor,
    age: age,
    goal: goal,
    description: description,
    priority: priority,
    visitor: visitor,
    dateTime: dateTime,
    status: status
  })
})
  .then(response => response.json())
  .then(response => {
    console.log(response);
    const visitCard1 = new VisitCardTherapist(response);
    visitCard1.render();
  }
  );
}