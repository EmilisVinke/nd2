
function toggleLight1() {
  let lightIcon = document.getElementById("lightIcon1");
  let isChecked = document.querySelector('.toggle-switch1 input').checked;
  if (isChecked) {
    lightIcon.classList.remove("fa-regular", "fa-lightbulb");
    lightIcon.classList.add("fa-solid", "fa-lightbulb");
  } else {
    lightIcon.classList.remove("fa-solid", "fa-lightbulb");
    lightIcon.classList.add("fa-regular", "fa-lightbulb");
  }
}
function toggleLight2() {
    let lightIcon = document.getElementById("lightIcon2");
    let isChecked = document.querySelector('.toggle-switch2 input').checked;
    if (isChecked) {
      lightIcon.classList.remove("fa-regular", "fa-lightbulb");
      lightIcon.classList.add("fa-solid", "fa-lightbulb");
    } else {
      lightIcon.classList.remove("fa-solid", "fa-lightbulb");
      lightIcon.classList.add("fa-regular", "fa-lightbulb");
    }
  }
  function toggleLight3() {
    let lightIcon = document.getElementById("lightIcon3");
    let isChecked = document.querySelector('.toggle-switch3 input').checked;
    if (isChecked) {
      lightIcon.classList.remove("fa-regular", "fa-lightbulb");
      lightIcon.classList.add("fa-solid", "fa-lightbulb");
    } else {
      lightIcon.classList.remove("fa-solid", "fa-lightbulb");
      lightIcon.classList.add("fa-regular", "fa-lightbulb");
    }
  }
  function toggleLight4() {
    let lightIcon = document.getElementById("lightIcon4");
    let isChecked = document.querySelector('.toggle-switch4 input').checked;
    if (isChecked) {
      lightIcon.classList.remove("fa-regular", "fa-lightbulb");
      lightIcon.classList.add("fa-solid", "fa-lightbulb");
    } else {
      lightIcon.classList.remove("fa-solid", "fa-lightbulb");
      lightIcon.classList.add("fa-regular", "fa-lightbulb");
    }
  }
  function toggleLight5() {
    let lightIcon = document.getElementById("lightIcon5");
    let isChecked = document.querySelector('.toggle-switch5 input').checked;
    if (isChecked) {
      lightIcon.classList.remove("fa-regular", "fa-lightbulb");
      lightIcon.classList.add("fa-solid", "fa-lightbulb");
    } else {
      lightIcon.classList.remove("fa-solid", "fa-lightbulb");
      lightIcon.classList.add("fa-regular", "fa-lightbulb");
    }
  }
  function toggleLight6() {
    let lightIcon = document.getElementById("lightIcon6");
    let isChecked = document.querySelector('.toggle-switch6 input').checked;
    if (isChecked) {
      lightIcon.classList.remove("fa-regular", "fa-lightbulb");
      lightIcon.classList.add("fa-solid", "fa-lightbulb");
    } else {
      lightIcon.classList.remove("fa-solid", "fa-lightbulb");
      lightIcon.classList.add("fa-regular", "fa-lightbulb");
    }
  }


    

    function rangeSliderValue1(value) {
        var slider = document.querySelector(".slider1");
      var temperature = Math.round((value / 100) * (30 - 16) + 16);
      var color = 'linear-gradient(90deg, #64f321 ' + value + '%, rgb(214, 214, 214) ' + value + '%)';
      slider.style.background = color;
      document.getElementById("rangeValue1").innerHTML = temperature + "°C";
    }
    function rangeSliderValue2(value) {
        var slider = document.querySelector(".slider2");
      var temperature = Math.round((value / 100) * (30 - 16) + 16);
      var color = 'linear-gradient(90deg, #64f321 ' + value + '%, rgb(214, 214, 214) ' + value + '%)';
      slider.style.background = color;
      document.getElementById("rangeValue2").innerHTML = temperature + "°C";
    }
    function rangeSliderValue3(value) {
        var slider = document.querySelector(".slider3");
      var temperature = Math.round((value / 100) * (30 - 16) + 16);
      var color = 'linear-gradient(90deg, #64f321 ' + value + '%, rgb(214, 214, 214) ' + value + '%)';
      slider.style.background = color;
      document.getElementById("rangeValue3").innerHTML = temperature + "°C";
    }
    function rangeSliderValue4(value) {
        var slider = document.querySelector(".slider4");
      var temperature = Math.round((value / 100) * (30 - 16) + 16);
      var color = 'linear-gradient(90deg, #64f321 ' + value + '%, rgb(214, 214, 214) ' + value + '%)';
      slider.style.background = color;
      document.getElementById("rangeValue4").innerHTML = temperature + "°C";
    }
    function rangeSliderValue5(value) {
        var slider = document.querySelector(".slider5");
      var temperature = Math.round((value / 100) * (30 - 16) + 16);
      var color = 'linear-gradient(90deg, #64f321 ' + value + '%, rgb(214, 214, 214) ' + value + '%)';
      slider.style.background = color;
      document.getElementById("rangeValue5").innerHTML = temperature + "°C";
    }
    function rangeSliderValue6(value) {
        var slider = document.querySelector(".slider6");
      var temperature = Math.round((value / 100) * (30 - 16) + 16);
      var color = 'linear-gradient(90deg, #64f321 ' + value + '%, rgb(214, 214, 214) ' + value + '%)';
      slider.style.background = color;
      document.getElementById("rangeValue6").innerHTML = temperature + "°C";
    }


 




function garazas() {
    const lockIcon = document.getElementById('lockIcon');
    const passwordInput = document.getElementById('slaptazodis');
    let password = passwordInput.value;
   

    // Check the current state of the lock
    if (lockIcon.classList.contains('fa-lock-open')) {
        if (password === '1234') {
            // Lock the icon
            lockIcon.classList.remove('fa-lock-open');
            lockIcon.classList.add('fa-lock');
            // alert('Garage locked!');
            popDown('dingsta');
            password.value = "";
            document.getElementById('Neteisinga').innerHTML=""
            passwordInput.value='';
        } else {
            // Incorrect password
            document.getElementById('Neteisinga').innerHTML="Neteisinga"
            // alert('Incorrect password. Garage remains unlocked.');
        }
    } else {
        if (password === '1234') {
            // Unlock the icon
            lockIcon.classList.remove('fa-lock');
            lockIcon.classList.add('fa-lock-open');
            // alert('Garage unlocked!');
            popDown('dingsta');
            document.getElementById('Neteisinga').innerHTML=""
            passwordInput.value='';
        } else {
            // Incorrect password
            document.getElementById('Neteisinga').innerHTML="Neteisinga"
            // alert('Incorrect password. Garage remains locked.');
        }
    }
}





function popUp(elementId) {
    let dingsta = document.getElementById(elementId);
    dingsta.style.display = 'flex'; 
  }

  function popDown(elementId) {
    let dingsta = document.getElementById(elementId);
    const passwordInput = document.getElementById('slaptazodis');

    dingsta.style.display = 'none'; 

    passwordInput.value='';
    document.getElementById('Neteisinga').innerHTML = "";
  }

















































  function durys() {
    let lockIcon = document.getElementById('lockIcon2');
    let passwordInput = document.getElementById('slaptazodis2');
    let password = passwordInput.value;
   

    // Check the current state of the lock
    if (lockIcon.classList.contains('fa-lock-open')) {
        if (password === '1234') {
            // Lock the icon
            lockIcon.classList.remove('fa-lock-open');
            lockIcon.classList.add('fa-lock');
            // alert('Garage locked!');
            popDown2('dingsta2');
            password.value = "";
            document.getElementById('Neteisinga2').innerHTML=""
            passwordInput.value='';
        } else {
            // Incorrect password
            // alert('Incorrect password. Garage remains unlocked.');
            document.getElementById('Neteisinga2').innerHTML = "Neteisinga";
        }
    } else {
        if (password === '1234') {
            // Unlock the icon
            lockIcon.classList.remove('fa-lock');
            lockIcon.classList.add('fa-lock-open');
            // alert('Garage unlocked!');
            popDown2('dingsta2');
            document.getElementById('Neteisinga2').innerHTML=""
            passwordInput.value='';
        } else {
            // Incorrect password
            // alert('Incorrect password. Garage remains locked.');
            document.getElementById('Neteisinga2').innerHTML = "Neteisinga";
        }
    }
}





function popUp2(elementId) {
    let dingsta = document.getElementById(elementId);
    dingsta.style.display = 'flex'; 
  }

  function popDown2(elementId, lockIconId) {
    let dingsta = document.getElementById(elementId);
    let passwordInput = document.getElementById('slaptazodis2');

    let lockIcon = document.getElementById(lockIconId);

    dingsta.style.display = 'none';

    passwordInput.value = '';
    document.getElementById('Neteisinga2').innerHTML = "";
}