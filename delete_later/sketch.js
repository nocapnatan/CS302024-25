// Project Title
// Natan
// 10/17/2024


function setup() {
  createCanvas(windowWidth, windowHeight);
  print(names)
  names.push('Natan')
  print(names)

  let lastname = names.pop()
  print(lastname)
  print(names)

  let firstname = names.shift()
  print(firstname)
  print(names)

  names.push('name1')
  names.push('name2')
  names.push('name3')
  names.push('name4')
  names.push('name5')

  for(n of names){
    print(n)
  }

}

function draw() {
  background(220);
}
