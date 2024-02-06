/* import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  contactForm!: FormGroup;


  cconstructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: [''],
      subject: [''],
      email: [''],
   phone: [''],
      message: ['']
    });
  }/* 

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      subject: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      message: ['', Validators.required]
    });
  } */

 







/* 
onSubmit(): void {
  // Configure email options
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // Email service provider (e.g., Gmail)
    auth: {
      user: 'your-email@gmail.com', // Your email address
      pass: 'your-email-password' // Your email password
    }
  });

  // Email data
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'recipient@example.com', // Recipient's email address
    subject: 'Message from Contact Form',
    text: `Name: ${this.contactForm.value.name}\nMessage: ${this.contactForm.value.message}`
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent successfully:', info.response);
    }
  });
}

}
 */ 

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactForm!: FormGroup;
 /*  status!: string;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      phone: ['', Validators.required],
      message: ['', Validators.required]
    });
  }
  onSubmit(): void {
    // Configure email options
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // Email service provider (e.g., Gmail)
      auth: {
        user: 'your-email@gmail.com', // Your email address
        pass: 'your-email-password' // Your email password
      }
    });
  
    // Email data
    const mailOptions = {
      from: 'your-email@gmail.com',
      to: 'recipient@example.com', // Recipient's email address
      subject: 'Message from Contact Form',
      text: `Name: ${this.contactForm.value.name}\nMessage: ${this.contactForm.value.message}`
    };
  
    transporter.sendMail(mailOptions, (error: Error | null, info: nodemailer.SentMessageInfo) => {
      if (error) {
        console.error('Error sending email:', error);
        // Handle the error accordingly
      } else {
        console.log('Email sent:', info.response);
        // Handle the successful email sending
      }
    }); */
/*   onSubmit() {
    const formData = new FormData();
    formData.append('name', this.contactForm.value.name);
    formData.append('email', this.contactForm.value.email);
    formData.append('subject', this.contactForm.value.subject);
    formData.append('phone', this.contactForm.value.phone);
    formData.append('message', this.contactForm.value.message);
    formData.append('access_key', 'YOUR_ACCESS_KEY_HERE');
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    this.http.post('https://api.web3forms.com/submit', json, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).subscribe(result => {
      if (result.success) {
        this.status = 'Thank you for contacting us!';
      } else {
     }   this.status = 'Something went wrong, please try again.';
      }
    });
  } */


userform!:FormGroup;

  constructor(    private userserv:UserService  , private fb:FormBuilder , private router: Router){
  }
  ngOnInit(): void {
  
  this.userform = this.fb.group( 
   
    {                                                                    
          
      firstname: ['', [Validators.required , 
        Validators.minLength(3) ,Validators.maxLength(50)] ],
      lastname: [''  ,  ], 
      email: ['', [Validators.email] ] ,  

     }
  );

    ;
  }

save(){
  console.log(this.userform.value);

  this.userserv.addUser(this.userform.value);
  this.router.navigate(['']);
}


}
