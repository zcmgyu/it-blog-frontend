import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DanteEditor } from "Dante2/es/index.js"//'Dante2'
import 'Dante2/dist/DanteStyles.css'

import { Map, fromJS } from 'immutable'
import DanteImagePopover from 'Dante2/es/components/popovers/image.js'
import DanteAnchorPopover from 'Dante2/es/components/popovers/link.js'
import DanteInlineTooltip from 'Dante2/es/components/popovers/addButton.js'
import DanteTooltip from 'Dante2/es/components/popovers/toolTip.js'
import ImageBlock from 'Dante2/es/components/blocks/image.js'
import EmbedBlock from 'Dante2/es/components/blocks/embed.js'
import VideoBlock from 'Dante2/es/components/blocks/video.js'
import PlaceholderBlock from 'Dante2/es/components/blocks/placeholder.js'
import { convertToRaw } from 'draft-js'

import {
    resetBlockWithType,
    addNewBlockAt
} from 'Dante2/es/model/index.js'


const demo = { "entityMap": { "0": { "type": "LINK", "mutability": "MUTABLE", "data": { "href": "https://www.thenation.com/article/italys-five-star-movement-may-be-the-heir-to-mussolinis-fascists/", "url": "https://www.thenation.com/article/italys-five-star-movement-may-be-the-heir-to-mussolinis-fascists/" } }, "1": { "type": "LINK", "mutability": "MUTABLE", "data": { "href": "http://www.theverge.com/2015/10/28/9625968/rating-system-on-demand-economy-uber-olive-garden", "url": "http://www.theverge.com/2015/10/28/9625968/rating-system-on-demand-economy-uber-olive-garden" } }, "2": { "type": "LINK", "mutability": "MUTABLE", "data": { "href": "https://www.washingtonpost.com/news/the-intersect/wp/2015/09/30/everyone-you-know-will-be-able-to-rate-you-on-the-terrifying-yelp-for-people-whether-you-want-them-to-or-not/", "url": "https://www.washingtonpost.com/news/the-intersect/wp/2015/09/30/everyone-you-know-will-be-able-to-rate-you-on-the-terrifying-yelp-for-people-whether-you-want-them-to-or-not/" } }, "3": { "type": "LINK", "mutability": "MUTABLE", "data": { "href": "http://www.techtimes.com/articles/136493/20160225/facebook-addiction-affects-brain-like-cocaine-gambling-study.htm", "url": "http://www.techtimes.com/articles/136493/20160225/facebook-addiction-affects-brain-like-cocaine-gambling-study.htm" } }, "4": { "type": "LINK", "mutability": "MUTABLE", "data": { "href": "https://www.epa.gov/pollinator-protection/colony-collapse-disorder", "url": "https://www.epa.gov/pollinator-protection/colony-collapse-disorder" } }, "5": { "type": "LINK", "mutability": "MUTABLE", "data": { "href": "http://www.nytimes.com/2015/02/15/magazine/how-one-stupid-tweet-ruined-justine-saccos-life.html", "url": "http://www.nytimes.com/2015/02/15/magazine/how-one-stupid-tweet-ruined-justine-saccos-life.html" } }, "6": { "type": "LINK", "mutability": "MUTABLE", "data": { "href": "https://wyss.harvard.edu/technology/autonomous-flying-microrobots-robobees/", "url": "https://wyss.harvard.edu/technology/autonomous-flying-microrobots-robobees/" } }, "7": { "type": "LINK", "mutability": "MUTABLE", "data": { "href": "http://www.governing.com/gov-data/safety-justice/drones-state-local-law-enforcement-agencies-license-list.html", "url": "http://www.governing.com/gov-data/safety-justice/drones-state-local-law-enforcement-agencies-license-list.html" } }, "8": { "type": "LINK", "mutability": "MUTABLE", "data": { "href": "http://www.parentherald.com/articles/73928/20161015/google-secures-patent-smart-contact-lenses-designed-diabetics.htm", "url": "http://www.parentherald.com/articles/73928/20161015/google-secures-patent-smart-contact-lenses-designed-diabetics.htm" } }, "9": { "type": "LINK", "mutability": "MUTABLE", "data": { "href": "http://mashable.com/2016/04/05/samsung-smart-contact-lenses-patent/#fV7S6EX8DaqP", "url": "http://mashable.com/2016/04/05/samsung-smart-contact-lenses-patent/#fV7S6EX8DaqP" } }, "10": { "type": "LINK", "mutability": "MUTABLE", "data": { "href": "https://www.cnet.com/news/sony-patents-contact-lens-that-records-what-you-see/", "url": "https://www.cnet.com/news/sony-patents-contact-lens-that-records-what-you-see/" } }, "11": { "type": "LINK", "mutability": "MUTABLE", "data": { "href": "https://backchannel.com/twitch-could-be-a-20-billion-dollar-company-inside-amazon-2507b7f9aa6d", "url": "https://backchannel.com/twitch-could-be-a-20-billion-dollar-company-inside-amazon-2507b7f9aa6d" } }, "12": { "type": "LINK", "mutability": "MUTABLE", "data": { "href": "http://www.thewildernessdowntown.com/", "url": "http://www.thewildernessdowntown.com/" } }, "13": { "type": "LINK", "mutability": "MUTABLE", "data": { "href": "http://nightmare.mit.edu/", "url": "http://nightmare.mit.edu/" } }, "14": { "type": "LINK", "mutability": "MUTABLE", "data": { "href": "http://www.theverge.com/a/luka-artificial-intelligence-memorial-roman-mazurenko-bot", "url": "http://www.theverge.com/a/luka-artificial-intelligence-memorial-roman-mazurenko-bot" } }, "15": { "type": "LINK", "mutability": "MUTABLE", "data": { "href": "http://www.nolo.com/legal-encyclopedia/a-plan-your-digital-legacy.html", "url": "http://www.nolo.com/legal-encyclopedia/a-plan-your-digital-legacy.html" } }, "16": { "type": "LINK", "mutability": "MUTABLE", "data": { "href": "https://www.safebeyond.com/", "url": "https://www.safebeyond.com/" } }, "17": { "type": "LINK", "mutability": "MUTABLE", "data": { "href": "http://www.newyorker.com/culture/culture-desk/the-story-of-amanda-todd", "url": "http://www.newyorker.com/culture/culture-desk/the-story-of-amanda-todd" } }, "18": { "type": "LINK", "mutability": "MUTABLE", "data": { "href": "http://www.theverge.com/2016/6/21/11995032/mark-zuckerberg-webcam-tape-photo", "url": "http://www.theverge.com/2016/6/21/11995032/mark-zuckerberg-webcam-tape-photo" } }, "19": { "type": "LINK", "mutability": "MUTABLE", "data": { "href": "http://www.cnn.com/2012/07/14/world/americas/brazil-alternative-sentence-reduction/", "url": "http://www.cnn.com/2012/07/14/world/americas/brazil-alternative-sentence-reduction/" } }, "20": { "type": "LINK", "mutability": "MUTABLE", "data": { "href": "https://www.humanbrainproject.eu/", "url": "https://www.humanbrainproject.eu/" } }, "21": { "type": "LINK", "mutability": "MUTABLE", "data": { "href": "http://time.com/4043311/david-cameron-pig-gate-scandal/", "url": "http://time.com/4043311/david-cameron-pig-gate-scandal/" } }, "22": { "type": "LINK", "mutability": "MUTABLE", "data": { "href": "http://news.bbc.co.uk/2/hi/uk_news/661139.stm", "url": "http://news.bbc.co.uk/2/hi/uk_news/661139.stm" } }, "23": { "type": "LINK", "mutability": "MUTABLE", "data": { "href": "https://windagainstcurrent.files.wordpress.com/2014/07/manhattanhenge-8.jpg", "url": "https://windagainstcurrent.files.wordpress.com/2014/07/manhattanhenge-8.jpg" } } }, "blocks": [{ "key": "lcva", "text": "When the dark sci-fi TV show Black Mirror premiered in the UK in 2011, the series seemed to offer a cautionary tale of how, if we’re not careful, our relationship to technology could go terribly wrong. Since then, the show has become a yardstick to measure how close we are to a harrowing future in the past week, as we reel from the 2016 presidential election, the world of Black Mirror seems nearer than ever to our current reality—less a warning than a crystal ball.", "type": "unstyled", "depth": 0, "inlineStyleRanges": [{ "offset": 0, "length": 23, "style": "BOLD" }, { "offset": 29, "length": 12, "style": "ITALIC" }, { "offset": 376, "length": 12, "style": "ITALIC" }], "entityRanges": [], "data": {} }, { "key": "fti9h", "text": "What makes Black Mirror so chilling isn’t just its technologies, but their uncanny interplay with human behavior. The show can feel gratuitously pessimistic, yet it’s rooted in reality: nearly every scenario parallels something in our current world. In particular, an early episode disturbingly foreshadows the rise of Donald Trump.It’s impossible to write off Black Mirror as fiction. So we’ve decided to nail down the parallels between the nightmares on screen and our world today. And so we present: the real-life equivalents of Black Mirror’s dystopias, loosely ordered by how closely each episode reflects our current reality. Spoilers ahead.", "type": "unstyled", "depth": 0, "inlineStyleRanges": [{ "offset": 11, "length": 12, "style": "ITALIC" }, { "offset": 361, "length": 12, "style": "ITALIC" }, { "offset": 532, "length": 12, "style": "ITALIC" }, { "offset": 632, "length": 15, "style": "BOLD" }], "entityRanges": [], "data": {} }, { "key": "69em1", "text": "", "type": "image", "depth": 0, "inlineStyleRanges": [], "entityRanges": [], "data": { "enabled": false, "aspect_ratio": { "width": 800, "height": 14, "ratio": 1.7500000000000002 }, "width": 800, "height": 14, "forceUpload": false, "url": "https://cdn-images-1.medium.com/max/800/1*7558zQdffG0nE6eA8sIudQ.png", "loading_progress": 0, "selected": false, "loading": false, "file": null, "direction": "center" } }, { "key": "anhe0", "text": "The Waldo Moment (season 2, episode 3)", "type": "header-four", "depth": 0, "inlineStyleRanges": [{ "offset": 0, "length": 38, "style": "BOLD" }], "entityRanges": [], "data": {} }, { "key": "6mstu", "text": "oijkopkpkop", "type": "image", "depth": 0, "inlineStyleRanges": [{ "offset": 0, "length": 11, "style": "BOLD" }], "entityRanges": [], "data": { "enabled": false, "aspect_ratio": { "width": 800, "height": 401, "ratio": 50.125 }, "width": 800, "height": 401, "forceUpload": false, "url": "https://cdn-images-1.medium.com/max/800/1*u9nzrQNXIo5pvNx9Ywfc7w.jpeg", "loading_progress": 0, "selected": false, "loading": false, "file": null, "direction": "center" } }, { "key": "b31i7", "text": "", "type": "unstyled", "depth": 0, "inlineStyleRanges": [], "entityRanges": [], "data": {} }, { "key": "2isb4", "text": "In “The Waldo Moment,” a brash cartoon bear voiced by a comedian winds up winning over the British public and running for political office. Waldo uses humor (he’s a cartoon, after all) to separate himself from career politicians, and he gains popularity in part because of his vulgar disdain for the system and his running mates. Bright blue cartooniness aside, he’s more or less a prescient version of our President-elect.Sure, there are also some parallels here to Italy’s Five Star Movement, a growing, far-right political party started by a comedian who got crowds of malcontent Italians to shout “Fuck off!” at corrupt politicians. And yes, the circumstances under which Waldo enters the race stem from an Anthony Weiner-esque sexting scandal that forces an incumbent politician to step out of office. But Waldo’s rise to power eerily mirrors Donald Trump’s, especially considering that this episode of Black Mirror was penned long before there were any signs that Trump might actually secure the presidency in 2016.Waldo, like Trump, begins as a candidate perceived as a joke, only to win the favor of voters who enjoy his lack of filter and “refreshing” sincerity. Waldo, too, makes for good entertainment, and that’s enough to get him votes. The episode’s final scene, in which the cartoon bear reigns as global dictator and wields what appears to be a brutal police regime, now reads as a dark foreshadowing of what might come out of a Trump presidency—and it’s not funny at all.", "type": "unstyled", "depth": 0, "inlineStyleRanges": [{ "offset": 0, "length": 22, "style": "BOLD" }, { "offset": 908, "length": 12, "style": "ITALIC" }], "entityRanges": [{ "offset": 475, "length": 18, "key": 0 }], "data": {} }, { "key": "2udte", "text": "Nosedive (season 3, episode 1)", "type": "header-four", "depth": 0, "inlineStyleRanges": [{ "offset": 0, "length": 30, "style": "BOLD" }], "entityRanges": [], "data": {} }, { "key": "9p0jl", "text": "", "type": "image", "depth": 0, "inlineStyleRanges": [], "entityRanges": [], "data": { "enabled": false, "aspect_ratio": { "width": 800, "height": 401, "ratio": 50.125 }, "width": 800, "height": 401, "forceUpload": false, "url": "https://cdn-images-1.medium.com/max/800/1*VSYQZNBOryr5kxstmUKGKg.jpeg", "loading_progress": 0, "selected": false, "loading": false, "file": null, "direction": "center" } }, { "key": "26fqh", "text": "In the world of this episode, rating friends, coworkers, service workers, and even passersby is standard practice, and those crucial ratings determine everything from your career trajectory to your rent. It’s not so different from what we already see in the on-demand economy — Uber drivers, for example, are deactivated when they fall under a 4.6. One company has gone even further: Peeple endeavored to offer a rating system for people, regardless of whether they consented to be included. After the app was eviscerated by the press, it launched this March as a watered-down, opt-in version of the original concept. Perhaps fittingly, it now boasts a one-star rating in the iTunes app store.But what feels most immediately familiar in “Nosedive” is the way that protagonist Lacie (Bryce Dallas Howard) lights up each time she receives a positive rating. It’s only a slight exaggeration of the psychological rewardsmost people experience with every Facebook like or tweet fave. Case in point: while writing this paragraph, I checked the likes on my most recent Instagram approximately 13 times.", "type": "unstyled", "depth": 0, "inlineStyleRanges": [{ "offset": 0, "length": 29, "style": "BOLD" }], "entityRanges": [{ "offset": 309, "length": 11, "key": 1 }, { "offset": 405, "length": 32, "key": 2 }, { "offset": 895, "length": 21, "key": 3 }], "data": {} }, { "key": "c6rn8", "text": "Hated in the Nation (season 3, episode 6)", "type": "header-four", "depth": 0, "inlineStyleRanges": [{ "offset": 0, "length": 41, "style": "BOLD" }], "entityRanges": [], "data": {} }, { "key": "6t14b", "text": "", "type": "image", "depth": 0, "inlineStyleRanges": [], "entityRanges": [], "data": { "enabled": false, "aspect_ratio": { "width": 800, "height": 401, "ratio": 50.125 }, "width": 800, "height": 401, "forceUpload": false, "url": "https://cdn-images-1.medium.com/max/800/1*gnRUO5LE1qyOXMVo05BjZA.jpeg", "loading_progress": 0, "selected": false, "loading": false, "file": null, "direction": "center" } }, { "key": "favaa", "text": "In this episode, a hacker has figured out how to weaponize social media outrage. Each day, the most hated person on the internet faces a grisly death at the hands of hacked drone bees, thousands of which have been deployed as a solution to the bee-killing Colony Collapse Disorder. Though no furious social media mob in our current world has yet managed to commit murder, the tools for viral outrage are amply abused: Death threats run amok on the internet, and public outrage has managed to end careers and ruin lives. (See, for example, the stories of Justine Sacco and Lindsey Stone, who faced job-ending public shame after making misguided—but, in the grand scheme of things, fairly innocuous— posts to social media.)And those autonomous drone bees? A team at Harvard’s School of Engineering and Applied Sciences has been developing them for over a decade (and will hopefully make them as unhackable as possible). Autonomous Flying Microrobots, or RoboBees, are intended for potential use in cross-pollination, search and rescue missions, and surveillance.Speaking of surveillance, that’s another theme Black Mirror manages to pack into this episode: The drone bees have also been covertly conscripted by the British government to monitor the nation. In the real world, multiple municipalities across the country have adopted surveillance drones notably, the ACLU recently found that the FBI had employed them in Baltimore during the protests over Freddie Gray’s killing. Mass surveillance—much like online abuse and robotic drone bees—is a reality. All that keeps this episode from becoming prescient documentary is a vigilante hacker coopting these forces to make a twisted public statement.", "type": "unstyled", "depth": 0, "inlineStyleRanges": [{ "offset": 0, "length": 16, "style": "BOLD" }, { "offset": 1107, "length": 12, "style": "ITALIC" }], "entityRanges": [{ "offset": 256, "length": 24, "key": 4 }, { "offset": 539, "length": 46, "key": 5 }, { "offset": 952, "length": 8, "key": 6 }, { "offset": 1322, "length": 27, "key": 7 }], "data": {} }, { "key": "28ekg", "text": "Entire History of You (season 1, episode 3)", "type": "header-four", "depth": 0, "inlineStyleRanges": [{ "offset": 0, "length": 43, "style": "BOLD" }], "entityRanges": [], "data": {} }, { "key": "agdh8", "text": "", "type": "header-four", "depth": 0, "inlineStyleRanges": [], "entityRanges": [], "data": {} }, { "key": "dido0", "text": "", "type": "image", "depth": 0, "inlineStyleRanges": [], "entityRanges": [], "data": { "enabled": false, "aspect_ratio": { "width": 800, "height": 401, "ratio": 50.125 }, "width": 800, "height": 401, "forceUpload": false, "url": "https://cdn-images-1.medium.com/max/800/1*gJkyxh7jfu5hEgs6QJxnyA.jpeg", "loading_progress": 0, "selected": false, "loading": false, "file": null, "direction": "center" } }, { "key": "6uhib", "text": "In this episode’s world, most people sport a “Grain” — an implant and interactive contact lens system that allows them to record every moment of their lives and replay at will. It’s Google Glass on steroids, shrunk down and stuck inside our eyeballs. That technology is in the works: Google recently patented a smart contact lens that could wirelessly send data to any internet-connected device similarly, Samsung and Sony have each patented smart contact lenses that could double as cameras. In “Entire History of You,” people also curate their Grains like you might selectively edit your social feeds today: on the Grain, you can get rid of an unsavory memory (like deleting a painful “On This Day” notification from Facebook) or replay one of your “greatest hits,” much as you might scroll your Instagrams of a particularly enjoyable trip.Meticulously recording one’s life in real time predates the futuristic lenses featured in this episode. In 1978, for instance, Steve Mann began developing a prosthetic that allowed his eye to function as both a camera and a TV display in the early aughts, Gordon Bell similarly experimented with “lifelogging,” wearing a camera that took a photo every 30 seconds. Y Combinator partner Justin Kan has also been a prominent practitioner of this type of self-surveillance: For eight months in 2007 he streamed every moment of his life before shutting down that experiment and starting up the popular live-streaming service Twitch. Of course, beyond a few experimental technologists, it’s unclear whether the broader public wants real-time documentation of their every moment—and Black Mirror’s take is a pretty harrowing campaign against it.", "type": "unstyled", "depth": 0, "inlineStyleRanges": [{ "offset": 0, "length": 24, "style": "BOLD" }, { "offset": 1564, "length": 5, "style": "ITALIC" }, { "offset": 1620, "length": 13, "style": "ITALIC" }], "entityRanges": [{ "offset": 300, "length": 29, "key": 8 }, { "offset": 407, "length": 7, "key": 9 }, { "offset": 419, "length": 4, "key": 10 }, { "offset": 1433, "length": 37, "key": 11 }], "data": {} }, { "key": "1qnu1", "text": "Playtest (season 3, episode 2)", "type": "header-four", "depth": 0, "inlineStyleRanges": [{ "offset": 0, "length": 30, "style": "BOLD" }], "entityRanges": [], "data": {} }, { "key": "e37e8", "text": "", "type": "image", "depth": 0, "inlineStyleRanges": [], "entityRanges": [], "data": { "enabled": false, "aspect_ratio": { "width": 800, "height": 401, "ratio": 50.125 }, "width": 800, "height": 401, "forceUpload": false, "url": "https://cdn-images-1.medium.com/max/800/1*bPQ7oBPEOg0ISwLUnsjLSw.jpeg", "loading_progress": 0, "selected": false, "loading": false, "file": null, "direction": "center" } }, { "key": "bfgin", "text": "“Playtest” follows wanderlust-stricken Cooper (Wyatt Russell) as he offers himself as a test subject for an augmented reality horror game—an experiment that turns fatal. All the tenets of this episode link back to reality: First, there’s the barely disguised TaskRabbit (dubbed “OddJobs”) on which Cooper finds his game-testing gig. The game he ends up playing is a mix of Pokémon Go and the myriad other augmented reality games out there it also draws from biofeedback-enhanced games, such as Nevermind, which read players’ stress levels and adjust gameplay accordingly.But what really brings the terror in “Playtest” is that the game uses a neural net to learn and build on the player’s worst fears. For Cooper, those include spiders, a deranged doppelgänger of his recent hookup, and his mother suffering from Alzheimer’s. It’s a terrifying version of that 2010 Arcade Fire music video, which used Google Maps and html5 to set the video in the viewer’s childhood neighborhood. Pair that with MIT’s Nightmare Machineproject, which makes even the most innocuous of images scary, and you’ve got something pretty close to the freaky tech presented here — lethal side effects (hopefully) not included.", "type": "unstyled", "depth": 0, "inlineStyleRanges": [{ "offset": 0, "length": 45, "style": "BOLD" }], "entityRanges": [{ "offset": 878, "length": 11, "key": 12 }, { "offset": 996, "length": 23, "key": 13 }], "data": {} }, { "key": "284s1", "text": "Be Right Back (season 2, episode 1)", "type": "header-four", "depth": 0, "inlineStyleRanges": [{ "offset": 0, "length": 35, "style": "BOLD" }], "entityRanges": [], "data": {} }, { "key": "5ejn4", "text": "", "type": "image", "depth": 0, "inlineStyleRanges": [], "entityRanges": [], "data": { "enabled": false, "aspect_ratio": { "width": 800, "height": 401, "ratio": 50.125 }, "width": 800, "height": 401, "forceUpload": false, "url": "https://cdn-images-1.medium.com/max/800/1*SODulysFlTl6eiGUwln2GQ.jpeg", "loading_progress": 0, "selected": false, "loading": false, "file": null, "direction": "center" } }, { "key": "29bof", "text": "After a car accident kills her partner, Martha (Hayley Atwell) uses a service to mine his online presence and recreate him: first as a chatbot, then a voice on the phone, and finally, most eerily, as a physical replica. Since the episode’s airing in 2013, the chatbot iteration of this technology has essentially been replicated: As detailed in The Verge, when Russian technologist Eugenia Kuyda’s close friend Roman died, she trained a bot to speak in his “voice” by feeding it hundreds of digital exchanges they had shared.Chatbots from beyond the grave aside, the question of what happens to the traces of ourselves that we leave online when we die is of the moment: Numerous companies offer services to help people manage their digital legacies. And Kuyda’s not the only entrepreneur to have attempted some version of the technology presented in “Be Right Back.” A startup called Eterni.me, for instance, promises that it’ll preserve you forever as a digital avatar, while Chatbot.me claims to be able to create a Twitter bot that sounds just like you. (In my personal experimentations, that latter bot just sounds deranged—but maybe that’s just me.)", "type": "unstyled", "depth": 0, "inlineStyleRanges": [{ "offset": 0, "length": 39, "style": "BOLD" }, { "offset": 345, "length": 10, "style": "ITALIC" }], "entityRanges": [{ "offset": 333, "length": 8, "key": 14 }, { "offset": 689, "length": 5, "key": 15 }, { "offset": 695, "length": 8, "key": 16 }], "data": {} }, { "key": "17h6j", "text": "Shut Up and Dance (season 3, episode 3)", "type": "header-four", "depth": 0, "inlineStyleRanges": [{ "offset": 0, "length": 39, "style": "BOLD" }], "entityRanges": [], "data": {} }, { "key": "62dar", "text": "", "type": "image", "depth": 0, "inlineStyleRanges": [], "entityRanges": [], "data": { "enabled": false, "aspect_ratio": { "width": 800, "height": 401, "ratio": 50.125 }, "width": 800, "height": 401, "forceUpload": false, "url": "https://cdn-images-1.medium.com/max/800/1*6cWjeI5k0SOxNl0trJTX_w.jpeg", "loading_progress": 0, "selected": false, "loading": false, "file": null, "direction": "center" } }, { "key": "9t8q3", "text": "In “Shut Up and Dance,” 19-year-old Kenny (Alex Lawther) downloads malware to his laptop, allowing hackers to film him masturbating to porn that video then becomes ammunition for increasingly dark blackmail. Kenny’s not the hero—it turns out he was watching child pornography—but the hackers’ extortion of his panic echoes real-world ransomware attacks and “sextortion” scandals, maybe most notably the case of Amanda Todd, who was driven to suicide in 2012 after years of extortion and manipulation by an online stranger who’d collected topless photos of her.Kenny follows through on increasingly insane demands as the episode progresses: he robs a bank he fights another blackmail victim to the death. Yet after all that, his hackers release the video anyway, with no explanation beyond a class Trollface meme—an echo of the hacking group LulzSec’s logo. Though Kenny winds up not so sympathetic, his plight is a chilling reminder that Mark Zuckerberg’s not crazy: You might just want to cover up that webcam.", "type": "unstyled", "depth": 0, "inlineStyleRanges": [{ "offset": 0, "length": 23, "style": "BOLD" }], "entityRanges": [{ "offset": 412, "length": 11, "key": 17 }, { "offset": 940, "length": 27, "key": 18 }], "data": {} }, { "key": "5fcv3", "text": "White Christmas (season 2, episode 4)", "type": "header-four", "depth": 0, "inlineStyleRanges": [{ "offset": 0, "length": 37, "style": "BOLD" }], "entityRanges": [], "data": {} }, { "key": "4fiur", "text": "", "type": "image", "depth": 0, "inlineStyleRanges": [], "entityRanges": [], "data": { "enabled": false, "aspect_ratio": { "width": 800, "height": 401, "ratio": 50.125 }, "width": 800, "height": 401, "forceUpload": false, "url": "https://cdn-images-1.medium.com/max/800/1*wuL3VA4AgbpdMfs9RCIUwg.jpeg", "loading_progress": 0, "selected": false, "loading": false, "file": null, "direction": "center" } }, { "key": "b9d70", "text": "In Black Mirror’s Christmas special, a man enlists the help of relationship coach Matt (Jon Hamm), who uses smart contact lenses to watch him interact with women and offer him real-time advice. As in “Entire History of You,” camera-enabled lenses are certainly under development Matt’s dating service isn’t so far from what’s available today, either. Jyst, for example, is an app that allows people to crowdsource dating advice, while Relationup lets you text a designated dating coach in real time.The dating service, however, is just Matt’s side project: his day job is torturing artificially intelligent home assistants into submission. An assistant is an exact replica of the brain of its owner, stashed in an object bearing an uncanny resemblance to Google Home. The upside: your assistant knows your exact preferences and can keep your home perfectly to your liking. The downside: It’s self aware, trapped, and has to be trained into compliance. It’s pretty futuristic AI—but give Google Home another few generations, and maybe we’ll all be cloning our consciousnesses into obedient domestic slaves.", "type": "unstyled", "depth": 0, "inlineStyleRanges": [{ "offset": 0, "length": 2, "style": "BOLD" }, { "offset": 3, "length": 33, "style": "BOLD" }, { "offset": 3, "length": 12, "style": "ITALIC" }], "entityRanges": [], "data": {} }, { "key": "13aa", "text": "Fifteen Million Merits (season 1, episode 2)", "type": "header-four", "depth": 0, "inlineStyleRanges": [{ "offset": 0, "length": 44, "style": "BOLD" }], "entityRanges": [], "data": {} }, { "key": "df89e", "text": "", "type": "image", "depth": 0, "inlineStyleRanges": [], "entityRanges": [], "data": { "enabled": false, "aspect_ratio": { "width": 800, "height": 401, "ratio": 50.125 }, "width": 800, "height": 401, "forceUpload": false, "url": "https://cdn-images-1.medium.com/max/800/1*LXNImOG3Hp8MTn6JeBlqyg.jpeg", "loading_progress": 0, "selected": false, "loading": false, "file": null, "direction": "center" } }, { "key": "ch54g", "text": "In the world of “Fifteen Million Merits,” people spend their days riding electricity-generating stationary bikes, watching reality shows to pass the time. As they bike, they earn credits, which let them enter a reality show called Hot Shots. Getting on that show, a dark amalgam of American Idol and X Factor, is the only way to escape an endless future of cycling: Much as today’s reality shows lure contestants with the possibility of instant fame, Hot Shots promises its winners a life of luxury.But it’s the cycling that has the strongest real-world ties. Today, apps like Pact allow users to earn cash for meeting health goals, and generators like Pedal-A-Watt use cycling to generate electricity. Even more on the nose, in 2012 — the year after this episode aired — a Brazilian prison offered inmates the opportunity to reduce their sentences by cycling on stationary bikes to charge car batteries: For every three days an inmate biked, he could shave one day off of his sentence.", "type": "unstyled", "depth": 0, "inlineStyleRanges": [{ "offset": 0, "length": 41, "style": "BOLD" }, { "offset": 231, "length": 9, "style": "ITALIC" }, { "offset": 282, "length": 13, "style": "ITALIC" }, { "offset": 300, "length": 8, "style": "ITALIC" }, { "offset": 451, "length": 9, "style": "ITALIC" }, { "offset": 745, "length": 5, "style": "ITALIC" }], "entityRanges": [{ "offset": 791, "length": 31, "key": 19 }], "data": {} }, { "key": "1iond", "text": "Men Against Fire (season 3, episode 5 )", "type": "header-four", "depth": 0, "inlineStyleRanges": [{ "offset": 0, "length": 39, "style": "BOLD" }], "entityRanges": [], "data": {} }, { "key": "692t6", "text": "", "type": "image", "depth": 0, "inlineStyleRanges": [], "entityRanges": [], "data": { "enabled": false, "aspect_ratio": { "width": 800, "height": 401, "ratio": 50.125 }, "width": 800, "height": 401, "forceUpload": false, "url": "https://cdn-images-1.medium.com/max/800/1*qf7CX4IYmgLGcISKFaDyEw.jpeg", "loading_progress": 0, "selected": false, "loading": false, "file": null, "direction": "center" } }, { "key": "8lvfd", "text": "A technologically enhanced soldier, Stripe (Malachi Kirby), seeks to eradicate what appears to be a zombie plague by hunting down infected human “roaches,” now reduced to Nosferatu doppelgängers. As it turns out, the “roaches” aren’t zombies at all—they’re average people deemed “undesirable” by some greater political power that’s running a eugenics program. An augmented reality system, fed by the soldiers’ neural implants, makes these people look inhuman—think Snap lenses, projected onto your eyeballs without your explicit consent.The point of the implant is to reduce the soldiers’ empathy, eliminating PTSD by allowing them to kill off vulnerable populations without guilt. It works—that is, until a virus infects Stripe’s implant, letting him see that he’s unknowingly killing off innocent people. The idea that we could rid soldiers of empathy is chilling, and in many ways these soldiers seem like the logical progression of projects such as the US military’s Nett Warrior and France’s “Future Soldier” programs, which equip troops with high-tech communications systems. Most notably, however, this episode seems like a parable of what right-wing Trump-fueled nationalism and xenophobia might bring about—technology only aids in the mission.", "type": "unstyled", "depth": 0, "inlineStyleRanges": [{ "offset": 0, "length": 35, "style": "BOLD" }], "entityRanges": [], "data": {} }, { "key": "6uprp", "text": "San Junipero (season 3, episode 4 )", "type": "header-four", "depth": 0, "inlineStyleRanges": [{ "offset": 0, "length": 35, "style": "BOLD" }], "entityRanges": [], "data": {} }, { "key": "48kt0", "text": "", "type": "image", "depth": 0, "inlineStyleRanges": [], "entityRanges": [], "data": { "enabled": false, "aspect_ratio": { "width": 800, "height": 401, "ratio": 50.125 }, "width": 800, "height": 401, "forceUpload": false, "url": "https://cdn-images-1.medium.com/max/800/1*exG3QaU4M3UcKyBfzEjkEA.jpeg", "loading_progress": 0, "selected": false, "loading": false, "file": null, "direction": "center" } }, { "key": "c5v9", "text": "In this episode, people can live forever in virtual reality by uploading their consciousnesses after death. It’s basically futurist Ray Kurzweil’s fantasy turned reality: He predicts we’ll be able to digitize our persons by 2045. We’re certainly not there yet—though initiatives to better understand the science of the human brain, like the Human Brain Project, are nudging us closer.What makes this episode particularly powerful is its protagonist’s motivations for prematurely “crossing over” to the virtual afterlife. Now elderly, Yorkie (Mackenzie Davis) has been paralyzed since 21, and for her, San Junipero isn’t an afterlife so much as a chance at fully experiencing life itself. It echoes the ways that many people with disabilities engage with virtual worlds such as Second Life and InWorldz, living there in ways they can’t in the physical world. We may be a long way from coding a virtual heaven, but the concept of virtual realities allowing people to broaden their life experiences isn’t fiction at all.", "type": "unstyled", "depth": 0, "inlineStyleRanges": [{ "offset": 0, "length": 16, "style": "BOLD" }], "entityRanges": [{ "offset": 341, "length": 19, "key": 20 }], "data": {} }, { "key": "egdol", "text": "The National Anthem (season 1, episode 1)", "type": "header-four", "depth": 0, "inlineStyleRanges": [{ "offset": 0, "length": 41, "style": "BOLD" }], "entityRanges": [], "data": {} }, { "key": "3sc3e", "text": "", "type": "image", "depth": 0, "inlineStyleRanges": [], "entityRanges": [], "data": { "enabled": false, "aspect_ratio": { "width": 800, "height": 401, "ratio": 50.125 }, "width": 800, "height": 401, "forceUpload": false, "url": "https://cdn-images-1.medium.com/max/800/1*uXZdF0yUsRAnqZ66Jg89EA.jpeg", "loading_progress": 0, "selected": false, "loading": false, "file": null, "direction": "center" } }, { "key": "f2fqe", "text": "In Black Mirror’s cringe-worthy pilot, Britain’s princess has been kidnapped and will only be released if the Prime Minister has sex with a pig on live television. Spoiler alert: he does. “The National Anthem” successfully functions as a scathing commentary on our society’s desire for sensationalism at any cost, yet it doesn’t take many fictional leaps. Indeed, the world it portrays is so similar to ours that it even bears coincidental resemblance to the tabloid-fueled “Piggate” rumors that erupted last fall (years after the episode premiered) accusing then-Prime Minister David Cameron of inserting his genitals in a dead pig’s mouth. Needless to say, whatever Cameron did or did not do with the pig was definitely notstreamed live for all of Britain to see.", "type": "unstyled", "depth": 0, "inlineStyleRanges": [{ "offset": 0, "length": 2, "style": "BOLD" }, { "offset": 3, "length": 35, "style": "BOLD" }, { "offset": 3, "length": 12, "style": "ITALIC" }, { "offset": 722, "length": 3, "style": "ITALIC" }], "entityRanges": [{ "offset": 475, "length": 7, "key": 21 }], "data": {} }, { "key": "dlpuj", "text": "White Bear (season 2, episode 2)", "type": "header-four", "depth": 0, "inlineStyleRanges": [{ "offset": 0, "length": 32, "style": "BOLD" }], "entityRanges": [], "data": {} }, { "key": "ebs45", "text": "", "type": "image", "depth": 0, "inlineStyleRanges": [], "entityRanges": [], "data": { "enabled": false, "aspect_ratio": { "width": 800, "height": 401, "ratio": 50.125 }, "width": 800, "height": 401, "forceUpload": false, "url": "https://cdn-images-1.medium.com/max/800/1*BDMCIns12g67lhhQX2m96Q.jpeg", "loading_progress": 0, "selected": false, "loading": false, "file": null, "direction": "center" } }, { "key": "caf0j", "text": "In “White Bear” we watch Victoria (Lenora Crichlow) navigate a desolate world in which she’s trailed by cell phone zombies and violent predators. It turns out that the scenario is meant to be a fitting punishment: Victoria is being made to relive this nightmare after helping her boyfriend kidnap and murder a young girl, filming it all on her cell phone. Victoria’s story is loosely modeled on the Moors murders: Ian Brady and Myra Hindley abducted and murdered five children, earning Hindley the title of “most evil woman in Britain” (though in real life, the murderers were not punished by public torture or repeated memory wiping).Before this episode’s third-act twist, it appears to be making a statement about our tendency to disappear into our devices rather than experiencing the world firsthand (see: photos of hundreds of cell phone-wielding New Yorkers documenting Manhattanhenge). It then becomes clear that the people with the cell phones aren’t zombies at all, but rather attendees at the theme park that is the protagonist’s torture chamber. They’ve been told to film her, but ignore her pleas for help, mirroring Victoria’s own actions as she filmed her victim’s torture.", "type": "unstyled", "depth": 0, "inlineStyleRanges": [{ "offset": 0, "length": 33, "style": "BOLD" }], "entityRanges": [{ "offset": 498, "length": 5, "key": 22 }, { "offset": 810, "length": 6, "key": 23 }], "data": {} }, { "key": "e7nlc", "text": "", "type": "image", "depth": 0, "inlineStyleRanges": [], "entityRanges": [], "data": { "enabled": false, "aspect_ratio": { "width": 800, "height": 14, "ratio": 1.7500000000000002 }, "width": 800, "height": 14, "forceUpload": false, "url": "https://cdn-images-1.medium.com/max/800/1*GpmBzpGpmYrfDNiqABzipw.png", "loading_progress": 0, "selected": false, "loading": false, "file": null, "direction": "center" } }, { "key": "9f7el", "text": "Are you, too, turning to the dystopian world of Black Mirror as a dark oracle of things to come? Or maybe you’re just enjoying it for its entertainment value? Either way, if we missed a real-world parallel, let us know below.", "type": "unstyled", "depth": 0, "inlineStyleRanges": [{ "offset": 0, "length": 13, "style": "BOLD" }, { "offset": 48, "length": 12, "style": "ITALIC" }], "entityRanges": [], "data": {} }] }

// component implementation
class PostEditor extends Component {

    constructor(props) {
        super(props)
        let config = Map(fromJS(this.defaultOptions(props.config)))
        this.options = config.mergeDeep(props.config).toJS()
    }

    defaultOptions(options) {
        // default options
        if (options == null) {
            options = {}
        }
        let defaultOptions = {}
        defaultOptions.el = 'app'
        defaultOptions.content = ""
        defaultOptions.read_only = false
        defaultOptions.spellcheck = false
        defaultOptions.title_placeholder = "Title"
        defaultOptions.body_placeholder = "Write your story"
        // @defaultOptions.api_key = "86c28a410a104c8bb58848733c82f840"

        defaultOptions.widgets = [
            {
                title: 'add an image',
                icon: 'image',
                type: 'image',
                block: ImageBlock,
                editable: true,
                renderable: true,
                breakOnContinuous: true,
                wrapper_class: "graf graf--figure",
                selected_class: "is-selected is-mediaFocused",
                selectedFn: block => {
                    const { direction } = block.getData().toJS()
                    switch (direction) {
                        case "left":
                            return "graf--layoutOutsetLeft"
                        case "center":
                            return ""
                        case "wide":
                            return "sectionLayout--fullWidth"
                        case "fill":
                            return "graf--layoutFillWidth"
                        default:
                            return ''

                    }
                },
                handleEnterWithoutText(ctx, block) {
                    const { editorState } = ctx.state
                    return ctx.onChange(addNewBlockAt(editorState, block.getKey()))
                },
                handleEnterWithText(ctx, block) {
                    const { editorState } = ctx.state
                    return ctx.onChange(addNewBlockAt(editorState, block.getKey()))
                },
                widget_options: {
                    displayOnInlineTooltip: true,
                    insertion: "upload",
                    insert_block: "image"
                },
                options: {
                    upload_url: options.upload_url,
                    upload_headers: options.upload_headers,
                    upload_formName: options.upload_formName,
                    upload_callback: options.image_upload_callback,
                    image_delete_callback: options.image_delete_callback,
                    image_caption_placeholder: options.image_caption_placeholder
                }
            }, {
                icon: 'embed',
                title: 'insert embed',
                type: 'embed',
                block: EmbedBlock,
                editable: true,
                renderable: true,
                breakOnContinuous: true,
                wrapper_class: "graf graf--mixtapeEmbed",
                selected_class: "is-selected is-mediaFocused",
                widget_options: {
                    displayOnInlineTooltip: true,
                    insertion: "placeholder",
                    insert_block: "embed"
                },
                options: {
                    endpoint: `//api.embed.ly/1/extract?key=${options.api_key}&url=`,
                    placeholder: 'Paste a link to embed content from another site (e.g. Twitter) and press Enter'
                },
                handleEnterWithoutText(ctx, block) {
                    const { editorState } = ctx.state
                    return ctx.onChange(addNewBlockAt(editorState, block.getKey()))
                },
                handleEnterWithText(ctx, block) {
                    const { editorState } = ctx.state
                    return ctx.onChange(addNewBlockAt(editorState, block.getKey()))
                }
            }, {
                icon: 'video',
                title: 'insert video',
                editable: true,
                type: 'video',
                block: VideoBlock,
                renderable: true,
                breakOnContinuous: true,
                wrapper_class: "graf--figure graf--iframe",
                selected_class: " is-selected is-mediaFocused",
                widget_options: {
                    displayOnInlineTooltip: true,
                    insertion: "placeholder",
                    insert_block: "video"
                },
                options: {
                    endpoint: `//api.embed.ly/1/oembed?key=${options.api_key}&url=`,
                    placeholder: 'Paste a YouTube, Vine, Vimeo, or other video link, and press Enter',
                    caption: 'Type caption for embed (optional)'
                },

                handleEnterWithoutText(ctx, block) {
                    const { editorState } = ctx.state
                    return ctx.onChange(addNewBlockAt(editorState, block.getKey()))
                },

                handleEnterWithText(ctx, block) {
                    const { editorState } = ctx.state
                    return ctx.onChange(addNewBlockAt(editorState, block.getKey()))
                }
            }, {
                renderable: true,
                editable: true,
                block: PlaceholderBlock,
                type: 'placeholder',
                wrapper_class: "is-embedable",
                selected_class: " is-selected is-mediaFocused",
                widget_options: {
                    displayOnInlineTooltip: false
                },
                handleEnterWithText(ctx, block) {
                    const { editorState } = ctx.state
                    const data = {
                        provisory_text: block.getText(),
                        endpoint: block.getData().get('endpoint'),
                        type: block.getData().get('type')
                    }

                    return ctx.onChange(resetBlockWithType(editorState, data.type, data))
                }
            }
        ]

        defaultOptions.tooltips = [{
            ref: 'insert_tooltip',
            component: DanteTooltip,
            displayOnSelection: true,
            selectionElements: [
                "unstyled",
                "blockquote",
                "ordered-list",
                "unordered-list",
                "unordered-list-item",
                "ordered-list-item",
                "code-block",
                'header-one',
                'header-two',
                'header-three',
                'header-four'],
            widget_options: {
                block_types: [
                    // {label: 'p', style: 'unstyled'},
                    { label: 'h2', style: 'header-one', type: "block" },
                    { label: 'h3', style: 'header-two', type: "block" },
                    { label: 'h4', style: 'header-three', type: "block" },
                    { label: 'blockquote', style: 'blockquote', type: "block" },
                    { label: 'insertunorderedlist', style: 'unordered-list-item', type: "block" },
                    { label: 'insertorderedlist', style: 'ordered-list-item', type: "block" },
                    { label: 'code', style: 'code-block', type: "block" },
                    { label: 'bold', style: 'BOLD', type: "inline" },
                    { label: 'italic', style: 'ITALIC', type: "inline" }]
            }
        }, {
            ref: 'add_tooltip',
            component: DanteInlineTooltip
        }, {
            ref: 'anchor_popover',
            component: DanteAnchorPopover
        }, {
            ref: 'image_popover',
            component: DanteImagePopover
        }]

        defaultOptions.xhr = {
            before_handler: null,
            success_handler: null,
            error_handler: null
        }

        defaultOptions.data_storage = {
            url: null,
            method: "POST",
            success_handler: null,
            failure_handler: null,
            interval: 1500
        }

        defaultOptions.default_wrappers = [
            { className: 'graf--p', block: 'unstyled' },
            { className: 'graf--h2', block: 'header-one' },
            { className: 'graf--h3', block: 'header-two' },
            { className: 'graf--h4', block: 'header-three' },
            { className: 'graf--blockquote', block: 'blockquote' },
            { className: 'graf--insertunorderedlist', block: 'unordered-list-item' },
            { className: 'graf--insertorderedlist', block: 'ordered-list-item' },
            { className: 'graf--code', block: 'code-block' },
            { className: 'graf--bold', block: 'BOLD' },
            { className: 'graf--italic', block: 'ITALIC' }]

        defaultOptions.continuousBlocks = [
            "unstyled",
            "blockquote",
            "ordered-list",
            "unordered-list",
            "unordered-list-item",
            "ordered-list-item",
            "code-block"
        ]

        defaultOptions.key_commands = {
            "alt-shift": [{ key: 65, cmd: 'add-new-block' }],
            "alt-cmd": [{ key: 49, cmd: 'toggle_block:header-one' },
            { key: 50, cmd: 'toggle_block:header-two' },
            { key: 53, cmd: 'toggle_block:blockquote' }],
            "cmd": [{ key: 66, cmd: 'toggle_inline:BOLD' },
            { key: 73, cmd: 'toggle_inline:ITALIC' },
            { key: 75, cmd: 'insert:link' }]
        }

        defaultOptions.character_convert_mapping = {
            '> ': "blockquote",
            '*.': "unordered-list-item",
            '* ': "unordered-list-item",
            '- ': "unordered-list-item",
            '1.': "ordered-list-item",
            '# ': 'header-one',
            '##': 'header-two',
            '==': "unstyled",
            '` ': "code-block"
        }

        return defaultOptions
    }

    handleOnChange = () => {
        console.log('Chaging')
        this.danteEditor.onChange();
    }

    // componentDidMount() {
    //     console.log("Get current editor state: ");
    //     const currentContent = this.danteEditor.state.editorState.getCurrentContent();
    //     console.log(convertToRaw(currentContent));
    //     console.log("Get first block:")
    //     console.log(currentContent.getFirstBlock().getText());
    //     console.log(this.danteEditor)
    //     console.log(this.danteEditor.onChange)
    //     this.handleOnChange = this.danteEditor.onChange
    // }

    myOnSaveHandler = (editorContext, content) => {
        this.props.onChange(
            content
        )
    }


    render() {
        return (
            <DanteEditor
                content={demo}
                ref={(danteEditor) => { this.handleOnChange = danteEditor.onChange }}
                config={this.options}
            />
        )
    }
}

export default PostEditor