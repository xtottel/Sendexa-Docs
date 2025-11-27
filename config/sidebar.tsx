import { HugeiconsIcon } from '@hugeicons/react';
import {
  CallRinging04Icon,
  Certificate01Icon,
  ContactBookIcon,
  CpuChargeIcon,
  CreditCardIcon,
  LockKeyIcon,
  Mail01Icon,
  Message01Icon,
  NotificationSquareIcon,
  ServerStack03Icon,
  StartUp02Icon,
  ToolsIcon,
  TransactionHistoryIcon,
  WhatsappBusinessIcon,
} from '@hugeicons/core-free-icons';

export const sidebarNav = [
  {
    title: 'Getting Started',
    icon: <HugeiconsIcon icon={StartUp02Icon} />,
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
    icon: <HugeiconsIcon icon={CpuChargeIcon} />,
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
    icon: <HugeiconsIcon icon={ToolsIcon} />,
    defaultOpen: false,
    pages: [
      { title: 'Sendexa UIs', href: '/docs/tools/exa-ui' },
      { title: 'Playground', href: '/docs/tools/playground' },
      { title: 'CLI Tool', href: '/docs/tools/cli' },
    ],
  },

  // ------------------------------------------------------
  // CREDIT + BILLING
  // ------------------------------------------------------
  {
    title: 'Credit & Billing',
    icon: <HugeiconsIcon icon={CreditCardIcon} />,
    defaultOpen: false,
    pages: [
      { title: 'Overview', href: '/docs/billing/overview' },
      { title: 'Check Balance', href: '/docs/billing/balance' },
      { title: 'Top-Up Credits', href: '/docs/billing/topup' },
      { title: 'Transaction History', href: '/docs/billing/transactions' },
    ],
  },

  {
    title: 'Phonebook',
    icon: <HugeiconsIcon icon={ContactBookIcon} />,
    defaultOpen: false,
    pages: [
      { title: 'Overview', href: '/docs/phonebook/overview' },
      { title: 'Contact', href: '/docs/phonebook/contact' },
      { title: 'Group', href: '/docs/phonebook/group' },
      { title: 'Webhooks', href: '/docs/phonebook/webhooks' },
      { title: 'API Reference', href: '/docs/phonebook/v1' },
    ],
  },
  // ------------------------------------------------------
  // LOOKUP API
  // ------------------------------------------------------
  {
    title: 'Lookup API',
    icon: <HugeiconsIcon icon={Certificate01Icon} />,
    defaultOpen: false,
    pages: [
      { title: 'Overview', href: '/docs/lookup/overview' },
      { title: 'Carrier Lookup', href: '/docs/lookup/carrier' },
      { title: 'Validate Number', href: '/docs/lookup/validate' },
      { title: 'Email Verification', href: '/docs/lookup/email-verification' },
      { title: 'Line Type Detection', href: '/docs/lookup/line-type' },
      { title: 'API Reference', href: '/docs/lookup/v1' },
    ],
  },

  // ------------------------------------------------------
  // SMS API
  // ------------------------------------------------------
  {
    title: 'SMS API',
    icon: <HugeiconsIcon icon={Message01Icon} />,
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
  // SMPP API
  // ------------------------------------------------------
  {
    title: 'SMPP Direct',
    icon: <HugeiconsIcon icon={ServerStack03Icon} />,
    defaultOpen: false,
    pages: [
      { title: 'Overview', href: '/docs/smpp/overview' },
      { title: 'Connect to SMPP', href: '/docs/smpp/connect' },
      { title: 'Send SMS via SMPP', href: '/docs/smpp/send' },
      { title: 'Delivery Reports', href: '/docs/smpp/dlr' },
      { title: 'Webhooks', href: '/docs/smpp/webhooks' },
      { title: 'API Reference', href: '/docs/smpp/v1' },
    ],
  },

  // ------------------------------------------------------
  // OTP / VERIFY API
  // ------------------------------------------------------
  {
    title: 'Verify API',
    icon: <HugeiconsIcon icon={LockKeyIcon} />,
    defaultOpen: false,
    pages: [
      { title: 'Overview', href: '/docs/verify/overview' },
      { title: 'Request OTP', href: '/docs/verify/request' },
      { title: 'Verify OTP', href: '/docs/verify/verify' },
      { title: 'Resend OTP', href: '/docs/verify/resend' },
      { title: 'Webhooks', href: '/docs/verify/webhooks' },
      { title: 'API Reference', href: '/docs/verify/v1' },
    ],
  },

  // ------------------------------------------------------
  // PUSH API
  // ------------------------------------------------------
  {
    title: 'Push API',
    icon: <HugeiconsIcon icon={NotificationSquareIcon} />,
    defaultOpen: false,
    pages: [
      { title: 'Overview', href: '/docs/push/overview' },
      { title: 'Send Push', href: '/docs/push/send' },
      { title: 'Manage Devices', href: '/docs/push/devices' },
      { title: 'API Reference', href: '/docs/push/v1' },
    ],
  },

  // ------------------------------------------------------
  // VOICE API
  // ------------------------------------------------------
  {
    title: 'Voice API',
    icon: <HugeiconsIcon icon={CallRinging04Icon} />,
    defaultOpen: false,
    pages: [
      { title: 'Overview', href: '/docs/voice/overview' },
      { title: 'Make a Call', href: '/docs/voice/make-call' },
      { title: 'Text-to-Speech (TTS)', href: '/docs/voice/tts' },
      { title: 'IVR', href: '/docs/voice/ivr' },
      { title: 'Call Events & Webhooks', href: '/docs/voice/webhooks' },
      { title: 'API Reference', href: '/docs/voice/v1' },
    ],
  },

  // ------------------------------------------------------
  // EMAIL API
  // ------------------------------------------------------
  {
    title: 'Email API',
    icon: <HugeiconsIcon icon={Mail01Icon} />,
    defaultOpen: false,
    pages: [
      { title: 'Overview', href: '/docs/email/overview' },
      { title: 'Send Email', href: '/docs/email/send' },
      { title: 'Templates', href: '/docs/email/templates' },
      { title: 'Attachments', href: '/docs/email/attachments' },
      { title: 'Webhooks', href: '/docs/email/webhooks' },
      { title: 'API Reference', href: '/docs/email/v1' },
    ],
  },

  // ------------------------------------------------------
  // WHATSAPP API
  // ------------------------------------------------------
  {
    title: 'WhatsApp API',
    icon: <HugeiconsIcon icon={WhatsappBusinessIcon} />,
    defaultOpen: false,
    pages: [
      { title: 'Overview', href: '/docs/whatsapp/overview' },
      { title: 'Send Message', href: '/docs/whatsapp/send' },
      { title: 'Broadcasts', href: '/docs/whatsapp/broadcasts' },
      { title: 'Contacts', href: '/docs/whatsapp/contacts' },
      { title: 'Templates', href: '/docs/whatsapp/templates' },
      { title: 'Webhooks', href: '/docs/whatsapp/webhooks' },
      { title: 'API Reference', href: '/docs/whatsapp/v1' },
    ],
  },

  {
    title: 'Changelog',
    icon: <HugeiconsIcon icon={TransactionHistoryIcon} />,
    defaultOpen: false,
    href: '/docs/changelog',
    pages: [],
  },
];
