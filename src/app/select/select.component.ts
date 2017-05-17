import { Component, ViewChild, Input, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, state, style, animate, transition} from '@angular/animations';

import { Select } from './select';

@Component({
  	selector: 'select-component',
  	templateUrl: './select.component.html',
  	styleUrls: ['./select.component.scss'],
  	animations: [
    	trigger('selectAnimation', [
   		  	state('inactive', style({height: '*'})),
		  	transition('* => void', [
		  	    style({height: '*'}),
		  	    animate(250, style({height: '48px'}))
		  	]),
		  	transition('void => *', [
		  	    style({height: '48px'}),
		  	    animate(250, style({height: '*'}))
		  	]),
    	])
  ]
})

export class SelectComponent implements OnInit{
	@ViewChild('selectContainer') selectContainer: any;
	@Input() disabled: boolean;
	@Input() default: string;

	select: Select;

	constructor() {
		document.addEventListener('click', this.clickOutsideOptions.bind(this));
	}

	clickOutsideOptions(event:any) {
      	if (!this.selectContainer.nativeElement.contains(event.target)) {
          	this.select.optionsActive = false;
      	}
  	}

	onMonthSelection(month): void {
		this.select.optionsActive = !this.select.optionsActive;
		this.select.model = month;
		this.select.valid = true;
		this.select.animationState = 'inactive';
	}

	onSelectClick(event): void {
		this.select.optionsActive = !this.select.optionsActive;
		this.select.active = true;
		this.select.animationState = 'active';
	}

	animationDone(event): void {
		event.toState == 'void' ? this.select.active = false : -1;
	}

	ngOnInit(): void {
		this.select = new Select();
		this.select.model = this.default;
		this.default ? this.select.valid = true : -1 ;
	}
}
