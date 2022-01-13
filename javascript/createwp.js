let apiProjectApi = new TempApi.ProjectApi();import TempApi from '../src/index';window.onload = () => {apiProjectApi.getAllproject((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements = document.getElementById("dropdownMenuButton1").querySelectorAll( "[dataitem='true']" );
  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        console.log('There are no inside data elements');
        
      }
    });
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});};document.getElementById('ihrjq').onclick = (event) => {
    event.preventDefault();
    let projectId = window.location.pathname.replace('/createwp/','');let project = new TempApi.Project();project['ProjectTitle'] = document.querySelector("[annotationname = 'ProjectTitle']").textContent;project['wpproject'] = document.querySelector("[annotationname = 'wpproject']").value; let opts = {project};apiProjectApi.updateproject( projectId, opts, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = ProjectTitle]').textContent = response.body.query.ProjectTitle ;document.querySelector('[annotationname = wpproject]').value = response.body.query.wpproject ;}});};