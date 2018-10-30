function takeANumber (array,Name) {
  array.push(Name)
  return `Welcome, ${Name}. You are number ${array.length} in line.`
}
function nowServing (array) {
  if (array.length > 0) {
    return `Currently serving ${array.shift()}.`
}
else {
  return "There is nobody waiting to be served!"
}
}
function currentLine (array) {
  let y = []
    if (array.length < 1) {
      console.log("The line is currently empty")
    } else {
    for (let i = 0; i < array.length; i++) {
        y.push(`${i + 1}. ${array[i]}`)
    }
    return `The line is currently: ${y}`
    }
}

