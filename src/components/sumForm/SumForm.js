import React, {Component} from 'react'
import './SumForm.css'

class SumForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            value1: '',
            value2: ''
        }

        this.handleValue1Change = this.handleValue1Change.bind(this);
        this.handleValue2Change = this.handleValue2Change.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleValue1Change(e){
        this.setState({value1: e.target.valueAsNumber})
    }

    handleValue2Change(e){
        this.setState({value2: e.target.valueAsNumber})
    }

    handleSubmit(e){
        e.preventDefault();
        const {callback} = this.props;

        if(this.state.value1 !== '' || this.state.value2 !== ''){
            const result = this.state.value1 + this.state.value2;

            callback(result);
            this.setState({value1: '', value2: ''});
        }else{
            const result = "Preencha os campos!"
            callback(result)
        }
    }

    render(){
        return (
            <div className='SumForm'>
                <form onSubmit={this.handleSubmit}>
                    <input type="number" value={this.state.value1} onChange={this.handleValue1Change} />
                    <input type="number" value={this.state.value2} onChange={this.handleValue2Change} />
                    <br />
                    <button type="submit">+</button>
                </form>
            </div>
        )
    }
}

export default SumForm;