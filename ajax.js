document.addEventListener("DOMContentLoaded", function() {

  const requestButton = document.getElementById('rootRequest');
  const pingpong = document.getElementById('pingpongRequest');
  const step3result = document.getElementById('step3result');
  const countRequest = document.getElementById('countRequest');
  const step7result = document.getElementById('step7result');
  const timeRequest = document.getElementById('timeRequest');
  const step8result = document.getElementById('step8result');
  let timeField = document.getElementById('timeField');
  const carRequest = document.getElementById('carRequest');
  const step9result = document.getElementById('step9result');

  requestButton.addEventListener('click', function() {
    axios({
      url: 'http://intro-ajax-api.herokuapp.com/',
      method: 'GET',
      responseType: 'text'
    });
  });

  pingpong.addEventListener('click', function() {
    axios({
      url: 'http://intro-ajax-api.herokuapp.com/pong',
      method: 'GET',
      responseType: 'text'
    }).then(function (response) {
      console.log(response.data);
      step3result.innerHTML = response.data;
    }).catch(function (error) {
      console.log(error);
      step3result.innerHTML = error.response.data ". We'll try harder next time!";
    }).then(function (response) {
      console.log('Hey! The request finished. idk if it was successful or not tbh, but idc.');
    });
  });

  countRequest.addEventListener('click', function() {
    axios({
      url: 'http://intro-ajax-api.herokuapp.com/count',
      method: 'GET',
      responseType: 'text'
    }).then(function (response) {
      console.log(response.data);
      step7result.innerHTML = response.data;
    }).catch(function (error) {
      console.log(error);
      step7result.innerHTML = error.response.data + ". We'll try harder next time!"
    }).then(function (reponse) {
      console.log("Request cycle complete.");
    });
  });

  timeRequest.addEventListener('click', function() {
    let TZvalue = timeField.value;
    axios({
      url: `http://intro-ajax-api.herokuapp.com/time?timezone=${TZvalue}`,
      method: 'GET',
      responseType: 'text'
    }).then(function (response) {
      console.log(response.data);
      step8result.innerHTML = response.data;
    }).catch(function (error) {
      console.log(error);
      step8result.innerHTML = error.response.data + ". We'll try harder next time!"
    }).then(function (response) {
      console.log('Request cycle complete.')
    });
  });

  carRequest.addEventListener('click', function() {
    axios({
      url: 'http://intro-ajax-api.herokuapp.com/a_car',
      method: 'GET',
      responseType: 'html'
    }).then(function (response) {
      console.log(response.data);
      step9result.innerHTML = response.data;
    }).catch(function (error) {
      console.log(error);
      step9result.innerHTML = error.response.data + ". We'll try harder next time!"
    }).then(function (response) {
      console.log('Request cycle complete.');
      step9result.innerText = response.data;
    });
  });

});
