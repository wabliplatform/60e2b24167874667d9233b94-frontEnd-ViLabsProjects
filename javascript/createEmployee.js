let apiProjectApi = new TempApi.ProjectApi();import TempApi from '../src/index';let apiEmployeeApi = new TempApi.EmployeeApi();let employee = new TempApi.Employee();document.getElementById('i8nj').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/' ;}};document.getElementById('i6sjj').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/' ;}};document.getElementById('i4ual').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/' ;}};document.getElementById('iq041').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/' ;}};document.getElementById('ikvd4').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/' ;}};document.getElementById('i63k3').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/' ;}};document.getElementById('inokz').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/' ;}};document.getElementById('izpik').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/' ;}};
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
document.addEventListener('aligneProject', function(e) {
  const advanceSelect = document.getElementById('i7ttv');
  const selectedElement = advanceSelect.getAttribute('selected-element');
  if (!selectedElement) return;
  [...advanceSelect.querySelectorAll("[annotationname]")].forEach(
    optionElement => {
      if (optionElement.value === selectedElement)
        optionElement.setAttribute("selected", true);
    }
  );
});const arrayi7iaf = [];
document.getElementById("i5zsp").onclick = event => {
  event.preventDefault();
  const select = document.getElementById("i1k2c")
  arrayi7iaf.push({
      value: select.value,
      liValue: select.selectedOptions[0].textContent
  });
  select.value = "";
  select.selectedIndex = 0;
    let e=``;
   for (let y=0; y<arrayi7iaf.length; y++)
   {
     e += `<li arrayvalue='${arrayi7iaf[y].value}'>${arrayi7iaf[y].liValue}</li>`;
   }
   document.getElementById("itv8a").innerHTML = e;
};document.addEventListener('aligneProject', function(e) {
  const advanceSelect = document.getElementById('i1k2c');
  const selectedElement = advanceSelect.getAttribute('selected-element');
  if (!selectedElement) return;
  [...advanceSelect.querySelectorAll("[annotationname]")].forEach(
    optionElement => {
      if (optionElement.value === selectedElement)
        optionElement.setAttribute("selected", true);
    }
  );
});document.getElementById('i1wf6').onclick = (event) => {
    event.preventDefault();
    document.addEventListener('aligneCreate', function(e) {
  const advanceSelect = document.getElementById('i1wf6');
  const selectedElement = advanceSelect.getAttribute('selected-element');
  if (!selectedElement) return;
  [...advanceSelect.querySelectorAll("[annotationname]")].forEach(
    optionElement => {
      if (optionElement.value === selectedElement)
        optionElement.setAttribute("selected", true);
    }
  );
});};window.onload = () => {document.addEventListener('alignpGetAll', function(e) {
  const advanceSelect = document.getElementById('i3ffa');
  const selectedElement = advanceSelect.getAttribute('selected-element');
  if (!selectedElement) return;
  [...advanceSelect.querySelectorAll("[annotationname]")].forEach(
    optionElement => {
      if (optionElement.value === selectedElement)
        optionElement.setAttribute("selected", true);
    }
  );
});};