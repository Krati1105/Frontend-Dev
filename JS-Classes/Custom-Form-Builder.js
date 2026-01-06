// Q4: Custom Form Builder (Forms + Classes)
// FormBuilder class that takes array of field objects and creates form dynamically using innerHTML.
// Add getFormData() method to return entered values on submit.

class FormBuilder {
    constructor(fields) {
        this.fields = fields;
        this.formElement = null;
    }

    // Build the form dynamically
    buildForm(containerId) {
        const container = document.getElementById(containerId);
        let formHTML = '<form id="dynamicForm">';
        this.fields.forEach(field => {
            formHTML += `<label>${field.label}: <input type="${field.type}" name="${field.name}" required></label><br>`;
        });
        formHTML += '<button type="submit">Submit</button></form>';
        container.innerHTML = formHTML;
        this.formElement = document.getElementById('dynamicForm');
        this.formElement.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log(this.getFormData());
        });
    }

    // Get form data as object
    getFormData() {
        const formData = new FormData(this.formElement);
        const data = {};
        for (let [key, value] of formData.entries()) {
            data[key] = value;
        }
        return data;
    }
}

// Example usage
const fields = [
    { type: 'text', label: 'Username', name: 'username' },
    { type: 'email', label: 'Email', name: 'email' },
    { type: 'password', label: 'Password', name: 'password' }
];

const formBuilder = new FormBuilder(fields);
// formBuilder.buildForm('formContainer'); // Uncomment and add <div id="formContainer"></div> in HTML
