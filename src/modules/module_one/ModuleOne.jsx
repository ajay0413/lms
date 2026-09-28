import React, { useState } from "react";
import {
  Play,
  Check,
  ChevronLeft,
  ChevronRight,
  Terminal,
  Code2,
  Lightbulb,
  CircleHelp,
  BookOpen,
  RotateCcw
} from "lucide-react";
import "./moduleone.css";

const lessons = [
  {
    id: 1,
    title: "Computer Needs Instructions",
    short: "Instructions",
    type: "concept"
  },
  {
    id: 2,
    title: "Your First Python Expression",
    short: "First Expression",
    type: "code"
  },
  {
    id: 3,
    title: "What Is Python?",
    short: "Python",
    type: "concept"
  },
  {
    id: 4,
    title: "Your First Python Program",
    short: "First Program",
    type: "code"
  },
  {
    id: 5,
    title: "Code → Run → Output",
    short: "Execution",
    type: "concept"
  },
  {
    id: 6,
    title: "Values and Calculations",
    short: "Values",
    type: "code"
  },
  {
    id: 7,
    title: "Multiple Instructions",
    short: "Instructions",
    type: "code"
  },
  {
    id: 8,
    title: "The Python Interpreter",
    short: "Interpreter",
    type: "concept"
  },
  {
    id: 9,
    title: "Python Files",
    short: "Files",
    type: "concept"
  },
  {
    id: 10,
    title: "Comments",
    short: "Comments",
    type: "interactive"
  },
  {
    id: 11,
    title: "Indentation",
    short: "Indentation",
    type: "interactive"
  },
  {
    id: 12,
    title: "Expressions",
    short: "Expressions",
    type: "interactive"
  },
  {
    id: 13,
    title: "Statements",
    short: "Statements",
    type: "concept"
  },
  {
    id: 14,
    title: "Why Python?",
    short: "Why Python",
    type: "concept"
  },
  {
    id: 15,
    title: "Python Learning Map",
    short: "Roadmap",
    type: "concept"
  },
  {
    id: 16,
    title: "Final Challenge",
    short: "Challenge",
    type: "challenge"
  }
];

function ModuleOne() {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [completed, setCompleted] = useState([]);
  const [mobileSidebar, setMobileSidebar] = useState(false);

  const lesson = lessons[currentLesson];

  const markComplete = () => {
    if (!completed.includes(lesson.id)) {
      setCompleted([...completed, lesson.id]);
    }
  };

  const goNext = () => {
    markComplete();

    if (currentLesson < lessons.length - 1) {
      setCurrentLesson(currentLesson + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const goPrevious = () => {
    if (currentLesson > 0) {
      setCurrentLesson(currentLesson - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const selectLesson = (index) => {
    setCurrentLesson(index);
    setMobileSidebar(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const progress = Math.round(
    (completed.length / lessons.length) * 100
  );

  return (
    <div className="ModuleOne">

      <header className="topbar">

        <div className="brand">
          <div className="python-logo">Py</div>

          <div>
            <div className="brand-title">
              Python Learning
            </div>

            <div className="brand-subtitle">
              Module 1 · From Instructions to Python
            </div>
          </div>
        </div>

        <div className="top-progress">
          <span>{completed.length}/{lessons.length} lessons</span>

          <div className="progress-track">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>

          <span>{progress}%</span>
        </div>

        <button
          className="mobile-menu"
          onClick={() => setMobileSidebar(!mobileSidebar)}
        >
          <BookOpen size={20} />
        </button>

      </header>

      <div className="layout">

        <aside className={`sidebar ${mobileSidebar ? "show" : ""}`}>

          <div className="module-label">
            MODULE 1
          </div>

          <h2>
            From Instructions
            <br />
            to Python
          </h2>

          <div className="lesson-list">

            {lessons.map((item, index) => {

              const isActive = index === currentLesson;
              const isComplete = completed.includes(item.id);

              return (
                <button
                  key={item.id}
                  className={`lesson-item ${
                    isActive ? "active" : ""
                  }`}
                  onClick={() => selectLesson(index)}
                >

                  <div className="lesson-number">

                    {isComplete ? (
                      <Check size={14} />
                    ) : (
                      item.id
                    )}

                  </div>

                  <div className="lesson-info">

                    <span className="lesson-name">
                      {item.short}
                    </span>

                    <span className="lesson-type">
                      {item.type}
                    </span>

                  </div>

                </button>
              );
            })}

          </div>

        </aside>

        <main className="content">

          <LessonContent
            lesson={lesson}
            lessonIndex={currentLesson}
            onComplete={markComplete}
          />

          <div className="navigation">

            <button
              className="nav-button secondary"
              disabled={currentLesson === 0}
              onClick={goPrevious}
            >
              <ChevronLeft size={18} />
              Previous
            </button>

            <div className="lesson-position">
              Lesson {currentLesson + 1} of {lessons.length}
            </div>

            <button
              className="nav-button primary"
              onClick={goNext}
            >
              {currentLesson === lessons.length - 1
                ? "Finish Module"
                : "Continue"}

              <ChevronRight size={18} />
            </button>

          </div>

        </main>

      </div>

    </div>
  );
}

function LessonContent({
  lesson,
  lessonIndex,
  onComplete
}) {

  switch (lesson.id) {

    case 1:
      return <Lesson1 onComplete={onComplete} />;

    case 2:
      return <Lesson2 onComplete={onComplete} />;

    case 3:
      return <Lesson3 onComplete={onComplete} />;

    case 4:
      return <Lesson4 onComplete={onComplete} />;

    case 5:
      return <Lesson5 onComplete={onComplete} />;

    case 6:
      return <Lesson6 onComplete={onComplete} />;

    case 7:
      return <Lesson7 onComplete={onComplete} />;

    case 8:
      return <Lesson8 onComplete={onComplete} />;

    case 9:
      return <Lesson9 onComplete={onComplete} />;

    case 10:
      return <Lesson10 onComplete={onComplete} />;

    case 11:
      return <Lesson11 onComplete={onComplete} />;

    case 12:
      return <Lesson12 onComplete={onComplete} />;

    case 13:
      return <Lesson13 onComplete={onComplete} />;

    case 14:
      return <Lesson14 onComplete={onComplete} />;

    case 15:
      return <Lesson15 onComplete={onComplete} />;

    case 16:
      return <Lesson16 onComplete={onComplete} />;

    default:
      return null;
  }
}


/* ------------------------------------------------ */
/* LESSON 1 */
/* ------------------------------------------------ */

function Lesson1({ onComplete }) {

  return (
    <LessonWrModuleOneer
      number="01"
      title="Computer Needs Instructions"
      subtitle="Before learning Python, understand the problem programming solves."
    >

      <ShopCard />

      <div className="question-box">

        <CircleHelp size={22} />

        <div>
          <strong>
            The shop owner asks:
          </strong>

          <p>
            "What is the total price?"
          </p>
        </div>

      </div>

      <div className="calculation">

        <span>₹50,000</span>

        <span>+</span>

        <span>₹1,000</span>

        <span>+</span>

        <span>₹2,000</span>

        <span>=</span>

        <strong>₹53,000</strong>

      </div>

      <div className="concept-card">

        <div className="concept-icon">
          <Lightbulb size={20} />
        </div>

        <div>
          <h3>The problem grows</h3>

          <p>
            This is easy for three products.
            But imagine the shop has 10,000 products
            and thousands of orders.
          </p>

        </div>

      </div>

      <div className="growth">

        <div>10 products</div>

        <span>→</span>

        <div>1,000 products</div>

        <span>→</span>

        <div>10,000 products</div>

      </div>

      <div className="big-question">

        Can a human calculate everything manually?

      </div>

      <p className="explanation">
        Programming exists because we can give a computer
        instructions to perform repetitive and complex work for us.
      </p>

      <FlowDiagram
        items={[
          "Human Problem",
          "Instructions",
          "Computer",
          "Result"
        ]}
      />

      <CompleteButton onClick={onComplete} />

    </LessonWrModuleOneer>
  );
}


/* ------------------------------------------------ */
/* LESSON 2 */
/* ------------------------------------------------ */

function Lesson2({ onComplete }) {

  const [ran, setRan] = useState(false);

  return (
    <LessonWrModuleOneer
      number="02"
      title="Your First Python Expression"
      subtitle="Give the computer a simple instruction."
    >

      <div className="scenario">

        <span className="scenario-label">
          NOVA MART
        </span>

        <h3>
          Calculate the price of 2 laptops
        </h3>

        <div className="price-big">
          ₹50,000 × 2
        </div>

      </div>

      <CodeEditor
        initialCode="50000 * 2"
        expectedOutput="100000"
        onRun={() => setRan(true)}
      />

      {ran && (
        <Feedback
          type="success"
          text="The computer calculated the expression and produced 100000."
        />
      )}

      <div className="flow-mini">

        <span>Instruction</span>
        <span>→</span>
        <span>Python</span>
        <span>→</span>
        <span>Result</span>

      </div>

      <CompleteButton onClick={onComplete} />

    </LessonWrModuleOneer>
  );
}


/* ------------------------------------------------ */
/* LESSON 3 */
/* ------------------------------------------------ */

function Lesson3({ onComplete }) {

  return (
    <LessonWrModuleOneer
      number="03"
      title="What Is Python?"
      subtitle="Now that you've used it, let's name what you just did."
    >

      <div className="experience-card">

        <div className="experience-row">
          <span>Human instruction</span>
          <strong>
            "Multiply 50,000 by 2"
          </strong>
        </div>

        <div className="arrow">↓</div>

        <div className="experience-row">
          <span>Python code</span>
          <code>50000 * 2</code>
        </div>

        <div className="arrow">↓</div>

        <div className="experience-row">
          <span>Result</span>
          <strong>100000</strong>
        </div>

      </div>

      <div className="definition">

        <span className="definition-label">
          DEFINITION
        </span>

        <p>
          Python is a programming language used to write
          instructions that a computer can execute.
        </p>

      </div>

      <p className="explanation">
        A programming language gives humans a way to express
        instructions in a form that a computer can execute.
      </p>

      <CompleteButton onClick={onComplete} />

    </LessonWrModuleOneer>
  );
}


/* ------------------------------------------------ */
/* LESSON 4 */
/* ------------------------------------------------ */

function Lesson4({ onComplete }) {

  const [output, setOutput] = useState("");

  return (
    <LessonWrModuleOneer
      number="04"
      title="Your First Python Program"
      subtitle="Write a program that produces output."
    >

      <CodeEditor
        initialCode={`print("Welcome to Nova Mart")`}
        expectedOutput="Welcome to Nova Mart"
        onRun={(result) => setOutput(result)}
      />

      {output && (
        <Feedback
          type="success"
          text="You just executed your first Python program."
        />
      )}

      <div className="learning-note">

        <Code2 />

        <div>
          <strong>
            Code → Run → Output
          </strong>

          <p>
            This three-step cycle will ModuleOneear throughout
            your Python learning journey.
          </p>
        </div>

      </div>

      <CompleteButton onClick={onComplete} />

    </LessonWrModuleOneer>
  );
}


/* ------------------------------------------------ */
/* LESSON 5 */
/* ------------------------------------------------ */

function Lesson5({ onComplete }) {

  return (
    <LessonWrModuleOneer
      number="05"
      title="Code → Run → Output"
      subtitle="Every Python program follows an execution process."
    >

      <div className="execution">

        <div className="execution-box">
          <Code2 />
          <strong>Code</strong>
          <span>Instructions written by you</span>
        </div>

        <div className="execution-arrow">→</div>

        <div className="execution-box">
          <Play size={28} />
          <strong>Run</strong>
          <span>Python executes the instructions</span>
        </div>

        <div className="execution-arrow">→</div>

        <div className="execution-box">
          <Terminal size={28} />
          <strong>Output</strong>
          <span>The result produced</span>
        </div>

      </div>

      <div className="output-demo">

        <div className="editor-line">
          <span>1</span>
          <code>print(10 + 20)</code>
        </div>

        <div className="output-line">
          <Terminal size={15} />
          30
        </div>

      </div>

      <CompleteButton onClick={onComplete} />

    </LessonWrModuleOneer>
  );
}


/* ------------------------------------------------ */
/* LESSON 6 */
/* ------------------------------------------------ */

function Lesson6({ onComplete }) {

  const [selected, setSelected] = useState(null);

  const examples = [
    {
      code: "print(50000)",
      output: "50000"
    },
    {
      code: "print(50000 + 1000)",
      output: "51000"
    },
    {
      code: "print(50000 * 2)",
      output: "100000"
    }
  ];

  return (
    <LessonWrModuleOneer
      number="06"
      title="Values and Calculations"
      subtitle="Python can work with values, not just display text."
    >

      <div className="example-grid">

        {examples.map((example, index) => (

          <button
            key={index}
            className={`example-card ${
              selected === index ? "selected" : ""
            }`}
            onClick={() => setSelected(index)}
          >

            <code>{example.code}</code>

            <span>Run example</span>

          </button>

        ))}

      </div>

      {selected !== null && (

        <div className="result-card">

          <span>OUTPUT</span>

          <strong>
            {examples[selected].output}
          </strong>

        </div>

      )}

      <div className="concept-card">

        <div className="concept-icon">
          <Lightbulb size={20} />
        </div>

        <div>

          <h3>Python can process values</h3>

          <p>
            Numbers can be added, multiplied, divided,
            compared and transformed by your program.
          </p>

        </div>

      </div>

      <CompleteButton onClick={onComplete} />

    </LessonWrModuleOneer>
  );
}


/* ------------------------------------------------ */
/* LESSON 7 */
/* ------------------------------------------------ */

function Lesson7({ onComplete }) {

  const [ran, setRan] = useState(false);

  return (
    <LessonWrModuleOneer
      number="07"
      title="Multiple Instructions"
      subtitle="A program can contain many instructions executed in sequence."
    >

      <CodeEditor
        initialCode={`print("Product: Laptop")
print("Price: 50000")
print("Quantity: 2")
print(50000 * 2)`}
        expectedOutput={`Product: Laptop
Price: 50000
Quantity: 2
100000`}
        onRun={() => setRan(true)}
      />

      {ran && (
        <div className="sequence">

          <div>Instruction 1 ✓</div>
          <div>Instruction 2 ✓</div>
          <div>Instruction 3 ✓</div>
          <div>Instruction 4 ✓</div>

        </div>
      )}

      <p className="explanation">
        Python executes the instructions in sequence,
        moving through the program step by step.
      </p>

      <CompleteButton onClick={onComplete} />

    </LessonWrModuleOneer>
  );
}


/* ------------------------------------------------ */
/* LESSON 8 */
/* ------------------------------------------------ */

function Lesson8({ onComplete }) {

  return (
    <LessonWrModuleOneer
      number="08"
      title="The Python Interpreter"
      subtitle="Something has to read your Python code and execute it."
    >

      <div className="interpreter-flow">

        <div className="flow-block code-block">
          <Code2 />
          <strong>ModuleOne.py</strong>
          <span>Your Python code</span>
        </div>

        <div className="flow-arrow">↓</div>

        <div className="flow-block interpreter-block">
          <Terminal />
          <strong>Python Interpreter</strong>
          <span>Reads and executes Python code</span>
        </div>

        <div className="flow-arrow">↓</div>

        <div className="flow-block result-block">
          <Check />
          <strong>Result</strong>
          <span>Program output</span>
        </div>

      </div>

      <div className="definition">

        <span className="definition-label">
          KEY IDEA
        </span>

        <p>
          The Python interpreter is the program that
          executes Python instructions.
        </p>

      </div>

      <CompleteButton onClick={onComplete} />

    </LessonWrModuleOneer>
  );
}


/* ------------------------------------------------ */
/* LESSON 9 */
/* ------------------------------------------------ */

function Lesson9({ onComplete }) {

  return (
    <LessonWrModuleOneer
      number="09"
      title="Python Files"
      subtitle="Python programs can be saved as .py files."
    >

      <div className="file-tree">

        <div className="folder">
          📁 nova-mart
        </div>

        <div className="file">
          <Code2 size={18} />
          ModuleOne.py
        </div>

        <div className="file">
          <Code2 size={18} />
          calculations.py
        </div>

      </div>

      <div className="file-explanation">

        <div className="extension">
          .py
        </div>

        <div>

          <h3>Python source file</h3>

          <p>
            Python code is commonly saved in files
            ending with the <strong>.py</strong> extension.
          </p>

        </div>

      </div>

      <FlowDiagram
        items={[
          "ModuleOne.py",
          "Python Interpreter",
          "Execution",
          "Output"
        ]}
      />

      <CompleteButton onClick={onComplete} />

    </LessonWrModuleOneer>
  );
}


/* ------------------------------------------------ */
/* LESSON 10 */
/* ------------------------------------------------ */

function Lesson10({ onComplete }) {

  const [answer, setAnswer] = useState(null);

  return (
    <LessonWrModuleOneer
      number="10"
      title="Comments"
      subtitle="Some code is written for humans, not for Python."
    >

      <CodeEditor
        initialCode={`# Calculate total price

price = 50000
quantity = 2

print(price * quantity)`}
        expectedOutput="100000"
      />

      <div className="question-box">

        <CircleHelp />

        <div>

          <strong>
            Does Python need this line to calculate the answer?
          </strong>

          <code>
            # Calculate total price
          </code>

        </div>

      </div>

      <div className="choice-row">

        <button
          className={answer === true ? "correct-choice" : ""}
          onClick={() => setAnswer(true)}
        >
          Yes
        </button>

        <button
          className={answer === false ? "wrong-choice" : ""}
          onClick={() => setAnswer(false)}
        >
          No
        </button>

      </div>

      {answer === true && (
        <Feedback
          type="error"
          text="Try again. The calculation works even without that line."
        />
      )}

      {answer === false && (
        <Feedback
          type="success"
          text="Correct. A comment helps humans understand the code but is not executed as Python code."
        />
      )}

      <div className="syntax-card">

        <code># This is a comment</code>

      </div>

      <CompleteButton onClick={onComplete} />

    </LessonWrModuleOneer>
  );
}


/* ------------------------------------------------ */
/* LESSON 11 */
/* ------------------------------------------------ */

function Lesson11({ onComplete }) {

  const [fixed, setFixed] = useState(false);

  return (
    <LessonWrModuleOneer
      number="11"
      title="Indentation"
      subtitle="Python uses indentation to show structure."
    >

      <div className="error-example">

        <div className="error-title">
          ❌ Something is wrong
        </div>

        <pre>{`if 10 > 5:
print("10 is greater")`}</pre>

      </div>

      <button
        className="fix-button"
        onClick={() => setFixed(true)}
      >
        Fix the Code
      </button>

      {fixed && (

        <>
          <div className="correct-example">

            <div className="correct-title">
              ✓ Correct structure
            </div>

            <pre>{`if 10 > 5:
    print("10 is greater")`}</pre>

          </div>

          <Feedback
            type="success"
            text="The indented line belongs to the if block."
          />
        </>

      )}

      <div className="indent-visual">

        <div>if condition:</div>

        <div className="indent-line">
          print("inside the block")
        </div>

      </div>

      <CompleteButton onClick={onComplete} />

    </LessonWrModuleOneer>
  );
}


/* ------------------------------------------------ */
/* LESSON 12 */
/* ------------------------------------------------ */

function Lesson12({ onComplete }) {

  const [selected, setSelected] = useState(null);

  return (
    <LessonWrModuleOneer
      number="12"
      title="Expressions"
      subtitle="An expression is something Python can evaluate to produce a value."
    >

      <div className="expression-options">

        <button
          className={selected === 0 ? "selected" : ""}
          onClick={() => setSelected(0)}
        >
          <code>10 + 20</code>
          <span>Expression</span>
        </button>

        <button
          className={selected === 1 ? "selected" : ""}
          onClick={() => setSelected(1)}
        >
          <code>print(10 + 20)</code>
          <span>Function call</span>
        </button>

      </div>

      {selected !== null && (

        <div className="result-card">

          <span>VALUE PRODUCED</span>

          <strong>
            {selected === 0 ? "30" : "None"}
          </strong>

        </div>

      )}

      <div className="definition">

        <span className="definition-label">
          KEY IDEA
        </span>

        <p>
          An expression is code that Python can evaluate
          to produce a value.
        </p>

      </div>

      <CompleteButton onClick={onComplete} />

    </LessonWrModuleOneer>
  );
}


/* ------------------------------------------------ */
/* LESSON 13 */
/* ------------------------------------------------ */

function Lesson13({ onComplete }) {

  return (
    <LessonWrModuleOneer
      number="13"
      title="Statements"
      subtitle="Programs are built from instructions."
    >

      <div className="statement-demo">

        <div className="statement-item">

          <code>name = "Ajay"</code>

          <span>
            Assignment statement
          </span>

        </div>

        <div className="statement-item">

          <code>print(name)</code>

          <span>
            Function call statement
          </span>

        </div>

        <div className="statement-item">

          <code>if age &gt; 18:</code>

          <span>
            Conditional statement
          </span>

        </div>

      </div>

      <div className="definition">

        <span className="definition-label">
          KEY IDEA
        </span>

        <p>
          A statement is an instruction that forms part
          of a Python program.
        </p>

      </div>

      <CompleteButton onClick={onComplete} />

    </LessonWrModuleOneer>
  );
}


/* ------------------------------------------------ */
/* LESSON 14 */
/* ------------------------------------------------ */

function Lesson14({ onComplete }) {

  return (
    <LessonWrModuleOneer
      number="14"
      title="Why Python?"
      subtitle="Python becomes useful because one language can solve many different kinds of problems."
    >

      <div className="python-uses">

        <UseCard title="Automation" icon="⚙️" />
        <UseCard title="Data Analysis" icon="📊" />
        <UseCard title="Web Development" icon="🌐" />
        <UseCard title="Artificial Intelligence" icon="🤖" />
        <UseCard title="Machine Learning" icon="🧠" />
        <UseCard title="APIs" icon="🔌" />

      </div>

      <div className="concept-card">

        <div className="concept-icon">
          <Lightbulb size={20} />
        </div>

        <div>

          <h3>One language, many ModuleOnelications</h3>

          <p>
            The Python fundamentals you learn now become
            the foundation for data analysis, automation,
            APIs, AI and many other areas.
          </p>

        </div>

      </div>

      <CompleteButton onClick={onComplete} />

    </LessonWrModuleOneer>
  );
}


/* ------------------------------------------------ */
/* LESSON 15 */
/* ------------------------------------------------ */

function Lesson15({ onComplete }) {

  const areas = [
    ["Python Basics", "Variables · Conditions · Loops"],
    ["Data Work", "NumPy · Pandas · Visualization"],
    ["Analysis", "Statistics · EDA"],
    ["Machine Learning", "Models · Evaluation"],
    ["ModuleOnelications", "APIs · Automation · Web"]
  ];

  return (
    <LessonWrModuleOneer
      number="15"
      title="Python Learning Map"
      subtitle="See where the concepts you're learning will take you."
    >

      <div className="roadmap">

        <div className="roadmap-center">
          PYTHON
        </div>

        {areas.map((area, index) => (

          <div
            className="roadmap-card"
            key={index}
          >

            <strong>{area[0]}</strong>

            <span>{area[1]}</span>

          </div>

        ))}

      </div>

      <p className="explanation">
        Don't try to memorize the entire roadmap.
        Each section will build on the concepts before it.
      </p>

      <CompleteButton onClick={onComplete} />

    </LessonWrModuleOneer>
  );
}


/* ------------------------------------------------ */
/* LESSON 16 */
/* ------------------------------------------------ */

function Lesson16({ onComplete }) {

  const [challenge, setChallenge] = useState(1);
  const [result, setResult] = useState(null);

  const challenges = {
    1: {
      title: "Laptop",
      price: 50000,
      quantity: 3,
      answer: "150000"
    },
    2: {
      title: "Mouse",
      price: 800,
      quantity: 5,
      answer: "4000"
    },
    3: {
      title: "Keyboard",
      price: 2000,
      quantity: 4,
      answer: "8000"
    }
  };

  const current = challenges[challenge];

  return (
    <LessonWrModuleOneer
      number="16"
      title="Final Challenge"
      subtitle="Use what you've learned to solve a small business problem."
    >

      <div className="challenge-header">

        <span>
          NOVA MART
        </span>

        <h2>
          Calculate the total price
        </h2>

      </div>

      <div className="challenge-data">

        <div>
          <span>Product</span>
          <strong>{current.title}</strong>
        </div>

        <div>
          <span>Price</span>
          <strong>₹{current.price.toLocaleString()}</strong>
        </div>

        <div>
          <span>Quantity</span>
          <strong>{current.quantity}</strong>
        </div>

      </div>

      <CodeEditor
        key={challenge}
        initialCode={`# Write your solution here`}
        expectedOutput={current.answer}
        challenge
        onRun={(output) => {
          setResult(output);
        }}
      />

      {result && (

        <Feedback
          type={
            result.trim() === current.answer
              ? "success"
              : "error"
          }
          text={
            result.trim() === current.answer
              ? "Correct! You solved the business problem using Python."
              : `Expected ${current.answer}. Think about price × quantity.`
          }
        />

      )}

      <div className="challenge-tabs">

        {[1, 2, 3].map((number) => (

          <button
            key={number}
            className={
              challenge === number ? "active" : ""
            }
            onClick={() => {
              setChallenge(number);
              setResult(null);
            }}
          >
            Challenge {number}
          </button>

        ))}

      </div>

      <CompleteButton onClick={onComplete} />

    </LessonWrModuleOneer>
  );
}


/* ------------------------------------------------ */
/* REUSABLE COMPONENTS */
/* ------------------------------------------------ */

function LessonWrModuleOneer({
  number,
  title,
  subtitle,
  children
}) {

  return (
    <div className="lesson-page">

      <div className="lesson-header">

        <div className="lesson-number-large">
          {number}
        </div>

        <div>

          <div className="lesson-kicker">
            PYTHON FUNDAMENTALS
          </div>

          <h1>{title}</h1>

          <p>{subtitle}</p>

        </div>

      </div>

      <div className="lesson-body">
        {children}
      </div>

    </div>
  );
}


function ShopCard() {

  return (
    <div className="shop-card">

      <div className="shop-header">
        <div>
          <span>NOVA MART</span>
          <strong>Products</strong>
        </div>

        <div className="shop-icon">
          🛒
        </div>
      </div>

      <div className="product-row">

        <div>
          <strong>Laptop</strong>
          <span>Electronics</span>
        </div>

        <strong>₹50,000</strong>

      </div>

      <div className="product-row">

        <div>
          <strong>Mouse</strong>
          <span>Accessories</span>
        </div>

        <strong>₹1,000</strong>

      </div>

      <div className="product-row">

        <div>
          <strong>Keyboard</strong>
          <span>Accessories</span>
        </div>

        <strong>₹2,000</strong>

      </div>

    </div>
  );
}


function FlowDiagram({ items }) {

  return (
    <div className="flow-diagram">

      {items.map((item, index) => (

        <div
          className="flow-item"
          key={item}
        >

          <div className="flow-circle">
            {index + 1}
          </div>

          <span>{item}</span>

          {index < items.length - 1 && (
            <div className="flow-connector">
              ↓
            </div>
          )}

        </div>

      ))}

    </div>
  );
}


function CodeEditor({
  initialCode,
  expectedOutput,
  onRun,
  challenge = false
}) {

  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState("");

  const executeCode = () => {

    let result = "";

    if (challenge) {

      const match = code.match(
        /(\d+)\s*\*\s*(\d+)/
      );

      if (match) {
        result = String(
          Number(match[1]) * Number(match[2])
        );
      }

    } else if (
      code.includes("50000 * 2")
    ) {

      result = "100000";

    } else if (
      code.includes('print("Welcome to Nova Mart")')
    ) {

      result = "Welcome to Nova Mart";

    } else if (
      code.includes("price * quantity")
    ) {

      result = "100000";

    } else if (
      code.includes("50000 + 1000")
    ) {

      result = "51000";

    } else if (
      code.includes("50000")
    ) {

      result = "50000";

    } else if (
      code.includes("10 + 20")
    ) {

      result = "30";

    } else {

      const printMatches = [
        ...code.matchAll(
          /print\(["'](.*?)["']\)/g
        )
      ];

      if (printMatches.length) {
        result = printMatches
          .map(match => match[1])
          .join("\n");
      }

    }

    setOutput(result);

    if (onRun) {
      onRun(result);
    }
  };

  return (
    <div className="code-editor">

      <div className="editor-top">

        <div className="editor-title">
          <Code2 size={16} />
          Python
        </div>

        <button
          className="run-button"
          onClick={executeCode}
        >
          <Play size={15} />
          Run
        </button>

      </div>

      <div className="editor-area">

        <div className="line-numbers">

          {code.split("\n").map((_, index) => (
            <span key={index}>
              {index + 1}
            </span>
          ))}

        </div>

        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          spellCheck="false"
        />

      </div>

      <div className="output-panel">

        <div className="output-header">
          <Terminal size={15} />
          Output
        </div>

        <pre>
          {output || "Run your code to see the output..."}
        </pre>

      </div>

    </div>
  );
}


function Feedback({ type, text }) {

  return (
    <div className={`feedback ${type}`}>

      {type === "success" ? (
        <Check size={19} />
      ) : (
        <CircleHelp size={19} />
      )}

      <span>{text}</span>

    </div>
  );
}


function CompleteButton({ onClick }) {

  return (
    <button
      className="complete-button"
      onClick={onClick}
    >
      <Check size={17} />
      Mark Lesson Complete
    </button>
  );
}


// function Code2() {
//   return <Code2Icon />;
// }


function Code2Icon() {
  return <Code2 size={26} />;
}


function UseCard({ title, icon }) {

  return (
    <div className="use-card">

      <span className="use-icon">
        {icon}
      </span>

      <strong>{title}</strong>

    </div>
  );
}

export default ModuleOne;