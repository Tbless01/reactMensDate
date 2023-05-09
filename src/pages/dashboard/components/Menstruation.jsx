import '../styles/Menstruation.css'
import React, {Component} from 'react';

class MenstrualCycle extends Component {
        constructor(props) {
            super(props);
            this.state = {
                text: "",
                text2: "",
                text3: ""
            }
        }
        
nextCycle=()=>{
        const dateString = this.dateOfCycle.value;
        const dateOfCycle = new Date(dateString);
        const cycleDays= Number(this.number_days.value)
        let yearCyc = dateOfCycle.getFullYear();
        let monthCyc = dateOfCycle.getMonth() +1;
        let dateCyc = Number(dateOfCycle.getDate()) + (cycleDays);

        if(isNaN(cycleDays)){
            this.setState({text2: " "});
            this.setState({text: " "});
            this.setState({text3: " "})
            setTimeout(() => {
                this.setState({text2: "Kindly input"});
            }, 500);
            setTimeout(() => {
                this.setState({text: "a valid number"});
            }, 1000);
        }
        // 1st
 if(monthCyc!== 2 &&monthCyc !==4 && dateCyc>31 ){
    dateCyc= dateCyc - 31;
    monthCyc ++;
}
else if ((monthCyc === 2 && dateCyc>28)){
    dateCyc= dateCyc - 28;
    monthCyc ++;
}
else if ((monthCyc === 4 && dateCyc>30)){
    dateCyc= dateCyc - 30;
    monthCyc ++;
}
// 2nd
if(monthCyc!== 2 &&monthCyc !==4 && dateCyc>31 ){
    dateCyc= dateCyc - 31;
    monthCyc ++;
}
else if ((monthCyc === 2 && dateCyc>28)){
    dateCyc= dateCyc - 28;
    monthCyc ++;
}
else if ((monthCyc === 4 && dateCyc>30)){
    dateCyc= dateCyc - 30;
    monthCyc ++;
}


if(yearCyc>0 && !isNaN(cycleDays)){
    this.setState({text2: " "});
    this.setState({text: " "});
    this.setState({text3: " "});
    setTimeout(() => {
        this.setState({text2: "Your next period is:"});
    }, 500);
    setTimeout(() => {
        this.setState({text: monthCyc+"/"+dateCyc+"/"+yearCyc});
    }, 1800);
    
}
if(monthCyc>12){
    monthCyc=1;
}

}
nextOvulation=()=>{
        const dateString = this.dateOfCycle.value;
        const dateOfCycle = new Date(dateString);
        const cycleDays= Number(this.number_days.value)
        let yearCyc = dateOfCycle.getFullYear();
        let monthCyc = dateOfCycle.getMonth() +1;
        let dateCyc = Number(dateOfCycle.getDate()) + (cycleDays/2);

        if(isNaN(cycleDays)){
            this.setState({text2: " "});
            this.setState({text: " "});
            this.setState({text3: " "});
            setTimeout(() => {
                this.setState({text2: "Kindly input"});
            }, 500);
            setTimeout(() => {
                this.setState({text: "a valid number"});
            }, 1000);
        }
        
 // 1st
 if(monthCyc!== 2 &&monthCyc !==4 && dateCyc>31 ){
    dateCyc= dateCyc - 31;
    monthCyc ++;
}
else if ((monthCyc === 2 && dateCyc>28)){
    dateCyc= dateCyc - 28;
    monthCyc ++;
}
else if ((monthCyc === 4 && dateCyc>30)){
    dateCyc= dateCyc - 30;
    monthCyc ++;
}
// 2nd
if(monthCyc!== 2 &&monthCyc !==4 && dateCyc>31 ){
    dateCyc= dateCyc - 31;
    monthCyc ++;
}
else if ((monthCyc === 2 && dateCyc>28)){
    dateCyc= dateCyc - 28;
    monthCyc ++;
}
else if ((monthCyc === 4 && dateCyc>30)){
    dateCyc= dateCyc - 30;
    monthCyc ++;
}
if(yearCyc>0 && !isNaN(cycleDays)){
    this.setState({text2: " "});
    this.setState({text: " "});
    this.setState({text3: " "});
    setTimeout(() => {
        this.setState({text2: "Your next ovulation date is:"});
    }, 400);
    if (cycleDays%2 !== 0){
    setTimeout(() => {
        this.setState({text: monthCyc+"/"+(dateCyc+0.5)+"/"+yearCyc});
    }, 1500);
}
else
setTimeout(() => {
    this.setState({text: monthCyc+"/"+dateCyc+"/"+yearCyc});
}, 1500);
}
if(monthCyc>12){
    monthCyc=1;
}
// console.log(monthCyc+"/"+dateCyc+"/"+yearCyc)
    }




safePeriodStart=()=>{
    // safe period is 3 days before menstration and 3 days after flow
        const dateString = this.dateOfCycle.value;
        const dateOfCycle = new Date(dateString);
        const cycleDays= Number(this.number_days.value);
        const daysOfBleeding =Number(this.bleedingDays.value);
        let yearCyc = dateOfCycle.getFullYear();
        let monthCyc = dateOfCycle.getMonth() +1;
        let safe_after_and_before_flow = 3;
        let dateCycafter = Number(dateOfCycle.getDate()) + (cycleDays+(daysOfBleeding)+safe_after_and_before_flow+safe_after_and_before_flow-2);
        let dateCycbefore =Number(dateOfCycle.getDate()) + (cycleDays-(safe_after_and_before_flow)+1);
        let monthCycBefore = monthCyc;
    
console.log(daysOfBleeding);

if(isNaN(cycleDays)){
            this.setState({text2: " "});
            this.setState({text: " "});
            this.setState({text3: " "});
            setTimeout(() => {
                this.setState({text2: "Kindly input"});
            }, 500);
            setTimeout(() => {
                this.setState({text: "a valid number"});
            }, 1000);
        }
        
  // 1st
  if(monthCyc!== 2 &&monthCyc !==4 && dateCycafter>31 || dateCycbefore>31){
    dateCycafter= dateCycafter - 31;
    dateCycbefore = dateCycbefore-31;
    monthCyc ++;
    monthCycBefore = monthCyc;
}
else if ((monthCyc === 2 && dateCycafter>28 || dateCycbefore >28)){
    dateCycafter= dateCycafter - 28;
    dateCycbefore= dateCycbefore-28
    monthCyc ++;
    monthCycBefore = monthCyc;
}
else if ((monthCyc === 4 && dateCycafter>30 || dateCycbefore>30)){
    dateCycafter= dateCycafter - 30;
    dateCycbefore= dateCycbefore - 30;
    monthCyc ++;
    monthCycBefore = monthCyc;
}
// 2nd
if(monthCyc!== 2 &&monthCyc !==4 && dateCycafter>31  ){
    dateCycafter= dateCycafter - 31;
    monthCyc ++;
}
else if ((monthCyc === 2 && dateCycafter>28)){
    dateCycafter= dateCycafter - 28;
    monthCyc ++;
}
else if ((monthCyc === 4 && dateCycafter>30)){
    dateCycafter= dateCycafter - 30;
    monthCyc ++;
}
console.log(monthCycBefore);





if(dateCycbefore<1  && monthCycBefore !== 2 && monthCycBefore!== 4){
    dateCycbefore = 31+dateCycbefore-1;
    dateCycafter--;
    monthCycBefore--;
}
else if(dateCycbefore<1 && monthCycBefore === 2){
    dateCycbefore = 28+dateCycbefore;
    monthCycBefore--;
}
else if(dateCycbefore<1 && monthCycBefore === 4){
    dateCycbefore = 30+dateCycbefore;
    monthCycBefore--;
}


if(monthCycBefore>12 && monthCyc>12){
    monthCyc=1;
    monthCycBefore = 1;
    monthCyc++;
}
// months after february and april
if(monthCycBefore<12  && monthCycBefore !== 3 && monthCycBefore!== 5){
    dateCycbefore--;
}
else if(monthCycBefore === 2){
    monthCycBefore= monthCycBefore-2;
    monthCyc =monthCyc-2;
}
// else if(monthCycBefore == 4)





if(yearCyc>0 && !isNaN(cycleDays)){
    this.setState({text2: " "});
    this.setState({text: " "});
    this.setState({text3: " "});

    setTimeout(() => {
        this.setState({text2: "Your safe period is between:"});
    }, 500);
    setTimeout(() => {
        this.setState({text: monthCycBefore+"/"+dateCycbefore+"/"+yearCyc});
    }, 1800);
    setTimeout(() => {
        this.setState({text3: "and "+ monthCyc+"/"+dateCycafter+"/"+yearCyc});
    }, 2550);
    }


}   

 render(){
       return(
        <div >
            <div id="container">
            <nav className='top'>
        <label className='logo'>TB</label>
          <ul className='subtop'>   
          <li><a href='#' className='home'>Home</Link></li> 
            <li><a href='#' className='feature'>Feature</a></li>
            <li><a href='#' className='signin'>SignIn</Link></li>
            <li><a href='#' className='singup'>SignUp</Link></li>
            <li><a href='https://semicolon.africa/about' target='_blank'  className='singup'>About</a></li>
          </ul>
      </nav>
      <div class="lds-dual-ring"></div>
          <div className='header'>
                 <div className='header2'>Menstrual period calculator</div>
                  </div>
                    <div>   
                    <div className='lastM'><span>Last menstrual date: </span></div>
                    <div className="box">
                    <div className='inputss'>
                    <input  ref={(r) => this.dateOfCycle = r} className='dateOfCycle' type="date" className='datee' />
                    <div className='twoinputs'>
                    <input ref={(r) => this.number_days = r} type="Number" placeholder='How long is your cycle?' className='input1'/> 
                    <input ref={(d) => this.bleedingDays = d} type="Number" placeholder='Enter days of bleeding' className='input2' /> 
                    </div>
                    </div>
                        <div className='btncup'>
                    <butoon onClick={this.nextCycle} className='nextMenstrualDate'>Period</butoon>
                    <butoon onClick={this.nextOvulation} className='nextOvu'>Ovulation</butoon>
                    <butoon onClick={this.safePeriodStart} className='nextOvu'>Safe period</butoon>
                    </div>
                    </div>
                    <div style={{padding: "0.5% 2%" , textDecorationColor: "yellowGreen"}} className="result">{this.state.text2} {this.state.text} </div>
                    <div style={{padding: "0.5% 2%" , textDecorationColor: "yellowGreen"}} className="result2">{this.state.text3} </div>
                   
                </div>
            </div>
        </div>
            );
        }
    }
    export default MenstrualCycle;