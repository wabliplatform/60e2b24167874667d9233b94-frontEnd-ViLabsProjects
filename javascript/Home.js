let apiProjectApi = new TempApi.ProjectApi();import TempApi from '../src/index';window.onload = () => {apiProjectApi.getAllproject((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements = document.getElementById("iiifs").querySelectorAll( "[dataitem='true']" );
  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
        const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'pimage']");
        if(insideSubDataElement !== null){
          insideSubDataElement.src = data[data.length -i -1].pimage;
        }
        else if(subDataElements[i].getAttribute('annotationname') === 'pimage'){
          subDataElements[i].src = data[data.length -i -1].pimage;
        }
       } catch (e) { console.log(e) };try { 
        const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'ProjectTitle']");
        if(insideSubDataElement !== null){
          insideSubDataElement.textContent = data[data.length -i -1].ProjectTitle;
        }
        else if(subDataElements[i].getAttribute('annotationname') === 'ProjectTitle'){
          subDataElements[i].textContent = data[data.length -i -1].ProjectTitle;
        }
       } catch (e) { console.log(e) };try { 
        const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'ProjectStartDate']");
        if(insideSubDataElement !== null){
          insideSubDataElement.textContent = data[data.length -i -1].ProjectStartDate;
        }
        else if(subDataElements[i].getAttribute('annotationname') === 'ProjectStartDate'){
          subDataElements[i].textContent = data[data.length -i -1].ProjectStartDate;
        }
       } catch (e) { console.log(e) };
        subDataElements[i].addEventListener('click',() => {{ location.href= '/projectinfo/'+data[data.length -i -1]._id+'';}} )
      }
    });
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});};document.getElementById('i8l2e').onclick = (event) => {
    event.preventDefault();
    { location.href= '/Page5';}};document.getElementById('itnwx').onclick = (event) => {
    event.preventDefault();
    { location.href= '/Page5';}};document.getElementById('izhft').onclick = (event) => {
    event.preventDefault();
    { location.href= '/Page5';}};