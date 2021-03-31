

const stringSearch = (string, sub) => {
	let count = 0
	for (let i=0; i < string.length; i++) {
		for (let j=0; j < sub.length; j++) {
			if (sub[j] !== string[i+j]) break;
			if (j === sub.length - 1) count++;
		}
	}
	console.log(count)
	return count
}



stringSearch("lorie loled", "loled")