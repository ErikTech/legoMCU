import React, {Component} from 'react';
import data from '../data/sets.json'
import minifigures from '../data/minifigs.json'

class DataChartPage extends React.Component {
	render(){
		return(
			<div>
				<TableLayout subtheme="Avengers"></TableLayout>
				<TableLayout subtheme="Iron Man 3"></TableLayout>
				<TableLayout subtheme="Guardians of the Galaxy"></TableLayout>
				<TableLayout subtheme="Avengers: Age of Ultron"></TableLayout>
				<TableLayout subtheme="Captain America: Civil War"></TableLayout>
				<TableLayout subtheme="Guardians of the Galaxy Vol. 2"></TableLayout>
				<TableLayout subtheme="Ant-Man"></TableLayout>
				<TableLayout subtheme="Spider-Man: Homecoming"></TableLayout>
				<TableLayout subtheme="Thor: Ragnarok"></TableLayout>
				<TableLayout subtheme="Black Panther"></TableLayout>
				<TableLayout subtheme="Avengers: Infinity War"></TableLayout>
		</div>
		)
	}
}

class TableLayout extends React.Component {
	render() {
		return (
			<div>
				<h2>{this.props.subtheme}</h2>
				<table className="info">
					<tbody>
						<DataChart subtheme={this.props.subtheme}></DataChart>
					</tbody>
				</table>
			</div>);
	}
}
class DataChart extends Component {
	render() {
		return data.map((user, index) => {
			const minifigs = minifigures.map((fig, index) =>{
				if (fig.Number === user.Number){
					return <div key={index}>{fig.name}</div>
				}
			})
			// console.log(this.props.subtheme)
			if(user.Subtheme === this.props.subtheme && user.Theme !== 'BrickHeadz' && user.Theme !== 'Gear'){
			return (
						<tr key={index}>
							{/* <td>{user.index}</td> */}
							<td>ID: {user.SetID}</td>
							<td>#{user.Number}</td>
							{/* <td>{user.Variant}</td> */}
							{/* <td>{user.Theme}</td> */}
							{/* <td>{user.Subtheme}</td> */}
							<td>Year: {user.Year}</td>
							<td>{user.Name}</td>
							<td>Minifigs({user.Minifigs}) - {minifigs}</td>
							<td>Total Pieces: {user.Pieces}</td>
							<td><a target="_blank"  href={user.AmazonURL}><img className="lego-img" border="0" src={user.ImageURL} /></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=legomcu-20&l=am2&o=1&a=B006OMM8RG" width="1" height="1" border="0" alt="" /></td>
							<td>UK{user.UKPrice}<br />US${user.USPrice}<br /> CA{user.CAPrice}<br /> EU{user.EUPrice}</td>
						</tr>

			)
		}
		})
	}
}
export default DataChartPage;
