import headshot from './images/joe.jpg';
import jacky from './images/jacky.jpg';
import sam from './images/sam.jpg';
import daniel from './images/daniel.jpg';

const data = {
	user: {
		name: 'Joe Joseph', 
		avatar: headshot, 
		email: 'joe@youknow.com',
		favoriteQuotes: [
			'When you reach the end of your rope, tie a knot in it and hang on.',
			'Learning never exhausts the mind.',
			'Good judgment comes from experience, and a lot of that comes from bad judgment.'
		],
		friendsList: [
			{
				name: 'Jacky',
				avatar: jacky
			}, 
			{
				name: 'Sam',
				avatar: sam
			},
			{
				name: 'Daniel',
				avatar: daniel
			}
		]
	},
	pageData: {
		topPosts: [
			{
				title: 'More ideas?!', 
				content: `Need more blog post ideas?

Have you ever stared at your screen, unable to figure out what to write?

Are you wondering what type of content will best engage your audience?

In this article, I’ll share 12 types of blog posts that can help you kick blogger’s block to the curb and keep your readers coming back for more.`
			},
			{
				title: 'what is best in life?', 
				content: `“The most important sentence in any article is the first one. If it doesn’t induce the reader to proceed to the second sentence, your article is dead. And if the second sentence doesn’t induce him to continue to the third sentence, it’s equally dead. Of such a progression of sentences, each tugging the reader forward until … safely hooked, a writer constructs that fateful unit: the lead.”`
			},
			{
				title: 'Real growth comes from within',
				content: `Example From: How to Change Your Mindset for Growth by Ali Luke

“Pop quiz. Which of these do you agree with?

Intelligence is fixed at birth.
Some people are creative, others aren’t.
You can become a world-class expert through enough practice, whatever your starting point.
You can change your personality.
“If you agreed with the first two statements, you’re coming from a fixed mindset. If you agreed with the second two, you’ve got a growth mindset.”`
			},
			{
				title: 'Bigger is better?',
				content: `“Do you sound smarter when you use big words?”

“According to a study published in Applied Cognitive Psychology, the answer is no.”`
			}
		]
	}
}

export default data;

