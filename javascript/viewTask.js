let apiTaskApi = new TempApi.TaskApi();import TempApi from '../src/index';document.getElementById('if28b').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/' ;}};document.getElementById('ipazs').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/' ;}};document.getElementById('ip0lr').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/' ;}};document.getElementById('i1hvi').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/' ;}};document.getElementById('i8xqk').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/' ;}};document.getElementById('i66eh').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/' ;}};document.getElementById('isjdt').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/' ;}};document.getElementById('iwq7u').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/' ;}};document.getElementById('ihz33').onclick = (event) => {
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
            .contains(document.getElementById("ihz33")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '//' + transitionId;}};document.getElementById('iufax').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/' ;}};document.getElementById('izi4y').onclick = (event) => {
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
            .contains(document.getElementById("izi4y")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '//' + transitionId;}};document.getElementById('iga5c').onclick = (event) => {
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
            .contains(document.getElementById("iga5c")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '//' + transitionId;}};document.getElementById('infuw').onclick = (event) => {
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
            .contains(document.getElementById("infuw")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '//' + transitionId;}};document.getElementById('i2rmi').onclick = (event) => {
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
            .contains(document.getElementById("i2rmi")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '//' + transitionId;}};document.getElementById('i6jx7').onclick = (event) => {
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
            .contains(document.getElementById("i6jx7")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '//' + transitionId;}};window.onload = () => {let taskId = window.location.pathname.replace('/viewTask/','');apiTaskApi.gettask( taskId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); try { document.querySelector('[annotationname = tName]').textContent = response.body.query.tName; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = tStart]').textContent = response.body.query.tStart; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = tEnd]').textContent = response.body.query.tEnd; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = tPMs]').textContent = response.body.query.tPMs; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = tDescription]').textContent = response.body.query.tDescription; } catch (e) { console.log(e) };}});};