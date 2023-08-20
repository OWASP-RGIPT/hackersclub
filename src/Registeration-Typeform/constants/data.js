const homeText = {
  header: 'Welcome to The Hackers Club',
  lineOne:
    'Founded in 2022, The Hackers Club is your gateway to a world of coding excellence and cybersecurity adventures.',
  lineTwo: 'Embark on an Exciting Journey',
  bulletPoints: {
    one: '- As a member, you can participate in all club activities, including coding competitions, workshops, hackathons, CTF challenges and many more.',
    two: '- To unlock this world of opportunities, a nominal membership fee of Rs.1000 for your entire course duration applies.',

  },

};


const formText = {
  Name: {
    labelText: "What's your name? *",
  },
  BranchName: {
    labelTextOne: 'and your branch name, ',
    labelTextTwo: '? *',
  },
  File: {
    labelText: "Please upload the payment screenshot"
  },
  industry: {
    labelText: 'What industry is your company in? *',
    subLabelText: 'We will personalize your learning experience accordingly',
  },
  role: {
    labelText: 'Your role in your company? *',
    subLabelText: 'We want to understand how you spend your time right now.',
    roles: [
      ['A', 'Founder or CXO'],
      ['B', 'Product team'],
      ['C', 'Marketing team'],
      ['D', 'VC'],
    ],
  },
  professionalGoal: {
    labelText: ", what's your professional goal for the next 12 months? *",
    goals: {
      founder: [
        ['A', 'Structured approach to growth'],
        ['B', 'Build a growth team'],
        ['C', 'Connect with like-minded people'],
      ],
      others: [
        ['A', 'Get hired'],
        ['B', 'Get promoted'],
        ['C', 'Connect with like-minded people'],
        ['D', 'Structured approach to growth'],
        ['E', 'Build a growth team'],
      ],
    },
  },
  emailAddress: {
    labelText: "What's your Institute Email-ID? *",
    subLabelText:
      "We will keep all our communications with you through this email. Do check your spam inbox if you can't find our application received email.",
  },
  phoneNumber: {
    labelText: 'Your phone number *',
    subLabelText:
      "We won't call you unless it is absolutely required to process your application.",
  },
  success: {
    labelText: "Congratulations! You're now part of the elite Hackers Club. Hold tight – a confirmation email is on its way once we verify your payment. Get ready for an exciting journey into the  dynamic realm of technology!",
    },
};

const errorMessages = {
  Name: 'Please fill this in',
  BranchName: 'Please fill this in',
  File: 'No image uploaded',
  industry: 'Oops! Please make a selection',
  role: 'Oops! Please make a selection',
  professionalGoal: 'Oops! Please make a selection',
  professionalGoalErrors: [
    'Oops! Please make a selection',
    'Please select more choices',
  ],
  emailAddress: "Hmm... that email doesn't look right",
  emailAddressErrors: [
    'Please fill this in',
    "Hmm... that email doesn't look right",
  ],
  phoneNumber: "Hmm... that phone number doesn't look right",
  phoneNumberErrors: [
    'Numbers only please',
    'Please fill this in',
    "Hmm... that phone number doesn't look right",
    'Max characters reached',
  ],
};

const industries = [
  'Accounting',
  'Airlines/Aviation',
  'Alternative Dispute Resolution',
  'Alternative Medicine',
];

const apiURL = 'https://eo3oi83n1j77wgp.m.pipedream.net';

export { homeText, formText, errorMessages, industries, apiURL };
