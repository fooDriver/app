const uiSchema = {
  "firstName": {
    "ui:autofocus": true,
    "ui:emptyValue": ""
  },
  "username": {
    "ui:options": {
      inputType: 'email'
    }
  },
  "password": {
    "ui:widget": "password",
    "ui:help": "Hint: Make it strong!"
  }
}

export default uiSchema;