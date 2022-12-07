
fetch('http://localhost:3000/student/all').then((response) => {
    return response.json();
}).then(students => {
    let html = '<option value="">Choissisez un étudiant</option>'
    students.forEach(student => {
        html+= `<option value=${student.id}>${student.nom} ${student.prenom}</option>`
    });
    document.getElementById('options').innerHTML=html;
})


/* Pour générer l'attestation */
let convention = null;
document.getElementById('options').addEventListener('change', () => {
    const id = document.getElementById('options').value;
    fetch(`http://localhost:3000/convention/${id}`).then(response => {
        return response.json();
    }).then(data => {
        convention = data[0];
        document.getElementById('convention').value = convention.id;
        fetch(`http://localhost:3000/student/${id}`).then(response => {
            return response.json();
        }).then(data => {
            document.getElementById('attestation').value =
                `Bonjour ${data[0].nom} ${data[0].prenom},
Vous avez suivi ${convention.nbHeure} heures de formation chez FormationPlus.
Veuillez nous retourner ce mail avec la pièce jointe signée.
Cordialement,
FormationPlus`;
        }).catch(err => {
            // Do something for an error here
        });
    }).catch(err => {
        // Do something for an error here
    });
});