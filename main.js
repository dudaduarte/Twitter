document.getElementById('buttonId').addEventListener('click', getText);

 document.addEventListener('input', startAutoResize);

 function startAutoResize(event) {
   if (event.target.tagName.toLowerCase() !== 'textarea') {
     return;
   }
   autoResize(document.getElementById('insert-text'));
 }

function getText(event) {
  event.preventDefault();
  let userText = document.getElementById('insert-text').value.trim();
  document.getElementById('insert-text').value = '';
  document.getElementsByClassName('main-sections')[1].classList.remove('hide');
  postText(userText);
  disableButton();
  charCountClean()
}

function postText(text) {
  let paragraph = document.createElement('div');
  paragraph.className = 'tweetParagraph';
  let tweet = document.createTextNode(text);
  let hr = document.createElement('hr');
  paragraph.appendChild(tweet);
  document.getElementById('feedId').appendChild(hr);
  document.getElementById("feedId").appendChild(paragraph);
  createProfileInfo();
  createHourText();
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

function createHourText() {
  let hourMinutePost = document.createElement('div');
  let hourMinuteText = document.createTextNode(hour());
  hourMinutePost.className = 'hourMinute';
  let tweetParagraph = document.getElementsByClassName('tweetParagraph');
  hourMinutePost.appendChild(hourMinuteText);
  tweetParagraph[tweetParagraph.length-1].appendChild(hourMinutePost);
}

// function autoResize() {
//   let textField = document.getElementById('insert-text');
//   if (textField.scrollHeight > textField.offsetHeight) {
//     textField.rows += 1;
//   } else {
//     textField.rows -= 1;
//   }
// }

function hour() {
  let datePost = new Date();
  let hourPost = datePost.getHours();
  let minutesPost = datePost.getMinutes();
  let hourString = hourPost.toString();
  let minutesString = minutesPost.toString();
  if (minutesString.length < 2) {
    minutesString = '0' + minutesString;
  }
  if (hourString.length < 2) {
    hourString = '0' + hourString;
  }
  let hourMinutePost = hourString + 'h' + minutesString;
  return hourMinutePost;
}

 function autoResize(field) {
   field.style.height = '5vw';
   field.style.height = field.scrollHeight + 'px';
 }

function enableButton() {
  if (!document.getElementById('insert-text').value.match(/\S+/)) {
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

