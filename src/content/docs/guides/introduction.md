---
title: Introduction to Loom
description: An overview of the Loom framework for building intelligent agents
---

Loom is a TypeScript framework for building, orchestrating, and tracing AI agents with OpenAI's API.

## Core Concepts

Loom provides several key abstractions for building agent-based applications:

- **Agent**: A configurable entity that can process inputs, use tools, and produce outputs
- **Runner**: Orchestrates execution of agents, handling multi-turn interactions
- **Trace**: Provides structured logging and performance tracking
- **Loom**: Global configuration for OpenAI API settings

## Getting Started

```typescript
import { Agent, Runner, Loom } from 'loom-agents';

// Configure global settings
Loom.api = 'completions'; // or 'responses'
Loom.openai_config = { apiKey: process.env.OPENAI_API_KEY };

// Create an agent
const agent = new Agent({
  name: 'Calculator',
  purpose: 'Solve mathematical problems',
  model: 'gpt-4o',
  tools: [
    // Tool definitions
  ]
});

// Run the agent
const runner = new Runner(agent);
const result = await runner.run('Calculate 23 * 17');
console.log(result.final_message);
```

## Framework Architecture

Loom is designed around a modular architecture:

- **[Agent](/reference/agent)**: The primary abstraction for AI capabilities
- **[Runner](/reference/runner)**: Manages execution flow and handles agent communication
- **[Trace](/reference/trace)**: Provides detailed execution logs and timing information
- **[Loom](/reference/loom)**: Global configuration singleton for OpenAI settings

## Key Features

- Support for both OpenAI's Chat Completions and Responses APIs
- Tool definition and execution
- Sub-agent composition
- Tracing and observability
- Web search integration
