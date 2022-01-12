import React, { Component } from "react"
import axios from "axios"
import qs from "qs"

import Helpers from "../helpers/helpers"
import Loader from "../helpers/loader"
import ProductPricingPopupForm from "../forms/product-pricing-popup-form-4367"

const togglePopupOverlay = () => {
  document.body.classList.toggle("popup__active")
}

class ProductPricingFormTrendplank extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fields: {
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        company: "",
        state: "",
        quantity: "",
        leadsource: "Website",
        pageURL: this.props.location,
        interest: "Unsure",
        leadinfo: "Product Pricing",
		submission_page: '',
		utm_source: '',
		utm_medium: '',
		utm_campaign: '',
		utm_term: '',
		utm_content: '',
		gclid: ''
      },
      errors: {
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        company: "",
        state: '',
        quantity: '',
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
      mainFormMsg: "",
      mainFormState: null,
      popupActive: false,
      popupFormActive: false,
      leadInfoSource: null,
      pre_submission_page: "",
      external_referral_site: "",
      landing_page: "",
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.pricingPopup = this.pricingPopup.bind(this)
    this.handleGTag = this.handleGTag.bind(this)
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
    const { name, value, type } = event.target
    this.setState({
      submitActive: false,
      mainFormMsg: "",
      mainFormState: "",
    })

    if (event.target.classList.contains("noEmpty")) {
      this.setState({
        fields: {
          ...this.state.fields,
          [name]: value,
        },
        errors: {
          ...this.state.errors,
          [name]: Helpers.formValidation(type, value).err,
        },
      })
    } else {
      this.setState({
        fields: {
          ...this.state.fields,
          [name]: value,
        },
      })
    }
  }

  handleGTag() {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push(this.props.gtag)
  }

  handleSubmit = async event => {
    event.preventDefault()
    this.setState({ submitActive: true })

    const formLink =
      "https://site.mortlock.com.au/wp-json/contact-form-7/v1/contact-forms/8509/feedback"
    let isFormValid = false
    let elements = document.querySelectorAll(".pricing__form .noEmpty")

    for (let i = 0, element; (element = elements[i++]); ) {
      if (element.value === "") {
        isFormValid = false
        setTimeout(() => {
          this.setState({
            submitActive: false,
            mainFormMsg: "Please fill in the required fields.",
            mainFormState: "error",
            errors: {
              ...this.state.errors,
              [element.name]: Helpers.formValidation(
                element.type,
                element.value
              ).err,
            },
          })
        }, 800)
      } else {
        isFormValid = true
      }
    }

    if (isFormValid) {
      var bodyFormData = new FormData()
      bodyFormData.append("firstname", this.state.fields.firstname)
      bodyFormData.append("lastname", this.state.fields.lastname)
      if (this.state.fields.company === "") {
        bodyFormData.append("company", "N/A")
      } else {
        bodyFormData.append("company", this.state.fields.company)
      }
      bodyFormData.append("state", this.state.fields.state)
      bodyFormData.append("quantity", this.state.fields.quantity)
      bodyFormData.append("email", this.state.fields.email)
      bodyFormData.append("phone", this.state.fields.phone)
      bodyFormData.append("leadsource", this.state.fields.leadsource)
      bodyFormData.append("pageURL", this.state.fields.pageURL)
      bodyFormData.append("interest", this.state.fields.interest)
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

      axios
        .post(formLink, bodyFormData, Helpers.config)
        .then(res => {
          if (res.data.status === "mail_sent") {
            this.handleGTag()
            setTimeout(() => {
              this.setState({
                popupActive: true,
                submitActive: false,
                mainFormMsg: res.data.message,
                mainFormState: res.data.status,
                fields: {
                  firstname: "",
                  lastname: "",
                  email: "",
                  phone: "",
                  company: "",
                  state: "",
                  quantity: "",
                  leadsource: "Website",
                  pageURL: this.props.location,
                  interest: "Unsure",
                  leadinfo: "Product Pricing",
				submission_page: '',
				utm_source: '',
				utm_medium: '',
				utm_campaign: '',
				utm_term: '',
				utm_content: '',
				gclid: ''	
                },
              })
            }, 800)

            setTimeout(() => {
			window.location = "https://www.mortlock.com.au/trendplank-pricing-thank-you/";
          }, 1000);
        } else if (res.data.status === "validation_failed") {
            setTimeout(() => {
              this.setState({
                submitActive: false,
                mainFormMsg: res.data.message,
                mainFormState: res.data.status,
              })
            }, 800)
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }

  pricingPopup = e => {
    e.preventDefault()
    this.setState({
      popupFormActive: !this.state.popupFormActive,
    })
    togglePopupOverlay()
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
	
    if (popupActive) {
      return (
        <div className="formsub__popup">
          <h3>Thank you!</h3>
          <p>Please click the link below to download the guide.</p>
          <a
            class="link"
            target="_blank"
            rel="noreferrer"
            href={this.props.data.pricing_guide_download_link.link}
          >
            Click here to download pricing guide
          </a>
        </div>
      )
    } else {
      return (
        <>
          <form
            className={submitActive ? "pricing__form loading trendplank-pricing-form" : "pricing__form trendplank-pricing-form"}
            id="trendplank-pricing-form"
            type="POST"
            onSubmit={this.handleSubmit}
            noValidate
          >
            <div className="row">
              <div className="col-sm-6">
                <div className="form_group">
                  <label htmlFor="firstname1">first name *</label>
                  <div className="form_input">
                    <input
                      aria-label="Firstname"
                      type="text"
                      name="firstname"
                      id="firstname1"
                      placeholder="Enter your first name"
                      className="noEmpty"
                      value={this.state.fields.firstname || ""}
                      onChange={this.handleInputChange}
                    />
                    {this.state.errors.firstname !== "" && (
                      <span className="error">
                        {this.state.errors.firstname}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form_group">
                  <label htmlFor="lastname1">last name *</label>
                  <div className="form_input">
                    <input
                      aria-label="Lastname"
                      className="noEmpty"
                      type="text"
                      name="lastname"
                      id="lastname1"
                      placeholder="Enter your last name"
                      value={this.state.fields.lastname || ""}
                      onChange={this.handleInputChange}
                    />
                    {this.state.errors.lastname !== "" && (
                      <span className="error">
                        {this.state.errors.lastname}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="form_group">
                  <label htmlFor="state">State *</label>
                  <div className="form_input">
                    <select
                      name="state"
                      id="state"
                      value={this.state.fields.state || ""}
                      onChange={this.handleInputChange}
                    >
                      <option value="">- Select -</option>
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
                    {this.state.errors.state !== "" && (
                      <span className="error">{this.state.errors.state}</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form_group">
                  <label htmlFor="company1">Company</label>
                  <div className="form_input">
                    <input
                      aria-label="Company name"
                      type="text"
                      name="company"
                      id="company1"
                      placeholder="Enter company name"
                      value={this.state.fields.company || ""}
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="form_group">
                  <label htmlFor="email1">Email *</label>
                  <div className="form_input">
                    <input
                      aria-label="Email"
                      className="noEmpty"
                      type="email"
                      name="email"
                      id="email1"
                      placeholder="Enter your email address"
                      value={this.state.fields.email || ""}
                      onChange={this.handleInputChange}
                    />
                    {this.state.errors.email !== "" && (
                      <span className="error">{this.state.errors.email}</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form_group">
                  <label htmlFor="phone1">Phone *</label>
                  <div className="form_input">
                    <input
                      aria-label="Company name"
                      className="noEmpty"
                      type="text"
                      name="phone"
                      id="phone1"
                      placeholder="Enter your phone number"
                      value={this.state.fields.phone || ""}
                      onChange={this.handleInputChange}
                    />
                    {this.state.errors.phone !== "" && (
                      <span className="error">{this.state.errors.phone}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
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
                        <span className="error">We don't typically accept projects under 30m² as our products are not normally a feasible option at smaller scales.</span>
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
              <button className="button" type="submit">
                <span className="text">Submit</span>
                <Loader />
              </button>
              {this.props.pageID === 339 && (
                <button
                  className="button blackoutline"
                  onClick={this.pricingPopup}
                >
                  know exactly what you’re looking for? click here
                </button>
              )}
              {this.state.mainFormMsg && (
                <span className={`form-msg ${this.state.mainFormState}`}>
                  {this.state.mainFormMsg}
                </span>
              )}
            </div>
          </form>
          {popupFormActive && this.props.pageID === 339 && (
            <div className="popup__wrapper">
              <button className="popup__close" onClick={this.pricingPopup}>
                <span className="text">Close</span>
                <svg
                  className="icon"
                  width="100pt"
                  height="100pt"
                  version="1.1"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m54.168 50 32.477-32.582c1.125-1.1523 1.1016-2.9922-0.050781-4.1172-1.1523-1.1211-2.9922-1.0977-4.1133 0.054688l-32.48 32.477-32.582-32.477c-1.1367-1.0469-2.8906-1.0117-3.9844 0.078125-1.0898 1.0938-1.125 2.8477-0.078125 3.9844l32.477 32.582-32.477 32.582c-0.58203 0.53906-0.91406 1.293-0.91406 2.0859 0 0.78906 0.33203 1.5469 0.91406 2.082 0.53125 0.54688 1.2656 0.85938 2.0312 0.85938s1.4961-0.3125 2.0312-0.85938l32.582-32.582 32.582 32.477c0.53906 0.58203 1.293 0.91406 2.0859 0.91406 0.78906 0 1.5469-0.33203 2.082-0.91406 0.58203-0.53516 0.91406-1.2891 0.91406-2.082s-0.33203-1.5469-0.91406-2.082z" />
                </svg>
              </button>
              <div className="popup__hold">
                <div className="container container__big">
                  <div className="popup__heading">
                    <h2>{this.props.data.pricing_title}</h2>
                  </div>
                  <div className="popup__content">
                    <div className="pricing__popupform">
                      <ProductPricingPopupForm
                        finishes={this.props.finishes}
                        battensize={this.props.battensize}
                        data={this.props.data}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )
    }
  }
}

export default ProductPricingFormTrendplank
