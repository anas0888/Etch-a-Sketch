

function gridNumber(num){
let square = num * num;
	numOfDivs = 100 / num
	for (let i = 0; i < square; i++){
const div = document.createElement ('div')
		div.style.height = `${numOfDivs}%`
		div.style.width = `${numOfDivs}%`
		div.style.box-sizing = "border-box";
		div.style.border = "1px solid black"
	}
}

