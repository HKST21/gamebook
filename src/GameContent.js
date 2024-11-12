import CodeLiberty2050 from "./GamebookClass";
import cyberpunkCity from './images/cyberpunk-city.gif';
import neonGirl from './images/neonGirl.jpg';
import car from './images/lambo.gif';

const initializeGame = () => {
    const page1 = CodeLiberty2050.addPage();
    const page2 = CodeLiberty2050.addPage();
    const page3 = CodeLiberty2050.addPage();
    const page4 = CodeLiberty2050.addPage();
    const page5 = CodeLiberty2050.addPage();
    const page6 = CodeLiberty2050.addPage();
    const page7 = CodeLiberty2050.addPage();

    CodeLiberty2050.setPageText(page1.id, "Welcome to a world full of neon lights and dark shadows. This interactive gamebook, Code: Liberty 2050, lets you become Ray, a European immigrant and freelance hacker in Hong Kong in the year 2050. You hold your fate in your hands. Every decision you make will change the course of the story. Life in this city is harsh, ruled by megacorporations, and the world has completely changed since 2025. Freedom of speech has been silenced, and people are confused by propaganda and disinformation. You, as Ray, are used to making your way. You’ve learned that to survive, you must break the rules. Are you ready to face the challenges ahead?");
    CodeLiberty2050.setPageImage(page1.id, cyberpunkCity);
    CodeLiberty2050.setChoice(page1.id, [{text: "Start your journey", nextPageId: page2.id}]);

    CodeLiberty2050.setPageText(page2.id, "The story begins: It’s early morning, and the darkness slowly lifts as the sound of your vibrating phone on the nightstand disturbs your sleep. The memories of a dream, where you return to Europe – to some long-forgotten past, when the world was still not under the control of megacorporations – flash before your eyes. You dreamed of home, of lands where some form of freedom still existed. Of Europe, which is now just a memory. This isn’t the first time you've had this dream. You try to close your eyes and slip back into it, but reality relentlessly welcomes you back.");
    CodeLiberty2050.setChoice(page2.id, [{text: "Continue", nextPageId: page3.id}]);

    CodeLiberty2050.setPageText(page3.id, "FUCK, you mumble into the darkness as you rub your face. Another day, another race for survival. With disappointment, you turn off the alarm, get out of bed, and head for the window. The city is still shrouded in a gray fog, that strange mix of smog and neon light that never sleeps. For a moment, you look outside and see empty streets, with only an occasional cyclist hurrying to one of the few independent cafés or a courier carrying a package for one of the megacorporations. You place your mug under the coffee machine to make yourself a cup, when suddenly, someone knocks hard on your door! This early in the morning? What will you do?");
    CodeLiberty2050.setChoice(page3.id, [
        {text: "You open the door", nextPageId: page4.id}, 
        {text: "I’ll stay quiet and pretend I'm not here.", nextPageId: page6.id}
    ]);

    CodeLiberty2050.setPageText(page4.id, "You open the door cautiously, keeping your body pressed against the wall. Your eyes dart over the figure standing there, a young woman, maybe twenty, breathing heavily, her eyes wide with terror. She’s dressed in dark, worn-out clothes that blend with the city’s shadows, but there’s something distinct about her – a silver pendant in the shape of a phoenix glints around her neck. Before you can say anything, she glances back down the corridor, clearly terrified. “Please,” she whispers, almost pleading. “They’re after me. I’ve got information they don’t want to get out. You’re the only one who can help.” A thousand thoughts flash through your mind. Helping her could mean trouble. Big trouble. But there’s something in her eyes, a desperation that makes it impossible to just shut the door.");
    CodeLiberty2050.setPageImage(page4.id, neonGirl);
    CodeLiberty2050.setChoice(page4.id, [{text:"Invite her inside and lock the door.", nextPageId: page5.id}]);

    CodeLiberty2050.setPageText(page6.id, "You stay completely still, hoping whoever is outside will lose patience and move on. Silence fills the room, save for the faint hum of the city beyond your window. Just as you start to relax, thinking they’ve left, the knocking returns – louder this time, and more insistent.\n\nWhoever is out there isn’t giving up. Your heart races, pulse echoing in your ears. You realize whoever’s outside knows you’re here – or at least, they’re not leaving until they’re sure.\n\nThe door vibrates as a voice calls out. 'Please! I know you’re in there. I… I need your help.' You sense desperation in the woman's voice, but it’s mixed with something else – fear.\n\nYou feel a pang of unease. Staying quiet might not work for long. You’ll have to decide fast before things escalate.");
    CodeLiberty2050.setChoice(page6.id, [
        {text:"You carefully open the door", nextPageId: page4.id}
    ]);

    CodeLiberty2050.setPageText(page5.id, "“Hey, my name’s Ray! What are you doing here? I’ve never seen you around the building before. Which floor do you live on?” you ask, studying her face. “My name’s Elene,” she says, her voice trembling.\n\n “They’re after me! Please – I need your help. Will you help me?”. “Whoa, slow down. I don’t even know what’s happening here. Who’s after you?” You pause, trying to place her face. “Wait… have we met?”. Elene nods, her eyes wide. “You probably don’t recognize me, but I work in the same company as you.\n\n We’ve seen each other a few times in the cafeteria.”.“Right,” you say, crossing your arms. “But that still doesn’t explain why you’re knocking on my door this early.”. She hesitates, her voice starting to shake. “Good question. Today I was hanging out with Caroline. She lives five floors above you. I went to grab us some drinks from the shop, and when I came back…” She swallows hard. “Caroline was dead.”.You feel a chill down your spine. “What? That’s… that’s insane. Why would someone want to kill her?”.“I don’t know! But they could see me too.\n\n Please, Ray, we need to get out of here. I’ll explain more later, but right now, we have to go. Do you have a car here?”");
    CodeLiberty2050.setPageImage(page5.id, car);
    CodeLiberty2050.setChoice(page5.id, [{text:"Yeah - 20 years old gasoline sports car", nextPageId: page7.id}]);

    CodeLiberty2050.setPageText(page7.id, "Thank you for coming here, we are currently building the next story ! We'll be back soon!")

}

export default initializeGame;
