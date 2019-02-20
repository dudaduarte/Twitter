document.getElementById('buttonId').addEventListener('click', getText);

function getText() {
  let userText = document.getElementById('insert-text').value;
  document.getElementById('insert-text').value = '';
  document.getElementsByClassName('feed')[0].classList.remove('hide');
  postText(userText);
  disableButton();
  charCountClean()
}

function postText(text) {
  let paragraph = document.createElement('p');
  let tweet = document.createTextNode(text);
  paragraph.appendChild(tweet);
  document.getElementById("feedId").appendChild(paragraph);
  createProfileInfo();
}

function createProfileInfo() {
  let sectionUser = document.createElement('section');
  sectionUser.className = 'display-flex';
  let profilePic = document.createElement('div');
  profilePic.className = 'profile-pic';
  let userDiv = document.createElement('div');
  userDiv.className = 'div-user';
  let userName = document.createTextNode('@crazycatlady:');
  let listDisplayFlex = document.getElementsByClassName('display-flex');
  userDiv.appendChild(userName);
  document.getElementById('feedId').appendChild(sectionUser);
  document.getElementsByClassName('display-flex')[listDisplayFlex.length - 1].appendChild(profilePic);
  document.getElementsByClassName('display-flex')[listDisplayFlex.length - 1].appendChild(userDiv);
}

function enableButton() {
  if (document.getElementById('insert-text').value == '') {
    document.getElementById('buttonId').disabled = true;
  } else {
    document.getElementById('buttonId').disabled = false;
  }
}

function disableButton() {
  document.getElementById('buttonId').disabled = true;
}

function charCountClean() {
  document.getElementById('remainingChar').innerHTML = '';
}

function charCount() {
  enableButton();
  let max = 140;
  let current = document.getElementById('insert-text').value.length;
  let value = max - current;
  changeColorCount(value);
}

function changeColorCount(value) {
  let counter = document.getElementById('remainingChar');
  if (value >= 0) {
    counter.classList.remove('redCounter');
    if (value <= 20 && value > 10) {
      counter.classList.remove('orangeCounter')
      counter.classList.add('yellowCounter');
    } else if (value <= 10 && value >= 0) {
      counter.classList.remove('yellowCounter')
      counter.classList.add('orangeCounter');
    } else {
      counter.classList.remove('yellowCounter');
    }
    counter.innerHTML = value;
  } else {
    document.getElementById('buttonId').disabled = true;
    counter.classList.remove('orangeCounter');
    counter.classList.add('redCounter');
    counter.innerHTML = value;
  }
}

