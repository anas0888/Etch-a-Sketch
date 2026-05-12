const btn = document.getElementById('gridbtn');
const reset = document.getElementById('resetBtn');

function calculateSection(num){
let square = num * num;
const numOfDivs = 100 / num
	for (let i = 0; i < square; i++){
const div = document.createElement ('div')
		div.style.height = `${numOfDivs}%`
		div.style.width = `${numOfDivs}%`
		div.style.boxSizing = "border-box";
		div.style.border = "1px solid black"
div.addEventListener("mouseover",() =>{
div.style.backgroundColor = "black";
});


	section.append(div)

	}
}

let section = document.querySelector("#masterGrid")
calculateSection(16);



btn.addEventListener("click",() =>{
let userInput = prompt("enter number of grids ")
	let converted = Number(userInput);
	while (converted < 10 || converted > 100)
	{
userInput = prompt("Please enter the number of grids again")
		converted = Number(userInput);
	}

        section.innerHTML = "";
	calculateSection(converted);
})



reset.addEventListener("click", () =>{
	section.innerHTML = "";
calculateSection(16);
})

