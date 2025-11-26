type TocPage = {
  title: string;
  href: string;
};

type TocSection = {
  title: string;
  href: string;
  pages?: TocPage[];
};

type TocData = {
  [key: string]: TocSection[];
};

// Your TocData object with the correct types
export const TocData: TocData = {
  'getting-started/overview': [
    {
      title: 'Overview',
      href: '/docs/getting-started/overview',
      pages: [
        {
          title: 'What is Sendexa',
          href: '/docs/getting-started/overview#what-is-sendexa',
        },
        {
          title: 'Why Sendexa',
          href: '/docs/getting-started/overview#why-sendexa',
        },
        {
          title: 'Core API Categories',
          href: '/docs/getting-started/overview#core-api-categories',
        },
        {
          title: 'Base URLs',
          href: '/docs/getting-started/overview#base-urls',
        },
        {
          title: 'Authentication',
          href: '/docs/getting-started/overview#authentication',
        },
        {
          title: 'What You Can Do',
          href: '/docs/getting-started/overview#what-you-can-do',
        },
        {
          title: 'Next Steps',
          href: '/docs/getting-started/overview#next-steps',
        },
      ],
    },
  ],
  'getting-started/quickstart': [
    {
      title: 'Quickstart Guide',
      href: '/docs/getting-started/quickstart',
      pages: [
        {
          title: 'Get Your API Token',
          href: '/docs/getting-started/quickstart#1-get-your-api-token',
        },
        {
          title: 'Base URL',
          href: '/docs/getting-started/quickstart#2-base-url',
        },
        {
          title: 'Send Your First SMS',
          href: '/docs/getting-started/quickstart#3-send-your-first-sms',
        },
        {
          title: 'Example cURL Request',
          href: '/docs/getting-started/quickstart#4-example-curl-request',
        },
        {
          title: 'Response Structure',
          href: '/docs/getting-started/quickstart#5-response-structure',
        },
        {
          title: 'Troubleshooting',
          href: '/docs/getting-started/quickstart#6-troubleshooting',
        },
      ],
    },
  ],
  'getting-started/authentication': [
    {
      title: 'Authentication',
      href: '/docs/getting-started/authentication',
      pages: [
        {
          title: 'How Authentication Works',
          href: '/docs/getting-started/authentication#how-authentication-works',
        },
        {
          title: 'Creating an API Token',
          href: '/docs/getting-started/authentication#creating-an-api-token',
        },
        {
          title: 'Using Tokens in API Requests',
          href: '/docs/getting-started/authentication#using-tokens-in-api-requests',
        },
        {
          title: 'Token Scopes (Coming Soon)',
          href: '/docs/getting-started/authentication#token-scopes-coming-soon',
        },
        {
          title: 'Securing Your Tokens',
          href: '/docs/getting-started/authentication#securing-your-tokens',
        },
        {
          title: 'Rotating or Revoking Tokens',
          href: '/docs/getting-started/authentication#rotating-or-revoking-tokens',
        },
        {
          title: 'Testing Authentication',
          href: '/docs/getting-started/authentication#testing-authentication',
        },
      ],
    },
  ],
  'billing/overview': [
    {
      title: 'Billing Overview',
      href: '/docs/billing/overview',
      pages: [
        {
          title: 'How Billing Works',
          href: '/docs/billing/overview#how-billing-works',
        },
        {
          title: 'Credit System',
          href: '/docs/billing/overview#credit-system',
        },
        {
          title: 'Payment Methods',
          href: '/docs/billing/overview#payment-methods',
        },
        {
          title: 'Auto Top-Up',
          href: '/docs/billing/overview#auto-top-up',
        },
        {
          title: 'Billing Dashboard',
          href: '/docs/billing/overview#billing-dashboard',
        },
        {
          title: 'Invoice & Receipts',
          href: '/docs/billing/overview#invoice--receipts',
        },
        {
          title: 'Support',
          href: '/docs/billing/overview#support',
        },
      ],
    },
  ],
  'billing/balance': [
    {
      title: 'Check Balance',
      href: '/docs/billing/balance',
      pages: [
        {
          title: 'API Endpoint',
          href: '/docs/billing/balance#api-endpoint',
        },
        {
          title: 'Request Example',
          href: '/docs/billing/balance#request-example',
        },
        {
          title: 'Response Structure',
          href: '/docs/billing/balance#response-structure',
        },
        {
          title: 'Error Responses',
          href: '/docs/billing/balance#error-responses',
        },
        {
          title: 'Check Balance in Dashboard',
          href: '/docs/billing/balance#check-balance-in-dashboard',
        },
        {
          title: 'Low Balance Alerts',
          href: '/docs/billing/balance#low-balance-alerts',
        },
        {
          title: 'Best Practices',
          href: '/docs/billing/balance#best-practices',
        },
        {
          title: 'Support',
          href: '/docs/billing/balance#support',
        },
      ],
    },
  ],
  'billing/topup': [
    {
      title: 'Top-Up Credits',
      href: '/docs/billing/topup',
      pages: [
        {
          title: 'Top-Up Methods',
          href: '/docs/billing/topup#top-up-methods',
        },
        {
          title: 'Dashboard Top-Up',
          href: '/docs/billing/topup#dashboard-top-up',
        },
        {
          title: 'API Top-Up',
          href: '/docs/billing/topup#api-top-up',
        },
        {
          title: 'Request Example',
          href: '/docs/billing/topup#request-example',
        },
        {
          title: 'Request Parameters',
          href: '/docs/billing/topup#request-parameters',
        },
        {
          title: 'Response Structure',
          href: '/docs/billing/topup#response-structure',
        },
        {
          title: 'Payment Flow',
          href: '/docs/billing/topup#payment-flow',
        },
        {
          title: 'Webhook Notification',
          href: '/docs/billing/topup#webhook-notification',
        },
        {
          title: 'Error Responses',
          href: '/docs/billing/topup#error-responses',
        },
        {
          title: 'Minimum Top-Up Amounts',
          href: '/docs/billing/topup#minimum-top-up-amounts',
        },
        {
          title: 'Auto Top-Up',
          href: '/docs/billing/topup#auto-top-up',
        },
        {
          title: 'Support',
          href: '/docs/billing/topup#support',
        },
      ],
    },
  ],

  'core/errors': [
    {
      title: 'Error Handling',
      href: '/docs/core/errors',
      pages: [
        {
          title: 'Error Response Format',
          href: '/docs/core/errors#error-response-format',
        },
        {
          title: 'HTTP Status Codes',
          href: '/docs/core/errors#http-status-codes',
        },
        {
          title: 'Common Error Codes',
          href: '/docs/core/errors#common-error-codes',
        },
        {
          title: 'Authentication Errors',
          href: '/docs/core/errors#authentication-errors',
        },
        {
          title: 'Validation Errors',
          href: '/docs/core/errors#validation-errors',
        },
        {
          title: 'Business Logic Errors',
          href: '/docs/core/errors#business-logic-errors',
        },
        {
          title: 'Rate Limiting Errors',
          href: '/docs/core/errors#rate-limiting-errors',
        },
        {
          title: 'Server Errors',
          href: '/docs/core/errors#server-errors',
        },
        {
          title: 'Error Code Reference',
          href: '/docs/core/errors#error-code-reference',
        },
        {
          title: 'Handling Errors in Your Code',
          href: '/docs/core/errors#handling-errors-in-your-code',
        },
        {
          title: 'Best Practices',
          href: '/docs/core/errors#best-practices',
        },
        {
          title: 'Testing Error Scenarios',
          href: '/docs/core/errors#testing-error-scenarios',
        },
        {
          title: 'Need Help?',
          href: '/docs/core/errors#need-help',
        },
      ],
    },
  ],
  'core/rate-limits': [
    {
      title: 'Rate Limits',
      href: '/docs/core/rate-limits',
      pages: [
        {
          title: 'Overview',
          href: '/docs/core/rate-limits#overview',
        },
        {
          title: 'Global Rate Limits',
          href: '/docs/core/rate-limits#global-rate-limits',
        },
        {
          title: 'Endpoint-Specific Limits',
          href: '/docs/core/rate-limits#endpoint-specific-limits',
        },
        {
          title: 'Rate Limit Headers',
          href: '/docs/core/rate-limits#rate-limit-headers',
        },
        {
          title: 'Rate Limit Exceeded Response',
          href: '/docs/core/rate-limits#rate-limit-exceeded-response',
        },
        {
          title: 'Best Practices',
          href: '/docs/core/rate-limits#best-practices',
        },
        {
          title: 'Advanced Strategies',
          href: '/docs/core/rate-limits#advanced-strategies',
        },
        {
          title: 'Plan-Based Limits',
          href: '/docs/core/rate-limits#plan-based-limits',
        },
        {
          title: 'Monitoring & Alerts',
          href: '/docs/core/rate-limits#monitoring--alerts',
        },
        {
          title: 'Testing Rate Limits',
          href: '/docs/core/rate-limits#testing-rate-limits',
        },
        {
          title: 'Frequently Asked Questions',
          href: '/docs/core/rate-limits#frequently-asked-questions',
        },
        {
          title: 'Need Help?',
          href: '/docs/core/rate-limits#need-help',
        },
      ],
    },
  ],
  'core/webhooks': [
    {
      title: 'Webhooks',
      href: '/docs/core/webhooks',
      pages: [
        {
          title: 'Overview',
          href: '/docs/core/webhooks#overview',
        },
        {
          title: 'How Webhooks Work',
          href: '/docs/core/webhooks#how-webhooks-work',
        },
        {
          title: 'Configuration',
          href: '/docs/core/webhooks#configuration',
        },
        {
          title: 'Event Types',
          href: '/docs/core/webhooks#event-types',
        },
        {
          title: 'SMS Events',
          href: '/docs/core/webhooks#sms-events',
        },
        {
          title: 'OTP Events',
          href: '/docs/core/webhooks#otp-events',
        },
        {
          title: 'Billing Events',
          href: '/docs/core/webhooks#billing-events',
        },
        {
          title: 'Implementing Webhook Handlers',
          href: '/docs/core/webhooks#implementing-webhook-handlers',
        },
        {
          title: 'Security',
          href: '/docs/core/webhooks#security',
        },
        {
          title: 'Retry Policy',
          href: '/docs/core/webhooks#retry-policy',
        },
        {
          title: 'Testing Webhooks',
          href: '/docs/core/webhooks#testing-webhooks',
        },
        {
          title: 'Monitoring & Debugging',
          href: '/docs/core/webhooks#monitoring--debugging',
        },
        {
          title: 'Common Issues',
          href: '/docs/core/webhooks#common-issues',
        },
        {
          title: 'Sendexa IP Addresses',
          href: '/docs/core/webhooks#sendexa-ip-addresses',
        },
        {
          title: 'Best Practices Checklist',
          href: '/docs/core/webhooks#best-practices-checklist',
        },
        {
          title: 'Need Help?',
          href: '/docs/core/webhooks#need-help',
        },
      ],
    },
  ],

  'sms/overview': [
    {
      title: 'SMS API Overview',
      href: '/docs/sms/overview',
      pages: [
        {
          title: 'Introduction',
          href: '/docs/sms/overview#introduction',
        },
        {
          title: 'Features',
          href: '/docs/sms/overview#features',
        },
        {
          title: 'Use Cases',
          href: '/docs/sms/overview#use-cases',
        },
      ],
    },
  ],
  'sms/send': [
    {
      title: 'Send SMS',
      href: '/docs/sms/send',
      pages: [
        {
          title: 'Basic SMS',
          href: '/docs/sms/send#basic-sms',
        },
        {
          title: 'Unicode SMS',
          href: '/docs/sms/send#unicode-sms',
        },
        {
          title: 'SMS Parameters',
          href: '/docs/sms/send#sms-parameters',
        },
      ],
    },
  ],
  'verify/overview': [
    {
      title: 'Verify API Overview',
      href: '/docs/verify/overview',
      pages: [
        {
          title: 'What is OTP Verification',
          href: '/docs/verify/overview#what-is-otp-verification',
        },
        {
          title: 'How It Works',
          href: '/docs/verify/overview#how-it-works',
        },
        {
          title: 'Use Cases',
          href: '/docs/verify/overview#use-cases',
        },
      ],
    },
  ],
  'voice/overview': [
    {
      title: 'Voice API Overview',
      href: '/docs/voice/overview',
      pages: [
        {
          title: 'Introduction',
          href: '/docs/voice/overview#introduction',
        },
        {
          title: 'Capabilities',
          href: '/docs/voice/overview#capabilities',
        },
        {
          title: 'Getting Started',
          href: '/docs/voice/overview#getting-started',
        },
      ],
    },
  ],
  'email/overview': [
    {
      title: 'Email API Overview',
      href: '/docs/email/overview',
      pages: [
        {
          title: 'Introduction',
          href: '/docs/email/overview#introduction',
        },
        {
          title: 'Features',
          href: '/docs/email/overview#features',
        },
        {
          title: 'Use Cases',
          href: '/docs/email/overview#use-cases',
        },
      ],
    },
  ],
  'whatsapp/overview': [
    {
      title: 'WhatsApp API Overview',
      href: '/docs/whatsapp/overview',
      pages: [
        {
          title: 'Introduction',
          href: '/docs/whatsapp/overview#introduction',
        },
        {
          title: 'Business Account Setup',
          href: '/docs/whatsapp/overview#business-account-setup',
        },
        {
          title: 'Message Types',
          href: '/docs/whatsapp/overview#message-types',
        },
      ],
    },
  ],
  'compliance/overview': [
    {
      title: 'Compliance Overview',
      href: '/docs/compliance/overview',
      pages: [
        {
          title: 'Importance of Compliance',
          href: '/docs/compliance/overview#importance-of-compliance',
        },
        {
          title: 'Regulatory Requirements',
          href: '/docs/compliance/overview#regulatory-requirements',
        },
        {
          title: 'Best Practices',
          href: '/docs/compliance/overview#best-practices',
        },
      ],
    },
  ],
  changelog: [
    {
      title: 'Changelog',
      href: '/docs/changelog',
      pages: [
        {
          title: 'Recent Updates',
          href: '/docs/changelog#recent-updates',
        },
        {
          title: 'Version History',
          href: '/docs/changelog#version-history',
        },
        {
          title: 'Breaking Changes',
          href: '/docs/changelog#breaking-changes',
        },
      ],
    },
  ],
};
