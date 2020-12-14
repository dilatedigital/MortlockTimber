import React, { Component } from "react";
import axios from 'axios';
import qs from 'qs';

import Helpers from '../helpers/helpers';
import Loader from '../helpers/loader';

class RequestAQuote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        company: '',
        whoareyou: '',
        address: '',
        suburb: '',
        state: '',
        postcode: '',
        quantity: '',
        file: '',
        message: '',
        leadsource: 'Website',
        pageURL: this.props.location,
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
      errors: {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        company: '',
        whoareyou: '',
        message: '',
        address: '',
        suburb: '',
        state: '',
        postcode: '',
        quantity: '',
        file: '',
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
      fileName: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFileInput = this.handleFileInput.bind(this);
  }

  handleGTag() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(this.props.gtag);
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

  handleFileInput(event) {
    const file = event.target.files[0];
    this.setState({
      fileName: event.target.files[0].name,
      errors: {
        ...this.state.errors,
        file: ''
      }
    });

    if (file.size > 10485760) {
      this.setState({
        errors: {
          ...this.state.errors,
          file: 'File size cannot exceed more than 10MB'
        }
      })
    } else {
      this.setState({
        fields: {
          ...this.state.fields,
          file: file
        }
      })
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({ submitActive: true });
    const formLink = 'https://site.mortlock.com.au/wp-json/contact-form-7/v1/contact-forms/3495/feedback';
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
      var leadInfo = '1) Message :-   ' + this.state.fields.message + '     2) Quantity of material?:-   ' + this.state.fields.quantity;
      var bodyFormData = new FormData();
      bodyFormData.append('firstname', this.state.fields.firstname)
      bodyFormData.append('lastname', this.state.fields.lastname)
      if(this.state.fields.company === '') {
        bodyFormData.append('company', 'N/A')
      } else {
        bodyFormData.append('company', this.state.fields.company)
      }
      bodyFormData.append('address', this.state.fields.address)
      bodyFormData.append('suburb', this.state.fields.suburb)
      bodyFormData.append('state', this.state.fields.state)
      bodyFormData.append('postcode', this.state.fields.postcode)
      bodyFormData.append('email', this.state.fields.email)
      bodyFormData.append('phone', this.state.fields.phone)
      bodyFormData.append('whoareyou', this.state.fields.whoareyou)
      bodyFormData.append('message', leadInfo)
      bodyFormData.append('leadsource', this.state.fields.leadsource)
      bodyFormData.append('pageURL', this.state.fields.pageURL)
      bodyFormData.append('interest', this.state.fields.interest)
      bodyFormData.append('file', this.state.fields.file)
      bodyFormData.append('external_referral_site', this.state.fields.external_referral_site)
      bodyFormData.append('landing_page', this.state.fields.landing_page)
      bodyFormData.append('pre_submission_page', this.state.fields.pre_submission_page)
      bodyFormData.append('submission_page', this.state.fields.submission_page)
      bodyFormData.append('utm_source', this.state.fields.utm_source)
      bodyFormData.append('utm_medium', this.state.fields.utm_medium)
      bodyFormData.append('utm_campaign', this.state.fields.utm_campaign)
      bodyFormData.append('utm_term', this.state.fields.utm_term)
      bodyFormData.append('utm_content', this.state.fields.utm_content)
      bodyFormData.append('gclid', this.state.fields.gclid)

      axios.post(formLink, bodyFormData, Helpers.fileConfig).then((res) => {
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
                whoareyou: '',
                message: '',
                address: '',
                suburb: '',
                state: '',
                postcode: '',
                quantity: '',
                file: '',
                leadsource: 'Website',
                pageURL: this.props.location,
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
              }
            })
          }, 800);
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
    const { submitActive } = this.state;
	var getUrlParameter = function getUrlParameter(sParam) {
		var sPageURL = window.location.search.substring(1),
			sURLVariables = sPageURL.split('&'),
			sParameterName,
			i;

		for (i = 0; i < sURLVariables.length; i++) {
			sParameterName = sURLVariables[i].split('=');

			if (sParameterName[0] === sParam) {
				return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
			}
		}
	};
	
	var pre_submission = function pre_submission() {
		var pre_submission_page = '';
		return pre_submission_page;
	};	
	
	var submission_page = function submission_page() {
		var submission_page_url = window.location.href;
		return submission_page_url;
	};	
	
	if (typeof window !== `undefined`){
	this.state.fields.external_referral_site = pre_submission();
	this.state.fields.landing_page = pre_submission();
	this.state.fields.pre_submission_page = pre_submission();
	this.state.fields.submission_page = submission_page();
	this.state.fields.utm_source = getUrlParameter('utm_source');
	this.state.fields.utm_medium = getUrlParameter('utm_medium');
	this.state.fields.utm_campaign = getUrlParameter('utm_campaign');
	this.state.fields.utm_term = getUrlParameter('utm_term');
	this.state.fields.utm_content = getUrlParameter('utm_content');
	this.state.fields.gclid = getUrlParameter('gclid');	
	}
	
    return (
      <form className={submitActive ? 'contact__form loading' : 'contact__form'} id="quote__form" type="POST" onSubmit={ this.handleSubmit } noValidate>
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
                <input aria-label="Lastname" type="text" name="lastname" id="lastname" placeholder="Enter your last name" className="noEmpty" value={this.state.fields.lastname || ''} onChange={ this.handleInputChange } />
                {this.state.errors.lastname !== '' && <span className='error'>{this.state.errors.lastname}</span>}
              </div>
            </div>
          </div>
        </div>
        <div className="form_group">
          <label htmlFor="company">Company</label>
          <div className="form_input">
            <input aria-label="company" type="text" name="company" id="company" placeholder="Enter your company name" value={this.state.fields.company || ''} onChange={ this.handleInputChange } />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="form_group">
              <label htmlFor="address">address</label>
              <div className="form_input">
                <input aria-label="address" type="text" name="address" id="address" placeholder="Enter your address" value={this.state.fields.address || ''} onChange={ this.handleInputChange } />
                {this.state.errors.address !== '' && <span className='error'>{this.state.errors.address}</span>}
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form_group">
              <label htmlFor="suburb">suburb</label>
              <div className="form_input">
                <input aria-label="suburb" type="text" name="suburb" id="suburb" placeholder="Enter your suburb" value={this.state.fields.suburb || ''} onChange={ this.handleInputChange } />
                {this.state.errors.suburb !== '' && <span className='error'>{this.state.errors.suburb}</span>}
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
              <label htmlFor="postcode">postcode</label>
              <div className="form_input">
                <input aria-label="postcode" type="text" name="postcode" id="postcode" placeholder="Enter postcode" value={this.state.fields.postcode || ''} onChange={ this.handleInputChange } />
                {this.state.errors.postcode !== '' && <span className='error'>{this.state.errors.postcode}</span>}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="form_group">
              <label htmlFor="email">Email *</label>
              <div className="form_input">
                <input aria-label="email" className="noEmpty" type="email" name="email" id="email" placeholder="Enter your email" value={this.state.fields.email || ''} onChange={ this.handleInputChange } />
                {this.state.errors.email !== '' && <span className='error'>{this.state.errors.email}</span>}
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form_group">
              <label htmlFor="phone">Phone *</label>
              <div className="form_input">
                <input aria-label="phone" className="noEmpty" type="text" name="phone" id="phone" placeholder="Enter your phone number" value={this.state.fields.phone || ''} onChange={ this.handleInputChange } />
                {this.state.errors.phone !== '' && <span className='error'>{this.state.errors.phone}</span>}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="form_group">
              <label htmlFor="whoareyou">are you a/an</label>
              <div className="form_input">
                <select name="whoareyou" id="whoareyou" value={this.state.fields.whoareyou || ''} onChange={ this.handleInputChange }>
                  <option value="default">- Select -</option>
                  <option value="Architect/Specifier">Architect/Specifier</option>
                  <option value="Builder">Builder</option>
                  <option value="Contractor/Carpenter">Contractor/Carpenter</option>
                  <option value="Individual/Owner Builder">Individual/Owner Builder</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form_group">
              <label htmlFor="quantity">Approx. Quantity of material in m2 or lm?</label>
              <div className="form_input">
                <input aria-label="quantity" type="text" name="quantity" id="quantity" placeholder="Enter your quantity name" value={this.state.fields.quantity || ''} onChange={ this.handleInputChange } />
                {this.state.errors.quantity !== '' && <span className='error'>{this.state.errors.quantity}</span>}
              </div>
            </div>
          </div>
        </div>
        <div className="form_group">
          <label htmlFor="message">Comments/Enquiry</label>
          <div className="form_input">
            <textarea aria-label="Message" id="message" placeholder="Please describe your requirments here..." name="message" value={this.state.fields.message || ''} onChange={ this.handleInputChange } />
          </div>
        </div>
        <div className="form_group">
          <div className="file__wrapper">
            <label htmlFor="file">Attach File <br /><span className="info">(If you have architectural drawings or an image of what you're trying to achieve, please attach here.)</span></label>
            <div className={(this.state.fields.file !== '') ? 'file__holder active' : 'file__holder'}>
              <input type="file" name="file" id="file" onChange={ this.handleFileInput } />
              <label className="custom-file-label" htmlFor="file">{ this.state.fileName}</label>
            </div>
            {this.state.errors.file !== '' && <span className='error'>{this.state.errors.file}</span>}
          </div>
        </div>
		<div style={{ display: `none` }}>
	<input type="hidden" name="external_referral_site" value={ pre_submission() || ''} />

	<input type="hidden" name="landing_page" value={ pre_submission() || ''} />

	<input type="hidden" name="pre_submission_page" value={ pre_submission() || ''} />

	<input type="hidden" name="submission_page" value={ if (typeof window !== `undefined`){	window.location.href } || ''} />

	<input type="hidden" name="utm_source" value={ if (typeof window !== `undefined`){	getUrlParameter('utm_source') } || ''} />

	<input type="hidden" name="utm_medium" value={ if (typeof window !== `undefined`){	getUrlParameter('utm_medium') } || ''} />

	<input type="hidden" name="utm_campaign" value={ if (typeof window !== `undefined`){	getUrlParameter('utm_campaign') } || ''} />
	 
	<input type="hidden" name="utm_term" value={ if (typeof window !== `undefined`){	getUrlParameter('utm_term') } || ''} />
	 
	<input type="hidden" name="utm_content" value={ if (typeof window !== `undefined`){	getUrlParameter('utm_content') } || ''} />
	 
	<input type="hidden" name="gclid" value={ if (typeof window !== `undefined`){	getUrlParameter('gclid') } || ''} />
</div>
        <div className="btn_wrap">
          <button className="button" type="submit"><span className="text">Submit</span><Loader /></button>
          {this.state.mainFormMsg && <span className={`form-msg ${this.state.mainFormState}`}>{ this.state.mainFormMsg }</span>}
        </div>
      </form>
    )
  }
}

export default RequestAQuote;
