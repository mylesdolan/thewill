import React, { Component } from 'react';
import { Button, Col, Row,Container} from 'react-bootstrap';
import axios from "axios";
import './will.css';
//import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom';
class Willy extends Component {
    constructor(props) {

        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
        this.onChangeBStreetOwn = this.onChangeBStreetOwn.bind(this);
        this.doCalcs= this.doCalcs.bind(this);
        this.state = {
            mylesInit:'1',
            karenInit:'2',
            eddieInit:'3',
            matthInit:'4',
            everthing:[],
            everythingObj:{},
            reportString:'',
            bscount:'0'
        }


    }

    componentDidMount() {
        this.state.everythingObj['Belbuyer'] = 'notfamily';
    }

    onSubmit(e)
    {
      /////////////////////////////////  e.preventDefault();
        /* */const requestBody = {
        everything: this.state.everythingObj
        // mylesInit: this.state.karenInit;
    };

        console.log('allbeforepost',this.state.everythingObj);
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

    onChangeBStreetOwn(e)
    {
        console.log('Event', e);
        console.log('Etarget', e.target);
        console.log("EtName", e.target.name);
        //use value as thats what select option seems want to use.
        console.log("EtVal", e.target.value);
        let objProb=e.target.name;
        // this.state.everythingObj[e.target.name]=e.target.value;

        //Increase the buyers initial pressy by price of belmore.
        this.state.everythingObj[e.target.value]=Number(this.state.everythingObj[e.target.value])+Number(this.state.everythingObj['Belmore']);

//this.setState({everythingObj.e.target.name:})
        console.log('NewInit val',this.state.everythingObj[e.target.value]);
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




        let belb=allinint.Belbuyer;
        console.log('belb',belb);
        let belbamount=allinint.Belmore


        let kar_getbeforebs=equaldiv-allinint.Karen;
        let myl_getbeforebs=equaldiv-allinint.Myles;
        let mat_getbeforebs=equaldiv-allinint.Matth;
        let edd_getbeforebs=equaldiv-allinint.Eddie;

        let getafterbsInternalSale=[];
        getafterbsInternalSale['Karen']=allinint.Karen;
        getafterbsInternalSale['Myles']=allinint.Myles;
        getafterbsInternalSale['Eddie']=allinint.Eddie;
        getafterbsInternalSale['Matth']=allinint.Matth;





        console.log('karenbbs',getafterbsInternalSale['Karen']);

        // console.log('belb2',allinint.belb);

        // console.log('belbbelb',allinint[{belb}]);
        // `${grantNameWidthPx}`}
        console.log('belbbelb3',allinint[`${belb}`]);
        //  console.log('belbbelb4',allinint.[`${belb}`]);

        //  console.log('belbbelb',allinint.`${belb}`);

        let dontworrybs=true;
        let doneornotdone = (this.state.everythingObj[`${belb}`+'alreadydone']) ? 'done':'notdone';  console.log('dond',doneornotdone);

        //  if (belb!== 'notfamily' && doneornotdone==='notdone')
        if (belb!== 'notfamily' )

        {
            console.log('bsperson',belb);
            // console.log('karenbbs',getafterbsInternalSale['Karen']);
            console.log('insideifAmount',getafterbsInternalSale[`${belb}`]);
            console.log('insideifAmount',belbamount);
            this.state.everythingObj[`${belb}`+'alreadydone']='alreadydone';
            dontworrybs=false;
            //extract the allinit for that person

            console.log('before taking away b st',allinint[`${belb}`]);

            // allinint[`${belb}`]=Number(allinint[`${belb}`])+Number(allinint.Belmore);

            getafterbsInternalSale[`${belb}`]=Number(getafterbsInternalSale[`${belb}`])+Number(belbamount);

            console.log('\nAfter taking away b st',allinint[`${belb}`],getafterbsInternalSale[`${belb}`]);
            //allinint[{belb}]
            //  let x=Number(allinint[{belb}])-Number(allinint.Belmore);
            //console.log('hardley',allinint[{belb}],x)



        }
        console.log('karenbbso',getafterbsInternalSale.Karen);
        /*    let kar_get=equaldiv-allinint.Karen;
            let myl_get=equaldiv-allinint.Myles;
            let mat_get=equaldiv-allinint.Matth;
            let edd_get=equaldiv-allinint.Eddie;
        */

        console.log('equaldiv',equaldiv);
        let kar_get=Number(equaldiv)-Number(getafterbsInternalSale.Karen);
        let myl_get=equaldiv-getafterbsInternalSale.Myles;
        let mat_get=equaldiv-getafterbsInternalSale.Matth;
        let edd_get=equaldiv-getafterbsInternalSale.Eddie;

        let reportString='';
         let reportStringbeforebs='Karen gets '+kar_getbeforebs+'k\n \n Myles gets '+myl_getbeforebs+'k\n Matthew gets '+mat_getbeforebs+'k\n Eddie gets '+edd_getbeforebs+'k\n';

        if (dontworrybs===false)
        {  let blankline='\n.                                            After                                                                                       . \n \t ';
            reportString=blankline + '\nBUT AFTER Belmore sale Karen gets '+kar_get+'k\n \n Myles gets '+myl_get+'k\n Matthew gets '+mat_get+'k\n Eddie gets '+edd_get+'k  . Nb Negatives indicate payment due to Pot';}
        reportString=reportStringbeforebs+reportString;
        this.setState({reportString:{reportString}});
        console.log('allin',equaldiv);
        console.log('allin',allinint);
        console.log('allin',reportString);
        this.state.everythingObj['comment']=reportString;
        this.onSubmit('x');
    }



    render() {
        // let kareninit=this.state.everthing['karen'];
        let kareninit=this.state.everthing.karen;
        let mylesinit=this.state.everthing['myles'];
        let Matthinit=this.state.everthing['matth'];
        let Eddieinit=this.state.everthing['eddie'];
        let Graniteinit=this.state.everthing['granite'];
        let Belmoreinit=this.state.everthing['belmore'];
        // let BelmoreBuyerinit=this.state.everthing['belmorebuyer'];
        let BelmoreBuyerinit='Not a family member';
        let Cashinit=this.state.everthing['cash'];
        let reportstring= this.state.reportString.reportString;
        console.log('RS',reportstring);
        return(
            <div style={{fontSize:"12px"}}>
                <br/>
           Work in Progress. No legal standing what so ever. Enter values in thousands eg 50 for 50K. All monenetary boxes must be filled.<br/>
        <Link to="/hello">Hello</Link>

                <br/>    <button onClick={this.doCalcs}>Do Calculations!</button>
                <form onSubmit={this.onSubmit}>



                    <Container>
                        <Row>
                            <Col sm={3}>
                               <b> Initial Pressys</b> <br/>
                                <div className='form-group form-inline'>

                                    <label htmlFor={'karen'}>Karen:
                                        <input
                                            name={'Karen'}
                                            value={kareninit}
                                            id={'karen'}
                                            onChange={this.onChangeInput}
                                        />K
                                    </label>
                                </div>

                                <div className='form-group form-inline'>
                                    <label htmlFor={'Myles'}>Myles:
                                        <input
                                            name={'Myles'}
                                            value={mylesinit}
                                            id={'myles'}
                                            onChange={this.onChangeInput}
                                        />K
                                    </label>
                                </div>

                                <div className='form-group form-inline'>
                                    <label htmlFor={'Eddie'}>Eddie:
                                        <input
                                            name={'Eddie'}
                                            value={Eddieinit}
                                            id={'Eddie'}
                                            onChange={this.onChangeInput}
                                        />K
                                    </label>
                                </div>

                                <div className='form-group form-inline'>
                                    <label htmlFor={'Matth'}>Matth:
                                        <input
                                            name={'Matth'}
                                            value={Matthinit}
                                            id={'Matth'}
                                            onChange={this.onChangeInput}
                                        />K
                                    </label>
                                </div>





                            </Col>
                            <Col sm={4}><b>Assets</b> <br/>
                                <div className='form-group form-inline'>

                                    <label htmlFor={'Granite'}>Granite:
                                        <input
                                            name={'Granite'}
                                            value={Graniteinit}
                                            id={'Granite'}
                                            onChange={this.onChangeInput}
                                        />K
                                    </label>
                                </div>
                                <div className='form-group form-inline'>

                                    <label htmlFor={'Belmore'}>Belmore:
                                        <input
                                            name={'Belmore'}
                                            value={Belmoreinit}
                                            id={'Belmore'}
                                            onChange={this.onChangeInput}
                                        />K
                                    </label>



                                    <label>
                                        BelmoreBuyer:
                                        <select name={'Belbuyer'} value={this.state.BelmoreBuyerinit} onChange={this.onChangeInput}>
                                            <option value="Matth">Matthew</option>
                                            <option value="Eddie">Edward</option>
                                            <option value="Karen">Karen</option>
                                            <option value="Myles">Myles</option>
                                            <option value="notfamily" selected>Not a family member</option>
                                        </select>
                                    </label>



                                </div>

                                <div className='form-group form-inline'>

                                    <label htmlFor={'Cash'}>Cash:
                                        <input
                                            name={'Cash'}
                                            value={Cashinit}
                                            id={'Cash'}
                                            onChange={this.onChangeInput}
                                        />K
                                    </label>
                                </div>


                            </Col>
                        </Row>
                        <Row>

                            <Col sm></Col>
                            <Col sm><div>


                            </div></Col>
                            <Col sm></Col>
                        </Row>

                        <Row>
                            <Col sm><div>

                                {reportstring}
                            </div></Col>
                        </Row>
                        {/*    <input type="submit" value="Save values"/>*/}
                    </Container>
                </form>

            </div>




        )


    }


}

export {Willy};
