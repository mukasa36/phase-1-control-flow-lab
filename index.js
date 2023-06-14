function scuberGreetingForFeet(ride){
if(ride <='400'){
return 'This one is on me!'
}

else if (ride >2000 && ride <=2500) {
  return  'I will gladly take your thirty bucks.'
  
}

else{
  return 'No can do.'
}

// switch (ride) {
//   case 2001:
//     return 'I will gladly take your thirty bucks.'
  
//   case 2501:
//     return 'No can do.';  

//   default:
//     break;
// }


// if(ride >'2000')
// return 'I will gladly take your thirty bucks.'

// if(ride > '2500')
// return 'No can do'
};

function ternaryCheckCity(city){
 let y;
  y=city ==='NYC' ? 'Ok, sounds good.' :'No go.';
  return y;

// if (city === 'NYC')
// return 'Ok sounds good'

// elseif()
// return 'No go'
};

function switchOnCharmFromTip(tip){

switch (tip) {
  case "generous":
    return "Thank you so much."
  case "not as generous":
    return "Thank you."  

  default:
    return "Bye.";
  
}


  // if(tip = 'generous')

  // return'Thank you so much'

  // if(tip= 'not as generous')
  // return'Thank you'

  // else
  // return'Bye.'
}