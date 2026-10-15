class Form {
  constructor(id) { 
    this.form = document.getElementById(id)

  }
  getValues() { 
    return { 
      name: this.form.querySelector("#name").value,
      lastName: this.form.querySelector("#lastName").value,
      dateOfBirth: this.form.querySelector("#dateOfBirth").value,
      login: this.form.querySelector("#login").value,
      password: this.form.querySelector("#password").value,
      confirmPassword: this.form.querySelector("#confirmPassword").value,
    } }
    isValid() { 
      return this.form.checkValidity();

    } 
     reset() { 
      this.form.reset();
     }
  }

  export default Form;
