import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  // Create a FormGroup instance to represent the form model
  checkoutForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
    country: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    address1: new FormControl('', Validators.required),
    address2: new FormControl(''),
    postalCode: new FormControl('', Validators.required),
    company: new FormControl(''),
    createAccount: new FormControl(false)
  });

  // A variable to store the message sent confirmation
  messageSent = false;

  constructor() { }

  ngOnInit(): void {
  }

  // A method to handle the form submission
  onSubmit() {
    // Check if the form is valid
    if (this.checkoutForm.valid) {
      // Get the form values
      const formData = this.checkoutForm.value;
      // Send an email to yourself using a PHP script or any other method
      // You can find some examples here: [1](https://nappot.com/check-out-reminder-9-email-samples/), [2](https://homelet.co.uk/tenants/tips-for-tenants/a-comprehensive-guide-to-the-checkout-process), [3](https://www.oxfordlearnersdictionaries.com/definition/english/check-out)
      // Set the message sent confirmation to true
      this.messageSent = true;
      // Reset the form
      this.checkoutForm.reset();
    }
  }

}