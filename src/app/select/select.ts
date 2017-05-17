export class Select {
	model: string;
	active: boolean = false;
	valid: boolean = false;
	optionsActive: boolean = false;
	animationState: string = 'inactive';
	months: string[] = [
		'Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'
	] 
}