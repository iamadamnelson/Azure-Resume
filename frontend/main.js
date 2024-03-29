// visit counter code

window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

// API endpoint
const localFunctionApi = 'http://localhost:7071/api/ResumeCountFunc';
const liveFunctionApi = 'https://nelson-counter.azurewebsites.net/api/HttpTrigger?';

const getVisitCount = () => {
    let count = 10;
    fetch(liveFunctionApi).then(response => {
        return response.json()
    }).then(response => {
        console.log("Webpage called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count
    }).catch(function(error){
        console.log(error);
    });

    return count;
}