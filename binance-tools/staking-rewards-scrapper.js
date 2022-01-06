const containsCoin = (tableRow, coin) => {
	return tableRow.querySelector('.bn-table-cell').innerHTML.includes(coin);
};

const calculateTotalPerPage = (coin) => {
	const filtered = Array.from(document.querySelectorAll('.bn-table-row')).filter(tableRow => containsCoin(tableRow, coin));
	
	return filtered.reduce((curr, acc) => { return curr + Number(acc.querySelectorAll('.bn-table-cell')[2].innerHTML)}, 0);
};
