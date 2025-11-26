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

  'core/overview': [
    {
      title: 'Core Concepts Overview',
      href: '/docs/core/overview',
      pages: [
        {
          title: 'Understanding the Platform',
          href: '/docs/core/overview#understanding-the-platform',
        },
        {
          title: 'Key Components',
          href: '/docs/core/overview#key-components',
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
          title: 'Global Limits',
          href: '/docs/core/rate-limits#global-limits',
        },
        {
          title: 'Per-Endpoint Limits',
          href: '/docs/core/rate-limits#per-endpoint-limits',
        },
        {
          title: 'Exceeding the Limit',
          href: '/docs/core/rate-limits#exceeding-the-limit',
        },
        {
          title: 'Best Practices',
          href: '/docs/core/rate-limits#best-practices',
        },
        {
          title: 'Contact for Upgrades',
          href: '/docs/core/rate-limits#contact-for-upgrades',
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
          title: 'Common Error Codes',
          href: '/docs/core/errors#common-error-codes',
        },
        {
          title: 'Validation Errors',
          href: '/docs/core/errors#validation-errors',
        },
        {
          title: 'Provider Errors',
          href: '/docs/core/errors#provider-errors',
        },
        {
          title: 'Handling Errors Properly',
          href: '/docs/core/errors#handling-errors-properly',
        },
        {
          title: 'Dashboard Error Logs',
          href: '/docs/core/errors#dashboard-error-logs',
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
          title: 'Setting Up a Webhook',
          href: '/docs/core/webhooks#setting-up-a-webhook',
        },
        {
          title: 'Delivery Report Payload',
          href: '/docs/core/webhooks#delivery-report-payload',
        },
        {
          title: 'Security & Verification',
          href: '/docs/core/webhooks#security-verification',
        },
        {
          title: 'Responding to Webhooks',
          href: '/docs/core/webhooks#responding-to-webhooks',
        },
        {
          title: 'Retry Logic',
          href: '/docs/core/webhooks#retry-logic',
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
