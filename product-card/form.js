class Form {
  constructor(id) {
    this.form = document.getElementById(id);
  }

  getValues() {
    const values = {};
    const inputs = this.form.querySelectorAll("input");

    inputs.forEach((input) => {
      values[input.id] = input.value;
    });

    return values;
  }

  isValid() {
    return this.form.checkValidity();
  }

  reset() {
    this.form.reset();
  }
}

export default Form;