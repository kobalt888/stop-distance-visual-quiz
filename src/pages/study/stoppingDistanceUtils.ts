// Utility to calculate stopping distance at a given speed (mph)
// Returns { perception, reaction, braking, total } in feet
// Uses fixed perception/reaction times and braking distance as a quadratic fit

export interface StoppingDistance {
  perception: number;
  reaction: number;
  braking: number;
  total: number;
}

export function calculateStoppingDistance(mph: number): StoppingDistance {
  // Perception: 1.75s, Reaction: 0.75s
  // Perception distance = speed (ft/s) * 1.75
  // Reaction distance = speed (ft/s) * 0.75
  const speedFps = mph * 1.467;
  const perception = speedFps * 1.75;
  const reaction = speedFps * 0.75;
  // Braking distance: best fit quadratic from CDL data
  // braking = 0.0715 * mph^2
  const braking = 0.0715 * Math.pow(mph, 2);
  return {
    perception: Math.round(perception),
    reaction: Math.round(reaction),
    braking: Math.round(braking),
    total: Math.round(perception + reaction + braking),
  };
}
