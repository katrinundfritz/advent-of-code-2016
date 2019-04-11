/* Input */
const myInput = 'R2, L5, L4, L5, R4, R1, L4, R5, R3, R1, L1, L1, R4, L4, L1, R4, L4, R4, L3, R5, R4, R1, R3, L1, L1, R1, L2, R5, L4, L3, R1, L2, L2, R192, L3, R5, R48, R5, L2, R76, R4, R2, R1, L1, L5, L1, R185, L5, L1, R5, L4, R1, R3, L4, L3, R1, L5, R4, L4, R4, R5, L3, L1, L2, L4, L3, L4, R2, R2, L3, L5, R2, R5, L1, R1, L3, L5, L3, R4, L4, R3, L1, R5, L3, R2, R4, R2, L1, R3, L1, L3, L5, R4, R5, R2, R2, L5, L3, L1, L1, L5, L2, L3, R3, R3, L3, L4, L5, R2, L1, R1, R3, R4, L2, R1, L1, R3, R3, L4, L2, R5, R5, L1, R4, L5, L5, R1, L5, R4, R2, L1, L4, R1, L1, L1, L5, R3, R4, L2, R1, R2, R1, R1, R3, L5, R1, R4';

/* Calculate distances */
function calculateDistances(input) {

  /* Set starting point and compass direction (0 = north, 1 = east, 2 = south, 3 = west) */
  let xPos = 0;
  let yPos = 0;
  let locations = [[xPos,yPos]];
  let compassDirection = 0;

  /* Define variables to find HQ */
  let xHQ;
  let yHQ;
  let contains = false;

  /* Get list of instructions */
  let instructions = input.split(', ');

  /* Calculate locations */
  instructions.forEach(function(instruction) {

    let turn = instruction[0];
    let distance = parseInt(instruction.substr(1));

    if (turn === 'R') {
      compassDirection++;
    } else if (turn === 'L'){
      compassDirection--;
    }

    compassDirection += 4;
    compassDirection %= 4;

    for (step = 0; step < distance; step++) {
      switch (compassDirection) {
      case 0: yPos++; break
      case 1: xPos++; break
      case 2: yPos--; break
      case 3: xPos--; break
    }

    for (i = 0; i < locations.length; i++) {
      if (((locations[i][0] === xPos) && (locations[i][1] === yPos)) && contains === false) {
        contains = true;
        xHQ = xPos;
        yHQ = yPos;
        break;
      }
    }

    locations.push([xPos,yPos]);

    }
  });

  /* Calculate distance to Easter Bunny Headquarter  */
  let distanceToHQ = Math.abs(0 - xHQ) + Math.abs(0 - yHQ);
  console.log('Distance to Easter Bunny Headquarter: ' + distanceToHQ);

  /* Calculate distance to final destination  */
  let distanceToFinalDestination = Math.abs(0 - xPos) + Math.abs(0 - yPos);
  console.log('Distance to final destination: ' + distanceToFinalDestination);

}

/* Call method */
calculateDistances(myInput);
