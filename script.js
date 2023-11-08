function getFormvalue() {
    //Write your code here
	let form =document.querySelector("form");
     let name=form.fname.value;
	let last=form.lname.value;
	alert(name+ " "+last);
}
