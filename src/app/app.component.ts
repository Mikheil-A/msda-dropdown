import {Component} from '@angular/core';
import construct = Reflect.construct;


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
          headline: 'ACCEPT PAYMENTS',
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
          headline: 'BUSINESS MODELS',
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
      dropDownData: []
    },
    {
      itemName: 'company',
      dropDownData: []
    }
  ];

  dropdownData = [
    // left vertical side (white background)
    [
      {
        headline: 'ACCEPT PAYMENTS',
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
        headline: 'BUSINESS MODELS',
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
    ],

    // right vertical side (gray background)
    [
      {
        headline: 'MOVE MONEY',
        products: [
          {
            iconUrl: 'https://stripe.com/favicon.ico',
            title: 'Payouts',
            description: 'Fast payouts for global platforms'
          },
          {
            iconUrl: 'https://stripe.com/favicon.ico',
            title: 'Issuing',
            description: 'Toolkit for creating & managing cards'
          }
        ]
      },
      {
        headline: 'FINANCIAL SERVICES',
        products: [
          {
            iconUrl: 'https://stripe.com/favicon.ico',
            title: 'Corporate Card',
            description: 'Corporate cards & expense management'
          },
          {
            iconUrl: 'https://stripe.com/favicon.ico',
            title: 'Capital',
            description: 'Flexible financing in as little as one day'
          }
        ]
      },
      {
        headline: 'BUSINESS OPERATIONS',
        products: [
          {
            iconUrl: 'https://stripe.com/favicon.ico',
            title: 'Atlas',
            description: 'Incorporation for startups'
          },
          {
            iconUrl: 'https://stripe.com/favicon.ico',
            title: 'Sigma',
            description: 'Advanced business analytics & reporting'
          }
        ]
      }
    ]
  ];


  constructor() {

  }
}
