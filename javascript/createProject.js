let apiWorkpackageApi = new TempApi.WorkpackageApi();import TempApi from '../src/index';let apiProjectApi = new TempApi.ProjectApi();let project = new TempApi.Project();document.getElementById('icaj').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/homePage' ;}};document.getElementById('ix1q7').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/createTask' ;}};document.getElementById('i2lyj').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/createWorkpackage' ;}};document.getElementById('i4jic').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/createEmployee' ;}};document.getElementById('ie6a5').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/viewTasks' ;}};document.getElementById('i35mv3').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/viewEmployees' ;}};document.getElementById('isu5yw').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/viewWorkpackages' ;}};
 const uploadImage = async (event) => {
        const file = event.target.files[0];
        const base64 = await convertBase64(file);
        return base64;
      };const convertBase64 = (file) => {
          return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
          });
        };
document.getElementById('formFile').addEventListener("change", async(e) => {
            let imageBase64 = await uploadImage(e);
        document.getElementById('formFile').setAttribute('data-image-base64' ,imageBase64);
        document.getElementById('formFile').setAttribute('name',e.target.files[0].name)
        });
$(
      function () { $("#datepicker").datepicker({format: 'dd-mm-yyyy'}); }
    );$(
      function () { $("#datepicker-2").datepicker({format: 'dd-mm-yyyy'}); }
    );document.addEventListener('alignpWorkpackage', function(e) {
  const advanceSelect = document.getElementById('igaq4');
  const selectedElement = advanceSelect.getAttribute('selected-element');
  if (!selectedElement) return;
  [...advanceSelect.querySelectorAll("[annotationname]")].forEach(
    optionElement => {
      if (optionElement.value === selectedElement)
        optionElement.setAttribute("selected", true);
    }
  );
});const arrayib5cm3 = [];
document.getElementById("iyjqci").onclick = event => {
  event.preventDefault();
  const select = document.getElementById("im1p3y")
  arrayib5cm3.push({
      value: select.value,
      liValue: select.selectedOptions[0].textContent
  });
  select.value = "";
  select.selectedIndex = 0;
    let e=``;
   for (let y=0; y<arrayib5cm3.length; y++)
   {
     e += `<li arrayvalue='${arrayib5cm3[y].value}'>${arrayib5cm3[y].liValue}</li>`;
   }
   document.getElementById("ixe5wc").innerHTML = e;
};document.addEventListener('alignpWorkpackage', function(e) {
  const advanceSelect = document.getElementById('im1p3y');
  const selectedElement = advanceSelect.getAttribute('selected-element');
  if (!selectedElement) return;
  [...advanceSelect.querySelectorAll("[annotationname]")].forEach(
    optionElement => {
      if (optionElement.value === selectedElement)
        optionElement.setAttribute("selected", true);
    }
  );
});document.getElementById('i7w1n').onclick = (event) => {
    event.preventDefault();
    project['pImage'] = {
        data: document.querySelector("[annotationname = 'pImage']").getAttribute("data-image-base64") !== null ? document.querySelector("[annotationname = 'pImage']").getAttribute("data-image-base64") : document.querySelector("[annotationname = 'pImage']").src,
        name: document.querySelector("[annotationname = 'pImage']").getAttribute("name")
      };
      project['pTitle'] = document.querySelector("[annotationname = 'pTitle']").value;project['pStart'] = document.querySelector("[annotationname = 'pStart']").value;project['pWebsite'] = document.querySelector("[annotationname = 'pWebsite']").value;project['pEnd'] = document.querySelector("[annotationname = 'pEnd']").value;project['pDuration'] = document.querySelector("[annotationname = 'pDuration']").value;project['pGA'] = document.querySelector("[annotationname = 'pGA']").value;project['pAbstract'] = document.querySelector("[annotationname = 'pAbstract']").value;project['pDescription'] = document.querySelector("[annotationname = 'pDescription']").value;project["pWorkpackage"] = [...document.querySelector("[annotationname = 'pWorkpackage']").querySelectorAll("[arrayvalue]")].map(li=> li.getAttribute('arrayvalue'));apiProjectApi.createproject( project, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); {  location.href= '/homePage/'+response.body.query._id+'' ;}}});};window.onload = () => {document.addEventListener('alignwGetAll', function(e) {
  const advanceSelect = document.getElementById('i53io');
  const selectedElement = advanceSelect.getAttribute('selected-element');
  if (!selectedElement) return;
  [...advanceSelect.querySelectorAll("[annotationname]")].forEach(
    optionElement => {
      if (optionElement.value === selectedElement)
        optionElement.setAttribute("selected", true);
    }
  );
});document.addEventListener('alignwGetAll', function(e) {
  const advanceSelect = document.getElementById('if2wp');
  const selectedElement = advanceSelect.getAttribute('selected-element');
  if (!selectedElement) return;
  [...advanceSelect.querySelectorAll("[annotationname]")].forEach(
    optionElement => {
      if (optionElement.value === selectedElement)
        optionElement.setAttribute("selected", true);
    }
  );
});};