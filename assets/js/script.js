const btn = document.getElementById('btn-follow');

function btnFollow(id) {
  let followers = getNumber();
  let value;

  if (id.innerHTML == 'Follow') {
    id.innerHTML = 'Following';
    value = ++followers;
    setComaInThousandNumber(value);
  } else {
    id.innerHTML = 'Follow';
    value = --followers;
    setComaInThousandNumber(value);
  }
}

function getNumber() {
  const number = document.querySelector('.followers-count');
  let text = number.textContent.trim();
  let numberWithOutComma = text.replace(/,/g, '');
  return (value = parseInt(numberWithOutComma, 10));
}

function setComaInThousandNumber(value) {
  let number = value;
  let newNumber = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  let numberFollowers = document.querySelector('.followers-count');
  return (numberFollowers.textContent = newNumber);
}
