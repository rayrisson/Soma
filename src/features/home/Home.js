import { Component } from 'react';
import SumForm from '../../components/sumForm/SumForm';
import Header from '../../containers/header/Header';
import Section from '../../containers/section/Section';
import './Home.css';

class Home extends Component{
  constructor(props){
    super(props);

    this.state = {
      result: ''
    };

    this.receiveResult = this.receiveResult.bind(this);
  }

  receiveResult(sumOfValues){
    this.setState({result: sumOfValues});
  }

  render() {
    const {title} = this.props;
    const {result} = this.state;
    const sectionSumForm = "sectionSumForm"
    const sectionResult = "sectionResult"

    return (
      <div className="Home">
        <Header title={title}></Header>
        <Section className={sectionSumForm}><SumForm callback = {this.receiveResult}/></Section>
        <Section className={sectionResult}><p className='result'>{result}</p></Section>
      </div>
    );
  }
}

export default Home;
