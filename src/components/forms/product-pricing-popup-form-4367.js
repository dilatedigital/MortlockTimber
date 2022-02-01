import React, { Component } from "react";
import axios from 'axios';
import qs from 'qs';

import Helpers from '../helpers/helpers';
import Loader from '../helpers/loader';

class ProductPricingPopupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        state: '',
        quantity: '',
        company: '',
        timberspecies: '',
        timberfinishes: '',
        battensize: '',
        battenspacing: '',
        backing: '',
        leadsource: 'Website',
        pageURL: this.props.location,
        interest: 'Proplank',
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
        state: '',
        quantity: '',
        phone: '',
        company: '',
        timberspecies: '',
        timberfinishes: '',
        battensize: '',
        battenspacing: '',
        backing: '',
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
      popupActive: false,
      selectedSpecies: null,
      leadInfoSource: null,
      pre_submission_page: "",
      external_referral_site: "",
      landing_page: "",
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.pricingPopup = this.pricingPopup.bind(this);
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
	
  handleInputChange(event) {
    const { name, value, type } = event.target;
    this.setState({
      submitActive: false,
      mainFormMsg: '',
      mainFormState: ''
    });

    if(name === 'timberspecies') {
      this.setState({
        selectedSpecies: value
      })
    }

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
    const formLink = 'https://site.mortlock.com.au/wp-json/contact-form-7/v1/contact-forms/4367/feedback';
    let isFormValid = false;
    let elements = document.querySelectorAll('.pricing__popupform .noEmpty');

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
      var leadInfo = '1) TIMBER SPECIES :-   ' + this.state.fields.timberspecies +  '     2) FINISH :-   ' + this.state.fields.timberfinishes + '     3) TIMBER BATTEN SIZE :-   ' + this.state.fields.battensize + '     4) SPACING BETWEEN BATTENS :-   ' + this.state.fields.battenspacing + '     5) ACOUSTIC BACKING :-   ' + this.state.fields.backing;

      var bodyFormData = new FormData();

      bodyFormData.append('firstname', this.state.fields.firstname)
      bodyFormData.append('lastname', this.state.fields.lastname)
      if(this.state.fields.company === '') {
        bodyFormData.append('company', 'N/A')
      } else {
        bodyFormData.append('company', this.state.fields.company)
      }
      bodyFormData.append('state', this.state.fields.state)
      bodyFormData.append('quantity', this.state.fields.quantity)
      bodyFormData.append('email', this.state.fields.email)
      bodyFormData.append('phone', this.state.fields.phone)
      bodyFormData.append('message', leadInfo)
      bodyFormData.append('leadsource', this.state.fields.leadsource)
      bodyFormData.append('pageURL', this.state.fields.pageURL)
      bodyFormData.append('interest', this.state.fields.interest)
      bodyFormData.append("downloadpdf", this.props.data.pricing_guide_download_link.link)
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
          setTimeout(() => {
            this.setState({
              popupActive: true,
              submitActive: false,
              mainFormMsg: res.data.message,
              mainFormState: res.data.status,
              fields: {
                firstname: '',
                lastname: '',
                email: '',
                phone: '',
                company: '',
                timberspecies: '',
                timberfinishes: '',
                battensize: '',
                battenspacing: '',
                backing: '',
                quantity: '',
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
			window.location = "https://www.mortlock.com.au/product-pricing-popup-thank-you/";
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

  pricingPopup = (e) => {
    e.preventDefault();
    this.setState({
      popupFormActive: !this.state.popupFormActive
    });
  }

  render() {
    const { submitActive, popupActive, popupFormActive } = this.state
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
	
    if(popupActive) {
      return (
        <div className="formsub__popup">
          <h3>Thank you!</h3>
          <p>Please click the link below to download the guide.</p>
          <a class="link" target="_blank" rel="noreferrer" href="https://site.mortlock.com.au/wp-content/uploads/2020/12/Mortlock-Timber-Product-Pricing-Guide-EMAIL.pdf">Click here to download pricing guide</a>
        </div>
      )
    } else {
      return (
        <form className={submitActive ? 'pricing__popupform loading' : 'pricing__popupform'} id="pricing__popupform" type="POST" onSubmit={ this.handleSubmit } noValidate>
          <div className="row">
            <div className="col-sm-6">
              <div className="form_group">
                <label htmlFor="firstname1">first name *</label>
                <div className="form_input">
                  <input aria-label="Firstname" className="noEmpty" type="text" name="firstname" id="firstname1" placeholder="Enter your first name" className="noEmpty" value={this.state.fields.firstname || ''} onChange={ this.handleInputChange } />
                  {this.state.errors.firstname !== '' && <span className='error'>{this.state.errors.firstname}</span>}
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form_group">
                <label htmlFor="lastname1">last name *</label>
                <div className="form_input">
                  <input aria-label="Lastname" className="noEmpty" type="text" name="lastname" id="lastname1" placeholder="Enter your last name" value={this.state.fields.lastname || ''} onChange={ this.handleInputChange } />
                  {this.state.errors.lastname !== '' && <span className='error'>{this.state.errors.lastname}</span>}
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
                <label htmlFor="company1">Company</label>
                <div className="form_input">
                  <input aria-label="Company name" type="text" name="company" id="company1" placeholder="Enter company name" value={this.state.fields.company || ''} onChange={ this.handleInputChange } />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="form_group">
                <label htmlFor="email1">Email *</label>
                <div className="form_input">
                  <input aria-label="Email" className="noEmpty" type="email" name="email" id="email1" placeholder="Enter your email address" value={this.state.fields.email || ''} onChange={ this.handleInputChange } />
                  {this.state.errors.email !== '' && <span className='error'>{this.state.errors.email}</span>}
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form_group">
                <label htmlFor="phone1">Phone *</label>
                <div className="form_input">
                  <input aria-label="Company name" className="noEmpty" type="text" name="phone" id="phone1" placeholder="Enter your phone number" value={this.state.fields.phone || ''} onChange={ this.handleInputChange } />
                  {this.state.errors.phone !== '' && <span className='error'>{this.state.errors.phone}</span>}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="form_group">
                <label htmlFor="timberspecies">Timber species *</label>
                <div className="form_input">
                  <select name="timberspecies" id="timberspecies" value={this.state.fields.timberspecies || ''} onChange={ this.handleInputChange }>
                    {this.props.finishes.species.map((product, index) => (
                      <option value={product.timber_title} key={index}>{product.timber_title}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form_group">
                <label htmlFor="timberfinishes">Finish *</label>
                <div className="form_input">
                    <select name="timberfinishes" id="timberfinishes" value={this.state.fields.timberfinishes || ''} onChange={ this.handleInputChange }>
                      <option>- Select -</option>
                      {this.props.finishes.species.map((product, index) => {
                        if(this.state.selectedSpecies === product.timber_title) {
                          return (
                            <>
                              {product.timber_finishes.map((finish, key) => {
                                return (
                                  <option value={finish.finishes_title} key={key}>{finish.finishes_title}</option>
                                )
                              })}
                            </>
                          )
                        }
                      })}
                    </select>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="form_group">
                <label htmlFor="battensize">Timber Batten Size *</label>
                <div className="form_input">
                  <select name="battensize" id="battensize" value={this.state.fields.battensize || ''} onChange={ this.handleInputChange }>
                    {this.props.battensize.batten_shapes.map((size, index) => {
                      return (
                        <optgroup label={size.shape_and_size_title} key={index}>
                          {size.shape_icons.map((text, key) => (
                            <option value={text.shape_title} key={key}>{text.shape_title}</option>
                          ))}
                        </optgroup>
                      )
                    })}
                  </select>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form_group">
                <label htmlFor="battenspacing">Spacing between battens *</label>
                <div className="form_input">
                  <select name="battenspacing" id="battenspacing" value={this.state.fields.battenspacing || ''} onChange={ this.handleInputChange }>
                    <option value="default">- Select -</option>
                    <option value="Architect/Specifier">5mm</option>
                    <option value="Builder">10mm</option>
                    <option value="Contractor/Carpenter">15mm</option>
                    <option value="Individual/Owner Builder">20mm</option>
                    <option value="Individual/Owner Builder">30mm</option>
                    <option value="Individual/Owner Builder">Custom</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="form_group">
                <label htmlFor="backing">Acoustic Backing *</label>
                <ul className="check__list custom">
                  <li>
                    <label className="custom_check" htmlFor="yes">
                      <input aria-label="yes" type="radio" name="backing" value="yes" id="yes" onChange={ this.handleInputChange } />
                      <span className="custom-box"></span>
                      <span className="custom-text">YES</span>
                    </label>
                  </li>
                  <li>
                    <label className="custom_check" htmlFor="no">
                      <input aria-label="no" type="radio" name="backing" value="no" id="no" onChange={ this.handleInputChange } />
                      <span className="custom-box"></span>
                      <span className="custom-text">NO</span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form_group">
              <label htmlFor="quantity">Approx. quantity of material in m<sup>2</sup>  or lm? *</label>
                    <div className="form_input">
                    <select
                        name="quantity"
                        id="quantity"
                        value={this.state.fields.quantity || ""}
                        onChange={this.handleInputChange}
                    >
                        <option value="">- Select -</option>
                        <option value="Under 30m²">Under 30m²</option>
                        <option value="30m² to 80m²">30m² to 80m²</option>
                        <option value="More than 80m²">More than 80m²</option>
                    </select>
                    {this.state.errors.quantity !== "" && (
                        <span className="error">{this.state.errors.quantity}</span>
                    )}
                    {this.state.fields.quantity == "Under 30m²" && (
                        <span className="error">As we are a make-to-order manufacturer, we don't supply our products for projects under 30m². <a href="https://www.mortlock.com.au/news/mortlock-timber-is-a-make-to-order-manufacturer/">Click here to read more</a>.</span>
                    )}
                    </div>
              </div>
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
            <button className="button" type="submit"><span className="text">Submit</span><Loader /></button>
            {this.state.mainFormMsg && <span className={`form-msg ${this.state.mainFormState}`}>{ this.state.mainFormMsg }</span>}
          </div>
        </form>
      )
    }
  }
}

export default ProductPricingPopupForm;
