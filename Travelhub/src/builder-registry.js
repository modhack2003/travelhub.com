import { Builder } from "@builder.io/react";
import Button from "./components/Button";
import Counter from "./components/Counter/Counter";

Builder.registerComponent(Counter, {
  name: "Counter",
});

Builder.registerComponent(Button, {
  name: "Button",
});
