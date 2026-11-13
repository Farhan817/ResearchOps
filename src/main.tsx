import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import CustomProvider from "./providers/Provider.tsx";

async function enableMocking() {
  const shouldMock =
    import.meta.env.DEV && import.meta.env.VITE_USE_MOCK_API === "true";

  if (!shouldMock) return;

  const { worker } = await import("./mockAPi/browser.ts");

  await worker.start({
    onUnhandledRequest: "bypass",
  });
}

enableMocking().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <CustomProvider>
        <App />
      </CustomProvider>
    </StrictMode>,
  );
});
