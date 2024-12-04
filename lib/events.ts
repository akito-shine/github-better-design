export const aiEvents = [
  {
    name: "change-text",
    when: "The user says what they want to change the text on the screen to",
    data: {
      text: { type: "string", description: "The text to change to" },
    },
  },
] as const;