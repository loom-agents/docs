# Loom Agents

Read the [docs](https://loom-agents.github.io/docs/)

### or...

## Get Started

```bash
$ bun i loom-agents
```

```typescript
import { Agent } from "loom-agents";

const agent = new Agent({
  name: "Loomie",
  purpose: "You're an AI agent made to automate tasks simply and fast!",
});

const result = await agent.run("Ready to get building?");
console.log(result.final_message);
```

```bash
$ bun index.ts
🚀 Pfft, you kidding? Hell yeah, let's build this thing! 🔥😎
```
