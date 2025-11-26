// import {
//   Rocket,
//   ToolCase,
//   MessageSquareText,
//   Mail,
//   Shield,
//   CreditCard,
//   Bell,
//   PhoneCall,
//   Cpu,
// } from 'lucide-react';

// import { FaWhatsapp } from 'react-icons/fa';

// export const sidebarNav = [
//   {
//     title: 'Getting Started',
//     icon: <Rocket className="h-5 w-5" />,
//     defaultOpen: true,
//     pages: [
//       {
//         title: 'Overview',
//         href: '/docs/getting-started/overview',
//       },
//       {
//         title: 'Quickstart',
//         href: '/docs/getting-started/quickstart',
//       },
//       {
//         title: 'Authentication',
//         href: '/docs/getting-started/authentication',
//       },
//     ],
//   },
//   {
//     title: 'Core Concepts',
//     icon: <Cpu className="h-5 w-5" />,
//     defaultOpen: false,
//     pages: [
//       {
//         title: 'Rate Limits',
//         href: '/docs/core/rate-limits',
//       },
//       {
//         title: 'Error Handling',
//         href: '/docs/core/errors',
//       },
//       {
//         title: 'Webhooks',
//         href: '/docs/core/webhooks',
//       },
//     ],
//   },
//   {
//     title: 'Developer Tools',
//     icon: <ToolCase className="h-5 w-5" />,
//     defaultOpen: false,
//     pages: [
//       {
//         title: 'Sendexa UIs',
//         href: '/docs/tools/exa-ui',
//       },
//       {
//         title: 'Playground',
//         href: '/docs/tools/playground',
//       },
//       {
//         title: 'CLI Tool',
//         href: '/docs/tools/cli',
//       },
//     ],
//   },
//   {
//     title: 'Account & Billing',
//     icon: <CreditCard className="h-5 w-5" />,
//     defaultOpen: false,
//     pages: [
//       {
//         title: 'Overview',
//         href: '/docs/billing/overview',
//       },
//       {
//         title: 'Check Balance',
//         href: '/docs/billing/balance',
//       },
//       {
//         title: 'Top-Up Credits',
//         href: '/docs/billing/topup',
//       },
//     ],
//   },
//   {
//     title: 'SMS API',
//     icon: <MessageSquareText className="h-5 w-5" />,
//     defaultOpen: false,
//     pages: [
//       {
//         title: 'Overview',
//         href: '/docs/sms/overview',
//       },
//       {
//         title: 'Send SMS',
//         href: '/docs/sms/send',
//       },
//       {
//         title: 'Delivery Reports',
//         href: '/docs/sms/dlr',
//       },
//       {
//         title: 'Webhooks',
//         href: '/docs/sms/webhooks',
//       },
//       {
//         title: 'API Reference',
//         href: '/docs/sms/v1',
//       },
//     ],
//   },
//   {
//     title: 'Verify API (OTP)',
//     icon: <Shield className="h-5 w-5" />,
//     defaultOpen: false,
//     pages: [
//       {
//         title: 'Overview',
//         href: '/docs/verify/overview',
//       },
//       {
//         title: 'Request OTP',
//         href: '/docs/verify/request',
//       },
//       {
//         title: 'Verify OTP',
//         href: '/docs/verify/verify',
//       },
//       {
//         title: 'Email OTP',
//         href: '/docs/verify/email-otp',
//       },
//       {
//         title: 'Resend OTP',
//         href: '/docs/verify/resend',
//       },
//       {
//         title: 'Webhooks',
//         href: '/docs/verify/webhooks',
//       },
//       {
//         title: 'API Reference',
//         href: '/api/verify/v1',
//       },
//     ],
//   },
//   {
//     title: 'Voice API',
//     icon: <PhoneCall className="h-5 w-5" />,
//     defaultOpen: false,
//     pages: [
//       {
//         title: 'Overview',
//         href: '/docs/voice/overview',
//       },
//       {
//         title: 'Make a Call',
//         href: '/docs/voice/make-call',
//       },
//       {
//         title: 'Text-to-Speech (TTS)',
//         href: '/docs/voice/tts',
//       },
//       {
//         title: 'IVR',
//         href: '/docs/voice/ivr',
//       },
//       {
//         title: 'Call Events & Webhooks',
//         href: '/docs/voice/webhooks',
//       },
//       {
//         title: 'API Reference',
//         href: '/api/voice/v1',
//       },
//     ],
//   },
//   {
//     title: 'Email API',
//     icon: <Mail className="h-5 w-5" />,
//     defaultOpen: false,
//     pages: [
//       {
//         title: 'Overview',
//         href: '/docs/email/overview',
//       },
//       {
//         title: 'Send Email',
//         href: '/docs/email/send',
//       },
//       {
//         title: 'Templates',
//         href: '/docs/email/templates',
//       },
//       {
//         title: 'Attachments',
//         href: '/docs/email/attachments',
//       },
//       {
//         title: 'Webhooks',
//         href: '/docs/email/webhooks',
//       },
//       {
//         title: 'API Reference',
//         href: '/api/email/v1',
//       },
//     ],
//   },
//   {
//     title: 'WhatsApp API',
//     icon: <FaWhatsapp className="h-5 w-5" />,
//     defaultOpen: false,
//     pages: [
//       {
//         title: 'Overview',
//         href: '/docs/whatsapp/overview',
//       },
//       {
//         title: 'Send Message',
//         href: '/docs/whatsapp/send',
//       },
//       {
//         title: 'Media Messages',
//         href: '/docs/whatsapp/media',
//       },
//       {
//         title: 'Broadcasts',
//         href: '/docs/whatsapp/broadcasts',
//       },
//       {
//         title: 'Contacts',
//         href: '/docs/whatsapp/contacts',
//       },
//       {
//         title: 'Templates',
//         href: '/docs/whatsapp/templates',
//       },
//       {
//         title: 'Inbound Messages',
//         href: '/docs/whatsapp/inbound',
//       },
//       {
//         title: 'Webhooks',
//         href: '/docs/whatsapp/webhooks',
//       },
//       {
//         title: 'API Reference',
//         href: '/api/whatsapp/v1',
//       },
//     ],
//   },
//   {
//     title: 'Changelog',
//     icon: <Bell className="h-5 w-5" />,
//     defaultOpen: false,
//     href: '/docs/changelog',
//     pages: [],
//   },
// ];

import {
  Rocket,
  ToolCase,
  MessageSquareText,
  Mail,
  Shield,
  CreditCard,
  Bell,
  PhoneCall,
  Cpu,
  IdCard,
  // Landmark,
} from 'lucide-react';

import { FaWhatsapp } from 'react-icons/fa';

export const sidebarNav = [
  {
    title: 'Getting Started',
    icon: <Rocket className="h-5 w-5" />,
    defaultOpen: true,
    pages: [
      { title: 'Overview', href: '/docs/getting-started/overview' },
      { title: 'Quickstart', href: '/docs/getting-started/quickstart' },
      { title: 'Authentication', href: '/docs/getting-started/authentication' },
    ],
  },

  // ------------------------------------------------------
  // CORE
  // ------------------------------------------------------
  {
    title: 'Core Concepts',
    icon: <Cpu className="h-5 w-5" />,
    defaultOpen: false,
    pages: [
      { title: 'Rate Limits', href: '/docs/core/rate-limits' },
      { title: 'Error Handling', href: '/docs/core/errors' },
      { title: 'Webhooks', href: '/docs/core/webhooks' },
      { title: 'Idempotency', href: '/docs/core/idempotency' },
    ],
  },

  // ------------------------------------------------------
  // DEVELOPER TOOLS
  // ------------------------------------------------------
  {
    title: 'Developer Tools',
    icon: <ToolCase className="h-5 w-5" />,
    defaultOpen: false,
    pages: [
      { title: 'Sendexa UIs', href: '/docs/tools/exa-ui' },
      { title: 'Playground', href: '/docs/tools/playground' },
      { title: 'CLI Tool', href: '/docs/tools/cli' },
    ],
  },

  // ------------------------------------------------------
  // ACCOUNT + BILLING
  // ------------------------------------------------------
  {
    title: 'Account & Billing',
    icon: <CreditCard className="h-5 w-5" />,
    defaultOpen: false,
    pages: [
      { title: 'Overview', href: '/docs/billing/overview' },
      { title: 'Check Balance', href: '/docs/billing/balance' },
      { title: 'Top-Up Credits', href: '/docs/billing/topup' },
      { title: 'Transaction History', href: '/docs/billing/transactions' },
    ],
  },

  {
    title: 'Phonebook API',
    icon: <IdCard className="h-5 w-5" />,
    defaultOpen: false,
    pages: [
      { title: 'Overview', href: '/docs/phonebook/overview' },

      // Contacts
      { title: 'Create Contact', href: '/docs/phonebook/create-contact' },
      { title: 'Get Contacts', href: '/docs/phonebook/list-contacts' },
      { title: 'Update Contact', href: '/docs/phonebook/update-contact' },
      { title: 'Delete Contact', href: '/docs/phonebook/delete-contact' },

      // Groups
      { title: 'Create Group', href: '/docs/phonebook/create-group' },
      { title: 'Manage Group Members', href: '/docs/phonebook/group-members' },
      { title: 'Send to Group', href: '/docs/phonebook/send-group' },

      // Reference
      { title: 'API Reference', href: '/api/phonebook/v1' },
    ],
  },
  // ------------------------------------------------------
  // SMS API
  // ------------------------------------------------------
  {
    title: 'SMS API',
    icon: <MessageSquareText className="h-5 w-5" />,
    defaultOpen: false,
    pages: [
      { title: 'Overview', href: '/docs/sms/overview' },
      { title: 'Send SMS', href: '/docs/sms/send' },
      { title: 'Delivery Reports', href: '/docs/sms/dlr' },
      { title: 'Webhooks', href: '/docs/sms/webhooks' },
      { title: 'API Reference', href: '/docs/sms/v1' },
    ],
  },

  // ------------------------------------------------------
  // OTP / VERIFY API
  // ------------------------------------------------------
  {
    title: 'Verify API (OTP)',
    icon: <Shield className="h-5 w-5" />,
    defaultOpen: false,
    pages: [
      { title: 'Overview', href: '/docs/verify/overview' },
      { title: 'Request OTP', href: '/docs/verify/request' },
      { title: 'Verify OTP', href: '/docs/verify/verify' },
      { title: 'Email OTP', href: '/docs/verify/email-otp' },
      { title: 'Resend OTP', href: '/docs/verify/resend' },
      { title: 'Webhooks', href: '/docs/verify/webhooks' },
      { title: 'API Reference', href: '/api/verify/v1' },
    ],
  },

  // ------------------------------------------------------
  // VOICE API
  // ------------------------------------------------------
  {
    title: 'Voice API',
    icon: <PhoneCall className="h-5 w-5" />,
    defaultOpen: false,
    pages: [
      { title: 'Overview', href: '/docs/voice/overview' },
      { title: 'Make a Call', href: '/docs/voice/make-call' },
      { title: 'Text-to-Speech (TTS)', href: '/docs/voice/tts' },
      { title: 'IVR', href: '/docs/voice/ivr' },
      { title: 'Call Events & Webhooks', href: '/docs/voice/webhooks' },
      { title: 'API Reference', href: '/api/voice/v1' },
    ],
  },

  // ------------------------------------------------------
  // EMAIL API
  // ------------------------------------------------------
  {
    title: 'Email API',
    icon: <Mail className="h-5 w-5" />,
    defaultOpen: false,
    pages: [
      { title: 'Overview', href: '/docs/email/overview' },
      { title: 'Send Email', href: '/docs/email/send' },
      { title: 'Templates', href: '/docs/email/templates' },
      { title: 'Attachments', href: '/docs/email/attachments' },
      { title: 'Webhooks', href: '/docs/email/webhooks' },
      { title: 'API Reference', href: '/api/email/v1' },
    ],
  },

  // ------------------------------------------------------
  // WHATSAPP API
  // ------------------------------------------------------
  {
    title: 'WhatsApp API',
    icon: <FaWhatsapp className="h-5 w-5" />,
    defaultOpen: false,
    pages: [
      { title: 'Overview', href: '/docs/whatsapp/overview' },
      { title: 'Send Message', href: '/docs/whatsapp/send' },
      { title: 'Media Messages', href: '/docs/whatsapp/media' },
      { title: 'Broadcasts', href: '/docs/whatsapp/broadcasts' },
      { title: 'Contacts', href: '/docs/whatsapp/contacts' },
      { title: 'Templates', href: '/docs/whatsapp/templates' },
      { title: 'Inbound Messages', href: '/docs/whatsapp/inbound' },
      { title: 'Webhooks', href: '/docs/whatsapp/webhooks' },
      { title: 'API Reference', href: '/api/whatsapp/v1' },
    ],
  },

  // ------------------------------------------------------
  // XTOPAY – PAYMENT APIs
  // ------------------------------------------------------
  // {
  //   title: 'Xtopay Payments',
  //   icon: <Landmark className="h-5 w-5" />,
  //   defaultOpen: false,
  //   pages: [
  //     { title: 'Overview', href: '/docs/payments/overview' },

  //     // Checkout
  //     { title: 'Hosted Checkout', href: '/docs/payments/checkout/hosted' },
  //     { title: 'Modal Checkout', href: '/docs/payments/checkout/modal' },
  //     { title: 'Redirect Flow', href: '/docs/payments/checkout/redirect' },
  //     { title: 'Webhook Events', href: '/docs/payments/checkout/webhooks' },

  //     // Charge API
  //     { title: 'Charge API', href: '/docs/payments/charge/overview' },
  //     { title: 'Mobile Money', href: '/docs/payments/charge/momo' },
  //     { title: 'Bank Cards', href: '/docs/payments/charge/cards' },
  //     { title: 'USSD', href: '/docs/payments/charge/ussd' },

  //     // Payouts
  //     { title: 'Payouts', href: '/docs/payments/payouts/overview' },
  //     { title: 'Payout Webhooks', href: '/docs/payments/payouts/webhooks' },

  //     // Verification
  //     { title: 'Transaction Verification', href: '/docs/payments/verify' },

  //     // API Reference
  //     { title: 'API Reference', href: '/api/payments/v1' },
  //   ],
  // },

  {
    title: 'Changelog',
    icon: <Bell className="h-5 w-5" />,
    defaultOpen: false,
    href: '/docs/changelog',
    pages: [],
  },
];
