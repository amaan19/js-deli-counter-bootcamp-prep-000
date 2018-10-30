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
    if (array.length > 0) {
    for (let i = 0; i < array.length; i++) {
        console.log(`The line is currently: ${i + 1}. ${array[i]}`)
    }
    } else {
        console.log("The line is currently empty")
    }
}