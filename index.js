
import React, { useState, useMemo } from 'react';

export default function Home(){

const modules={
'Science Lab':{tasks:['Build a volcano model','Observe plant growth for 7 days','Make a water filtration system'],materials:['Cambridge Primary Science: states of matter, forces, plants, habitats','NGSS aligned experiments: observation, hypothesis, variables, data tables','IB inquiry worksheet: ask, investigate, reflect']},
'Math Mission':{tasks:['Solve 10 fractions questions','Geometry shape hunt','Create a budget plan'],materials:['Singapore Math methods: number sense, fractions, bar models','Cambridge Math practice: geometry, measurement, statistics','IB problem solving guide: reasoning, patterns, reflection']},
'Coding Corner':{tasks:['Create a calculator','Build a quiz app','Learn loops challenge'],materials:['Scratch lessons: sprites, loops, events, variables','Python basics: input/output, conditions, loops, functions','Computational thinking puzzles: logic, debugging, sequencing']},
'Robotics Zone':{tasks:['Design a robot arm','Sensor challenge','Maze robot logic'],materials:['Robotics guide: Sensors detect light, distance, touch and sound. Motors create movement. Gears change speed and force. Design cycle = ask, imagine, plan, create, test, improve.','Arduino basics: Learn circuits using battery power, resistors, breadboard wiring, LEDs, buttons and buzzers. Write simple code to blink LEDs, read buttons and control devices.','Engineering journal: Record idea sketches, materials used, prototype photos, test results, problems found, improvements made and final reflection.']},
'Reading & Reflection':{tasks:['Read 20 mins daily','Write reflection paragraph','Summarize a story'],materials:['International reading list: fiction, nonfiction, biographies','Journal template: claim, evidence, reflection','Vocabulary builder: roots, context clues, synonyms']},
'Projects Portfolio':{tasks:['Make solar system model','Create business idea poster','Community service plan'],materials:['Project planner: research question, timeline, milestones','Presentation template: slides, speaking notes, visuals','Creativity rubric: originality, usefulness, communication']}
};

const [selected,setSelected]=useState(null);
const [answers,setAnswers]=useState({});
const [openMaterial,setOpenMaterial]=useState(null);

const questionBank={
'Math Mission':[
{q:'What is 12 + 8?',opts:['18','20','22'],a:1},
{q:'What is 15 - 7?',opts:['8','7','9'],a:0},
{q:'Which is half of 24?',opts:['10','12','14'],a:1},
{q:'How many sides has a hexagon?',opts:['5','6','7'],a:1},
{q:'What is 6 x 4?',opts:['24','20','26'],a:0},
{q:'What is 36 ÷ 6?',opts:['5','6','7'],a:1},
{q:'Which is biggest?',opts:['0.9','0.5','0.2'],a:0}
]
};

const todaysQuestions = selected ? questionBank[selected] : [];

return (
<div style={{padding:20,fontFamily:'sans-serif'}}>
<h1>WELCOME TO YOUR NEW WORLD ADIL</h1>

<div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
{Object.keys(modules).map((x,i)=>(
<button key={i} onClick={()=>setSelected(x)} style={{padding:10,borderRadius:20}}>
{x}
</button>
))}
</div>

{selected && (
<div>
<h2>{selected}</h2>

<h3>Materials</h3>
{modules[selected].materials.map((m,i)=>(
<div key={i}>
<button onClick={()=>setOpenMaterial(i)}>Open {i+1}</button>
{openMaterial===i && <p>{m}</p>}
</div>
))}

<h3>Quiz</h3>
{todaysQuestions.map((q,i)=>(
<div key={i}>
<p>{q.q}</p>
{q.opts.map((o,oi)=>(
<button key={oi}
disabled={answers[i]!==undefined}
onClick={()=>setAnswers({...answers,[i]:oi})}>
{o}
</button>
))}
<p>{answers[i]!==undefined && (answers[i]===q.a?'Correct':'Wrong')}</p>
</div>
))}
</div>
)}
</div>
);
}
