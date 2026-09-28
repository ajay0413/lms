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
  RotateCcw,
} from "lucide-react";
import "./moduletwo.css";

/* =========================================================
   MODULE DATA
========================================================= */

const lessons = [
  {
    id: 1,
    title: "The Shop Needs to Remember Things",
  },
  {
    id: 2,
    title: "Give a Value a Name",
  },
  {
    id: 3,
    title: "Using the Stored Value",
  },
  {
    id: 4,
    title: "Changing a Value",
  },
  {
    id: 5,
    title: "One Name, New Value",
  },
  {
    id: 6,
    title: "Storing Multiple Values",
  },
  {
    id: 7,
    title: "Choosing Good Names",
  },
  {
    id: 8,
    title: "Python Does Not Need a Type Declaration",
  },
  {
    id: 9,
    title: "Finding What a Value Is",
  },
  {
    id: 10,
    title: "Checking a Type",
  },
  {
    id: 11,
    title: "Where the Value Lives",
  },
  {
    id: 12,
    title: "Constants",
  },
  {
    id: 13,
    title: "Final Challenge",
  },
];

/* =========================================================
   REUSABLE COMPONENTS
========================================================= */

function CodeEditor({
  initialCode,
  expectedOutput,
  explanation,
  onRun,
  language = "python",
}) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState("");
  const [hasRun, setHasRun] = useState(false);

  const runCode = () => {
    setHasRun(true);

    if (expectedOutput) {
      setOutput(expectedOutput);
    }

    if (onRun) {
      onRun(code, setOutput);
    }
  };

  const resetCode = () => {
    setCode(initialCode);
    setOutput("");
    setHasRun(false);
  };

  return (
    <div className="code-editor-card">
      <div className="code-editor-header">
        <div className="code-editor-title">
          <Code2 size={18} />
          <span>{language}</span>
        </div>

        <button className="reset-code-btn" onClick={resetCode}>
          <RotateCcw size={15} />
          Reset
        </button>
      </div>

      <textarea
        className="code-input"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        spellCheck="false"
      />

      <button className="run-btn" onClick={runCode}>
        <Play size={16} />
        Run Code
      </button>

      {hasRun && (
        <div className="output-box">
          <div className="output-header">
            <Terminal size={16} />
            Output
          </div>

          <pre>{output}</pre>
        </div>
      )}

      {explanation && (
        <div className="editor-explanation">
          <Lightbulb size={17} />
          <span>{explanation}</span>
        </div>
      )}
    </div>
  );
}

function LessonWrapper({
  lessonNumber,
  title,
  children,
  onPrevious,
  onNext,
  isFirst,
  isLast,
  completed,
  onComplete,
}) {
  return (
    <div className="lesson-page">
      <div className="lesson-number">
        Lesson {lessonNumber}
      </div>

      <h1>{title}</h1>

      <div className="lesson-content">{children}</div>

      <div className="lesson-bottom">
        {!completed ? (
          <button className="complete-btn" onClick={onComplete}>
            <Check size={17} />
            Mark Lesson Complete
          </button>
        ) : (
          <div className="completed-message">
            <Check size={17} />
            Lesson completed
          </div>
        )}

        <div className="lesson-navigation">
          <button
            className="nav-btn"
            onClick={onPrevious}
            disabled={isFirst}
          >
            <ChevronLeft size={18} />
            Previous
          </button>

          <button
            className="nav-btn primary"
            onClick={onNext}
            disabled={isLast}
          >
            Next
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

function Feedback({ children }) {
  return (
    <div className="feedback-box">
      <Lightbulb size={20} />
      <div>{children}</div>
    </div>
  );
}

function QuestionBox({ question, children }) {
  return (
    <div className="question-box">
      <div className="question-icon">
        <CircleHelp size={20} />
      </div>

      <div>
        <div className="question-title">{question}</div>
        {children}
      </div>
    </div>
  );
}

function Flow({ children }) {
  return <div className="flow-box">{children}</div>;
}

/* =========================================================
   LESSON 1
========================================================= */

function Lesson1() {
  const [answer, setAnswer] = useState(null);

  return (
    <>
      <p>
        Nova Mart sells laptops, keyboards, monitors and other
        products.
      </p>

      <div className="shop-card">
        <div className="shop-card-header">
          <span>Nova Mart</span>
          <span className="status-dot">● Open</span>
        </div>

        <div className="shop-product">
          <div className="product-icon">💻</div>

          <div>
            <strong>Laptop</strong>
            <div className="muted">₹55,000</div>
          </div>

          <div className="quantity">
            Quantity: <strong>2</strong>
          </div>
        </div>
      </div>

      <p>
        The program needs to calculate the total price.
      </p>

      <CodeEditor
        initialCode={`55000 * 2`}
        expectedOutput={`110000`}
      />

      <QuestionBox question="Now imagine the shop has 50 products. Would you want to repeatedly write 55000 everywhere?">
        <div className="choice-grid">
          <button
            className={answer === "yes" ? "selected" : ""}
            onClick={() => setAnswer("yes")}
          >
            Yes
          </button>

          <button
            className={answer === "no" ? "selected" : ""}
            onClick={() => setAnswer("no")}
          >
            No
          </button>
        </div>

        {answer === "no" && (
          <Feedback>
            Exactly. We need a way to give important values
            meaningful names and reuse them.
          </Feedback>
        )}
      </QuestionBox>

      <CodeEditor
        initialCode={`price = 55000
quantity = 2

price * quantity`}
        expectedOutput={`110000`}
        explanation="price and quantity now give names to the values we want to reuse."
      />

      <Feedback>
        This is the problem variables solve: keeping important
        values available so the program can use them again.
      </Feedback>
    </>
  );
}

/* =========================================================
   LESSON 2
========================================================= */

function Lesson2() {
  const [revealed, setRevealed] = useState(false);

  return (
    <>
      <p>
        We have a price:
      </p>

      <CodeEditor
        initialCode={`55000`}
        expectedOutput={`55000`}
      />

      <p>
        But instead of remembering what <code>55000</code> means,
        we can give it a name.
      </p>

      <CodeEditor
        initialCode={`price = 55000`}
        expectedOutput={`55000`}
      />

      <button
        className="reveal-btn"
        onClick={() => setRevealed(true)}
      >
        {revealed ? "Concept Revealed" : "Reveal the Concept"}
      </button>

      {revealed && (
        <div className="concept-card">
          <div className="concept-label">VARIABLE</div>

          <h3>price</h3>

          <div className="concept-arrow">↓</div>

          <div className="concept-value">55000</div>

          <p>
            <strong>price</strong> is the name we use to refer
            to the value <strong>55000</strong>.
          </p>
        </div>
      )}

      <Flow>
        <div className="flow-item">
          <span className="flow-label">Name</span>
          <strong>price</strong>
        </div>

        <div className="flow-arrow">←</div>

        <div className="flow-item">
          <span className="flow-label">Value</span>
          <strong>55000</strong>
        </div>
      </Flow>

      <Feedback>
        The operation <code>price = 55000</code> is called
        assignment. We assign a value to a name.
      </Feedback>
    </>
  );
}

/* =========================================================
   LESSON 3
========================================================= */

function Lesson3() {
  return (
    <>
      <p>
        Once a value has a name, we can use that name instead of
        repeatedly writing the original value.
      </p>

      <CodeEditor
        initialCode={`price = 55000
quantity = 2

total = price * quantity

print(total)`}
        expectedOutput={`110000`}
      />

      <p>
        Now change only the quantity.
      </p>

      <CodeEditor
        initialCode={`price = 55000
quantity = 3

total = price * quantity

print(total)`}
        expectedOutput={`165000`}
      />

      <Feedback>
        The calculation uses the current values stored under
        <code>price</code> and <code>quantity</code>.
      </Feedback>
    </>
  );
}

/* =========================================================
   LESSON 4
========================================================= */

function Lesson4() {
  const [answer, setAnswer] = useState(null);

  return (
    <>
      <p>
        A shop's stock changes throughout the day.
      </p>

      <CodeEditor
        initialCode={`stock = 100
stock = 75

print(stock)`}
        expectedOutput={`75`}
      />

      <QuestionBox question="What should stock contain after these two assignments?">
        <div className="choice-grid">
          {["100", "75", "175", "Error"].map((item) => (
            <button
              key={item}
              className={answer === item ? "selected" : ""}
              onClick={() => setAnswer(item)}
            >
              {item}
            </button>
          ))}
        </div>

        {answer === "75" && (
          <Feedback>
            Correct. The second assignment gives stock a new
            value.
          </Feedback>
        )}

        {answer && answer !== "75" && (
          <Feedback>
            Look at the second assignment:
            <br />
            <code>stock = 75</code>
          </Feedback>
        )}
      </QuestionBox>

      <div className="memory-visual">
        <div>
          <strong>stock</strong>
        </div>

        <div className="memory-arrow">→</div>

        <div className="memory-value">75</div>
      </div>
    </>
  );
}

/* =========================================================
   LESSON 5
========================================================= */

function Lesson5() {
  return (
    <>
      <p>
        A name can receive a new value later.
      </p>

      <CodeEditor
        initialCode={`price = 500
print(price)

price = 450
print(price)`}
        expectedOutput={`500
450`}
      />

      <div className="comparison-grid">
        <div className="comparison-card">
          <span>First</span>
          <code>price = 500</code>
        </div>

        <div className="comparison-card">
          <span>Later</span>
          <code>price = 450</code>
        </div>
      </div>

      <Feedback>
        In Python, <code>=</code> is assignment. It tells Python
        to associate the name on the left with the value produced
        on the right.
      </Feedback>
    </>
  );
}

/* =========================================================
   LESSON 6
========================================================= */

function Lesson6() {
  return (
    <>
      <p>
        A real program needs many values at the same time.
      </p>

      <CodeEditor
        initialCode={`product = "Keyboard"
price = 1200
quantity = 3
discount = 100

total = price * quantity
final_price = total - discount

print(final_price)`}
        expectedOutput={`3500`}
      />

      <div className="value-map">
        <div>
          <strong>product</strong>
          <span>"Keyboard"</span>
        </div>

        <div>
          <strong>price</strong>
          <span>1200</span>
        </div>

        <div>
          <strong>quantity</strong>
          <span>3</span>
        </div>

        <div>
          <strong>discount</strong>
          <span>100</span>
        </div>

        <div>
          <strong>total</strong>
          <span>3600</span>
        </div>

        <div>
          <strong>final_price</strong>
          <span>3500</span>
        </div>
      </div>

      <Feedback>
        A program can work with many named values simultaneously.
      </Feedback>
    </>
  );
}

/* =========================================================
   LESSON 7
========================================================= */

function Lesson7() {
  const [choice, setChoice] = useState(null);

  return (
    <>
      <p>
        Look at this program:
      </p>

      <CodeEditor
        initialCode={`x = 1200
y = 3
z = 100`}
        expectedOutput={`No output`}
      />

      <QuestionBox question="Which version makes the program easier to understand?">
        <div className="choice-grid vertical">
          <button
            className={choice === "bad" ? "selected" : ""}
            onClick={() => setChoice("bad")}
          >
            x = 1200, y = 3, z = 100
          </button>

          <button
            className={choice === "good" ? "selected" : ""}
            onClick={() => setChoice("good")}
          >
            price = 1200, quantity = 3, discount = 100
          </button>
        </div>

        {choice === "good" && (
          <Feedback>
            Good names communicate what the value represents.
          </Feedback>
        )}
      </QuestionBox>

      <div className="naming-rules">
        <h3>Python naming examples</h3>

        <div className="valid-name">
          <Check size={17} />
          product_name
        </div>

        <div className="valid-name">
          <Check size={17} />
          total_price
        </div>

        <div className="valid-name">
          <Check size={17} />
          customer_age
        </div>

        <div className="invalid-name">
          <span>✕</span>
          2price
        </div>

        <div className="invalid-name">
          <span>✕</span>
          product-name
        </div>
      </div>
    </>
  );
}

/* =========================================================
   LESSON 8
========================================================= */

function Lesson8() {
  return (
    <>
      <p>
        In some languages, you explicitly declare the type of a
        variable.
      </p>

      <div className="language-card">
        <div className="language-title">Java</div>

        <pre>{`int age = 25;`}</pre>
      </div>

      <p>Python doesn't require that:</p>

      <CodeEditor
        initialCode={`age = 25
print(age)`}
        expectedOutput={`25`}
      />

      <p>
        The same name can later refer to another kind of value.
      </p>

      <CodeEditor
        initialCode={`value = 100
print(value)

value = "Laptop"
print(value)

value = 25.5
print(value)`}
        expectedOutput={`100
Laptop
25.5`}
      />

      <Feedback>
        Python is dynamically typed. The type is associated with
        the value, and a name can later refer to a value of a
        different type.
      </Feedback>
    </>
  );
}

/* =========================================================
   LESSON 9
========================================================= */

function Lesson9() {
  return (
    <>
      <p>
        We can ask Python what type of value a name currently
        refers to.
      </p>

      <CodeEditor
        initialCode={`price = 55000

print(type(price))`}
        expectedOutput={`<class 'int'>`}
      />

      <CodeEditor
        initialCode={`product = "Laptop"

print(type(product))`}
        expectedOutput={`<class 'str'>`}
      />

      <CodeEditor
        initialCode={`rating = 4.5

print(type(rating))`}
        expectedOutput={`<class 'float'>`}
      />

      <Feedback>
        <code>type()</code> lets us inspect the type of a value.
      </Feedback>
    </>
  );
}

/* =========================================================
   LESSON 10
========================================================= */

function Lesson10() {
  return (
    <>
      <p>
        Sometimes we don't just want to know the exact type.
        We want to ask Python a question:
      </p>

      <div className="question-highlight">
        "Is this value an integer?"
      </div>

      <CodeEditor
        initialCode={`price = 55000

print(isinstance(price, int))`}
        expectedOutput={`True`}
      />

      <CodeEditor
        initialCode={`price = "55000"

print(isinstance(price, int))`}
        expectedOutput={`False`}
      />

      <div className="comparison-grid">
        <div className="comparison-card">
          <span>type()</span>
          <strong>Find the type</strong>
        </div>

        <div className="comparison-card">
          <span>isinstance()</span>
          <strong>Check whether it is a type</strong>
        </div>
      </div>
    </>
  );
}

/* =========================================================
   LESSON 11
========================================================= */

function Lesson11() {
  return (
    <>
      <p>
        Consider:
      </p>

      <CodeEditor
        initialCode={`price = 55000`}
        expectedOutput={`No output`}
      />

      <div className="memory-visual large">
        <div className="memory-name">
          price
        </div>

        <div className="memory-arrow">
          ───────────────►
        </div>

        <div className="memory-value">
          55000
        </div>
      </div>

      <p>
        If we assign another value:
      </p>

      <CodeEditor
        initialCode={`price = 55000
price = 60000

print(price)`}
        expectedOutput={`60000`}
      />

      <div className="memory-visual large">
        <div className="memory-name">
          price
        </div>

        <div className="memory-arrow">
          ───────────────►
        </div>

        <div className="memory-value">
          60000
        </div>
      </div>

      <p>
        Python also gives us <code>id()</code>, which returns an
        identity associated with the object.
      </p>

      <CodeEditor
        initialCode={`price = 55000

print(id(price))`}
        expectedOutput={`A number representing the object's identity`}
        explanation="The exact number is implementation-dependent, so focus on what id() represents rather than memorizing the number."
      />
    </>
  );
}

/* =========================================================
   LESSON 12
========================================================= */

function Lesson12() {
  return (
    <>
      <p>
        Some values are intended to remain fixed throughout a
        program.
      </p>

      <CodeEditor
        initialCode={`GST_RATE = 18
MAX_LOGIN_ATTEMPTS = 3
COMPANY_NAME = "Nova Mart"

print(GST_RATE)
print(MAX_LOGIN_ATTEMPTS)
print(COMPANY_NAME)`}
        expectedOutput={`18
3
Nova Mart`}
      />

      <p>
        Python does not have a special <code>const</code> keyword
        for ordinary variables.
      </p>

      <div className="concept-card">
        <div className="concept-label">CONVENTION</div>

        <h3>UPPERCASE NAMES</h3>

        <p>
          Programmers commonly use uppercase names to communicate
          that a value should be treated as constant.
        </p>

        <pre>{`GST_RATE = 18
MAX_USERS = 100
COMPANY_NAME = "Nova Mart"`}</pre>
      </div>

      <Feedback>
        Uppercase does not technically prevent reassignment in
        Python. It communicates programmer intent.
      </Feedback>
    </>
  );
}

/* =========================================================
   LESSON 13
========================================================= */

function Lesson13() {
  const [completed, setCompleted] = useState(false);

  return (
    <>
      <div className="challenge-header">
        <div className="challenge-icon">
          🧩
        </div>

        <div>
          <div className="challenge-label">
            FINAL CHALLENGE
          </div>

          <h2>Build a Small Order Record</h2>
        </div>
      </div>

      <p>
        Nova Mart received this order:
      </p>

      <div className="order-card">
        <div>
          <span>Product</span>
          <strong>Laptop</strong>
        </div>

        <div>
          <span>Price</span>
          <strong>₹55,000</strong>
        </div>

        <div>
          <span>Quantity</span>
          <strong>2</strong>
        </div>

        <div>
          <span>Discount</span>
          <strong>₹5,000</strong>
        </div>
      </div>

      <p>
        Create variables for these values and calculate:
      </p>

      <Flow>
        <div className="flow-item">
          <strong>price</strong>
        </div>

        <div className="flow-arrow">×</div>

        <div className="flow-item">
          <strong>quantity</strong>
        </div>

        <div className="flow-arrow">=</div>

        <div className="flow-item highlight">
          <strong>total</strong>
        </div>
      </Flow>

      <Flow>
        <div className="flow-item">
          <strong>total</strong>
        </div>

        <div className="flow-arrow">−</div>

        <div className="flow-item">
          <strong>discount</strong>
        </div>

        <div className="flow-arrow">=</div>

        <div className="flow-item highlight">
          <strong>final_price</strong>
        </div>
      </Flow>

      <CodeEditor
        initialCode={`product_name = "Laptop"
price = 55000
quantity = 2
discount = 5000

total = price * quantity
final_price = total - discount

print(product_name)
print(price)
print(quantity)
print(discount)
print(total)
print(final_price)`}
        expectedOutput={`Laptop
55000
2
5000
110000
105000`}
      />

      <QuestionBox question="What concepts did this challenge use?">
        <div className="concept-list">
          <div>✓ Variables</div>
          <div>✓ Assignment</div>
          <div>✓ Reassignment / stored values</div>
          <div>✓ Meaningful names</div>
          <div>✓ Using variables in expressions</div>
        </div>
      </QuestionBox>

      {!completed ? (
        <button
          className="complete-final-btn"
          onClick={() => setCompleted(true)}
        >
          <Check size={18} />
          Complete Module 2
        </button>
      ) : (
        <div className="module-complete">
          <Check size={20} />
          Module 2 Completed
        </div>
      )}
    </>
  );
}

/* =========================================================
   MAIN APP
========================================================= */

export default function ModuleTwo() {
  const [currentLesson, setCurrentLesson] = useState(1);
  const [completedLessons, setCompletedLessons] = useState([]);

  const markComplete = () => {
    if (!completedLessons.includes(currentLesson)) {
      setCompletedLessons((prev) => [
        ...prev,
        currentLesson,
      ]);
    }
  };

  const goNext = () => {
    if (currentLesson < lessons.length) {
      setCurrentLesson((prev) => prev + 1);
    }
  };

  const goPrevious = () => {
    if (currentLesson > 1) {
      setCurrentLesson((prev) => prev - 1);
    }
  };

  const progress =
    (completedLessons.length / lessons.length) * 100;

  const isCompleted =
    completedLessons.includes(currentLesson);

  const renderLesson = () => {
    switch (currentLesson) {
      case 1:
        return <Lesson1 />;

      case 2:
        return <Lesson2 />;

      case 3:
        return <Lesson3 />;

      case 4:
        return <Lesson4 />;

      case 5:
        return <Lesson5 />;

      case 6:
        return <Lesson6 />;

      case 7:
        return <Lesson7 />;

      case 8:
        return <Lesson8 />;

      case 9:
        return <Lesson9 />;

      case 10:
        return <Lesson10 />;

      case 11:
        return <Lesson11 />;

      case 12:
        return <Lesson12 />;

      case 13:
        return <Lesson13 />;

      default:
        return <Lesson1 />;
    }
  };

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <div className="brand-icon">
            PY
          </div>

          <div>
            <strong>Python Learning</strong>
            <span>Module 2</span>
          </div>
        </div>

        <div className="module-info">
          <div className="module-title">
            Values & Variables
          </div>

          <div className="progress-info">
            <span>
              {completedLessons.length} / {lessons.length}
            </span>

            <span>
              {Math.round(progress)}%
            </span>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="lesson-list">
          {lessons.map((lesson) => {
            const completed = completedLessons.includes(
              lesson.id
            );

            const active = currentLesson === lesson.id;

            return (
              <button
                key={lesson.id}
                className={`lesson-item ${
                  active ? "active" : ""
                } ${completed ? "completed" : ""}`}
                onClick={() =>
                  setCurrentLesson(lesson.id)
                }
              >
                <div className="lesson-status">
                  {completed ? (
                    <Check size={14} />
                  ) : (
                    lesson.id
                  )}
                </div>

                <span>{lesson.title}</span>
              </button>
            );
          })}
        </div>

        <div className="sidebar-bottom">
          <BookOpen size={17} />
          <span>Python Fundamentals</span>
        </div>
      </aside>

      <main className="main-content">
        <div className="topbar">
          <div>
            <span className="breadcrumb">
              Python
            </span>

            <span className="breadcrumb-separator">
              /
            </span>

            <span className="breadcrumb-current">
              Values & Variables
            </span>
          </div>

          <div className="lesson-counter">
            Lesson {currentLesson} of {lessons.length}
          </div>
        </div>

        <div className="lesson-container">
          <LessonWrapper
            lessonNumber={currentLesson}
            title={lessons[currentLesson - 1].title}
            onPrevious={goPrevious}
            onNext={goNext}
            isFirst={currentLesson === 1}
            isLast={currentLesson === lessons.length}
            completed={isCompleted}
            onComplete={markComplete}
          >
            {renderLesson()}
          </LessonWrapper>
        </div>
      </main>
    </div>
  );
}