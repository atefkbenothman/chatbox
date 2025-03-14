# AI Chatbox Component

> A modular, reusable React chat box powered by the Vercel AI SDK and Zustand. Drop it into any React app for an AI-powered chat experience with zero-config defaults, shared state across instances, and flexible customization.

<br />

![ci](https://github.com/atefkbenothman/chatbox/actions/workflows/ci.yaml/badge.svg)

<br />

## Features
- **Plug-and-Play:** Works out of the box with minimal setup.
- **Modular:** Composable components for custom layouts.
- **Shared State:** Syncs messages across multiple instances site-wide.
- **Customizable:** Props for styling, content, and behavior.
- **Real-Time:** Streams AI responses via Vercel AI SDK.

<br />

## Dependencies
* Vercel AI SDK
* Zustand
* Tailwind

<br />

## Usage
```js
import { useAIChat, AIChat, AIChatMessageList, AIChatInput, AIChatHeader, AIChatFooter, AIChatError } from "@your-org/ai-chat";

function App() {
  const { setContext } = useSharedAIChat({ apiKey: "your-vercel-ai-key", model: "gpt-4" });
  setContext("User is on product page");
  return (
    <AIChat className="w-full max-w-md">
      <AIChatHeader className="bg-blue-600 text-white">Support Chat</AIChatHeader>
      <AIChatMessageList emptyState={<p>No messages yet!</p>} />
      <AIChatInput placeholder="Ask me anything..." inputClassName="border-blue-300" />
      <AIChatError />
      <AIChatFooter>Powered by AI</AIChatFooter>
    </AIChat>
  );
}
```

<br />

## Components
* `useAIChat`: Hook for shared chat state and logic.
* `<AIChat>`: Root wrapper.
* `<AIChatMessageList>`: Message history.
* `<AIChatMessage>`: Single message bubble.
* `<AIChatInput>`: Input field with send button.
* `<AIChatSendButton>`: Submit button (inside <AIChatInput>).
* `<AIChatHeader>`: Optional header.
* `<AIChatFooter>`: Optional footer.
* `<AIChatError>`: Error display.

<br />

## Props
* `useSharedAIChat`
  * `apiKey` (string, required): Vercel AI SDK key.
  * `model` (string, optional): AI model (default: "gpt-3.5-turbo").
  * `initialMessages` (array, optional): Preload messages.
* `<AIChat>`
  * `className` (string, optional): Custom Tailwind styles.
* `<AIChatMessageList>`
  * `className` (string, optional)
  * `emptyState` (ReactNode, optional)
* `<AIChatMessage>`
  * `className` (string, optional)
  * `renderContent` (function, optional)
* `<AIChatInput>`
  * `className` (string, optional)
  * `inputClassName` (string, optional)
  * `placeholder` (string, optional)
  * `disabled` (boolean, optional)
* `<AIChatSendButton>`
  * `className` (string, optional)
  * `children` (ReactNode, optional)
  * `disabled` (boolean, optional)
* `<AIChatHeader>`
  * `className` (string, optional)
* `<AIChatFooter>`
  * `className` (string, optional)
* `<AIChatError>`
  * `className` (string, optional)
  * `renderError` (function, optional)

<br />

## Local Development
1. Clone the repo:
```bash
git clone https://github.com/pixxabyte/admin.git
cd admin
```

2. Install dependencies:
```bash
npm install
```

3. Copy environment variables:
```bash
cp .env.example .env
```

4. Run dev server:
```bash
npm run dev
```
