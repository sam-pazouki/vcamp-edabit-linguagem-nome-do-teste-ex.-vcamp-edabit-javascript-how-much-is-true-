function happinessNumber(s) {
	//Declaring a Variable
  a=(s.match(/:\)/g)||[]).length
  b=(s.match(/\(:/g)||[]).length
  c=(s.match(/\):/g)||[]).length*-1
  d=(s.match(/:\(/g)||[]).length*-1
	//Codes Run
  console.log(a,b,c,d)
  return a+b+c+d
}