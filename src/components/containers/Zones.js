import React, { Component } from 'react'
import Zone from '../presentation/Zone'
import superagent from 'superagent'
import styles from './styles'

class Zones extends Component {
  constructor(){
    super()
    this.state = {
      list: [],
      zone: {
        name: "",
        zipCodes: "",
        numComments: ""
      }
    }
  }

  componentDidMount(){
    console.log('componentDidMount: ')
    superagent
    .get('/api/zone')
    .query(null)
    .set('Accept', 'application/json')
    .end((err, response) => {
      if (err) {
        alert('ERROR: '+err)
        return
      }
        console.log(JSON.stringify(response.body))
        let results = response.body.results
        this.setState({
          list: results
        })
    })
  }

  submitZone(event) {
    let updatedList = Object.assign([], this.state.list)
    updatedList.push(this.state.zone)
    this.setState({
      list: updatedList
    })
  }

  updateZone(event){
    console.log('updateZone: '+ event.target.id + event.target.value)
    let updatedZone = Object.assign({}, this.state.zone)
    updatedZone[event.target.id] = event.target.value
    this.setState({
      zone: updatedZone
    })
  }

  updateName(event){
    console.log('updateName: '+ event.target.value)
    let updatedZone = Object.assign({}, this.state.zone)
    updatedZone['name'] = event.target.value
    this.setState({
      zone: updatedZone
    })
  }

  updateZipcode(event){
    console.log('updateZipcode: '+ event.target.value)
    let updatedZone = Object.assign({}, this.state.zone)
    updatedZone['zipCodes'] = event.target.value
    this.setState({
      zone: updatedZone
    })
  }

  updateNumComments(event){
    let updatedZone = Object.assign({}, this.state.zone)
    updatedZone['numComments'] = event.target.value
    this.setState({
      zone: updatedZone
    })


  }

  render() {

    const listItems = this.state.list.map((zone, i) => {
      return (
        <li key={i}> <Zone currentZone={zone}/></li>
      )
    });
    return(
      <div>
          <ol style={styles.zone.zonesList}>
            {listItems}
          </ol>
          <input id="name" onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="Name"></input><br />
          <input id="zipCodes" onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="Zip Code"></input><br />
          <input id="numComments" onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="Number of Comments"></input><br />
          <button onClick={this.submitZone.bind(this)} className="btn btn-danger form-control">Submit Zone</button>
      </div>

    )
  }
}


export default Zones
