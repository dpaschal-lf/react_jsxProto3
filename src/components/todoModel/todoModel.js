class TodoModel{
	constructor(){

		if(localStorage.todoCalendar===undefined){
			this.todoData = {
				'2018-2-8':{
					'title': "birthday",
					desciption: 'happy day to me',
					completed: true
				}
			}
			this.todoItems = 1;
			this.saveItemsToStorage();
		} else {
			this.getAllItemsFromStorage();
		}
		
	}
	getAllItemsFromStorage(){
		let allItems = localStorage.todoCalendar;
		try {
			this.todoData = JSON.parse(allItems);
		} catch(error){
			console.error('could not fetch calendar items, recreating data space');
			localStorage.todoCalendar = {};
			this.todoData = {};
		}
	}
	saveItemsToStorage(){
		const jsonData = JSON.stringify(this.todoData);
		localStorage.todoCalendar = jsonData;
	}
	getItem(year, month, day){
		debugger;
		const propertyName = this.getTaskKey(year, month, day);
		if(this.todoData.hasOwnProperty(propertyName)){
			return [this.todoData[propertyName]];
		}
	}
	getTaskKey(year, month, day){
		return `${year}-${month}-${day}`;
	}
	saveItem(options, ignoreDuplicates=false){
		let taskKey = this.getTaskKey(options.year, options.month, options.day);
		if(this.todoData.hasOwnProperty[taskKey] && ignoreDuplicates){
			const optionKeys = Object.keys(options);
			const dataKeys = Object.keys(this.todoData[taskKey]);
			if(optionKeys.length === dataKeys.length && ignoreDuplicates){
				for(let key in options){
					if(options[key] === this.tooData[taskKey][key] && ignoreDuplicates){
						console.error('unable to add item, duplicate entry found for that day/month/year combo');
						return false;
					}
				}				
			}
		}
		const today = new Date();
		const defaultOptions = {
			title: 'default title',
			description: 'I wanted to do something...',
			completed: false
		}
		const task = {};
		for(let key in defaultOptions){
			task[key] = options[key] || defaultOptions[key];
		}
		taskKey = this.getTaskKey(options.year, options.month, options.day);
		this.todoData[taskKey] = task;
		debugger;
		this.saveItemsToStorage();
		return ++this.todoItems;
	}
	removeItem(year, month, day){
		const taskKey = this.getTaskKey(year, month, day);
		if(this.todoData.hasOwnProperty[taskKey]){
			delete this.todoData[taskKey];
			this.saveItemsToStorage();
			return --this.todoItems;
		}
		else {
			return false;
		}
	}
	updateItem(options, ignoreDuplicates=false){
		return this.saveItem(options, ignoreDuplicates)
	}
}

export default TodoModel;