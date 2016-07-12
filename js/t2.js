window.onload = function(){
	document.getElementById("btn").onclick = function(){
	if( this.innerHTML == "on"){
				  document.body.style.backgroundColor = "black";
				   this.innerHTML = "off";
				}else{
					document.body.style.backgroundColor = "white";
					this.innerHTML = "on"; 
				}
			}
}
