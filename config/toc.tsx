
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
      title: 'Introduction',
      href: '/docs/getting-started/overview#introduction',
      pages: [
        {
          title: 'What is Sendexa',
          href: '/docs/getting-started/overview#what-is-sendexa',
        },
        {
          title: 'Key Features',
          href: '/docs/getting-started/overview#key-features',
        },
        {
          title: 'Getting Help',
          href: '/docs/getting-started/overview#getting-help',
        },
      ],
    },
  ],
  'getting-started/quickstart': [
    {
      title: 'Quick Start Guide',
      href: '/docs/getting-started/quickstart',
      pages: [
        {
          title: 'Prerequisites',
          href: '/docs/getting-started/quickstart#prerequisites',
        },
        {
          title: 'Step 1: Get API Keys',
          href: '/docs/getting-started/quickstart#step-1-getting-api-keys',
        },
        {
          title: 'Step 2: Send Your First Message',
          href: '/docs/getting-started/quickstart#step-2-send-your-first-message',
        },
        {
          title: 'Next Steps',
          href: '/docs/getting-started/quickstart#next-steps',
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
          title: 'API Keys',
          href: '/docs/getting-started/authentication#api-keys',
        },
        {
          title: 'Authentication Headers',
          href: '/docs/getting-started/authentication#authentication-headers',
        },
        {
          title: 'Bearer Token',
          href: '/docs/getting-started/authentication#bearer-token',
        },
      ],
    },
  ],
  'getting-started/api-keys': [
    {
      title: 'API Keys & Security',
      href: '/docs/getting-started/api-keys',
      pages: [
        {
          title: 'Creating API Keys',
          href: '/docs/getting-started/api-keys#creating-api-keys',
        },
        {
          title: 'Managing API Keys',
          href: '/docs/getting-started/api-keys#managing-api-keys',
        },
        {
          title: 'Security Best Practices',
          href: '/docs/getting-started/api-keys#security-best-practices',
        },
      ],
    },
  ],
  'getting-started/sdks': [
    {
      title: 'SDKs & Libraries',
      href: '/docs/getting-started/sdks',
      pages: [
        {
          title: 'Available SDKs',
          href: '/docs/getting-started/sdks#available-sdks',
        },
        {
          title: 'Installation',
          href: '/docs/getting-started/sdks#installation',
        },
        {
          title: 'Usage Examples',
          href: '/docs/getting-started/sdks#usage-examples',
        },
      ],
    },
  ],
  'getting-started/best-practices': [
    {
      title: 'Best Practices',
      href: '/docs/getting-started/best-practices',
      pages: [
        {
          title: 'General Guidelines',
          href: '/docs/getting-started/best-practices#general-guidelines',
        },
        {
          title: 'Performance Tips',
          href: '/docs/getting-started/best-practices#performance-tips',
        },
        {
          title: 'Error Handling',
          href: '/docs/getting-started/best-practices#error-handling',
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
          title: 'Understanding Rate Limits',
          href: '/docs/core/rate-limits#understanding-rate-limits',
        },
        {
          title: 'Default Limits',
          href: '/docs/core/rate-limits#default-limits',
        },
        {
          title: 'Handling Rate Limits',
          href: '/docs/core/rate-limits#handling-rate-limits',
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
          title: 'Error Responses',
          href: '/docs/core/errors#error-responses',
        },
        {
          title: 'Troubleshooting',
          href: '/docs/core/errors#troubleshooting',
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
          title: 'Setting Up Webhooks',
          href: '/docs/core/webhooks#setting-up-webhooks',
        },
        {
          title: 'Webhook Security',
          href: '/docs/core/webhooks#webhook-security',
        },
        {
          title: 'Event Types',
          href: '/docs/core/webhooks#event-types',
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
  'changelog': [
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