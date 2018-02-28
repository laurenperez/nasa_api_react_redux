import React, { Component } from 'react';
import AstronomyCard from './AstronomyCard';
import { connect } from 'react-redux';
import fetchData from '../actions/fetch_data';

class AstronomyContainer extends Component {

  componentWillMount() {
    this.props.fetchData();
  }


  render () {

    return (
      <AstronomyCard data={this.props.astronomy} />
    )
  }

}

// connect react with redux
function mapStateToProps(state) {
  return { astronomy: state.astronomy };
}

//@params mapStateToProps (necessity)
export default connect(mapStateToProps, { fetchData })(AstronomyContainer);







//API call
//
// const API_KEY = 'VRwTIuCIT0mKviiPsMeTUxFlLLt1DgAndhDsVHlL';
// const END_POINT = 'https://api.nasa.gov/planetary/apod?api_key=';
//
// axios.get(END_POINT+API_KEY)
// .then(response => {
//
//   this.setState({
//     astronomy: response.data
//   })
//
//   console.log(this.state.astronomy)
//
// })
// .catch(error => {
//   console.log(error, 'failed to catch data')
// });
