let apiWorkpackageApi = new TempApi.WorkpackageApi();import TempApi from '../src/index';let workpackage = new TempApi.Workpackage();document.getElementById('i8nj').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/homePage' ;}};document.getElementById('i6sjj').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/createProject' ;}};document.getElementById('ikvd4').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/createEmployee' ;}};document.getElementById('i8psq').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/viewEmployees' ;}};document.getElementById('i00ye').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/viewWorkpackages' ;}};document.getElementById('i1wf6').onclick = (event) => {
    event.preventDefault();
    workpackage['wName'] = document.querySelector("[annotationname = 'wName']").value;workpackage['wPMs'] = document.querySelector("[annotationname = 'wPMs']").value;workpackage['wRole'] = document.querySelector("[annotationname = 'wRole']").value;apiWorkpackageApi.createworkpackage( workpackage, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); {  location.href= '/viewWorkpackages/'+response.body.query._id+'' ;}}});};window.onload = () => {};