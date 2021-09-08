import React, { Component } from 'react';

import TabComponents from './TabComponents';

import { FiCalendar } from 'react-icons/fi';

import './Styles.css';

import swal from 'sweetalert';

import { RadioGroup, RadioButton , ReversedRadioButton } from 'react-radio-buttons';

class Homepage extends Component {
		constructor(props){
			super(props);
			this.state={
				Persobal_details:[],
				candidatename:"",
				erorname:"",
				panelistname:"",
				errorpanelistname:"",
				DateofInterview:"",
				errorDateofInterview:"",
				Basic:0,
				angular:false,
				html:false,
				css:false,
				javascript:false,
				alertVisible2:true
			}
		}


		async componentDidMount(){
			try {
				
			} catch (error) {
				console.log(error);
			}
		}


		HandleChange=async(e)=> this.setState({ [e.target.name] : e.target.value });


		NextPage=async()=>{
			const { candidatename , panelistname , DateofInterview }=this.state;

			if(!candidatename){
				this.setState({
					erorname : "Please Fill your Name"
				})
				
				return false
				
			}else{
				this.setState({
					erorname : ""
				})
			}

			if(!panelistname){
				this.setState({
					errorpanelistname : "Please Fill your PanelList Name"
				})
				// swal("Basic information details are not filled completely")
				return false
			}else{
				this.setState({
					errorpanelistname : ""
				})
			}

			if(!DateofInterview){
				this.setState({
					errorDateofInterview : "Please Fill your Date of Interview"
				})
				// swal("Basic information details are not filled completely")
				return false
			}else{
				this.setState({
					errorDateofInterview : ""
				})
			}

			

			try {

				

				swal({
					text: "Basic information successfully saved.",
					icon: "success",
				})

				this.setState({
					Basic:1,
					
				})
	
			} catch (error) {
				console.log(error);
			}

			
		}




		PreviousPage=async()=>{

			this.setState({
				Basic:0,
				
			})
		} 

		NextPage1=async()=>{

			// swal("Skills information successfully saved.")
			swal({
				text: "Skills information successfully saved.",
				icon: "success",
			})
			this.setState({
				Basic:2
			})
		}

		PreviousPage1=async()=>{
			this.setState({
				Basic:1
			})
		}

		Submit=async()=>{

			swal({
				text: "Scores successfully saved.",
				icon: "success",
			})

			this.setState({
				Basic:0,
				candidatename:"",
				erorname:"",
				panelistname:"",
				errorpanelistname:"",
				DateofInterview:"",
				errorDateofInterview:""
			})
		}

		onChangeRadio=async(e)=>{
			console.log(e);
		}


		CheckBoxFunction=async(e)=>{

			this.setState({
				[e] : !this.state[e]
			})
		}

		onDismiss = () => {
			this.setState({ alertVisible2: false });
		  };

  render() {
	
	  const { Basic }=this.state;
    return (
      <React.Fragment>

<div class="image-container set-full-height">

<div class="container"> 

<div class="row">
    <div class="col-sm-8 col-sm-offset-2">
        <div class="wizard-container">
		        <div class="card wizard-card" data-color="green" id="wizardProfile">
					
            <form action="" method="">
            <div class="wizard-header">
                  <h3 class="wizard-title">
                  Evaluation Wizard
                  </h3>
			</div>

			<div class="tab-content">     
				<TabComponents

				ChangeTabs={this.state.Basic}
				
				TabOne={
		<div class={"tab-pane"} id="about">
		<div class="row">
		<div class="col-sm-6">
		<div class="input-group">
		<span class="input-group-addon">
			<i class="material-icons">face</i>
		</span>
		<div class="form-group label-floating">
			<label class="control-label">Candidate Name</label>
			<input name="candidatename" onChange={this.HandleChange} value={this.state.candidatename} type="text" class="form-control"/>
			<span style={{color:"red"}}>{this.state.erorname}</span>
		</div>
		</div>

		<div class="input-group">
		<span class="input-group-addon">
			<i class="material-icons">record_voice_over</i>
		</span>
		<div class="form-group label-floating">
			<label class="control-label">Panelist Name</label>
			<input name="panelistname" onChange={this.HandleChange} value={this.state.panelistname} type="text" class="form-control"/>
			<span style={{color:"red"}}>{this.state.errorpanelistname}</span>
		</div>
		</div>

		<div class="input-group">
		<span class="input-group-addon">
			<FiCalendar size={20} />
		</span>
		<div class="form-group label-floating">
			<label class="control-label">Date of Interview</label>
			<input type="date" name="DateofInterview" onChange={this.HandleChange} value={this.state.DateofInterview} placeholder="Date of Interview" class="form-control"/>
			<span style={{color:"red"}}>{this.state.errorDateofInterview}</span>
		</div>
		</div>

		</div>
		<div class="col-sm-4 col-sm-offset-1">
		<div class="picture-container">
		<div class="picture">
			<img src="assets/img/default-avatar.png" class="picture-src" id="wizardPicturePreview" title=""/>
			<input type="file" id="wizard-picture"/>
		</div>
		<h6>Candidate Photo</h6>
		</div>
		</div>
		</div>
		<div class="pull-right">
		<button type='button' className="btn btn-success"  onClick={this.NextPage}>Next</button>
		</div>

		</div>
		}

		TabTwo ={
		
<div class={"tab-pane"} id="account">
			<h4 class="info-text">Select all the applicable skills</h4>
			<div class="row">
				<div class="col-sm-10 col-sm-offset-1">
					<div class="col-sm-3">
							<div class="choice" data-toggle="wizard-checkbox" onClick={()=>this.CheckBoxFunction('angular')}>
							<input type="checkbox" name="angular"/>
							<div class="icon" style={{backgroundColor:this.state.angular==true ? 'lightgreen' : null }}>
								{/* <i class="fa fa-pencil"></i> */}
								<h6 style={{fontSize:'1.9em',lineHeight:'83px'}}>Angular</h6>   
							</div>
							
						</div>
					</div>
					<div class="col-sm-3">
						<div class="choice" data-toggle="wizard-checkbox" onClick={()=>this.CheckBoxFunction('html')}>
							<input type="checkbox" name="jobb" value="Code"/>
							<div class="icon" style={{backgroundColor:this.state.html==true ? 'lightgreen' : null }}>
								<h6 style={{fontSize:'1.9em',lineHeight:'83px'}}>HTML5</h6>  
							</div>
						</div>
					</div>
					<div class="col-sm-3">
						<div class="choice" data-toggle="wizard-checkbox" onClick={()=>this.CheckBoxFunction('css')}>
							<input type="checkbox" name="jobb" value="Develop"/>
							<div class="icon" style={{backgroundColor:this.state.css==true ? 'lightgreen' : null }}>
								<h6 style={{fontSize:'1.9em',lineHeight:'83px'}}>CSS3</h6>  
							</div>
							</div>
					</div>
					<div class="col-sm-3">
						<div class="choice" data-toggle="wizard-checkbox" onClick={()=>this.CheckBoxFunction('javascript')}>
							<input type="checkbox" name="jobb" value="Develop"/>
							<div class="icon" style={{backgroundColor:this.state.javascript==true ? 'lightgreen' : null }}>
								<h6 style={{fontSize:'1.9em',lineHeight:'83px'}}>JAVASCRIPT</h6>  
							</div>
							{/* <h6>Develop</h6> */}
						</div>
					</div>
				</div>
			</div>
			<div class="pull-left">
			<button type='button' class='btn btn-previous btn-fill btn-default btn-wd' onClick={this.PreviousPage}>Previous</button>
			</div>
			<div class="pull-right">
			<button type='button' className="btn btn-success" onClick={this.NextPage1}>Next</button>
		</div>
		</div>

		}

		TabThree={
			<div class={"tab-pane" } id="address">
			<div class="row">

			<div class="col-sm-12">
					<div class="col-sm-3">
					<h4>Experience</h4>
					</div>
					<div class="col-sm-9">	
				<RadioGroup
				onChange={ this.onChangeRadio } 
				 horizontal
				 >

				<RadioButton value="Beginner" iconSize={18} iconInnerSize={18} pointColor="lightgreen" rootColor="black">
				Beginner
				</RadioButton>
				<RadioButton value="Intermediate" iconSize={18} iconInnerSize={18} pointColor="lightgreen" rootColor="black">
				Intermediate
				</RadioButton>
				<RadioButton value="Expert" iconSize={18} iconInnerSize={18} pointColor="lightgreen" rootColor="black">
				Expert
				</RadioButton>
				
				</RadioGroup>
				</div>

			</div>	

			

			<div class="col-sm-12" style={{marginTop:'8px'}}>
					<div class="col-sm-3">
					<h4>Technology Strength</h4>
					</div>
					<div class="col-sm-9">	
				<RadioGroup
				onChange={ this.onChangeRadio } 
				 horizontal
				 >

				<RadioButton value="Beginner" iconSize={18} iconInnerSize={18} pointColor="lightgreen" rootColor="black">
				Beginner
				</RadioButton>
				<RadioButton value="Intermediate" iconSize={18} iconInnerSize={18} pointColor="lightgreen" rootColor="black">
				Intermediate
				</RadioButton>
				<RadioButton value="Expert" iconSize={18} iconInnerSize={18} pointColor="lightgreen" rootColor="black">
				Expert
				</RadioButton>
				
				</RadioGroup>
				</div>

			</div>	

			<div class="col-sm-12" style={{marginTop:'8px'}}>
					<div class="col-sm-3">
					<h4>Design Capabilities</h4>
					</div>
					<div class="col-sm-9">	
				<RadioGroup
				onChange={ this.onChangeRadio } 
				 horizontal
				 >

				<RadioButton value="Beginner" iconSize={18} iconInnerSize={18} pointColor="lightgreen" rootColor="black">
				Beginner
				</RadioButton>
				<RadioButton value="Intermediate" iconSize={18} iconInnerSize={18} pointColor="lightgreen" rootColor="black">
				Intermediate
				</RadioButton>
				<RadioButton value="Expert" iconSize={18} iconInnerSize={18} pointColor="lightgreen" rootColor="black">
				Expert
				</RadioButton>
				
				</RadioGroup>
				</div>

			</div>	

			

			<div class="col-sm-12" style={{marginTop:'8px'}}>
					<div class="col-sm-3">
					<h4>Leadership Ability</h4>
					</div>
					<div class="col-sm-9">	
				<RadioGroup
				onChange={ this.onChangeRadio} 
				 horizontal
				 >

				<RadioButton value="Beginner" iconSize={18} iconInnerSize={18} pointColor="lightgreen" rootColor="black">
				Beginner
				</RadioButton>
				<RadioButton value="Intermediate" iconSize={18} iconInnerSize={18} pointColor="lightgreen" rootColor="black">
				Intermediate
				</RadioButton>
				<RadioButton value="Expert" iconSize={18} iconInnerSize={18} pointColor="lightgreen" rootColor="black">
				Expert
				</RadioButton>
				
				</RadioGroup>
				</div>

			</div>	
				
			</div>
			<div class="pull-left">
			<button type='button' class='btn btn-previous btn-fill btn-default btn-wd' onClick={this.PreviousPage1}>Previous</button>
			</div>
			<div class="pull-right">
			<button type='button' className="btn btn-success" onClick={this.Submit}>Submit</button>
		</div>
		</div>
		}
				
	
	/>
</div>



</form> 
          </div>
    </div>                  


    </div>

 </div>           

</div>

  </div>
</React.Fragment>
        
      
    );
  }
}

export default Homepage;