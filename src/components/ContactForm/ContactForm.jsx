import { useState } from "react";
import { HeaderBP, FooterBP } from "../Home/HeaderFooter"

const ContactForm = (props) =>{
    const [formData, setFormData] = useState({ fname: "", email: "", phone: "", comment: "" });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        if(e.target.name == "phone"){
            var v = e.target.value;
            if(v.match(/^([\d]{10})$/)){
                e.target.value = "("+v.substring(0,3)+") "+v.substring(3,6)+"-"+v.substring(6)
            }
        }
        setFormData({ ...formData, [e.target.name]: e.target.value })
        setErrors({ ...errors, [e.target.name]: "" })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(validate()){
            console.log("Submitted:",formData);
            alert("Thank you for your feedback");
            setFormData({fname: "",email:"",phone:"",comment:""})
        }
        
    }

    const validate = () =>{
        const newErrors = {};
        // name not empty
        
        if (!formData.fname.trim()) newErrors.fname = "Name is required";
        // valid email
        if (!formData.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) newErrors.email = "Must be valid email" 
        //valid phone
        if (!formData.phone.match(/^\([\d]{3}\) [\d]{3}-[\d]{4}$/)) newErrors.phone = "Must be U.S. Phone number only"
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0
    }

    return (
        <>
            <HeaderBP />
        <div className="contact">
        <div className="wrapper">
        <form onSubmit={handleSubmit} className="contact__form">
            <FormItem data={formData} errors={errors} handlechange={handleChange} name='Name' type='input' id='fname'/>
            <FormItem data={formData} errors={errors} handlechange={handleChange} name='Email' type='input' id='email'/>
            <FormItem data={formData} errors={errors} handlechange={handleChange} name='Phone' type='input' id='phone'/>
            <FormItem data={formData} errors={errors} handlechange={handleChange} name='Comment' type='textarea' id='comment'/>
            
            
            <button type="submit" className="contact__submit">
                Submit
            </button>
            
        </form>
        </div>
        </div>
        <FooterBP />
            
          </>
    );
};

const FormItem = (props) =>{
    
    return (
        <div className="contact__item">
        <label className="contact__label" htmlFor={props.id}>
                {props.name}:
        </label>
        <props.type
            id={props.id}
            name={props.id}
            value={props.data[props.id]}
            onChange={props.handlechange}
            className="contact__input"
        />
        {props.errors[props.id] && <span className="contact__error">{props.errors[props.id]}</span>}
        </div>
            
    )
}
export default ContactForm;