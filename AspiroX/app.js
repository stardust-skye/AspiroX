// app.js


let userStats = {
    creativity: 0,
    productivity: 0,
    stress: 0,
};

const scenarios = [
    {
        description: "You're starting your day as a software engineer. What task do you want to tackle first?",
        options: [
            { text: "Fix critical bugs reported by users", effect: { productivity: +5, stress: +2 } },
            { text: "Start working on a new feature", effect: { creativity: +5, productivity: +3 } },
            { text: "Check emails and messages", effect: { productivity: +2, stress: +1 } }
        ]
    },
    {
        description: "You encounter a challenging bug. What do you do?",
        options: [
            { text: "Try to solve it yourself", effect: { problemSolving: +5, stress: +3 } },
            { text: "Ask a teammate for help", effect: { teamwork: +3, stress: -1 } },
            { text: "Ignore it for now", effect: { productivity: -2, stress: +1 } }
        ]
    },
    {
        description: "You’re an entrepreneur. What do you focus on first today?",
        options: [
            { text: "Work on my product prototype", effect: { creativity: +5, stress: +3 } },
            { text: "Talk to potential investors", effect: { networking: +5, stress: +2 } },
            { text: "Handle customer service issues", effect: { productivity: +3, stress: +4 } }
        ]
    },
    {
        description: "You are a healthcare consultant. A client has a new problem they need addressed immediately. How do you handle it?",
        options: [
            { text: "Analyze the data and provide an actionable solution", effect: { problemSolving: +5, stress: +3 } },
            { text: "Schedule a follow-up meeting and gather more data", effect: { networking: +2, stress: +1 } },
            { text: "Provide a general recommendation and promise further support", effect: { productivity: +3, stress: +2 } }
        ]
    },
    {
        description: "As a marketing manager, a new campaign is about to launch. What do you do?",
        options: [
            { text: "Review and finalize the campaign materials", effect: { productivity: +5, creativity: +2 } },
            { text: "Speak with the team to ensure smooth execution", effect: { teamwork: +5, stress: +2 } },
            { text: "Monitor early results and adjust strategies", effect: { problemSolving: +3, stress: +4 } }
        ]
    },
    {
        description: "You’re a financial analyst. How do you prioritize your work today?",
        options: [
            { text: "Focus on analyzing the quarterly financial report", effect: { productivity: +5, stress: +2 } },
            { text: "Meet with clients to discuss their investment strategies", effect: { networking: +3, stress: +3 } },
            { text: "Work on a long-term market research project", effect: { creativity: +4, stress: +1 } }
        ]
    },
    {
        description: "As a product manager, you need to decide how to improve your product. What do you do?",
        options: [
            { text: "Focus on gathering user feedback", effect: { creativity: +4, productivity: +2 } },
            { text: "Work on optimizing the product features", effect: { problemSolving: +5, stress: +3 } },
            { text: "Collaborate with the design team for UI/UX improvements", effect: { teamwork: +5, stress: +2 } }
        ]
    },
    {
        description: "You're a teacher. How do you start your day?",
        options: [
            { text: "Review lesson plans and prepare materials", effect: { productivity: +5, creativity: +2 } },
            { text: "Engage with students through a fun icebreaker activity", effect: { teamwork: +3, stress: -1 } },
            { text: "Check emails and messages from parents", effect: { productivity: +3, stress: +2 } }
        ]
    },
    {
        description: "You're working as a graphic designer. A new project has just landed. How do you begin?",
        options: [
            { text: "Brainstorm creative concepts and ideas", effect: { creativity: +5, stress: +2 } },
            { text: "Review client feedback and tweak designs", effect: { productivity: +4, stress: +3 } },
            { text: "Collaborate with the marketing team for ideas", effect: { teamwork: +3, creativity: +4 } }
        ]
    },
    {
        description: "As a data scientist, your manager has asked for a report. What’s your approach?",
        options: [
            { text: "Dive straight into data cleaning and analysis", effect: { problemSolving: +5, stress: +3 } },
            { text: "Meet with stakeholders to clarify the requirements", effect: { networking: +3, stress: +2 } },
            { text: "Explore innovative ways to visualize the data", effect: { creativity: +4, stress: +1 } }
        ]
    },
    {
        description: "You’re a web developer. A client wants a new website design. What do you focus on first?",
        options: [
            { text: "Create a wireframe and layout", effect: { creativity: +4, productivity: +2 } },
            { text: "Research the client’s target audience", effect: { networking: +2, creativity: +3 } },
            { text: "Start coding the backend structure", effect: { problemSolving: +5, stress: +3 } }
        ]
    },
    {
        description: "You're a financial advisor. A client needs urgent advice. How do you approach it?",
        options: [
            { text: "Analyze their financial situation and offer solutions", effect: { problemSolving: +5, stress: +3 } },
            { text: "Explain basic financial concepts and suggest a follow-up", effect: { networking: +2, stress: +2 } },
            { text: "Suggest long-term investment strategies", effect: { creativity: +3, productivity: +2 } }
        ]
    },
    {
        description: "You're a sales manager. A big client is hesitant to sign the deal. How do you handle it?",
        options: [
            { text: "Offer additional services to close the deal", effect: { creativity: +4, stress: +2 } },
            { text: "Negotiate the terms to find a middle ground", effect: { problemSolving: +5, stress: +3 } },
            { text: "Give them more time to think and follow up later", effect: { networking: +2, stress: +1 } }
        ]
    },
    {
        description: "As a social media manager, you need to boost engagement for a brand. What do you do?",
        options: [
            { text: "Post creative content and interact with followers", effect: { creativity: +5, stress: +1 } },
            { text: "Analyze previous posts and tweak strategies", effect: { problemSolving: +4, stress: +2 } },
            { text: "Collaborate with influencers for a campaign", effect: { teamwork: +3, creativity: +4 } }
        ]
    },
    {
        description: "You’re a customer support representative. A frustrated customer calls you. How do you respond?",
        options: [
            { text: "Listen carefully and empathize with the customer", effect: { teamwork: +3, stress: +2 } },
            { text: "Solve their problem quickly and efficiently", effect: { problemSolving: +5, stress: +3 } },
            { text: "Escalate the issue to a supervisor", effect: { productivity: -1, stress: +1 } }
        ]
    },
    {
        description: "You're a lawyer. A client needs urgent legal advice. How do you proceed?",
        options: [
            { text: "Review all relevant documents and prepare your case", effect: { problemSolving: +5, stress: +3 } },
            { text: "Speak with the client to understand the issue thoroughly", effect: { networking: +3, stress: +2 } },
            { text: "Conduct additional research to back up your argument", effect: { creativity: +4, stress: +2 } }
        ]
    },
    {
        description: "You're a UX designer. The client has given feedback on the design. How do you proceed?",
        options: [
            { text: "Revise the design based on their feedback", effect: { creativity: +5, productivity: +3 } },
            { text: "Revisit the project requirements to ensure alignment", effect: { problemSolving: +3, stress: +2 } },
            { text: "Consult with the team for design alternatives", effect: { teamwork: +5, creativity: +4 } }
        ]
    },
    {
        description: "You're a project manager. A team member is not meeting deadlines. What do you do?",
        options: [
            { text: "Have a one-on-one to understand the issue", effect: { networking: +3, stress: +2 } },
            { text: "Reassign the tasks to other team members", effect: { productivity: +4, stress: +3 } },
            { text: "Offer additional support to help them meet the deadlines", effect: { teamwork: +5, stress: +4 } }
        ]
    },
    {
        description: "You're a journalist. A new lead has come in. How do you handle it?",
        options: [
            { text: "Research the topic and start writing the story", effect: { creativity: +5, productivity: +3 } },
            { text: "Reach out to sources for interviews", effect: { networking: +4, stress: +2 } },
            { text: "Pitch the story to your editor for approval", effect: { teamwork: +3, stress: +2 } }
        ]
    }
];

let currentScenarioIndex = 0;

function loadScenario(index) {
    const scenario = scenarios[index];
    const container = document.getElementById('scenario-container');

    container.innerHTML = ''; // Clear previous content

    const scenarioDescription = document.createElement('p');
    scenarioDescription.textContent = scenario.description;
    container.appendChild(scenarioDescription);

    scenario.options.forEach((option, i) => {
        const button = document.createElement('button');
        button.textContent = option.text;
        button.onclick = () => handleOptionClick(option, index, i);
        container.appendChild(button);
    });

    updateStatsDisplay(); // Display stats below options
}

function handleOptionClick(option, scenarioIndex, optionIndex) {
    console.log(`Scenario ${scenarioIndex + 1} - Option ${optionIndex + 1} selected:`, option.effect);

    // Update user's stats based on the selected option's effect
    for (const stat in option.effect) {
        if (userStats.hasOwnProperty(stat)) {
            userStats[stat] += option.effect[stat];
        }
    }

    // Load next scenario after option selection
    if (scenarioIndex + 1 < scenarios.length) {
        currentScenarioIndex++;
        loadScenario(currentScenarioIndex);
    } else {
        alert('You have completed all scenarios!');
    }
}

function updateStatsDisplay() {
    const statsContainer = document.getElementById('stats-container') || document.createElement('div');
    statsContainer.id = 'stats-container';
    statsContainer.innerHTML = ''; // Clear previous stats

    for (const [stat, value] of Object.entries(userStats)) {
        const statElement = document.createElement('p');
        statElement.textContent = `${stat.charAt(0).toUpperCase() + stat.slice(1)}: ${value}`;
        statsContainer.appendChild(statElement);
    }

    const container = document.getElementById('scenario-container');
    container.appendChild(statsContainer);
}

loadScenario(currentScenarioIndex);