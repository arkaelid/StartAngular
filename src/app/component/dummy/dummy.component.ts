import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
 selector: "crm-dummy",
 templateUrl: "./dummy.component.html",
 styleUrls: ["./dummy.component.css"],
 standalone: true
})
export class DummyComponent {
 @Input()
 public label = "";
 @Output()
 public clicked = new EventEmitter<string>();
 constructor() {}
 
 onClicked(): void {
 this.clicked.emit(this.label + "a random string");
 }
}