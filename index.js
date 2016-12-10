function clock () {
	 let now = new Date()
	 let hours = now.getHours();
	 let minutes = now.getMinutes();
	 let seconds = now.getSeconds();

	 let time = hours + ":" + minutes + ":" + seconds;


	console.log("The Time is", time);

}

function crazyBitch( )  {
	//setInterval (Quemele vai executar , quanto tempo vai demorar);

	setInterval(clock,2000);


}

  function decrease (start , defuse) {
  	  let count = start;

  	 let intervalNumber =  setInterval(function (){
             console.log(count);
             count--;

             if(count < 0){
             	   clearInterval(intervalNumber);
              	   console.log("Terrorist wins");
              	}

             if (count <  defuse ) {
             	clearInterval(intervalNumber);
             	console.log("Counter-Terrorist wins")
             	           }             
             	       


  	  }, 1000);


  }
module.exports.clock = clock; 
module.exports.crazyBitch = crazyBitch;
module.exports.decrease = decrease;