let apiProjectApi = new TempApi.ProjectApi();import TempApi from '../src/index';document.getElementById('ispb3').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/homePage' ;}};document.getElementById('i6xm8').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/createProject' ;}};document.getElementById('iqfcn').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/createTask' ;}};document.getElementById('idrsd').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/createWorkpackage' ;}};document.getElementById('ikbv9q').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/createEmployee' ;}};document.getElementById('idm74').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/viewTasks' ;}};document.getElementById('ikfv9f').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/viewEmployees' ;}};document.getElementById('i4cnb1').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/viewWorkpackages' ;}};document.getElementById('i6xxi').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("i6xxi")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/updateProject/' + transitionId;}};document.getElementById('i1dct5').onclick = (event) => {
    event.preventDefault();
    let projectId = window.location.pathname.replace('/viewProject/','');
      if(projectId === '/viewProject' || projectId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("i1dct5")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            projectId = value._id;
            parentId = key;
          }
        });
      }
    apiProjectApi.deleteproject( projectId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{  location.href= '/homePage' ;}}});};document.getElementById('iquq4i').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("iquq4i")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/updateWorkpackage/' + transitionId;}};document.getElementById('iw2x82').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("iw2x82")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/updateWorkpackage/' + transitionId;}};document.getElementById('ibg5na').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("ibg5na")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/updateWorkpackage/' + transitionId;}};document.getElementById('ixskws').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("ixskws")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/updateWorkpackage/' + transitionId;}};window.onload = () => {let projectId = window.location.pathname.replace('/viewProject/','');apiProjectApi.getproject( projectId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const map = new Map();try { document.querySelector('[annotationname = pTitle]').textContent = response.body.query.pTitle; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = pWebsite]').textContent = response.body.query.pWebsite; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = pGA]').textContent = response.body.query.pGA; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = pStart]').textContent = response.body.query.pStart; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = pEnd]').textContent = response.body.query.pEnd; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = pDuration]').textContent = response.body.query.pDuration; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = pAbstract]').textContent = response.body.query.pAbstract; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = pDescription]').textContent = response.body.query.pDescription; } catch (e) { console.log(e) };try { 
      if(response.body.query.pImage !== undefined){
        if(document.querySelector('[annotationname = pImage]').getAttribute('type') === 'file'){
          document.querySelector('[annotationname = pImage]').setAttribute('data-image-base64',response.body.query.pImage.data);
          let fileName = response.body.query.pImage.name;
          let file = new File([response.body.query.pImage.data], fileName,{lastModified:new Date().getTime()}, 'utf-8');
          let container = new DataTransfer();
          container.items.add(file);

          document.querySelector("[annotationname = pImage]").files = container.files;
        }
        else {
          document.querySelector('[annotationname = pImage]').src = response.body.query.pImage.data ;
        }
        document.querySelector('[annotationname = pImage]').name = response.body.query.pImage.name ;
      }
       } catch (e) { console.log(e) };try { 
        document.querySelector('[annotationname = pWorkpackage]').setAttribute('selected-element',response.body.query.pWorkpackage.undefined);
        const insideSubdocument = document.querySelector("[annotationname = 'pWorkpackage']");
        if (insideSubdocument !==null) {
          const tableData = response.body.query.pWorkpackage;
    const tableDataElement = insideSubdocument.querySelectorAll("[dataitem='true']");
    tableData.forEach((data,index) => {
      if(tableDataElement.length < index) {
        return;
      }
       try {
      const attributeSubdocumentElement = tableDataElement[
        index
      ].querySelector("[annotationname = 'wName']");
      if (attributeSubdocumentElement !== null) {
        attributeSubdocumentElement.textContent = tableData[tableData.length - index -1].wName;
      }
    }
    catch(e) {console.log(e);}; try {
      const attributeSubdocumentElement = tableDataElement[
        index
      ].querySelector("[annotationname = 'wRole']");
      if (attributeSubdocumentElement !== null) {
        attributeSubdocumentElement.textContent = tableData[tableData.length - index -1].wRole;
      }
    }
    catch(e) {console.log(e);}; try {
      const attributeSubdocumentElement = tableDataElement[
        index
      ].querySelector("[annotationname = 'wPMs']");
      if (attributeSubdocumentElement !== null) {
        attributeSubdocumentElement.textContent = tableData[tableData.length - index -1].wPMs;
      }
    }
    catch(e) {console.log(e);};
      
      map.set(
        tableDataElement[index].getAttribute("id"),
        tableData[tableData.length - index -1]
      );
    
    });
    
      [...tableDataElement].forEach((element, index) => {
        if (index >= tableData.length) {
          tableDataElement[index].style.display = "none";
        }
        else {
          tableDataElement[index].style.display = "";
        }
      });
    
    
        }
      if(response.body.query.pWorkpackage._id){
        map.set(
          document.querySelector(
            "[annotationname = 'pWorkpackage']"
          ).getAttribute("id"),
          response.body.query.pWorkpackage
        );
      }
     } catch (e) { console.log(e) };window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));}});};