confirm("ready to get started?")
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
}