let apiWorkpackageApi = new TempApi.WorkpackageApi();import TempApi from '../src/index';document.getElementById('i8nj').onclick = (event) => {
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
    {  location.href= '/' ;}};document.getElementById('i78ar').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/' ;}};document.getElementById('i5tbr').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/' ;}};document.getElementById('i1wf6').onclick = (event) => {
    event.preventDefault();
    let workpackageId = window.location.pathname.replace('/updateWorkpackage/','');let workpackage = new TempApi.Workpackage();workpackage['wName'] = document.querySelector("[annotationname = 'wName']").value;workpackage['wPMs'] = document.querySelector("[annotationname = 'wPMs']").value;workpackage['wRole'] = document.querySelector("[annotationname = 'wRole']").value; let opts = {workpackage};apiWorkpackageApi.updateworkpackage( workpackageId, opts, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = wName]').value = response.body.query.wName ;document.querySelector('[annotationname = wPMs]').value = response.body.query.wPMs ;document.querySelector('[annotationname = wRole]').value = response.body.query.wRole ;{  location.href= '//'+response.body.query._id+'' ;}}});};window.onload = () => {let workpackageId = window.location.pathname.replace('/updateWorkpackage/','');apiWorkpackageApi.getworkpackage( workpackageId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); try { document.querySelector('[annotationname = wName]').value = response.body.query.wName; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = wPMs]').value = response.body.query.wPMs; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = wRole]').value = response.body.query.wRole; } catch (e) { console.log(e) };}});};