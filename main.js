function getText() {
  let userText = document.getElementById('insert-text').value;
  document.getElementById('insert-text').value = '';
  document.getElementsByClassName('feed')[0].classList.remove('hide');
  postText(userText);
  disableButton();
  charCountClean()
}

function postText(text) {
  let paragraph = document.createElement("p");
  let tweet = document.createTextNode('User:\n' + text);
  paragraph.appendChild(tweet);
  document.getElementById("feedId").appendChild(paragraph);
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

