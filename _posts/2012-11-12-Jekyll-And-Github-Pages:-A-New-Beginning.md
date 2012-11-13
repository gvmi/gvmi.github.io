---
layout: post
---
OKAY, after a million **cheap** commits and screw-ups, the site is finally ready for my posts. I should have done everything locally first, which I did in the beginning, but things got all mixed up so I still have to sort that out. I'm still a huge beginner with jekyll/markdown/github/etc and I hope that I'll learn more by doing my site this way. *Anyways*, a little about me: I'm Sharrie, an almost-19 year old studying applied math at UC Davis. I like bunnies, video games, and sarcasm. Most of the content from this blog will be my photo adventures and what I learn at work (Salesforce, *yay*). Ah I forgot some things. Excuse me while I do some test formatting.

<h2>hello heading 2</h2>

<pre><code>public SelectOption[] getJoinOptions() {  
	SelectOption[] joins = new SelectOption[]{};  
		joins.add(new SelectOption('','--None--'));  
		for (Join__c j : [select id, name, level_one__r.name, level_two__r.name from Join__c where isdeleted = false order by level_one__r.name]) {  
			joins.add(new SelectOption(j.id, j.name + ' (' + j.level_one__r.name + ', ' + j.level_two__r.name + ')'));  
		}  
		return joins;  
	}
</code></pre>


<blockquote>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget ante dapibus lorem rutrum adipiscing sed vel sapien. Etiam pellentesque dolor lacinia justo tempus posuere. 
</blockquote>