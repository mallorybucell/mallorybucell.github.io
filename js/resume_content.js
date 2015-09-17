var resumeEvents = [
  { type: "volunteer", organization: "Girl Develop It", location: "Washington, DC", title: "Intro to Ruby on Rails Teaching Assistant", overview: "Provide technical support and pair programming advice for students taking 4-week intro course.", highlights: [""], tags: [""], startDate: "September 2015", endDate: "present" }, 
  { type: "volunteer", organization: "DC Web Women's Code(Her) Conference", location: "Washington, DC", title: "Volunteer", overview: "Provide logistical and tecnical support for all-day event.", highlights: ["Assist attendees in finding sessions", "Assist speakers in room setup", "Facilitated setup and clean-up for provided meals"], tags: [""], startDate: "Septmeber 2015", endDate: "September 2015" }, 
  { type: "volunteer", organization: "FoundryESL", location: "Washington, DC", title: "Intermediate ESL Co-Teacher", overview: "Free ESL classes, taught for 2 hours once/week.", highlights: ["Researched and developed lessons based on topic list", "graded assignments", "led classroom activities and discussion"], tags: [""], startDate: "May 2015", endDate: "August 2015" },
  { type: "volunteer", organization: "Ruby for Good", location: "Washington, DC", title: "Volunteer Rubyist", overview: "Worked with team of Rails and JavaScript engineers to create CMS for youth-focused non-profit.", highlights: [""], tags: [""], startDate: "July 31, 2015", endDate: "August 2, 2015" }, 
  { type: "volunteer", organization: "DC FemTech", location: "Washington, DC", title: "Hack for Good Attendee", overview: "Worked with team of 6 to build a new Wordpress site for children's non-profit during weekend hackathon", highlights: [""], tags: [""], startDate: "May 2015", endDate: "May 2015" }, 
  { type: "volunteer", organization: "RailsConf, Ruby Central, Inc", location: "Atlanta, GA", title: "Opportunity Scholar", overview: "Received scholarship and mentorship to attend 2015 Railsconf", highlights: ["Attended sessions and workshops on a variety of coding topics"], tags: [""], startDate: "April 2015", endDate: "April 2015" }, 
  { type: "education", organization: "The Iron Yard Academy", location: "Washington, DC", title: "Cerficate: Ruby on Rails Engineering", overview: "12-week intensive code school teaching both coding languages and frameworks in addition to skills needed for success in a professional, team environment", highlights: ["Worked alone and in teams to build command line scripts and webapps in Ruby language and associated frameworks", "Hands-on problem-solving of common engineering issues", "Created to-do list app for the command line, then ported to Sinatra and Rails", "Created app for users to vote on favorite songs and then compiled the choices into a Spotify playlist using agile processes, sprints, and individual feature assignments"], tags: [""], startDate: "January 2015", endDate: "April 2015" }, 
  { type: "employment", organization: "American Institutes for Research (AIR)", location: "Washington, DC", title: "Assistant Item Development Manager", overview: "I started at AIR in 2009 as a temporary data-entry and QA employee. After becoming an expert in the use of internal NLP software, I eventually gained increasing responsibility across several aspects of the test-development process: ", highlights: ["Led and managed 12-person team for full-cycle, assessment creation projects in hard-to-measure content areas", "Developed, scheduled, tracked, and conducted quality control of blueprints, test forms, and test questions for online educational assessments", "Trained and on-boarded new assessment staff and vendors on online CMS and best-practices in writing and reviewing test questions", "Designed and maintained comprehensive training materials, task manuals, and knowledge management documentation and procedures", "Consulted software developers and test content creators in development and use of Natural Language Processing (NLP) essay-scoring software", "Team-level technical expert on proprietary item and essay-scoring software tools: planned and facilitated workshops to train on-site and remote staff, tested software updates, and tracked functionality" ], tags: [""], startDate: "December 2009", endDate: "January 2015" },
  { type: "volunteer", organization: "Language, ETC", location: "Washington, DC", title: "ESL Tutor", overview: "Held weekly tutoring and conversation hour to improve production and comprehension of written and spoken English in refugee and expat populations", highlights: ["Designed, researched, and presented lessons for students of various skill and comprehension levels"], tags: [""], startDate: "2012", endDate: "2014" }, 
  { type: "education", organization: "Georgetown University", location: "Washington, DC", title: "Cerficate: Project Management", overview: "", highlights: [""], tags: [""], startDate: "April 2012", endDate: "April 2012" }, 
  { type: "education", organization: "The George Washington University", location: "Washington, DC", title: "MA: International Affairs, Conflict Resolution and Asia", overview: "", highlights: [""], tags: [""], startDate: "September 2007", endDate: "May 2009" }, 
  { type: "employment", organization: "Diplomatic and Consular Officers, Retired", location: "Washington, DC", title: "Program and Membership Assistant Intern", overview: "", 
  highlights: ["Coordinated planning and execution of annual conference for around 200 attendees, including processing registration, creating and distributing event materials, and providing administrative and technical support to staff, guest speakers, and attendees before, during, and after event", "Reduced processing time of monetary gifts and acknowledgements by 50% in overhauling system", "Provided technical support and customer service to diverse membership of high-level domestic and foreign diplomats and civilian populations, in-person and via phone/email"], tags: [""], startDate: "2007", endDate: "2008" }, 
  { type: "education", organization: "University of Rochester", location: "Rochester, NY", title: "BA: Linguistics, Japanese Language and Literature", overview: "", highlights: ["Summa Cum Laude"], tags: [""], startDate: "September 2003", endDate: "May 2007" },
  { type: "employment", organization: "Eriez Manufacturing Co.", location: "Erie, PA", title: "International Department Assistant, Summer Intern", overview: "", highlights: ["Designed and implemented financial reconciliation project between headquarters accounting department and field office sales representatives across Asia and South America", "Shipped sensitive materials internationally, conducting cost-comparisons and acquiring vendors, facilitating internal packing and shipping logistics"], tags: [""], startDate: "2005", endDate: "2006" }, 
  { type: "employment", organization: "Department of Clinical and Social Psychology, University of Rochester", location: "Rochester, NY", title: "Research Assistant", overview: "Grant-sponsored, psycholinguistics research focused on prosody usage and comprehension in autistic populations", highlights: ["Performed data-entry and analysis", "Designed stimuli collaboratively with other research assistants and project lead", "Conducted literature review", "Participated in early stages of editing academic research paper for publication", "Created online survey collaboratively to collect baseline data on respondents\' interpretation of emotional connotation and affect in language"], tags: [""], startDate: "February 2004", endDate: "November 2005" }, 
];

var timelineHtml = ""

function setTimelineGlyphicon ( event ) {    
  var glyphicon = ""

  switch ( event.type ) {
   case 'employment': glyphicon = 'briefcase'
   break;
   
   case 'education': glyphicon = 'education'
   break;
   
   case 'volunteer': glyphicon = 'user'
   break;
   
   default: glyphicon = 'error'; console.log('error loading glyphicon for ' + event['title']);
  }

  return glyphicon
}

function createHighlightsList( event ) {
  var highlightsHtml = ''
  event.highlights.forEach( function(highlight) {
    highlightsHtml += '<li>' + highlight + '</li>';
    }
    );
  return highlightsHtml;
}

function createTimelineBlock() {
  for ( event of resumeEvents ) {

    /* create timeline block and create-populate-close associated image div */
    timelineHtml += '<div class=\"cd-timeline-block\"> <div class=\"cd-timeline-img ';
    timelineHtml += 'cd-' + event.type + '\">';
    timelineHtml += '<span class=\"glyphicon glyphicon-' + setTimelineGlyphicon( event ) + '\" ';
    timelineHtml += 'aria-hidden=\"true\"</span></div>';

    //create and populate timeline content div
    timelineHtml += '<div class=\"cd-timeline-content\">';
    timelineHtml += '<h2>' + event.title + '</h2>';
    timelineHtml += '<h4><em>' + event.organization + '</em></h4>';
    timelineHtml += '<h5>' + event.location + '</h5>';
    timelineHtml += '<p>' + event.overview + '</p>';
    console.log(event)
    if ( event.highlights[0] === "") { 
      console.log(event['title'])
    } else { timelineHtml += '<ul>' + createHighlightsList( event ) + '</ul>'; }
    //insert read-more here
    timelineHtml += '<span class=\"cd-date\">' + event.startDate + '-' + event.endDate + '</span></div></div>';
  }
  return timelineHtml;
}

//create content on page load
jQuery(document).ready(function($){
  $( "#cd-timeline" ).append( createTimelineBlock() );
});

    //final timelineHtml should produce similar code block:

    // <div class="cd-timeline-block">
    //   <div class="cd-timeline-img cd-employment">
    //     <span class="glyphicon glyphicon-briefcase" aria-hidden="true"</span>
    //   </div> 
    //   <div class="cd-timeline-content">
    //     <h2>Employment</h2>
    //     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p>
    //     <ul><li>item1</li><li>itemEtc</li></ul>
    //     <a href="#0" class="cd-read-more">Read more</a>
    //     <span class="cd-date">Jan 14</span>
    //   </div> 
    // </div> 








// event template: { type: "", organization: "", location: "", title: "", overview: "", highlights: [""], tags: [""], startDate: "", endDate: "" }, 

/* conferences: railsconf, rubynation, volutnteer at CodeHer, CodeforDC, TechLadyHackathon, Girl Develop It TA */

/* education, RA exp, TA Exp, ESL volunteer */

/* work dacor, work prudential, work AIR */

/* add tag obj { "tags": ["tag1", "tag2", "etc"] }

/*todo: readme with possible conversion to redis or other key-value store 

interface for new data entry:
function createEvent( type, organization, location, title, overview, highlights, tags, startDate, endDate ){
}

function formatDate( date ) {
  
} */