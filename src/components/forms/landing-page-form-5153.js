import React, { Component } from "react";
import axios from 'axios';
import qs from 'qs';

import Helpers from '../helpers/helpers';
import Loader from '../helpers/loader';

class LandingPageForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        company: '',
        state: '',
        quantity: '',
        leadsource: 'Website',
        message: '',
        pageURL: this.props.location,
        interest: 'Unsure',
		submission_page: '',
		utm_source: '',
		utm_medium: '',
		utm_campaign: '',
		utm_term: '',
		utm_content: '',
		gclid: ''
      },
      errors: {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        company: '',
        state: '',
        quantity: '',
        message: '',
        pageURL: '',
        interest: 'Unsure',
		external_referral_site: '',
		landing_page: '',
		pre_submission_page: '',
		submission_page: '',
		utm_source: '',
		utm_medium: '',
		utm_campaign: '',
		utm_term: '',
		utm_content: '',
		gclid: ''
      },
      passedValidation: false,
      submitActive: false,
      mainFormMsg: '',
      mainFormState: null,
      leadInfoSource: null,
      pre_submission_page: "",
      external_referral_site: "",
      landing_page: "",
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  getLeadSource() {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    if (urlParams.has("utm_source")) {
      this.setState({ leadInfoSource: urlParams.get("utm_source") })
    } else {
      this.setState({ leadInfoSource: "Organic" })
    }
  }
  handleReferrer() {
    setTimeout(() => {
      if ((sessionStorage.getItem("referrer")).includes("mortlock.com.au")){
      this.setState({
        external_referral_site: "Mortlock site",
      })
      }
      else if((sessionStorage.getItem("referrer")) === "" || (sessionStorage.getItem("referrer")) === null || (sessionStorage.getItem("referrer")) == undefined){
       this.setState({
        external_referral_site: "Direct Visitor",
      })       
      } else{
      this.setState({
        external_referral_site: sessionStorage.getItem("referrer"),
      })	      
      }
      this.setState({ landing_page: sessionStorage.getItem("landing") })
      if((sessionStorage.getItem("presubmission")) === "" || (sessionStorage.getItem("presubmission")) === null || (sessionStorage.getItem("presubmission")) == undefined){
       this.setState({
        pre_submission_page: "No Previous Page",
      })       
      } else{
      this.setState({
        pre_submission_page: sessionStorage.getItem("presubmission"),
      })	      
      }
      console.log(sessionStorage.getItem("landing"))
    }, 300)
  }
  componentDidMount() {
    this.getLeadSource()
    this.handleReferrer()
  }
	
  handleGTag() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({'event': 'WebLead', 'eventAction': 'LandingPage'});
  }

  handleInputChange(event) {
    const { name, value, type } = event.target;
    this.setState({
      submitActive: false,
      mainFormMsg: '',
      mainFormState: ''
    });

    if(event.target.classList.contains('noEmpty')) {
      this.setState({
        fields: {
          ...this.state.fields,
          [name]: value
        },
        errors: {
          ...this.state.errors,
          [name]: Helpers.formValidation(type, value).err
        }
      })
    } else {
      this.setState({
        fields: {
          ...this.state.fields,
          [name]: value
        }
      })
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({ submitActive: true });
    const formLink = 'https://site.mortlock.com.au/wp-json/contact-form-7/v1/contact-forms/5153/feedback';
    let isFormValid = false;
    let elements = document.querySelectorAll('.contact__form .noEmpty');

    for (let i = 0, element; element = elements[i++];) {
      if (element.value === "") {
        isFormValid = false;
        setTimeout(() => {
          this.setState({ 
            submitActive: false,
            mainFormMsg: 'Please fill in the required fields.',
            mainFormState: 'error',
            errors: {
              ...this.state.errors,
              [element.name]: Helpers.formValidation(element.type, element.value).err
            }
          });
        }, 800);
      } else {
        isFormValid =true;
      }
    }

    if(isFormValid) {
      var leadInfo = '1) Message :-   ' + this.state.fields.message + '     2) Quantity of decking required?:-   ' + this.state.fields.quantity;
      var bodyFormData = new FormData();
      bodyFormData.append('firstname', this.state.fields.firstname)
      bodyFormData.append('lastname', this.state.fields.lastname)
      if(this.state.fields.company === '') {
        bodyFormData.append('company', 'N/A')
      } else {
        bodyFormData.append('company', this.state.fields.company)
      }
      bodyFormData.append('state', this.state.fields.state)
      bodyFormData.append('email', this.state.fields.email)
      bodyFormData.append('phone', this.state.fields.phone)
      bodyFormData.append('quantity', this.state.fields.quantity)
      bodyFormData.append('message', leadInfo)
      bodyFormData.append('leadsource', this.state.fields.leadsource)
      bodyFormData.append('pageURL', this.state.fields.pageURL)
      bodyFormData.append('interest', this.state.fields.interest)
      bodyFormData.append(
        "external_referral_site",
        this.state.external_referral_site
      )
      bodyFormData.append("landing_page", this.state.landing_page)
      bodyFormData.append(
        "pre_submission_page",
        this.state.pre_submission_page
      )
      bodyFormData.append("submission_page", this.state.fields.submission_page)
      bodyFormData.append("utm_source", this.state.fields.utm_source)
      bodyFormData.append("utm_medium", this.state.fields.utm_medium)
      bodyFormData.append("utm_campaign", this.state.fields.utm_campaign)
      bodyFormData.append("utm_term", this.state.fields.utm_term)
      bodyFormData.append("utm_content", this.state.fields.utm_content)
      bodyFormData.append("gclid", this.state.fields.gclid)

      axios.post(formLink, bodyFormData, Helpers.config).then((res) => {
        if(res.data.status === 'mail_sent') {
          this.handleGTag();
          setTimeout(() => {
            this.setState({
              submitActive: false,
              mainFormMsg: res.data.message,
              mainFormState: res.data.status,
              fields: {
                firstname: '',
                lastname: '',
                email: '',
                phone: '',
                company: '',
                state: '',
                quantity: '',
                leadsource: 'Website',
                message: '',
                pageURL: this.props.location,
                interest: 'Unsure',
				submission_page: '',
				utm_source: '',
				utm_medium: '',
				utm_campaign: '',
				utm_term: '',
				utm_content: '',
				gclid: ''	
              }
            })
          }, 800); 

          setTimeout(() => {
			window.location = "https://www.mortlock.com.au/jarrah-timber-thank-you/";
          }, 1000);
        } else if(res.data.status === 'validation_failed') {
          setTimeout(() => {
            this.setState({
              submitActive: false,
              mainFormMsg: res.data.message,
              mainFormState: res.data.status
            })
          }, 800);
        }
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }

  render() {
    const { submitActive } = this.state
    var getUrlParameter = function getUrlParameter(sParam) {
      var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split("&"),
        sParameterName,
        i
      for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split("=")
        if (sParameterName[0] === sParam) {
          return sParameterName[1] === undefined
            ? true
            : decodeURIComponent(sParameterName[1])
        }
      }
    }
    var pre_submission = function pre_submission() {
      var pre_submission_page = ""
      return pre_submission_page
    }
    var submission_page = function submission_page() {
      var submission_page_url = window.location.href
      return submission_page_url
    }
    if (typeof window !== `undefined`) {
      this.state.fields.pre_submission_page = pre_submission()
      this.state.fields.submission_page = submission_page()
      this.state.fields.utm_source = getUrlParameter("utm_source")
      this.state.fields.utm_medium = getUrlParameter("utm_medium")
      this.state.fields.utm_campaign = getUrlParameter("utm_campaign")
      this.state.fields.utm_term = getUrlParameter("utm_term")
      this.state.fields.utm_content = getUrlParameter("utm_content")
      this.state.fields.gclid = getUrlParameter("gclid")
    }
	
    return (
      <form className={submitActive ? 'contact__form loading' : 'contact__form'} id="landing-page-contact-form" type="POST" onSubmit={ this.handleSubmit } noValidate>
        <div className="row">
          <div className="col-sm-6">
            <div className="form_group">
              <label htmlFor="firstname">first name *</label>
              <div className="form_input">
                <input aria-label="Firstname" type="text" name="firstname" id="firstname" placeholder="Enter your first name" className="noEmpty" value={this.state.fields.firstname || ''} onChange={ this.handleInputChange } />
                {this.state.errors.firstname !== '' && <span className='error'>{this.state.errors.firstname}</span>}
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form_group">
              <label htmlFor="lastname">last name *</label>
              <div className="form_input">
                <input aria-label="Lastname" className="noEmpty" type="text" name="lastname" id="lastname" placeholder="Enter your last name" value={this.state.fields.lastname || ''} onChange={ this.handleInputChange } />
                {this.state.errors.lastname !== '' && <span className='error'>{this.state.errors.lastname}</span>}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="form_group">
              <label htmlFor="email">Email *</label>
              <div className="form_input">
                <input aria-label="Email" className="noEmpty" type="email" name="email" id="email" placeholder="Enter your email address" value={this.state.fields.email || ''} onChange={ this.handleInputChange } />
                {this.state.errors.email !== '' && <span className='error'>{this.state.errors.email}</span>}
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form_group">
              <label htmlFor="phone">Phone *</label>
              <div className="form_input">
                <input aria-label="Company name" className="noEmpty" type="text" name="phone" id="phone" placeholder="Enter your phone number" value={this.state.fields.phone || ''} onChange={ this.handleInputChange } />
                {this.state.errors.phone !== '' && <span className='error'>{this.state.errors.phone}</span>}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="form_group">
              <label htmlFor="state">State *</label>
              <div className="form_input">
                <select name="state" id="state" value={this.state.fields.state || ''} onChange={ this.handleInputChange }>
                  <option value="default">- Select -</option>
                  <option value="ACT">ACT</option>
                  <option value="NSW">NSW</option>
                  <option value="NT">NT</option>
                  <option value="QLD">QLD</option>
                  <option value="SA">SA</option>
                  <option value="TAS">TAS</option>
                  <option value="VIC">VIC</option>
                  <option value="WA">WA</option>
                  <option value="International">International</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form_group">
              <label htmlFor="company">company name</label>
              <div className="form_input">
                <input aria-label="Company name" type="text" name="company" id="company" placeholder="Enter company name" value={this.state.fields.company || ''} onChange={ this.handleInputChange } />
                {this.state.errors.company !== '' && <span className='error'>{this.state.errors.company}</span>}
              </div>
            </div>
          </div>
        </div>
        <div className="form_group">
          <label htmlFor="quantity">quantity of decking required (m2)? *</label>
          <div className="form_input">
            <input aria-label="Project Size" className="noEmpty" type="text" name="quantity" id="quantity" placeholder="Enter details here" value={this.state.fields.quantity || ''} onChange={this.handleInputChange} />
            {this.state.errors.quantity !== '' && <span className='error'>{this.state.errors.quantity}</span>}
          </div>
        </div>
        <div className="form_group">
          <label htmlFor="message">Message</label>
          <div className="form_input">
            <textarea aria-label="Message" id="message" placeholder="Please leave a detailed message here..." name="message" value={this.state.fields.message || ''} onChange={ this.handleInputChange } />
          </div>
        </div>
          <div style={{ display: `none` }}>
            <input
              type="hidden"
              name="submission_page"
              value={typeof window !== `undefined` ? window.location.href : ""}
            />
            <input
              type="hidden"
              name="utm_source"
              value={
                typeof window !== `undefined`
                  ? getUrlParameter("utm_source")
                  : ""
              }
            />
            <input
              type="hidden"
              name="utm_medium"
              value={
                typeof window !== `undefined`
                  ? getUrlParameter("utm_medium")
                  : ""
              }
            />
            <input
              type="hidden"
              name="utm_campaign"
              value={
                typeof window !== `undefined`
                  ? getUrlParameter("utm_campaign")
                  : ""
              }
            />
            <input
              type="hidden"
              name="utm_term"
              value={
                typeof window !== `undefined` ? getUrlParameter("utm_term") : ""
              }
            />
            <input
              type="hidden"
              name="utm_content"
              value={
                typeof window !== `undefined`
                  ? getUrlParameter("utm_content")
                  : ""
              }
            />
            <input
              type="hidden"
              name="gclid"
              value={
                typeof window !== `undefined` ? getUrlParameter("gclid") : ""
              }
            />
          </div>
        <div className="btn_wrap">
          <button className="button primary" type="submit"><span className="text">Submit</span><Loader /></button>
          {this.state.mainFormMsg && <span className={`form-msg ${this.state.mainFormState}`}>{ this.state.mainFormMsg }</span>}
        </div>
      </form>
    )
  }
}

export default LandingPageForm;
