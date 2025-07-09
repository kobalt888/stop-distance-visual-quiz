import roadHazard from '../../media/lottie/roadHazard.json';
import stopwatch from '../../media/lottie/stopwatch.json';
import traffic from '../../media/lottie/traffic.json';
import eyes from '../../media/lottie/eyes.json';

const studySlides = [
  {
    id: 1,
    content: "Speed affects nearly every aspect of vehicle control. It impacts:",
    paragraph: null,
    bullets: [
      "Stopping distance",
      "Reaction time",
      "Vehicle stability",
      "Ability to avoid hazards"
    ],
    lottie: traffic,
  },
  {
    id: 2,
    content: 'What is stopping distance?',
    paragraph: "Stopping distance is the total distance a vehicle travels from the moment a driver perceives a hazard until the vehicle comes to a complete stop. The stopping distance is made up of three components:",
    bullets: [
      "Perception Distance",
      "Reaction Distance",
      "Braking Distance"
    ]
  },
  {
    id: 3,
    content: 'Perception Distance',
    paragraph: "The distance your truck travels from the moment you see a hazard until your brain recognizes the need to stop. This typically takes about 1.75 seconds.",
    lottie: eyes,
  },
  {
    id: 4,
    content: 'Reaction Distance',
    paragraph: "The distance traveled from the time you decide to hit the brakes until you actually do so. On average, this takes about .75 seconds.",
    lottie: stopwatch,
  },
  {
    id: 5,
    content: 'Braking Distance',
    paragraph: "The distance your truck travels after the brakes are applied until it comes to a full stop. This depends heavily on weight, road conditions, and brake efficiency.",
    lottie: roadHazard,
  },
  {
    id: 6,
    content: 'Example Calculation',
    paragraph: "From the Washington CDL Handbook:",
    bullets: [
      "Perception Distance: ~142 ft at 55 mph",
      "Reaction Distance: ~61 ft at 55 mph",
      "Braking Distance: ~216 ft at 55 mph",
      "Total Stopping Distance: ~419 ft (about 1.4 football fields!)"
    ],
  },
  {
    id: 7,
    content: 'Conclusion',
    paragraph: "Remember: More space = more time to react and stop safely. Try the quiz to see how well you understand stopping distances!",
  }
];

export default studySlides;
