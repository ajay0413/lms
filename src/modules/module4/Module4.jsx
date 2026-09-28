import React, { useState } from "react";
import './module4.css'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  ChevronDown,
  ChevronRight,
  Code2,
  Lightbulb,
  Play,
  RotateCcw,
  ShoppingCart,
  Target,
  Trophy,
  X,
  Zap,
} from "lucide-react";

const lessons = [
  {
    id: 1,
    title: "Calculate the Order Total",
    icon: "🧮",
  },
  {
    id: 2,
    title: "Division Gives Us Something Different",
    icon: "➗",
  },
  {
    id: 3,
    title: "Compare Two Values",
    icon: "⚖️",
  },
  {
    id: 4,
    title: "`=` Is Not `==`",
    icon: "🔀",
  },
  {
    id: 5,
    title: "Combining Questions",
    icon: "🧠",
  },
  {
    id: 6,
    title: "Updating Values",
    icon: "🔄",
  },
  {
    id: 7,
    title: "Is This Product in the Cart?",
    icon: "🛒",
  },
  {
    id: 8,
    title: "Same Value vs Same Object",
    icon: "📦",
  },
  {
    id: 9,
    title: "Which Calculation Happens First?",
    icon: "📐",
  },
  {
    id: 10,
    title: "Final Challenge",
    icon: "🏆",
  },
];

const lessonData = {
  1: {
    eyebrow: "START WITH A REAL PROBLEM",
    title: "Calculate the Order Total",
    description:
      "Nova Mart has an order. We know the price and quantity. Now Python needs to calculate the total.",
    scenario: {
      title: "Nova Mart checkout",
      content: (
        <>
          A customer buys <strong>3 keyboards</strong>.
          <br />
          Each keyboard costs <strong>₹1,000</strong>.
          <br />
          The system needs the order total.
        </>
      ),
    },
    code: `price = 1000
quantity = 3

total = price * quantity

print(total)`,
    output: "3000",
    question: {
      text: "Which symbol tells Python to multiply the price by the quantity?",
      options: ["+", "*", "/", "="],
      answer: "*",
      explanation:
        "`*` is the multiplication operator. It calculates 1000 × 3 = 3000.",
    },
    concept: {
      title: "Arithmetic operators",
      text: "Python provides operators for performing calculations on values.",
      table: [
        ["+", "Addition", "10 + 5 → 15"],
        ["-", "Subtraction", "10 - 5 → 5"],
        ["*", "Multiplication", "10 * 5 → 50"],
        ["/", "Division", "10 / 5 → 2.0"],
      ],
    },
    challenge: {
      title: "Try it yourself",
      text: "Change the quantity to 5. What should the total become?",
      code: `price = 1000
quantity = 5

total = price * quantity

print(total)`,
      output: "5000",
    },
  },

  2: {
    eyebrow: "THE RESULT MATTERS",
    title: "Division Gives Us Something Different",
    description:
      "A calculation can produce different kinds of results. Nova Mart needs to split ₹1,000 between 3 people.",
    scenario: {
      title: "Split a payment",
      content: (
        <>
          Total payment: <strong>₹1,000</strong>
          <br />
          Number of people: <strong>3</strong>
          <br />
          How much does each person pay?
        </>
      ),
    },
    code: `total = 1000
people = 3

share = total / people

print(share)`,
    output: "333.3333333333333",
    question: {
      text: "What does `/` perform?",
      options: [
        "Whole-number division only",
        "Division",
        "Remainder only",
        "Power",
      ],
      answer: "Division",
      explanation:
        "`/` performs normal division and produces a division result such as 333.3333.",
    },
    concept: {
      title: "More arithmetic operators",
      text: "Python also provides operators for whole-number division, remainder, and powers.",
      table: [
        ["/", "Division", "10 / 3 → 3.333..."],
        ["//", "Floor division", "10 // 3 → 3"],
        ["%", "Remainder", "10 % 3 → 1"],
        ["**", "Power", "2 ** 3 → 8"],
      ],
    },
    challenge: {
      title: "Boxes and remaining items",
      text: "Nova Mart has 17 products. Each box can hold 5. Find the number of complete boxes and remaining products.",
      code: `products = 17
box_size = 5

boxes = products // box_size
remaining = products % box_size

print(boxes)
print(remaining)`,
      output: `3
2`,
    },
  },

  3: {
    eyebrow: "THE PROGRAM NEEDS AN ANSWER",
    title: "Compare Two Values",
    description:
      "Nova Mart needs to know whether a product is available. Instead of calculating a number, Python must answer a question.",
    scenario: {
      title: "Check stock",
      content: (
        <>
          A product has <strong>5 items</strong> in stock.
          <br />
          The system asks:
          <br />
          <strong>"Is the stock greater than zero?"</strong>
        </>
      ),
    },
    code: `stock = 5

available = stock > 0

print(available)`,
    output: "True",
    question: {
      text: "What kind of result does a comparison produce?",
      options: ["A string", "A number", "True or False", "None"],
      answer: "True or False",
      explanation:
        "Comparison operators produce a Boolean result: `True` or `False`.",
    },
    concept: {
      title: "Comparison operators",
      text: "Comparisons ask Python whether one value has a particular relationship with another.",
      table: [
        [">", "greater than", "10 > 5 → True"],
        ["<", "less than", "10 < 5 → False"],
        [">=", "greater than or equal", "10 >= 10 → True"],
        ["<=", "less than or equal", "5 <= 10 → True"],
        ["==", "equal to", "10 == 10 → True"],
        ["!=", "not equal to", "10 != 5 → True"],
      ],
    },
    challenge: {
      title: "Check the price",
      text: "Nova Mart wants to know whether the product costs less than ₹2,000.",
      code: `price = 1500

result = price < 2000

print(result)`,
      output: "True",
    },
  },

  4: {
    eyebrow: "A COMMON CONFUSION",
    title: "`=` Is Not `==`",
    description:
      "These two symbols look similar, but Python uses them for completely different jobs.",
    scenario: {
      title: "Two different actions",
      content: (
        <>
          One statement needs to <strong>store</strong> a value.
          <br />
          Another needs to <strong>ask whether two values are equal</strong>.
        </>
      ),
    },
    code: `price = 1000

print(price == 1000)`,
    output: "True",
    question: {
      text: "What does `price = 1000` do?",
      options: [
        "Checks whether price equals 1000",
        "Stores 1000 in price",
        "Adds 1000 to price",
        "Compares two values",
      ],
      answer: "Stores 1000 in price",
      explanation:
        "`=` is the assignment operator. It puts the value on the right into the variable on the left.",
    },
    concept: {
      title: "Assignment vs comparison",
      text: "Use `=` to assign a value. Use `==` to compare two values.",
      table: [
        ["=", "Assignment", "price = 1000"],
        ["==", "Equality comparison", "price == 1000"],
      ],
    },
    challenge: {
      title: "Predict the result",
      text: "What will Python print?",
      code: `quantity = 5

print(quantity == 5)
print(quantity == 10)`,
      output: `True
False`,
    },
  },

  5: {
    eyebrow: "ONE QUESTION IS NOT ENOUGH",
    title: "Combining Questions",
    description:
      "A checkout rule can depend on more than one condition. Python can combine Boolean expressions.",
    scenario: {
      title: "Free delivery rule",
      content: (
        <>
          Nova Mart gives free delivery when:
          <br />
          • the order is at least ₹1,000
          <br />
          <strong>AND</strong>
          <br />
          • the customer buys at least 2 items.
        </>
      ),
    },
    code: `total = 1500
quantity = 3

free_delivery = total >= 1000 and quantity >= 2

print(free_delivery)`,
    output: "True",
    question: {
      text: "Which operator means both conditions must be True?",
      options: ["or", "not", "and", "in"],
      answer: "and",
      explanation:
        "`and` produces True only when both conditions are True.",
    },
    concept: {
      title: "Logical operators",
      text: "Logical operators let Python combine or reverse Boolean conditions.",
      table: [
        ["and", "both must be True", "True and True → True"],
        ["or", "at least one must be True", "True or False → True"],
        ["not", "reverses the result", "not True → False"],
      ],
    },
    challenge: {
      title: "Build the rule",
      text: "A discount applies when the customer is a member OR the order is above ₹5,000.",
      code: `member = False
total = 6000

discount = member or total > 5000

print(discount)`,
      output: "True",
    },
  },

  6: {
    eyebrow: "THE VALUE NEEDS TO CHANGE",
    title: "Updating Values",
    description:
      "Stock changes every time an order is placed. Python provides shorter ways to update an existing value.",
    scenario: {
      title: "Stock decreases",
      content: (
        <>
          Nova Mart has <strong>100</strong> keyboards.
          <br />
          A customer buys <strong>5</strong>.
          <br />
          The stock must become <strong>95</strong>.
        </>
      ),
    },
    code: `stock = 100

stock = stock - 5

print(stock)`,
    output: "95",
    question: {
      text: "Which shorter form does the same subtraction update?",
      options: [
        "stock =- 5",
        "stock -= 5",
        "stock == 5",
        "stock -- 5",
      ],
      answer: "stock -= 5",
      explanation:
        "`stock -= 5` means `stock = stock - 5`.",
    },
    concept: {
      title: "Assignment operators",
      text: "Assignment operators combine an operation with assignment.",
      table: [
        ["+=", "Add and assign", "x += 5"],
        ["-=", "Subtract and assign", "x -= 5"],
        ["*=", "Multiply and assign", "x *= 5"],
        ["/=", "Divide and assign", "x /= 5"],
        ["//=", "Floor divide and assign", "x //= 5"],
        ["%=", "Remainder and assign", "x %= 5"],
        ["**=", "Power and assign", "x **= 2"],
      ],
    },
    challenge: {
      title: "Update the inventory",
      text: "Start with 50 products. Add 20 new products, then sell 15.",
      code: `stock = 50

stock += 20
stock -= 15

print(stock)`,
      output: "55",
    },
  },

  7: {
    eyebrow: "SEARCHING A COLLECTION",
    title: "Is This Product in the Cart?",
    description:
      "A cart contains multiple products. Python can directly check whether a value exists inside a collection.",
    scenario: {
      title: "Customer cart",
      content: (
        <>
          The cart contains:
          <br />
          <strong>Laptop, Mouse, Keyboard</strong>
          <br />
          The system needs to check whether a Laptop is present.
        </>
      ),
    },
    code: `cart = ["Laptop", "Mouse", "Keyboard"]

print("Laptop" in cart)`,
    output: "True",
    question: {
      text: "What does `in` check?",
      options: [
        "Whether a value exists inside a collection",
        "Whether two numbers are equal",
        "Whether two objects are identical",
        "Whether a value is greater",
      ],
      answer: "Whether a value exists inside a collection",
      explanation:
        "`in` checks membership. It returns True when the value is found.",
    },
    concept: {
      title: "Membership operators",
      text: "Use `in` and `not in` to test whether a value belongs to a collection.",
      table: [
        ["in", "exists inside", '"Laptop" in cart'],
        ["not in", "does not exist inside", '"Phone" not in cart'],
      ],
    },
    challenge: {
      title: "Check the cart",
      text: "Check whether `Phone` is NOT in the cart.",
      code: `cart = ["Laptop", "Mouse", "Keyboard"]

result = "Phone" not in cart

print(result)`,
      output: "True",
    },
  },

  8: {
    eyebrow: "EQUALITY IS NOT IDENTITY",
    title: "Same Value vs Same Object",
    description:
      "Python has a special distinction between two values being equal and two variables referring to the exact same object.",
    scenario: {
      title: "An empty delivery date",
      content: (
        <>
          Nova Mart has not assigned a delivery date yet.
          <br />
          Python represents the absence of a value using <strong>None</strong>.
        </>
      ),
    },
    code: `delivery_date = None

print(delivery_date is None)`,
    output: "True",
    question: {
      text: "Which operator is commonly used to check whether a value is `None`?",
      options: ["==", "=", "is", "in"],
      answer: "is",
      explanation:
        "`is` checks object identity. `is None` is the standard Python pattern for checking None.",
    },
    concept: {
      title: "Identity operators",
      text: "`is` and `is not` check whether two references point to the same object.",
      table: [
        ["is", "same object", "value is None"],
        ["is not", "different objects", "value is not None"],
      ],
    },
    challenge: {
      title: "Check the delivery date",
      text: "The delivery date has been assigned. What should the check return?",
      code: `delivery_date = "2026-09-30"

print(delivery_date is None)`,
      output: "False",
    },
  },

  9: {
    eyebrow: "MULTIPLE OPERATORS",
    title: "Which Calculation Happens First?",
    description:
      "When an expression contains several operators, Python needs rules to decide which calculation happens first.",
    scenario: {
      title: "A simple calculation",
      content: (
        <>
          Nova Mart calculates:
          <br />
          <strong>10 + 5 × 2</strong>
          <br />
          Should Python add first or multiply first?
        </>
      ),
    },
    code: `result = 10 + 5 * 2

print(result)`,
    output: "20",
    question: {
      text: "Why is the result 20 instead of 30?",
      options: [
        "Python always calculates from right to left",
        "Multiplication has higher precedence than addition",
        "Addition is ignored",
        "The numbers are strings",
      ],
      answer: "Multiplication has higher precedence than addition",
      explanation:
        "Python evaluates `5 * 2` first, giving 10. Then it calculates `10 + 10`.",
    },
    concept: {
      title: "Operator precedence",
      text: "Python follows a defined order when an expression contains multiple operators.",
      table: [
        ["()", "Parentheses", "Highest priority"],
        ["**", "Power", "Then"],
        ["* / // %", "Multiplication and division", "Then"],
        ["+ -", "Addition and subtraction", "Then"],
        ["> < == !=", "Comparisons", "Then"],
        ["not", "Logical NOT", "Then"],
        ["and", "Logical AND", "Then"],
        ["or", "Logical OR", "Lower priority"],
      ],
    },
    challenge: {
      title: "Control the order",
      text: "Use parentheses to make addition happen before multiplication.",
      code: `result = (10 + 5) * 2

print(result)`,
      output: "30",
    },
  },

  10: {
    eyebrow: "PUT EVERYTHING TOGETHER",
    title: "Final Challenge",
    description:
      "Nova Mart now needs a small checkout calculation using arithmetic, comparison, and logical operators.",
    scenario: {
      title: "Nova Mart checkout",
      content: (
        <>
          Ask the customer for:
          <br />
          • product price
          <br />
          • quantity
          <br />
          • discount amount
          <br />
          <br />
          Then calculate the final price and determine whether the customer
          receives free delivery.
        </>
      ),
    },
    code: `price = float(input("Enter price: "))
quantity = int(input("Enter quantity: "))
discount = float(input("Enter discount: "))

subtotal = price * quantity
final_price = subtotal - discount

free_delivery = final_price >= 2000 and quantity >= 2

print(final_price)
print(free_delivery)`,
    output: `4990.0
True`,
    question: {
      text: "Which expression checks both free-delivery conditions?",
      options: [
        "final_price >= 2000 or quantity >= 2",
        "final_price >= 2000 and quantity >= 2",
        "final_price == 2000",
        "quantity in final_price",
      ],
      answer: "final_price >= 2000 and quantity >= 2",
      explanation:
        "`and` is required because both conditions must be satisfied.",
    },
    concept: {
      title: "The operator toolkit",
      text: "Operators allow Python to calculate values, compare values, combine conditions, update variables, search collections, and control expression evaluation.",
      table: [
        ["Arithmetic", "+ - * / // % **", "Calculate"],
        ["Comparison", "> < >= <= == !=", "Compare"],
        ["Logical", "and or not", "Combine conditions"],
        ["Assignment", "= += -= *= /=", "Store/update"],
        ["Membership", "in / not in", "Search collections"],
        ["Identity", "is / is not", "Check object identity"],
      ],
    },
    challenge: {
      title: "Your checkout rule",
      text: "Modify the program so free delivery requires a final price of at least ₹3,000 AND quantity of at least 3.",
      code: `price = 1200
quantity = 3
discount = 200

subtotal = price * quantity
final_price = subtotal - discount

free_delivery = final_price >= 3000 and quantity >= 3

print(final_price)
print(free_delivery)`,
      output: `3400
True`,
    },
  },
};

function CodeEditor({ code, output, editable = true }) {
  const [value, setValue] = useState(code);
  const [result, setResult] = useState(null);

  const runCode = () => {
    setResult(output);
  };

  const resetCode = () => {
    setValue(code);
    setResult(null);
  };

  return (
    <div className="code-editor-wrapper">
      <div className="editor-topbar">
        <div className="editor-language">
          <span className="python-dot" />
          Python
        </div>

        <div className="editor-actions">
          <button className="editor-reset" onClick={resetCode}>
            <RotateCcw size={14} />
            Reset
          </button>

          <button className="run-button" onClick={runCode}>
            <Play size={14} fill="currentColor" />
            Run
          </button>
        </div>
      </div>

      <textarea
        className="code-area"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        spellCheck={false}
        disabled={!editable}
      />

      <div className="output-area">
        <div className="output-label">
          <span className="terminal-dot" />
          Output
        </div>

        <pre>
          {result !== null ? result : "Click Run to see the output"}
        </pre>
      </div>
    </div>
  );
}

function QuestionBox({ question }) {
  const [selected, setSelected] = useState(null);

  const choose = (option) => {
    if (selected !== null) return;
    setSelected(option);
  };

  const correct = selected === question.answer;

  return (
    <div className="question-box">
      <div className="question-heading">
        <div className="question-icon">
          <Target size={19} />
        </div>
        <div>
          <span>CHECK YOUR UNDERSTANDING</span>
          <h3>{question.text}</h3>
        </div>
      </div>

      <div className="question-options">
        {question.options.map((option) => {
          const isSelected = selected === option;
          const isCorrect = option === question.answer;

          let className = "question-option";

          if (selected !== null && isCorrect) {
            className += " correct";
          }

          if (isSelected && !isCorrect) {
            className += " wrong";
          }

          return (
            <button
              key={option}
              className={className}
              onClick={() => choose(option)}
            >
              <span className="option-letter">
                {String.fromCharCode(
                  65 + question.options.indexOf(option)
                )}
              </span>
              {option}

              {selected !== null && isCorrect && (
                <Check size={17} className="answer-icon" />
              )}

              {isSelected && !isCorrect && (
                <X size={17} className="answer-icon" />
              )}
            </button>
          );
        })}
      </div>

      {selected !== null && (
        <div className={`question-feedback ${correct ? "success" : "error"}`}>
          {correct ? (
            <>
              <Check size={17} />
              <div>
                <strong>Correct.</strong>
                <p>{question.explanation}</p>
              </div>
            </>
          ) : (
            <>
              <X size={17} />
              <div>
                <strong>Not quite.</strong>
                <p>{question.explanation}</p>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

function ConceptBox({ concept }) {
  return (
    <div className="concept-box">
      <div className="concept-header">
        <div className="concept-icon">
          <Lightbulb size={18} />
        </div>

        <div>
          <span>THE CONCEPT</span>
          <h3>{concept.title}</h3>
        </div>
      </div>

      <p>{concept.text}</p>

      <div className="concept-table">
        <div className="concept-table-head">
          <span>Operator</span>
          <span>Meaning</span>
          <span>Example</span>
        </div>

        {concept.table.map((row, index) => (
          <div className="concept-table-row" key={index}>
            <code>{row[0]}</code>
            <span>{row[1]}</span>
            <code>{row[2]}</code>
          </div>
        ))}
      </div>
    </div>
  );
}

function Challenge({ challenge }) {
  return (
    <div className="challenge-section">
      <div className="challenge-heading">
        <div className="challenge-icon">
          <Zap size={19} />
        </div>

        <div>
          <span>TRY IT YOURSELF</span>
          <h3>{challenge.title}</h3>
        </div>
      </div>

      <p>{challenge.text}</p>

      <CodeEditor
        code={challenge.code}
        output={challenge.output}
      />
    </div>
  );
}

function Scenario({ scenario }) {
  return (
    <div className="scenario-card">
      <div className="scenario-icon">
        <ShoppingCart size={21} />
      </div>

      <div>
        <span>SCENARIO</span>
        <h3>{scenario.title}</h3>
        <p>{scenario.content}</p>
      </div>
    </div>
  );
}

function LessonWrapper({ lesson, lessonNumber, totalLessons, onNext, onPrev }) {
  const data = lessonData[lessonNumber];

  return (
    <main className="lesson-main">
      <div className="lesson-container">
        <div className="lesson-topline">
          <span>{data.eyebrow}</span>
          <span>
            {lessonNumber} / {totalLessons}
          </span>
        </div>

        <div className="lesson-title-area">
          <div className="lesson-number-big">
            {String(lessonNumber).padStart(2, "0")}
          </div>

          <div>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
          </div>
        </div>

        <Scenario scenario={data.scenario} />

        <section className="lesson-section">
          <div className="section-label">
            <span className="section-number">01</span>
            <span>BUILD IT</span>
          </div>

          <CodeEditor
            code={data.code}
            output={data.output}
          />
        </section>

        <QuestionBox question={data.question} />

        <ConceptBox concept={data.concept} />

        <Challenge challenge={data.challenge} />

        <div className="lesson-navigation">
          <button
            className="nav-secondary"
            onClick={onPrev}
            disabled={lessonNumber === 1}
          >
            <ArrowLeft size={17} />
            Previous
          </button>

          <div className="lesson-progress-dots">
            {Array.from({ length: totalLessons }).map((_, index) => (
              <span
                key={index}
                className={
                  index + 1 === lessonNumber
                    ? "active"
                    : index + 1 < lessonNumber
                    ? "completed"
                    : ""
                }
              />
            ))}
          </div>

          <button className="nav-primary" onClick={onNext}>
            {lessonNumber === totalLessons ? "Complete Module" : "Next Lesson"}
            <ArrowRight size={17} />
          </button>
        </div>
      </div>
    </main>
  );
}

function Sidebar({ currentLesson, setCurrentLesson }) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark">
          <Code2 size={21} />
        </div>

        <div>
          <strong>Python</strong>
          <span>Interactive Learning</span>
        </div>
      </div>

      <div className="module-card">
        <div className="module-card-top">
          <span>MODULE 04</span>
          <span className="module-status">IN PROGRESS</span>
        </div>

        <h2>Operators</h2>

        <div className="module-progress">
          <div
            className="module-progress-fill"
            style={{
              width: `${(currentLesson / lessons.length) * 100}%`,
            }}
          />
        </div>

        <div className="module-progress-text">
          <span>
            {currentLesson} of {lessons.length} lessons
          </span>
          <span>
            {Math.round((currentLesson / lessons.length) * 100)}%
          </span>
        </div>
      </div>

      <div className="sidebar-label">LESSONS</div>

      <div className="lesson-list">
        {lessons.map((lesson) => {
          const active = lesson.id === currentLesson;
          const completed = lesson.id < currentLesson;

          return (
            <button
              key={lesson.id}
              className={`sidebar-lesson ${active ? "active" : ""}`}
              onClick={() => setCurrentLesson(lesson.id)}
            >
              <span className="lesson-status-icon">
                {completed ? (
                  <Check size={13} />
                ) : (
                  <span>{lesson.id}</span>
                )}
              </span>

              <span className="lesson-icon">{lesson.icon}</span>

              <span className="lesson-name">{lesson.title}</span>

              {active && <ChevronRight size={16} />}
            </button>
          );
        })}
      </div>

      <div className="sidebar-bottom">
        <div className="learning-tip">
          <BookOpen size={17} />
          <div>
            <strong>Learning approach</strong>
            <p>
              Build → Run → Think → Understand → Apply
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}

function App() {
  const [currentLesson, setCurrentLesson] = useState(1);

  const nextLesson = () => {
    if (currentLesson < lessons.length) {
      setCurrentLesson((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const previousLesson = () => {
    if (currentLesson > 1) {
      setCurrentLesson((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="app">
      <Sidebar
        currentLesson={currentLesson}
        setCurrentLesson={setCurrentLesson}
      />

      <LessonWrapper
        lesson={lessons[currentLesson - 1]}
        lessonNumber={currentLesson}
        totalLessons={lessons.length}
        onNext={nextLesson}
        onPrev={previousLesson}
      />
    </div>
  );
}

export default App;