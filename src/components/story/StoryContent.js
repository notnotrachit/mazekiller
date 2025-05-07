// StoryContent.js - Contains all story content including notes, intro text, and cinematic sequences

export class StoryContent {
  constructor() {
    // Story notes that will be scattered throughout the maze
    this.storyNotes = [
      {
        id: 1,
        title: "Lab Entry #143",
        content: `DATE: March 15, 2042\n\nThe research team has made a breakthrough with Compound X-37. The regenerative properties are exceeding all expectations. Dr. Paige believes we can begin human trials within months, not years as initially projected.\n\nHowever, I've noticed some concerning behavior in the lab rats from batch 12. Their aggression has increased, and their tissue seems to be mutating in unexpected ways. I've flagged this for review, but everyone's too excited about the progress to pay much attention to my concerns.`,
        found: false,
      },
      {
        id: 2,
        title: "Security Alert",
        content: `DATE: March 30, 2042\n\nATTENTION ALL PERSONNEL:\n\nA containment breach has occurred in Lab Block C. All personnel must evacuate immediately following biohazard protocols. Security teams will escort scientists to decontamination.\n\nANY CONTACT with escaped test subjects must be reported immediately. Do NOT attempt to handle subjects on your own.\n\nSecurity Level: ALPHA RED\nAuthorization: Director Hammond`,
        found: false,
      },
      {
        id: 3,
        title: "Audio Transcript: Emergency Broadcast",
        content: `DATE: April 2, 2042\n\n[Static]...repeat, this is not a drill. The facility is under complete lockdown. The infection has spread beyond containment measures. If you're hearing this, proceed to emergency extraction point Delta.\n\nMilitary forces have been dispatched and will arrive in [static]...hours. They are authorized to use lethal force to prevent spread to civilian populations.\n\nAll research data on Compound X-37 must be preserved. Dr. Paige has the prototype serum that may slow the infection. Find her if you can. God help us all.`,
        found: false,
      },
      {
        id: 4,
        title: "Dr. Paige's Journal",
        content: `DATE: April 3, 2042\n\nI should have listened to Marcus. The warning signs were there in the data, but I was too focused on the breakthrough to see the danger.\n\nI've developed a serum that seems to slow the progression of the infection - not a cure, but it buys time. I've synthesized a limited batch and hidden vials throughout the facility in secure locations. The keycard to the emergency exit is locked in my office safe.\n\nI'm exhibiting early symptoms now. Memory lapses. Tremors. I need to record what I know before I forget who I am. The entities we're calling "Grievers" seem drawn to sound and movement. They used to be my colleagues. My friends.`,
        found: false,
      },
      {
        id: 5,
        title: "Final Protocol",
        content: `DATE: April 5, 2042\n\nTo whoever finds this:\n\nIf you're reading this, you've survived longer than most. The maze-like layout of this facility was intentional - designed to contain any outbreak and slow its spread. Now it's your prison too.\n\nTo escape:\n1. Collect the serum vials - they'll slow your infection and are needed to power the emergency exit portal\n2. Avoid the Grievers - they're faster in darkness\n3. Find the exit in the northeast quadrant\n\nI'm securing this note near the entrance. I hope it helps someone survive this nightmare.\n\n- Dr. Marcus Chen, Lead Security Officer`,
        found: false,
      },
      {
        id: 6,
        title: "Memory Fragment",
        content: `I remember the day I joined the research team. The promise of changing the world. Dr. Paige's inspiring speech about healing the unhealable.\n\nNow look at us. I'm the only one left who still looks human. The infection is spreading though. I can feel it in my blood.\n\nThe serum works, temporarily. Three doses should be enough to power the emergency evacuation system. If anyone reads this - there's still hope. The military will want to burn this place to the ground, but the research could still save lives if it reaches the right hands.\n\nI'm leaving this note and continuing my search for more serum. If you find this... I'm sorry for what we created.`,
        found: false,
      },
    ];

    // Intro story text
    this.introStory = {
      statusLine: "SUBJECT STATUS: INFECTED (42%)",
      mainText: [
        "You awaken in the maze, disoriented and alone. Your memory is fragmented.",
        "You are a <span class='highlight'>Runner</span> - one of the few who venture into the maze to map its ever-changing corridors.",
        "The evening shadows grow longer. <span class='danger-text'>Grievers</span> have been spotted as daylight fades.",
        "Your body is fighting an unknown infection. Find the <span class='serum-text'>blue serum vials</span> to slow its progress.",
        "WARNING: The maze walls shift in darkness. Find the exit before night falls completely.",
      ],
    };

    // Define the intro cinematic sequence with Maze Runner themed images
    this.introCinematicSequence = [
      {
        type: "background",
        backgroundImage: "url('/src/assets/3.png')", // Lab breach image
        duration: 5000,
        title: "WCKD Research Facility",
        subtitle: "Three Days Ago",
        text: "",
        audio: "alarm",
        voiceName: "",
      },
      {
        type: "dialogue",
        backgroundImage: "url('/src/assets/2.png')", // The Glade/Research Facility
        duration: 6000,
        title: "",
        subtitle: "",
        text: "Emergency protocols activated. Biohazard containment breach in Laboratory B. All personnel evacuate immediately.",
        audio: "alarm_distant",
        // portrait: "url('/src/assets/ai-portrait.jpg')",
        voiceName: "WCKD Security System",
      },
      {
        type: "dialogue",
        backgroundImage: "url('/src/assets/3.png')", // Laboratory Breach image
        duration: 6000,
        title: "",
        subtitle: "",
        text: "We need to lock down the serum samples! The compound is unstable - if it gets out...",
        audio: "panic",
        // portrait: "url('/src/assets/dr-paige.jpg')",
        voiceName: "Dr. Paige",
      },
      {
        type: "background",
        backgroundImage: "url('/src/assets/1.png')", // Infected Protagonist image
        duration: 5000,
        title: "",
        subtitle: "",
        text: "Warning: Test subjects exhibiting advanced symptoms. Aggression levels rising. Cognitive functions deteriorating.",
        audio: "monster_distant",
        voiceName: "WCKD Monitoring System",
      },
      {
        type: "dialogue",
        backgroundImage: "url('/src/assets/8.png')", // Security Officer image
        duration: 6000,
        title: "",
        subtitle: "",
        text: "We don't have much time. Take these serum vials - they'll slow the infection. The maze protocol is our only option now.",
        audio: "serious",
        // portrait: "url('/src/assets/security-portrait.jpg')",
        voiceName: "Chief Security Officer",
      },
      {
        type: "memory",
        backgroundImage: "url('/src/assets/4.png')", // Maze Entrance image
        duration: 7000,
        title: "Present Day",
        subtitle: "",
        text: "Your memory fades in and out. Images from the past blur with the present. The infection is spreading through your system.",
        audio: "heartbeat",
        memoryFlash: "high",
        voiceName: "",
      },
      {
        type: "dialogue",
        backgroundImage: "url('/src/assets/1.png')", // Infected Protagonist image (first-person)
        duration: 5000,
        title: "",
        subtitle: "",
        text: "I need to find those serum vials before it's too late. The lab's emergency exit should still be operational...",
        audio: "ambient_eerie",
        // portrait: "url('/src/assets/player-portrait.jpg')",
        voiceName: "You",
      },
      {
        type: "background",
        backgroundImage: "url('/src/assets/5.png')", // Griever image
        duration: 6000,
        title: "",
        subtitle: "",
        text: "But I'm not alone in here. The infected researchers - what the security team called 'Grievers' - they're hunting in the darkness.",
        audio: "monster_near",
        memoryFlash: "medium",
        voiceName: "",
      },
      {
        type: "finale",
        backgroundImage: "url('/src/assets/10.png')", // Maze Aerial View
        duration: 5000,
        title: "THE MAZE",
        subtitle: "Find the serum. Escape the facility. Survive.",
        text: "",
        audio: "dramatic_impact",
        voiceName: "",
      },
    ];

    // Act 2 cinematic sequence
    this.act2CinematicSequence = [
      {
        type: "background",
        backgroundImage: "url('/src/assets/7.png')", // Memory Flashback image
        duration: 1000,
        title: "",
        subtitle: "",
        text: "",
        audio: null,
      },
      {
        type: "dialogue",
        backgroundImage: "url('/src/assets/7.png')", // Memory Flashback image
        duration: 7000,
        title: "",
        subtitle: "",
        text: "Memories are returning... you were one of the researchers working on Project Lazarus.",
        audio: "act2_revelation",
        // portrait: "url('/src/assets/player-portrait.jpg')",
        voiceName: "Your Thoughts",
      },
      {
        type: "dialogue",
        backgroundImage: "url('/src/assets/1.png')", // Infected Protagonist image
        duration: 6000,
        title: "",
        subtitle: "",
        text: "The infection is accelerating. You need to find the remaining serum vials.",
        audio: "act2_warning",
        // portrait: "url('/src/assets/player-portrait.jpg')",
        voiceName: "Your Thoughts",
        memoryFlash: "medium",
      },
    ];

    // Act 3 cinematic sequence
    this.act3CinematicSequence = [
      {
        type: "background",
        backgroundImage: "url('/src/assets/6.png')", // Serum Vial image
        duration: 1000,
        title: "",
        subtitle: "",
        text: "",
        audio: null,
      },
      {
        type: "dialogue",
        backgroundImage: "url('/src/assets/7.png')", // Memory Flashback image
        duration: 7000,
        title: "",
        subtitle: "",
        text: "You remember everything now. You were Dr. Paige's assistant, entrusted with the final specimens.",
        audio: "act3_finalstage",
        // portrait: "url('/src/assets/player-portrait.jpg')",
        voiceName: "Your Thoughts",
      },
      {
        type: "dialogue",
        backgroundImage: "url('/src/assets/9.png')", // Exit Portal image
        duration: 6000,
        title: "",
        subtitle: "",
        text: "The exit is near. Gather the remaining serum to power the portal and escape with the research.",
        audio: "act3_escape",
        // portrait: "url('/src/assets/player-portrait.jpg')",
        voiceName: "Your Thoughts",
        memoryFlash: "high",
      },
    ];

    // Transition settings for different cinematic types
    this.transitionSettings = {
      dialogue: {
        backgroundTransition: "transition-fade",
        textAnimationClass: "dialogue-text-reveal",
        portraitAnimationClass: "portrait-reveal",
        voiceAnimationClass: "voice-reveal",
        transitionDuration: 1200,
      },
      memory: {
        backgroundTransition: "transition-fade-slow",
        textAnimationClass: "text-reveal",
        transitionDuration: 1800,
      },
      background: {
        backgroundTransition: "transition-fade",
        textAnimationClass: "text-reveal",
        transitionDuration: 1200,
      },
      finale: {
        backgroundTransition: "transition-fade-fast",
        textAnimationClass: "text-reveal",
        transitionDuration: 900,
        additionalClass: "finale-transition",
      },
    };
  }

  // Return story notes
  getStoryNotes() {
    return this.storyNotes;
  }

  // Return the total number of story notes
  getTotalNotes() {
    return this.storyNotes.length;
  }

  // Get a specific note by ID
  getStoryNoteById(id) {
    return this.storyNotes.find((note) => note.id === id);
  }

  // Get intro story text
  getIntroStory() {
    return this.introStory;
  }

  // Get intro cinematic sequence
  getIntroCinematicSequence() {
    return this.introCinematicSequence;
  }

  // Get act transition cinematic sequences
  getActCinematicSequence(act) {
    switch (act) {
      case 2:
        return this.act2CinematicSequence;
      case 3:
        return this.act3CinematicSequence;
      default:
        return [];
    }
  }

  // Get transition settings for various cinematic types
  getTransitionSettings() {
    return this.transitionSettings;
  }
}
