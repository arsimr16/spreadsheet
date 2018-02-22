const createNByMTable = () => {
	const oldTable = document.getElementById('spreadsheet');
	if (oldTable) oldTable.remove();

	const rows = document.getElementById('rowNum').value;
	const cols = document.getElementById('colNum').value;
	console.log(`create ${rows} by ${cols} table`);
	const table = document.createElement('table');
	table.setAttribute('id', 'spreadsheet');
	document.body.appendChild(table);

	for (let i = 0; i < rows; i++) {
		const row = document.createElement('tr');
		for (let j = 0; j < cols; j++) {
			const cell = document.createElement('td');
			const cellData = document.createTextNode(`cell is row ${j}, column ${i}`);
			cell.appendChild(cellData);
			row.appendChild(cell);
		}
		table.appendChild(row);
	}
	table.setAttribute("border", "2");
};

const tblBtn = document.getElementById('createTbl');

tblBtn.addEventListener('click', createNByMTable);
