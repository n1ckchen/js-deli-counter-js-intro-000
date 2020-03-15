function takeANumber(katzDeliLine, name){
    katzDeliLine.push(`${name}`);
    return  `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  } else {
      return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
    const finalLine = [];
    if (katzDeliLine.length > 0) {
      for(let i = 0; i < katzDeliLine.length; i++) {
        finalLine += (i + 1) + ". " + katzDeliLine[i] + ", ";
      }
      finalLine = finalLine.slice(0, finalLine.length - 2);
      return "The line is currently: " + finalLine;
    } else {
        return "The line is currently empty.";
    }
}
