let apiProjectApi = new TempApi.ProjectApi();import TempApi from '../src/index';window.onload = () => {apiProjectApi.getAllproject((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements = document.getElementById("isl8k").querySelectorAll( "[dataitem='true']" );
  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
        const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'ProjectImage']");
        if(insideSubDataElement !== null){
          insideSubDataElement.src = data[data.length -i -1].ProjectImage;
        }
       } catch (e) { console.log(e) };try { 
        const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'ProjectDuration']");
        if(insideSubDataElement !== null){
          insideSubDataElement.textContent = data[data.length -i -1].ProjectDuration;
        }
       } catch (e) { console.log(e) };try { 
        const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'ProjectTitle']");
        if(insideSubDataElement !== null){
          insideSubDataElement.textContent = data[data.length -i -1].ProjectTitle;
        }
       } catch (e) { console.log(e) };try { 
        const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'ProjectAbstract']");
        if(insideSubDataElement !== null){
          insideSubDataElement.textContent = data[data.length -i -1].ProjectAbstract;
        }
       } catch (e) { console.log(e) };
        
      }
    });
    
    let numberOfPages = Math.ceil(data.length/subDataElements.length);
    let pagination = document.querySelector('[paginationlist="true"]');

    for(let i =1; i<pagination.childNodes.length-1;i){
      pagination.removeChild(pagination.childNodes[i]);
    }

    for(let i=0;i<numberOfPages;i++){

      let child = document.createElement('li');
      child.classList.add('pageItem');
      let insideChild = document.createElement('a');
      insideChild.classList.add('page-link');
      let textnode = document.createTextNode(numberOfPages-i);
      insideChild.appendChild(textnode);
      insideChild.setAttribute('href', '#!')
      insideChild.onclick= function(){
        onClickPaginationButton(numberOfPages-i);
      };
      child.appendChild(insideChild);
      pagination.insertBefore(child,pagination.children[1]);
    } 
    
    if(pagination.childNodes[0].getAttribute('paginationnewer') === 'true' && numberOfPages > 0){
      pagination.childNodes[0].onclick=function(){
        onClickPaginationButton(1);
      }
    }
    
    if(pagination.childNodes[numberOfPages+1].getAttribute('paginationolder') === 'true' && numberOfPages > 0){
      pagination.childNodes[numberOfPages+1].onclick=function(){
        onClickPaginationButton(numberOfPages);
      }
    }

  
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});};const onClickPaginationButton = (chunk) => {apiProjectApi.getAllproject((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements = document.getElementById("isl8k").querySelectorAll( "[dataitem='true']" );
[...subDataElements].forEach((element, index) => {
        if (index >= data.length - (chunk-1)*subDataElements.length) {
            subDataElements[index].style.display = 'none';
        }
        else{
            subDataElements[index].style.display = 'block';
        }
      });data.forEach((item, i) => {

        let revertIndex = data.length - i -1;

        if(data.length - chunk*subDataElements.length <= revertIndex && revertIndex < data.length - (chunk-1)*subDataElements.length){
            try { 
    const insideSubDataElement = subDataElements[i-(chunk-1 )*subDataElements.length].querySelector("[annotationname = 'ProjectImage']");
    if(insideSubDataElement !== null){
      insideSubDataElement.src = data[revertIndex].ProjectImage;
    }
   } catch (e) { console.log(e) };try { 
    const insideSubDataElement = subDataElements[i-(chunk-1 )*subDataElements.length].querySelector("[annotationname = 'ProjectDuration']");
    if(insideSubDataElement !== null){
      insideSubDataElement.textContent = data[revertIndex].ProjectDuration;
    }
   } catch (e) { console.log(e) };try { 
    const insideSubDataElement = subDataElements[i-(chunk-1 )*subDataElements.length].querySelector("[annotationname = 'ProjectTitle']");
    if(insideSubDataElement !== null){
      insideSubDataElement.textContent = data[revertIndex].ProjectTitle;
    }
   } catch (e) { console.log(e) };try { 
    const insideSubDataElement = subDataElements[i-(chunk-1 )*subDataElements.length].querySelector("[annotationname = 'ProjectAbstract']");
    if(insideSubDataElement !== null){
      insideSubDataElement.textContent = data[revertIndex].ProjectAbstract;
    }
   } catch (e) { console.log(e) };
        }
    })
    }});}