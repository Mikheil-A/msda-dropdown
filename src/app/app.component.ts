import {Component} from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  navigationItems = [
    {
      itemName: 'products',
      dropdownData: [
        {
          headline: 'accept payments',
          products: [
            {
              iconUrl: 'https://stripe.com/favicon.ico',
              title: 'Payments',
              description: 'Full platform for online payments'
            },
            {
              iconUrl: 'https://stripe.com/favicon.ico',
              title: 'Terminal',
              description: 'Programmable in-person payments'
            },
            {
              iconUrl: 'https://stripe.com/favicon.ico',
              title: 'Radar',
              description: 'Fraud prevention with machine learning'
            }
          ]
        },
        {
          headline: 'business model',
          products: [
            {
              iconUrl: 'https://stripe.com/favicon.ico',
              title: 'Billing',
              description: 'Smart invoicing & subscription management'
            },
            {
              iconUrl: 'https://stripe.com/favicon.ico',
              title: 'Connect',
              description: 'Multi-party payments for platforms & marketplaces'
            },
            {
              iconUrl: 'https://stripe.com/favicon.ico',
              title: 'Radar',
              description: 'Fraud prevention with machine learning'
            }
          ]
        }
      ]
    },
    {
      itemName: 'developers',
      dropdownData: [
        {
          headline: 'accept payments',
          products: [
            {
              iconUrl: 'https://stripe.com/favicon.ico',
              title: 'Payments',
              description: 'Full platform for online payments'
            },
            {
              iconUrl: 'https://stripe.com/favicon.ico',
              title: 'Terminal',
              description: 'Programmable in-person payments'
            }
          ]
        }
      ]
    },
    {
      itemName: 'company',
      dropdownData: [
        {
          headline: 'business model',
          products: [
            {
              iconUrl: 'https://stripe.com/favicon.ico',
              title: 'Billing',
              description: 'Smart invoicing & subscription management'
            },
            {
              iconUrl: 'https://stripe.com/favicon.ico',
              title: 'Connect',
              description: 'Multi-party payments for platforms & marketplaces'
            },
            {
              iconUrl: 'https://stripe.com/favicon.ico',
              title: 'Radar',
              description: 'Fraud prevention with machine learning'
            }
          ]
        }
      ]
    }
  ];


  constructor() {
  }
}
