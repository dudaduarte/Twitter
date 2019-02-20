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
  let profilePic = document.createElement('spam');
  profilePic.className = 'profile-pic';
  let userDiv = document.createElement('div');
  userDiv.className = 'div-user';
  let userName = document.createTextNode('@crazycatlady:');
  let listDisplayFlex = document.getElementsByClassName('display-flex');
  userDiv.appendChild(userName);
  document.getElementById('feedId').appendChild(sectionUser);
  document.getElementsByClassName('display-flex')[listDisplayFlex.length-1].appendChild(profilePic);
  document.getElementsByClassName('display-flex')[listDisplayFlex.length-1].appendChild(userDiv);
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
  document.getElementById('remainingCharacters').innerHTML = '';
}

function changeColorCount() {
  if (0 < value <= 10) {
    document.getElementById('remainingCharacters').classList.remove('yellowCounter')
    document.getElementById('remainingCharacters').classList.add('redCounter');
  }
  else if (10 < value <= 20) {
    document.getElementById('remainingCharacters').classList.add('yellowCounter');
  }
}

function charCount() {
  let max = 140;
  let current = document.getElementById('insert-text').value.length;
  let value = max - current;
  if (value >= 0) {
    document.getElementById('remainingCharacters').innerHTML = value;
  } else {
    document.getElementById('buttonId').disabled = true;
    document.getElementById('remainingCharacters').innerHTML = value;
  }
}

