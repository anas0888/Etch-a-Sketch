const btn = document.getElementById('gridbtn')


function calculateSection(num){
let square = num * num;
const numOfDivs = 100 / num
	for (let i = 0; i < square; i++){
const div = document.createElement ('div')
		div.style.height = `${numOfDivs}%`
		div.style.width = `${numOfDivs}%`
		div.style.boxSizing = "border-box";
		div.style.border = "1px solid black"
	section.append(div)

	}
}

let section = document.querySelector("#masterGrid")
calculateSection(16);



btn.addEventListener("click" =>{
prompt("enter number of grids ")
})
