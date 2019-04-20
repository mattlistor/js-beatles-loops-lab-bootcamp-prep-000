function theBeatlesPlay(players, instruments ){
  var arrayOfStrings = [];
  for (var counter = 0; counter < players.length; counter++){
    arrayOfStrings.push(players[counter] + " plays " + instruments[counter])
  }
  return arrayOfStrings;
}

function johnLennonFacts(arrayOfFacts){
  var counter =  0;
  while (counter < arrayOfFacts.length){
    arrayOfFacts[counter] = arrayOfFacts[0] + "!!!";
    counter++;
  }
}
