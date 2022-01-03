let apiProjectApi = new TempApi.ProjectApi();import TempApi from '../src/index';window.onload = () => {apiProjectApi.getAllproject((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements = document.getElementById("iiifs").querySelectorAll( "[dataitem='true']" );
  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
        const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'ProjectImage']");
        if(insideSubDataElement !== null){
          insideSubDataElement.src = data[data.length -i -1].ProjectImage;
        }
       } catch (e) { console.log(e) };try { 
        const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'ProjectTitle']");
        if(insideSubDataElement !== null){
          insideSubDataElement.textContent = data[data.length -i -1].ProjectTitle;
        }
       } catch (e) { console.log(e) };try { 
        const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'ProjectDuration']");
        if(insideSubDataElement !== null){
          insideSubDataElement.textContent = data[data.length -i -1].ProjectDuration;
        }
       } catch (e) { console.log(e) };
        
      }
    });
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});};window.onload = () => {let projectId = window.location.pathname.replace('/Home/','');apiProjectApi.getproject( projectId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = ProjectImage]').src = response.body.query.ProjectImage ;document.querySelector('[annotationname = ProjectTitle]').textContent = response.body.query.ProjectTitle ;document.querySelector('[annotationname = ProjectDuration]').textContent = response.body.query.ProjectDuration ;}});};document.getElementById('izny7').onclick = (event) => {
    event.preventDefault();
    { location.href= '/projectinfo';}};document.getElementById('i8l2e').onclick = (event) => {
    event.preventDefault();
    { location.href= '/projectinfo';}};