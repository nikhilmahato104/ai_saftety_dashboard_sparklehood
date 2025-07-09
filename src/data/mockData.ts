import { Incident } from "../types";

export const mockIncidents: Incident[] = [
  { 
    id: 1, 
    title: "Biased Recommendation Algorithm", 
    description: "Algorithm consistently favored certain demographics in content recommendations, creating an echo chamber effect that amplified existing biases. The issue was discovered during a routine audit of recommendation patterns across different user segments.", 
    severity: "Medium", 
    reported_at: "2025-03-15T10:00:00Z"
  },
  { 
    id: 21, 
    title: "LLM Hallucination in Critical Info", 
    description: "Large Language Model provided incorrect safety procedure information when asked about emergency protocols in a healthcare context. This could have led to dangerous outcomes if the information had been acted upon without verification.", 
    severity: "High", 
    reported_at: "2025-04-01T14:30:00Z" 
  },
  { 
    id: 3, 
    title: "Minor Data Leak via Chatbot", 
    description: "Chatbot inadvertently exposed non-sensitive user metadata during a conversation, revealing information about usage patterns that should have remained private. No personally identifiable information was leaked.", 
    severity: "Low", 
    reported_at: "2025-03-20T09:15:00Z" 
  },
  {
    id: 4,
    title: "Unauthorized Model Training Data",
    description: "An AI model was found to have been trained on datasets that included copyrighted material without proper licensing or attribution. This raises both legal and ethical concerns about the training process.",
    severity: "Medium",
    reported_at: "2025-03-25T16:45:00Z"
  },
  {
    id: 5,
    title: "False Medical Diagnosis Suggestion",
    description: "An AI system designed to assist medical professionals suggested an incorrect diagnosis that could have led to harmful treatment recommendations if not caught by the supervising physician.",
    severity: "High",
    reported_at: "2025-04-05T08:20:00Z"
  }
];
