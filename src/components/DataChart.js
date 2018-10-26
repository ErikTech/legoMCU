import React, {Component} from 'react';
import data from '../data/sets.json'
import minifigures from '../data/minifigs.json'
import {Grid, Row, Col, Image} from 'react-bootstrap';

class DataChartPage extends React.Component {
	render() {
		return (<div>
			<TableLayout subtheme={this.props.subtheme}></TableLayout>
		</div>)
	}
}

class TableLayout extends React.Component {
	render() {
		return (<div>
			<h2>{this.props.subtheme}</h2>
			<div className="info">
				<div>
					<DataChart subtheme={this.props.subtheme}></DataChart>
				</div>
			</div>
		</div>)
	}
}
class DataChart extends Component {
	render() {
		return (<Grid>
			{
				data.map((user, index) => {
					const minifigs = minifigures.map((fig, index) => {
						if (fig.Number === user.Number) {
							return (<div key={index}>{fig.name}</div>)
						}
					})
					console.log(this.props.subtheme)
					if (user.Slug === this.props.subtheme && user.Theme !== 'BrickHeadz' && user.Theme !== 'Gear') {
						return (
							<Row key={index}>
								{/* <div>{user.index}</div> */}
								<Col md={1}>ID: {user.SetID}</Col>
								<Col md={1}>#{user.Number}</Col>
								{/* <Col md={1}>{user.Variant}</Col> */}
								{/* <Col md={1}>{user.Theme}</Col> */}
								{/* <Col md={1}>{user.Subtheme}</Col> */}
								<Col md={1}>Year: {user.Year}</Col>
								<Col md={2}>{user.Name}</Col>
								<Col md={2}>Minifigs({user.Minifigs}) - {minifigs}</Col>
								<Col md={1}>Total Pieces: {user.Pieces}</Col>
								<Col md={3}>
									<a target="_blank" href={user.AmazonURL}><Image className="lego-img" src={user.ImageURL} responsive/></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=legomcu-20&l=am2&o=1&a=B006OMM8RG" width="1" height="1" alt=""/></Col>
								<Col md={1}>UK{user.UKPrice}<br/>US${user.USPrice}<br/>
									CA{user.CAPrice}<br/>
									EU{user.EUPrice}</Col>
							</Row>
						)
					}
				})
			}</Grid>)
	}
}

export default DataChartPage
