//Create a sample parent class
 class Parent {
	
	course: string = "Playwright";

	printProject() {
		console.log("ABC Project");
	}

}

//Create a sample child class

class Child extends Parent {

	// course: string = "TypeScript";

	printProject() {
		console.log("XYZ Project");
	}

	printName(course: string) {
		console.log(course);
		console.log(this.course);
		console.log(super.course);
		super.printProject();
	}
}

//Create an object of child class and call the method
let obj = new Child();
obj.printName("JavaScript");
