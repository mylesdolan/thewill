import React, { Component } from 'react';
import { Button, Col, Row,Container} from 'react-bootstrap';
import axios from "axios";
//import Container from 'react-bootstrap/Container'
class Willy extends Component {
    constructor(props) {

        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
        this.doCalcs= this.doCalcs.bind(this);
        this.state = {
            mylesInit:'1',
            karenInit:'2',
            eddieInit:'3',
            matthInit:'4',
            everthing:[],
            everythingObj:{},
            reportString:''
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

doCalcs()
{
    //(k+kp)+(m+mp)+(ma+map)+(ed+edp)=tot
    let allinint=this.state.everythingObj;

    let totalAll=Number(allinint.Karen)
        +Number(allinint.Matth)
        +Number(allinint.Eddie)
        +Number(allinint.Myles)
    +Number(allinint.Granite)
    +Number(allinint.Belmore)
    +Number(allinint.Cash);

    let equaldiv=totalAll/4;

    let kar_get=equaldiv-allinint.Karen;
    let myl_get=equaldiv-allinint.Myles;
    let mat_get=equaldiv-allinint.Matth;
    let edd_get=equaldiv-allinint.Eddie;

    let reportString='Karen gets '+kar_get+' Myles gets '+myl_get+' Matthew gets '+mat_get+' Eddie gets '+edd_get;
    this.setState({reportString:{reportString}});
    console.log('allin',equaldiv);
    console.log('allin',allinint);
    console.log('allin',reportString);
}



    render() {
       // let kareninit=this.state.everthing['karen'];
        let kareninit=this.state.everthing.karen;
        let mylesinit=this.state.everthing['myles'];
        let Matthinit=this.state.everthing['matth'];
        let Eddieinit=this.state.everthing['eddie'];
        let Graniteinit=this.state.everthing['granite'];
        let Belmoreinit=this.state.everthing['belmore'];
        let Cashinit=this.state.everthing['cash'];
        let reportstring= this.state.reportString.reportString;
        console.log('RS',reportstring);
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
                        <div className='form-group form-inline'>

                            <label htmlFor={'Belmore'}>Belmore:
                                <input
                                    name={'Belmore'}
                                    value={Belmoreinit}
                                    id={'Belmore'}
                                    onChange={this.onChangeInput}
                                />
                            </label>
                        </div>
                        <div className='form-group form-inline'>

                            <label htmlFor={'Cash'}>Cash:
                                <input
                                    name={'Cash'}
                                    value={Cashinit}
                                    id={'Cash'}
                                    onChange={this.onChangeInput}
                                />
                            </label>
                        </div>


                                            </Col>
                </Row>
                <Row>

                    <Col sm>xxxx</Col>
                    <Col sm><div>

                        {reportstring}
                    </div></Col>
                    <Col sm>xxxx</Col>
                </Row>
                <input type="submit" value="Save values"/>
            </Container>
            </form>
            <button onClick={this.doCalcs}>Do Calculations!</button>
                </div>




    )


    }


}

export {Willy};
