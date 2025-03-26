---
title: Examples
description: Usage examples for the Loom framework
---

This page provides practical examples of using the Loom framework for various agent-based applications.

## Basic Agent

```typescript
import { Agent, Runner, Loom } from 'loom-agents';

// Configure Loom
Loom.api = 'completions';
Loom.openai_config = { apiKey: process.env.OPENAI_API_KEY };

// Create an agent
const agent = new Agent({
  name: 'Assistant',
  purpose: 'Help with general questions',
  model: 'gpt-4o'
});

// Create a runner
const runner = new Runner(agent);

// Execute the agent
const result = await runner.run('What is the capital of France?');
console.log(result.final_message); // "The capital of France is Paris."
```

## Using Tools

```typescript
import { Agent, Runner } from 'loom-agents';

// Define tool
const weatherTool = {
  name: 'getWeather',
  description: 'Get current weather for a location',
  parameters: {
    location: {
      type: 'string',
      description: 'City name or coordinates'
    }
  },
  callback: async ({ location }) => {
    // In a real implementation, this would call a weather API
    return { temperature: 72, conditions: 'sunny' };
  }
};

// Create an agent with the tool
const agent = new Agent({
  name: 'WeatherAssistant',
  purpose: 'Provide weather information',
  model: 'gpt-4o',
  tools: [weatherTool]
});

const runner = new Runner(agent);
const result = await runner.run('What\'s the weather like in San Francisco?');
console.log(result.final_message);
```

## Composing Agents

```typescript
import { Agent, Runner } from 'loom-agents';

// Create specialized agents
const mathAgent = new Agent({
  name: 'MathExpert',
  purpose: 'Solve math problems',
  model: 'gpt-4o'
});

const weatherAgent = new Agent({
  name: 'WeatherExpert',
  purpose: 'Provide weather information',
  model: 'gpt-4o',
  tools: [/* weather tools */]
});

// Create a coordinator agent
const coordinatorAgent = new Agent({
  name: 'Coordinator',
  purpose: 'Route requests to appropriate specialized agents',
  model: 'gpt-4o',
  sub_agents: [mathAgent, weatherAgent]
});

// Run the coordinator
const runner = new Runner(coordinatorAgent);
const result = await runner.run('Can you tell me the weather in NYC and also calculate 15% of 85?');
console.log(result.final_message);
```

## Using Traces for Debugging

```typescript
import { Agent, Runner, Tracer } from 'loom-agents';

// Create agent and runner
const agent = new Agent({ /*...*/ });
const runner = new Runner(agent);

// Execute with tracing
const result = await runner.run('Process this data');

// Get and display the trace
const tracer = runner.GetTracer();
console.log(tracer.render());
```

## Web Search Agent

```typescript
import { Agent, Runner } from 'loom-agents';

// Create an agent with web search enabled
const researchAgent = new Agent({
  name: 'Researcher',
  purpose: 'Find information online',
  model: 'gpt-4o',
  web_search: {
    enabled: true,
    config: {
      search_context_size: 'high',
      user_location: {
        type: 'approximate',
        country: 'US'
      }
    }
  }
});

const runner = new Runner(researchAgent);
const result = await runner.run('What were the major tech news stories this week?');
console.log(result.final_message);
```

## Related

- [Agent](/docs/reference/agent): Core agent implementation
- [Runner](/docs/reference/runner): Agent execution orchestration
- [Trace](/docs/reference/trace): Execution tracing and debugging
- [Loom](/docs/reference/loom): Global configuration
