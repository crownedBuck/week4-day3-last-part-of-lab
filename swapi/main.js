const getResidentsButton = document.querySelector("#resident");
const resNamePlaceInsert = document.querySelector("#residentNames")
const baseURL = 'https://swapi.dev/api/planets/2'

// const axios = require('axios')

const alderannCallback = ({ data: planet}) => planet
const getAlderaan = () => axios.get(`${baseURL}`).then(alderannCallback)
const appendResident = () => ""

const buttonClicked = () => {
    // console.log("the button was clicked")

    getAlderaan().then(alderaanInformation => {
        // console.log(alderaanInformation.residents)

        alderaanInformation.residents.forEach(personURL => {
            let residentsOfAlderaan = document.createElement('h2')
            const getResidentsOfAlderaan = () => axios.get(`${personURL}`)
            getResidentsOfAlderaan().then(personInformation => {
                residentsOfAlderaan.textContent = personInformation.data.name

                // console.log(personInformation.data.name)
                // console.log(personInformation)
            })

            resNamePlaceInsert.appendChild(residentsOfAlderaan)
        })

    })

}

getResidentsButton.addEventListener('click', buttonClicked)