/******************* 
 * Gamestroop *
 *******************/


// store info about the experiment session:
let expName = 'gamestroop';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
    'Укажите Ваш пол (м или ж)': '',
    'Укажите Ваш возраст': '',
    'Как часто Вы играете в игры, требующие wasd управления? (кол-во раз в неделю) (если играете)': '',
    'Какие Ваш любимый жанр игр? (если играете)': '',
    'Укажите примерное количество часов за одну Вашу игровую сессию. (если играете)': '',
    'Какой у Вас стаж в играх с wasd управлением в годах? (если играете)': '',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(InstructionsRoutineBegin());
flowScheduler.add(InstructionsRoutineEachFrame());
flowScheduler.add(InstructionsRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);



flowScheduler.add(AttentionRoutineBegin());
flowScheduler.add(AttentionRoutineEachFrame());
flowScheduler.add(AttentionRoutineEnd());
const trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_2LoopBegin(trials_2LoopScheduler));
flowScheduler.add(trials_2LoopScheduler);
flowScheduler.add(trials_2LoopEnd);


flowScheduler.add(ThanksRoutineBegin());
flowScheduler.add(ThanksRoutineEachFrame());
flowScheduler.add(ThanksRoutineEnd());
flowScheduler.add(bridgeRoutineBegin());
flowScheduler.add(bridgeRoutineEachFrame());
flowScheduler.add(bridgeRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'stimulus.xlsx', 'path': 'stimulus.xlsx'},
    {'name': 'stimulus.xlsx', 'path': 'stimulus.xlsx'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2026.1.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var InstructionsClock;
var instruction_text;
var instruction_key;
var StroopClock;
var plus;
var stimul;
var key_resp;
var FeedbackClock;
var feedback_text;
var AttentionClock;
var attention_text;
var attention_key;
var ThanksClock;
var thanks_text;
var thanks_key;
var bridgeClock;
var bridge_text;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Instructions"
  InstructionsClock = new util.Clock();
  instruction_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction_text',
    text: 'Здравствуйте, спасибо за участие в эксперименте, Вам предлагается пройти следующую процедуру: на экране будут появляться слова, окрашенные шрифтом определённого цвета, который соответствует или не соответствует слову, Вам необходимо нажать на кнопку, соответствующую цвету шрифта, игнорируя само слово. Для ввода используйте следующие клавиши: стрелку влево для красного, стрелку вправо для синего, стрелку вверх для желтого и стрелку вниз для зелёного. Вам будет представлено несколько проб для тренировки, с обратной связью.\nНажмите клавишу “пробел”, чтобы приступить к процедуре.\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  instruction_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Stroop"
  StroopClock = new util.Clock();
  plus = new visual.TextStim({
    win: psychoJS.window,
    name: 'plus',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.25,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  stimul = new visual.TextStim({
    win: psychoJS.window,
    name: 'stimul',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.15,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Feedback"
  FeedbackClock = new util.Clock();
  feedback_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Attention"
  AttentionClock = new util.Clock();
  attention_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'attention_text',
    text: 'Тренировочная часть завершена, далее Вас ожидает экспериментальная часть без обратной связи, если Вы готовы продолжить, нажмите клавишу пробел.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  attention_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Thanks"
  ThanksClock = new util.Clock();
  thanks_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'thanks_text',
    text: 'Спасибо, что приняли участие в эксперименте!\nПо всем вопросам можно обращаться по адресу:\nvk.com/navolod_lihodei (ВК: Наволод Гипатский)\nТГ: @Gipatskiy\nЧтобы закончить, нажмите пробел.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  thanks_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "bridge"
  bridgeClock = new util.Clock();
  bridge_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'bridge_text',
    text: 'Подождите ещё немного идёт запись данных эксперимента...',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var InstructionsMaxDurationReached;
var _instruction_key_allKeys;
var InstructionsMaxDuration;
var InstructionsComponents;
function InstructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instructions' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    InstructionsClock.reset();
    routineTimer.reset();
    InstructionsMaxDurationReached = false;
    // update component parameters for each repeat
    instruction_key.keys = undefined;
    instruction_key.rt = undefined;
    _instruction_key_allKeys = [];
    InstructionsMaxDuration = null
    // keep track of which components have finished
    InstructionsComponents = [];
    InstructionsComponents.push(instruction_text);
    InstructionsComponents.push(instruction_key);
    
    InstructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function InstructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instructions' ---
    // get current time
    t = InstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruction_text* updates
    if (t >= 0.0 && instruction_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_text.tStart = t;  // (not accounting for frame time here)
      instruction_text.frameNStart = frameN;  // exact frame index
      
      instruction_text.setAutoDraw(true);
    }
    
    
    // if instruction_text is active this frame...
    if (instruction_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *instruction_key* updates
    if (t >= 0.0 && instruction_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_key.tStart = t;  // (not accounting for frame time here)
      instruction_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      instruction_key.clock.reset();
      instruction_key.start();
    }
    
    // if instruction_key is active this frame...
    if (instruction_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = instruction_key.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _instruction_key_allKeys = _instruction_key_allKeys.concat(theseKeys);
      if (_instruction_key_allKeys.length > 0) {
        instruction_key.keys = _instruction_key_allKeys[_instruction_key_allKeys.length - 1].name;  // just the last key pressed
        instruction_key.rt = _instruction_key_allKeys[_instruction_key_allKeys.length - 1].rt;
        instruction_key.duration = _instruction_key_allKeys[_instruction_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    InstructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function InstructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instructions' ---
    InstructionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(instruction_key.corr, level);
    }
    psychoJS.experiment.addData('instruction_key.keys', instruction_key.keys);
    if (typeof instruction_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instruction_key.rt', instruction_key.rt);
        psychoJS.experiment.addData('instruction_key.duration', instruction_key.duration);
        routineTimer.reset();
        }
    
    instruction_key.stop();
    // the Routine "Instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 5, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'stimulus.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(StroopRoutineBegin(snapshot));
      trialsLoopScheduler.add(StroopRoutineEachFrame());
      trialsLoopScheduler.add(StroopRoutineEnd(snapshot));
      trialsLoopScheduler.add(FeedbackRoutineBegin(snapshot));
      trialsLoopScheduler.add(FeedbackRoutineEachFrame());
      trialsLoopScheduler.add(FeedbackRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_2;
function trials_2LoopBegin(trials_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 20, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'stimulus.xlsx',
      seed: undefined, name: 'trials_2'
    });
    psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
    currentLoop = trials_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_2.forEach(function() {
      snapshot = trials_2.getSnapshot();
    
      trials_2LoopScheduler.add(importConditions(snapshot));
      trials_2LoopScheduler.add(StroopRoutineBegin(snapshot));
      trials_2LoopScheduler.add(StroopRoutineEachFrame());
      trials_2LoopScheduler.add(StroopRoutineEnd(snapshot));
      trials_2LoopScheduler.add(trials_2LoopEndIteration(trials_2LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var StroopMaxDurationReached;
var _key_resp_allKeys;
var StroopMaxDuration;
var StroopComponents;
function StroopRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Stroop' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    StroopClock.reset();
    routineTimer.reset();
    StroopMaxDurationReached = false;
    // update component parameters for each repeat
    stimul.setColor(new util.Color(color));
    stimul.setText(text);
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    StroopMaxDuration = null
    // keep track of which components have finished
    StroopComponents = [];
    StroopComponents.push(plus);
    StroopComponents.push(stimul);
    StroopComponents.push(key_resp);
    
    StroopComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function StroopRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Stroop' ---
    // get current time
    t = StroopClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *plus* updates
    if (t >= 0.0 && plus.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      plus.tStart = t;  // (not accounting for frame time here)
      plus.frameNStart = frameN;  // exact frame index
      
      plus.setAutoDraw(true);
    }
    
    
    // if plus is active this frame...
    if (plus.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (plus.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      plus.tStop = t;  // not accounting for scr refresh
      plus.frameNStop = frameN;  // exact frame index
      // update status
      plus.status = PsychoJS.Status.FINISHED;
      plus.setAutoDraw(false);
    }
    
    
    // *stimul* updates
    if (t >= 0.5 && stimul.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stimul.tStart = t;  // (not accounting for frame time here)
      stimul.frameNStart = frameN;  // exact frame index
      
      stimul.setAutoDraw(true);
    }
    
    
    // if stimul is active this frame...
    if (stimul.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp* updates
    if (t >= 0.5 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
    }
    
    // if key_resp is active this frame...
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({
        keyList: typeof ['up','left','right','down'] === 'string' ? [['up','left','right','down']] : ['up','left','right','down'], 
        waitRelease: false
      });
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[0].name;  // just the first key pressed
        key_resp.rt = _key_resp_allKeys[0].rt;
        key_resp.duration = _key_resp_allKeys[0].duration;
        // was this correct?
        if (key_resp.keys == corransar) {
            key_resp.corr = 1;
        } else {
            key_resp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    StroopComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function StroopRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Stroop' ---
    StroopComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp.keys === undefined) {
      if (['None','none',undefined].includes(corransar)) {
         key_resp.corr = 1;  // correct non-response
      } else {
         key_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    psychoJS.experiment.addData('key_resp.corr', key_resp.corr);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "Stroop" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var FeedbackMaxDurationReached;
var feedback;
var FeedbackMaxDuration;
var FeedbackComponents;
function FeedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Feedback' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    FeedbackClock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    FeedbackMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from feedback_code
    if ((key_resp.corr === 1)) {
        feedback = "Yes!";
    } else {
        feedback = "No!";
    }
    
    feedback_text.setText(feedback);
    FeedbackMaxDuration = null
    // keep track of which components have finished
    FeedbackComponents = [];
    FeedbackComponents.push(feedback_text);
    
    FeedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function FeedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Feedback' ---
    // get current time
    t = FeedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback_text* updates
    if (t >= 0.0 && feedback_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_text.tStart = t;  // (not accounting for frame time here)
      feedback_text.frameNStart = frameN;  // exact frame index
      
      feedback_text.setAutoDraw(true);
    }
    
    
    // if feedback_text is active this frame...
    if (feedback_text.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (feedback_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      feedback_text.tStop = t;  // not accounting for scr refresh
      feedback_text.frameNStop = frameN;  // exact frame index
      // update status
      feedback_text.status = PsychoJS.Status.FINISHED;
      feedback_text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    FeedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function FeedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Feedback' ---
    FeedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    if (routineForceEnded) {
        routineTimer.reset();} else if (FeedbackMaxDurationReached) {
        FeedbackClock.add(FeedbackMaxDuration);
    } else {
        FeedbackClock.add(1.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var AttentionMaxDurationReached;
var _attention_key_allKeys;
var AttentionMaxDuration;
var AttentionComponents;
function AttentionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Attention' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    AttentionClock.reset();
    routineTimer.reset();
    AttentionMaxDurationReached = false;
    // update component parameters for each repeat
    attention_key.keys = undefined;
    attention_key.rt = undefined;
    _attention_key_allKeys = [];
    AttentionMaxDuration = null
    // keep track of which components have finished
    AttentionComponents = [];
    AttentionComponents.push(attention_text);
    AttentionComponents.push(attention_key);
    
    AttentionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function AttentionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Attention' ---
    // get current time
    t = AttentionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *attention_text* updates
    if (t >= 0.0 && attention_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      attention_text.tStart = t;  // (not accounting for frame time here)
      attention_text.frameNStart = frameN;  // exact frame index
      
      attention_text.setAutoDraw(true);
    }
    
    
    // if attention_text is active this frame...
    if (attention_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *attention_key* updates
    if (t >= 0.0 && attention_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      attention_key.tStart = t;  // (not accounting for frame time here)
      attention_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      attention_key.clock.reset();
      attention_key.start();
    }
    
    // if attention_key is active this frame...
    if (attention_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = attention_key.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _attention_key_allKeys = _attention_key_allKeys.concat(theseKeys);
      if (_attention_key_allKeys.length > 0) {
        attention_key.keys = _attention_key_allKeys[_attention_key_allKeys.length - 1].name;  // just the last key pressed
        attention_key.rt = _attention_key_allKeys[_attention_key_allKeys.length - 1].rt;
        attention_key.duration = _attention_key_allKeys[_attention_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    AttentionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function AttentionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Attention' ---
    AttentionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(attention_key.corr, level);
    }
    psychoJS.experiment.addData('attention_key.keys', attention_key.keys);
    if (typeof attention_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('attention_key.rt', attention_key.rt);
        psychoJS.experiment.addData('attention_key.duration', attention_key.duration);
        routineTimer.reset();
        }
    
    attention_key.stop();
    // the Routine "Attention" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ThanksMaxDurationReached;
var _thanks_key_allKeys;
var ThanksMaxDuration;
var ThanksComponents;
function ThanksRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Thanks' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    ThanksClock.reset();
    routineTimer.reset();
    ThanksMaxDurationReached = false;
    // update component parameters for each repeat
    thanks_key.keys = undefined;
    thanks_key.rt = undefined;
    _thanks_key_allKeys = [];
    psychoJS.experiment.addData('Thanks.started', globalClock.getTime());
    ThanksMaxDuration = null
    // keep track of which components have finished
    ThanksComponents = [];
    ThanksComponents.push(thanks_text);
    ThanksComponents.push(thanks_key);
    
    ThanksComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function ThanksRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Thanks' ---
    // get current time
    t = ThanksClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *thanks_text* updates
    if (t >= 0.0 && thanks_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      thanks_text.tStart = t;  // (not accounting for frame time here)
      thanks_text.frameNStart = frameN;  // exact frame index
      
      thanks_text.setAutoDraw(true);
    }
    
    
    // if thanks_text is active this frame...
    if (thanks_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *thanks_key* updates
    if (t >= 0.0 && thanks_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      thanks_key.tStart = t;  // (not accounting for frame time here)
      thanks_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      thanks_key.clock.reset();
      thanks_key.start();
    }
    
    // if thanks_key is active this frame...
    if (thanks_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = thanks_key.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _thanks_key_allKeys = _thanks_key_allKeys.concat(theseKeys);
      if (_thanks_key_allKeys.length > 0) {
        thanks_key.keys = _thanks_key_allKeys[_thanks_key_allKeys.length - 1].name;  // just the last key pressed
        thanks_key.rt = _thanks_key_allKeys[_thanks_key_allKeys.length - 1].rt;
        thanks_key.duration = _thanks_key_allKeys[_thanks_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ThanksComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ThanksRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Thanks' ---
    ThanksComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Thanks.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(thanks_key.corr, level);
    }
    psychoJS.experiment.addData('thanks_key.keys', thanks_key.keys);
    if (typeof thanks_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('thanks_key.rt', thanks_key.rt);
        psychoJS.experiment.addData('thanks_key.duration', thanks_key.duration);
        routineTimer.reset();
        }
    
    thanks_key.stop();
    // the Routine "Thanks" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var bridgeMaxDurationReached;
var bridgeMaxDuration;
var bridgeComponents;
function bridgeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'bridge' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    bridgeClock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    bridgeMaxDurationReached = false;
    // update component parameters for each repeat
    // Disable downloading results to browser
    psychoJS._saveResults = 0;
    // Generate filename for results
    let filename = psychoJS._experiment._experimentName + '_' +
    psychoJS._experiment._datetime + '.csv';
    // Extract data object from experiment
    let dataObj = psychoJS._experiment._trialsData;
    // Convert data object to CSV
    let data = [Object.keys(dataObj[0])].concat(dataObj).map(it => {
    return Object.values(it).toString()
    }).join('\n')
    // Send data to OSF via DataPipe
    console.log('Saving data...');
    fetch('https://pipe.jspsych.org/api/data', {
     method: 'POST',
     headers: {
     'Content-Type': 'application/json',
     Accept: '*/*',
     },
     body: JSON.stringify({
     experimentID: 'hxomPZkgMHn3', // * text *
     filename: filename,
     data: data,
     }),
    }).then(response => response.json()).then(data => {
    // Log response aud force experiment end
    console.log(data);
    quitPsychoJS();
    })
    bridgeMaxDuration = null
    // keep track of which components have finished
    bridgeComponents = [];
    bridgeComponents.push(bridge_text);
    
    bridgeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function bridgeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'bridge' ---
    // get current time
    t = bridgeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *bridge_text* updates
    if (t >= 0.0 && bridge_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bridge_text.tStart = t;  // (not accounting for frame time here)
      bridge_text.frameNStart = frameN;  // exact frame index
      
      bridge_text.setAutoDraw(true);
    }
    
    
    // if bridge_text is active this frame...
    if (bridge_text.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (bridge_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      bridge_text.tStop = t;  // not accounting for scr refresh
      bridge_text.frameNStop = frameN;  // exact frame index
      // update status
      bridge_text.status = PsychoJS.Status.FINISHED;
      bridge_text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    bridgeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function bridgeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'bridge' ---
    bridgeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    if (routineForceEnded) {
        routineTimer.reset();} else if (bridgeMaxDurationReached) {
        bridgeClock.add(bridgeMaxDuration);
    } else {
        bridgeClock.add(1.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
