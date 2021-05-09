/*confirm("ready to get started?")
var websitePrice = 300
var userWeb = prompt('Whats your favourite website; business, store, blog or personal?')
if(userWeb === 'personal'){
  document.write('The Website Price is: ' + websitePrice + '$')
}else if(userWeb === 'blog'){
  document.write('The Website Price is: ' + websitePrice * 1.5 + '$')
}else if(userWeb === 'business'){
  document.write('The Website Price is: ' + websitePrice * 2 + '$')
}else if(userWeb === 'store'){
  document.write('The Website Price is: ' + websitePrice * 2.5 + '$')
}else {
  alert('You should choose a type of website you want')
}*/
var userName = prompt('enter your username')
var userPass = prompt('enter your password')
function userPassword(){
while(userPass !== "0000"){
userPass = prompt('Invalid password, please enter the correct one "0000"')}
}
userPassword()
var imgCount = prompt('What the number of websites do you want?')
var webType = prompt('What type of website do you prefer?Personal/Blog/Business/Store')
function showSites(){
var image2 = ''
for(var x= 0; x < imgCount; x++){
  if(webType === 'Business'){
    image2 = image2 + '<img src="https://steemitimages.com/DQmSr9mGvK5FZdEb5koVXiJJ5e1nTmBqPXrDE46jg1smUXA/Business%20website.jpg">'
  }else if(webType ==='Blog'){
    image2 = image2 + '<img src="https://i.pinimg.com/originals/06/8f/c6/068fc6b38c5b723c92b1688c1bc65362.jpg">'
  }else if(webType ==='Store'){
    image2 = image2 + '<img src="https://cdn.dribbble.com/users/961146/screenshots/10904922/shot_4x.jpg">'
  }else if(webType ==='Personal'){
    image2 = image2 + '<img src="https://colorlib.com/wp/wp-content/uploads/sites/2/personal-free-template.jpg">'}
}
  document.write(image2)
}
showSites()
var starNum = prompt('What star rating would you give, 1-5?')
var image = ''
for(var i = 0; i < starNum ;i++){
    image = image + '<img src="http://icons.iconarchive.com/icons/cheezen/web-2/128/star-icon.png">'
}
  document.write(image)
