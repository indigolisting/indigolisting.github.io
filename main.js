const people = [

		{name = Jonah[<a href=""> Jonah </a>]},
		{name = mabeta[<a href=""> Mabeta </a>]},
		{name = mando[<a href=""> Mando </a>]},
		{name = fernando[<a href=""> fernando </a>]},
		{name = evelyn[<a href=""> Evelyn </a>]},
		{name = daniel[<a href=""> Daniel </a>]}

		
];

const list = document.getElementById('list');

function setList(group) {
	clearList();
	for (const person of group) {
		const item = document.createElement('li'); 
		item.classList.add('list-group-item');
		const text = document.createTextNode(person.name);
		
		item.appendChild(text);
		list.appendChild(item);
}
	if (group.length === 0) {
	setNoResults();
}
}

function clearList() {

	while (list.firstChild) {
	list.removeChild(list.firstChild);
	} 

}


function setNoResults(){
		const item = document.createElement('li');
		item.classList.add('list-group-item');
		const text = document.createTextNode('No results found');
		item.appendChild(text);
		list.appendChild(item);

}


function getRelevancy(value, searchTerm) {
	if (value === searchTerm) {
return 2;
} 
else if (value.startsWith(searchTerm)) {
return 1; 
}
else if (value.includes(searchTerm)) {
return 0; 
}
else {
return -1; 
}
}

const searchInput = document.getElementById('search');

searchInput.addEventListener('input', (event) => {
	let value = event.target.value;
	if (value && value.trim().length > 0) {
		value = value.trim().toLowerCase();
		setList(people.filter(person => {
			return person.name.includes(value);
}).sort((personA, personB) => {
	return getRelevancy(personB.name, value) - getRelevancy(personA.name, value);
}));
	} else {
	clearList();
	}
});