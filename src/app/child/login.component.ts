import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {
  userName: string = '';
	@Output() login = new EventEmitter < string > ();
	constructor() {}
	ngOnInit() {}
	submit() {
		console.log(this.userName)
		this.login.emit(this.userName);
	}
}
