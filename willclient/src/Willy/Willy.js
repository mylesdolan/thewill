import React, { Component } from 'react';
import { Button, Col, Row,Container} from 'react-bootstrap';
import axios from "axios";
//import Container from 'react-bootstrap/Container'
class Willy extends Component {
    constructor(props) {

        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
        this.state = {
            mylesInit:'1',
            karenInit:'2',
            eddieInit:'3',
            matthInit:'4',
            everthing:[],
            everythingObj:{}
        }


    }

    onSubmit(e)
    {
       e.preventDefault();
       /* */const requestBody = {
            everything: this.state.everythingObj
           // mylesInit: this.state.karenInit;
        };

      // let requestBody={x:1};
        console.log('evenhere',requestBody);
        let namevar = this.state.title;

   //  axios.get(`/api/will/x`);
      //  axios.get('/api/will/helder');

  // axios.get(`https://warm-caverns-90837.herokuapp.com/api/insta/${namevar}`)

      // axios.get(`/api/will/${requestBody}`)
axios.post('/api/will',this.state.everythingObj)
            .then(response => {
                console.log("xxxxxxxxxxxxxxxxxxxxxutyy", response.data);
             //   this.setState({codeResponse: response.data});
            })






    }

    onChangeInput(e)
    {
        console.log('Event', e);
        console.log('Etarget', e.target);
        console.log("EtName", e.target.name);
        console.log("EtVal", e.target.value);
        let objProb=e.target.name;
        this.state.everythingObj[e.target.name]=e.target.value;

//this.setState({everythingObj.e.target.name:})
        console.log('everything',this.state.everthing);
        console.log('everythingobj',this.state.everythingObj);

    }



    render() {
       // let kareninit=this.state.everthing['karen'];
        let kareninit=this.state.everthing.karen;
        let mylesinit=this.state.everthing['myles'];
        let Matthinit=this.state.everthing['matth'];
        let Eddieinit=this.state.everthing['eddie'];
        let Graniteinit=this.state.everthing['granite'];
    return(
        <div>
        Hello
        World
            <form onSubmit={this.onSubmit}>
                Enter and submit you values


            <Container>
                <Row>
                    <Col sm={5}>
                        Initial Pressys <br/>
                        <div className='form-group form-inline'>

                        <label htmlFor={'karen'}>Karen:
                        <input
                            name={'Karen'}
                            value={kareninit}
                            id={'karen'}
                            onChange={this.onChangeInput}
                        />
                        </label>
                        </div>

                        <div className='form-group form-inline'>
                            <label htmlFor={'Myles'}>Myles:
                                <input
                                    name={'Myles'}
                                    value={mylesinit}
                                    id={'myles'}
                                    onChange={this.onChangeInput}
                                />
                            </label>
                        </div>

                        <div className='form-group form-inline'>
                            <label htmlFor={'Eddie'}>Eddie:
                                <input
                                    name={'Eddie'}
                                    value={Eddieinit}
                                    id={'Eddie'}
                                    onChange={this.onChangeInput}
                                />
                            </label>
                        </div>

                        <div className='form-group form-inline'>
                            <label htmlFor={'Matth'}>Matth:
                                <input
                                    name={'Matth'}
                                    value={Matthinit}
                                    id={'Matth'}
                                    onChange={this.onChangeInput}
                                />
                            </label>
                        </div>





                    </Col>
                    <Col sm={4}>Assets <br/>
                                            <div className='form-group form-inline'>

                                            <label htmlFor={'Granite'}>Granite:
                                            <input
                                            name={'Granite'}
                                                value={Graniteinit}
                                                id={'Granite'}
                                            onChange={this.onChangeInput}
                                                />
                                                </label>
                                                </div>


                                            </Col>
                </Row>
                <Row>
                    <Col sm>sm=true</Col>
                    <Col sm>sm=true</Col>
                    <Col sm>sm=true</Col>
                </Row>
                <input type="submit" value="Save values"/>
            </Container>
            </form>

                </div>




    )


    }


}

export {Willy};
