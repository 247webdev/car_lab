function Car(make, model, year, state, color){
	this.make	= make;
	this.module = model;
	this.year	= year;
	this.state	= "off";
	this.color	= color;
	this.previous_owners = [];
	this.current_owner	= "Manufacturer";
	this.passengers = [];
}

Car.prototype.sale = function(newOwner){
	this.previous_owners.push(this.current_owner);
	this.current_owner = newOwner;
};

Car.prototype.paint = function(newColor){
	this.color = newColor;
};

Car.prototype.start = function(){
	this.state = "on";
};

Car.prototype.off = function(){
	this.state = "off";
};

Car.prototype.driveTo = function(destination){
	if( this.state === "on" ){
		console.log("driving to " + destination );
	}
};

Car.prototype.park = function(){
	if( this.state === "off" ){
		console.log( "parked!!" );
	}
};

Car.prototype.pick_up = function(name){
	if( this.state === "on" ){
		console.log("driving to 'pick up " + name + "'");
		this.passengers.push(name);
	}
};

Car.prototype.dropOff = function(name){
	if( this.state === "on" ){
		if( this.passengers.indexOf(name) != -1 ){
			this.passengers.splice( this.passengers.indexOf(name), 1);
		}
	}
};



module.exports=Car;