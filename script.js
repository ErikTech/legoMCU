const parse = require('csv-parse')
const movies = require('./data/movies')
// const amazon = require('amazon-affiliate-api');
const Promise = require('bluebird')
const csvParse = Promise.promisify(parse)
const {readFile, writeFile} = require('fs-extra')

// var client = amazon.createClient({awsId: "aws ID", awsSecret: "aws Secret", awsTag: "aws Tag"});
const filename = './lego_data.csv'
const path = 'src/data/sets.json'

keys = [
	'SetID',
	'Number',
	'Variant',
	'Theme',
	'Subtheme',
	'Year',
	'Name',
	'Minifigs',
	'Pieces',
	'UKPrice',
	'USPrice',
	'CAPrice',
	'EUPrice',
	'ImageURL',
	'OwnedBy',
	'WantedBy'

]
// Get data from csv into readable JSON

async function copyData() {
	const file = await readFile(filename)
	try{
		const data = await csvParse(file)
		const data2 = await datafy(data)
		const saved = await writeFile(path, JSON.stringify(data2))
	}
	catch(e){
		console.error(e)
	}
}

function datafy(data) {
	// console.log(data);
	const newData = data.map((set) => {
		return keys.reduce((acc, el, index) => {
			acc[el] = set[index]
			return acc
		}, {})
	})
	return (newData);
}
// run()
copyData()
