let apiProjectApi = new TempApi.ProjectApi();import TempApi from '../src/index';let project = new TempApi.Project();document.getElementById('i0wry').onclick = (event) => {
    event.preventDefault();
    project['ProjectTitle'] = document.querySelector("[annotationname = 'ProjectTitle']").value;project['ProjectDuration'] = document.querySelector("[annotationname = 'ProjectDuration']").value;project['ProjectStartDate'] = document.querySelector("[annotationname = 'ProjectStartDate']").value;project['ProjectEndDate'] = document.querySelector("[annotationname = 'ProjectEndDate']").value;project['ProjectAbstract'] = document.querySelector("[annotationname = 'ProjectAbstract']").value;apiProjectApi.createproject( project, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); }});};