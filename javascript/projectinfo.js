let apiProjectApi = new TempApi.ProjectApi();import TempApi from '../src/index';document.getElementById('ivnvi').onclick = (event) => {
    event.preventDefault();
    { location.href= '/Home';}};document.getElementById('imytn').onclick = (event) => {
    event.preventDefault();
    { location.href= '/Home';}};window.onload = () => {let projectId = window.location.pathname.replace('/projectinfo/','');apiProjectApi.getproject( projectId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = ProjectImage]').src = response.body.query.ProjectImage ;document.querySelector('[annotationname = ProjectTitle]').textContent = response.body.query.ProjectTitle ;document.querySelector('[annotationname = ProjectDuration]').textContent = response.body.query.ProjectDuration ;document.querySelector('[annotationname = GrantAgreement]').textContent = response.body.query.GrantAgreement ;document.querySelector('[annotationname = ProjectStartDate]').textContent = response.body.query.ProjectStartDate ;document.querySelector('[annotationname = ProjectEndDate]').textContent = response.body.query.ProjectEndDate ;document.querySelector('[annotationname = ProjectAbstract]').textContent = response.body.query.ProjectAbstract ;}});};window.onload = () => {let projectId = window.location.pathname.replace('/projectinfo/','');apiProjectApi.getproject( projectId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = ProjectImage]').src = response.body.query.ProjectImage ;document.querySelector('[annotationname = ProjectTitle]').textContent = response.body.query.ProjectTitle ;document.querySelector('[annotationname = ProjectDuration]').textContent = response.body.query.ProjectDuration ;document.querySelector('[annotationname = GrantAgreement]').textContent = response.body.query.GrantAgreement ;document.querySelector('[annotationname = ProjectStartDate]').textContent = response.body.query.ProjectStartDate ;document.querySelector('[annotationname = ProjectEndDate]').textContent = response.body.query.ProjectEndDate ;document.querySelector('[annotationname = ProjectAbstract]').textContent = response.body.query.ProjectAbstract ;}});};window.onload = () => {let projectId = window.location.pathname.replace('/projectinfo/','');apiProjectApi.getproject( projectId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = ProjectImage]').src = response.body.query.ProjectImage ;document.querySelector('[annotationname = ProjectTitle]').textContent = response.body.query.ProjectTitle ;document.querySelector('[annotationname = ProjectDuration]').textContent = response.body.query.ProjectDuration ;document.querySelector('[annotationname = GrantAgreement]').textContent = response.body.query.GrantAgreement ;document.querySelector('[annotationname = ProjectStartDate]').textContent = response.body.query.ProjectStartDate ;document.querySelector('[annotationname = ProjectEndDate]').textContent = response.body.query.ProjectEndDate ;document.querySelector('[annotationname = ProjectAbstract]').textContent = response.body.query.ProjectAbstract ;}});};window.onload = () => {let projectId = window.location.pathname.replace('/projectinfo/','');apiProjectApi.getproject( projectId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = ProjectImage]').src = response.body.query.ProjectImage ;document.querySelector('[annotationname = ProjectTitle]').textContent = response.body.query.ProjectTitle ;document.querySelector('[annotationname = ProjectDuration]').textContent = response.body.query.ProjectDuration ;document.querySelector('[annotationname = GrantAgreement]').textContent = response.body.query.GrantAgreement ;document.querySelector('[annotationname = ProjectStartDate]').textContent = response.body.query.ProjectStartDate ;document.querySelector('[annotationname = ProjectEndDate]').textContent = response.body.query.ProjectEndDate ;document.querySelector('[annotationname = ProjectAbstract]').textContent = response.body.query.ProjectAbstract ;}});};