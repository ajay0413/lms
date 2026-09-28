// import React, { useState } from "react";
// import {
//   Play,
//   Check,
//   ChevronLeft,
//   ChevronRight,
//   Terminal,
//   Code2,
//   Lightbulb,
//   CircleHelp,
//   BookOpen,
//   RotateCcw,
// } from "lucide-react";
import "./module3.css";

// const lessons = [
//   { id: 1, title: "The Shop Has Different Kinds of Values" },
//   { id: 2, title: "Numbers Used for Counting" },
//   { id: 3, title: "Numbers Used for Money" },
//   { id: 4, title: "Text Is Different" },
//   { id: 5, title: "True or False" },
//   { id: 6, title: "There Is No Value" },
//   { id: 7, title: "Different Kinds of Numbers" },
//   { id: 8, title: "Python Knows the Difference" },
//   { id: 9, title: "Changing One Type into Another" },
//   { id: 10, title: "When Conversion Fails" },
//   { id: 11, title: "Checking Before Using a Value" },
//   { id: 12, title: "Final Challenge" },
// ];

// /* =========================================================
//    CODE EDITOR
// ========================================================= */

// function CodeEditor({
//   initialCode,
//   expectedOutput = "",
//   explanation,
//   onRun,
// }) {
//   const [code, setCode] = useState(initialCode);
//   const [output, setOutput] = useState("");
//   const [hasRun, setHasRun] = useState(false);

//   const runCode = () => {
//     setHasRun(true);

//     if (onRun) {
//       onRun(code, setOutput);
//     } else {
//       setOutput(expectedOutput);
//     }
//   };

//   const resetCode = () => {
//     setCode(initialCode);
//     setOutput("");
//     setHasRun(false);
//   };

//   return (
//     <div className="code-editor-card">
//       <div className="code-editor-header">
//         <div className="code-editor-title">
//           <Code2 size={17} />
//           Python
//         </div>

//         <button className="reset-code-btn" onClick={resetCode}>
//           <RotateCcw size={14} />
//           Reset
//         </button>
//       </div>

//       <textarea
//         className="code-input"
//         value={code}
//         onChange={(e) => setCode(e.target.value)}
//         spellCheck="false"
//       />

//       <button className="run-btn" onClick={runCode}>
//         <Play size={15} />
//         Run Code
//       </button>

//       {hasRun && (
//         <div className="output-box">
//           <div className="output-header">
//             <Terminal size={15} />
//             Output
//           </div>

//           <pre>{output}</pre>
//         </div>
//       )}

//       {explanation && (
//         <div className="editor-explanation">
//           <Lightbulb size={16} />
//           <span>{explanation}</span>
//         </div>
//       )}
//     </div>
//   );
// }

// /* =========================================================
//    FEEDBACK
// ========================================================= */

// function Feedback({ children }) {
//   return (
//     <div className="feedback-box">
//       <Lightbulb size={19} />
//       <div>{children}</div>
//     </div>
//   );
// }

// /* =========================================================
//    QUESTION
// ========================================================= */

// function QuestionBox({ question, children }) {
//   return (
//     <div className="question-box">
//       <div className="question-icon">
//         <CircleHelp size={20} />
//       </div>

//       <div className="question-content">
//         <div className="question-title">{question}</div>
//         {children}
//       </div>
//     </div>
//   );
// }

// /* =========================================================
//    LESSON WRAPPER
// ========================================================= */

// function LessonWrapper({
//   lessonNumber,
//   title,
//   children,
//   completed,
//   onComplete,
//   onPrevious,
//   onNext,
//   isFirst,
//   isLast,
// }) {
//   return (
//     <div className="lesson-page">
//       <div className="lesson-number">
//         Lesson {lessonNumber}
//       </div>

//       <h1>{title}</h1>

//       <div className="lesson-content">
//         {children}
//       </div>

//       <div className="lesson-bottom">
//         {!completed ? (
//           <button className="complete-btn" onClick={onComplete}>
//             <Check size={16} />
//             Mark Lesson Complete
//           </button>
//         ) : (
//           <div className="completed-message">
//             <Check size={17} />
//             Lesson completed
//           </div>
//         )}

//         <div className="lesson-navigation">
//           <button
//             className="nav-btn"
//             onClick={onPrevious}
//             disabled={isFirst}
//           >
//             <ChevronLeft size={17} />
//             Previous
//           </button>

//           <button
//             className="nav-btn primary"
//             onClick={onNext}
//             disabled={isLast}
//           >
//             Next
//             <ChevronRight size={17} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* =========================================================
//    LESSON 1
// ========================================================= */

// function Lesson1() {
//   const [answer, setAnswer] = useState(null);

//   return (
//     <>
//       <p>
//         Nova Mart stores information about every product.
//       </p>

//       <div className="product-data-card">
//         <div className="product-row">
//           <span>Product</span>
//           <strong>Laptop</strong>
//         </div>

//         <div className="product-row">
//           <span>Price</span>
//           <strong>55000</strong>
//         </div>

//         <div className="product-row">
//           <span>Quantity</span>
//           <strong>4</strong>
//         </div>

//         <div className="product-row">
//           <span>Available</span>
//           <strong>True</strong>
//         </div>

//         <div className="product-row">
//           <span>Category</span>
//           <strong>Electronics</strong>
//         </div>
//       </div>

//       <QuestionBox question="Are all these values the same kind of thing?">
//         <div className="choice-grid">
//           <button
//             className={answer === "yes" ? "selected" : ""}
//             onClick={() => setAnswer("yes")}
//           >
//             Yes
//           </button>

//           <button
//             className={answer === "no" ? "selected" : ""}
//             onClick={() => setAnswer("no")}
//           >
//             No
//           </button>
//         </div>

//         {answer === "no" && (
//           <Feedback>
//             Exactly. <strong>55000</strong>, <strong>4</strong>,
//             <strong>"Laptop"</strong>, and <strong>True</strong>
//             represent different kinds of values.
//           </Feedback>
//         )}
//       </QuestionBox>

//       <p>
//         Python needs to know what kind of value it is working
//         with because different values behave differently.
//       </p>

//       <CodeEditor
//         initialCode={`price = 55000
// quantity = 4
// product = "Laptop"
// available = True

// print(type(price))
// print(type(product))
// print(type(available))`}
//         expectedOutput={`<class 'int'>
// <class 'str'>
// <class 'bool'>`}
//       />

//       <Feedback>
//         Python gives different values different <strong>types</strong>.
//       </Feedback>
//     </>
//   );
// }

// /* =========================================================
//    LESSON 2
// ========================================================= */

// function Lesson2() {
//   const [answer, setAnswer] = useState(null);

//   return (
//     <>
//       <p>
//         A shop needs to count things.
//       </p>

//       <div className="number-display">
//         <span>Products in stock</span>
//         <strong>25</strong>
//       </div>

//       <p>
//         There is no decimal part here. It represents a whole
//         number.
//       </p>

//       <CodeEditor
//         initialCode={`stock = 25

// print(stock)
// print(type(stock))`}
//         expectedOutput={`25
// <class 'int'>`}
//       />

//       <QuestionBox question="What type does Python give 25?">
//         <div className="choice-grid">
//           {["str", "float", "int", "bool"].map((item) => (
//             <button
//               key={item}
//               className={answer === item ? "selected" : ""}
//               onClick={() => setAnswer(item)}
//             >
//               {item}
//             </button>
//           ))}
//         </div>

//         {answer === "int" && (
//           <Feedback>
//             Correct. Whole numbers such as 25, 100 and -5 are
//             represented by <strong>int</strong>.
//           </Feedback>
//         )}

//         {answer && answer !== "int" && (
//           <Feedback>
//             Try thinking about whether 25 contains a decimal
//             portion.
//           </Feedback>
//         )}
//       </QuestionBox>

//       <div className="type-card">
//         <div className="type-name">int</div>

//         <div className="type-examples">
//           0 &nbsp; 1 &nbsp; 25 &nbsp; 100 &nbsp; -5
//         </div>
//       </div>
//     </>
//   );
// }

// /* =========================================================
//    LESSON 3
// ========================================================= */

// function Lesson3() {
//   return (
//     <>
//       <p>
//         Now look at the price of a product.
//       </p>

//       <div className="price-display">
//         ₹1299.50
//       </div>

//       <p>
//         This value contains a decimal part.
//       </p>

//       <CodeEditor
//         initialCode={`price = 1299.50

// print(price)
// print(type(price))`}
//         expectedOutput={`1299.5
// <class 'float'>`}
//       />

//       <p>
//         Python represents decimal numbers using <strong>float</strong>.
//       </p>

//       <div className="type-card">
//         <div className="type-name">float</div>

//         <div className="type-examples">
//           10.5 &nbsp; 99.99 &nbsp; 0.25 &nbsp; -3.5
//         </div>
//       </div>

//       <QuestionBox question="Which one would normally be represented as a float?">
//         <div className="choice-grid">
//           <button>25</button>
//           <button>25.75</button>
//           <button>True</button>
//           <button>"25.75"</button>
//         </div>
//       </QuestionBox>

//       <Feedback>
//         Notice something important: quotation marks change the
//         situation. <code>"25.75"</code> is text, not a number.
//       </Feedback>
//     </>
//   );
// }

// /* =========================================================
//    LESSON 4
// ========================================================= */

// function Lesson4() {
//   const [answer, setAnswer] = useState(null);

//   return (
//     <>
//       <p>
//         Nova Mart also stores the name of every product.
//       </p>

//       <CodeEditor
//         initialCode={`product = "Laptop"

// print(product)
// print(type(product))`}
//         expectedOutput={`Laptop
// <class 'str'>`}
//       />

//       <p>
//         Python sees <code>"Laptop"</code> as text.
//       </p>

//       <div className="text-example">
//         <div className="text-box">
//           "Laptop"
//         </div>

//         <div className="text-arrow">→</div>

//         <div className="type-box">
//           str
//         </div>
//       </div>

//       <QuestionBox question='What happens with "55000"?'>
//         <div className="choice-grid">
//           <button
//             className={answer === "number" ? "selected" : ""}
//             onClick={() => setAnswer("number")}
//           >
//             Number
//           </button>

//           <button
//             className={answer === "text" ? "selected" : ""}
//             onClick={() => setAnswer("text")}
//           >
//             Text
//           </button>
//         </div>

//         {answer === "text" && (
//           <Feedback>
//             Correct. Anything inside quotation marks is a string
//             value.
//           </Feedback>
//         )}

//         {answer === "number" && (
//           <Feedback>
//             Look at the quotation marks. They tell Python this is
//             text.
//           </Feedback>
//         )}
//       </QuestionBox>

//       <CodeEditor
//         initialCode={`a = 55000
// b = "55000"

// print(type(a))
// print(type(b))`}
//         expectedOutput={`<class 'int'>
// <class 'str'>`}
//       />

//       <Feedback>
//         The characters <code>55000</code> can look like a number
//         to us, but <code>"55000"</code> is text to Python.
//       </Feedback>
//     </>
//   );
// }

// /* =========================================================
//    LESSON 5
// ========================================================= */

// function Lesson5() {
//   const [answer, setAnswer] = useState(null);

//   return (
//     <>
//       <p>
//         A product can either be available or unavailable.
//       </p>

//       <CodeEditor
//         initialCode={`available = True

// print(available)
// print(type(available))`}
//         expectedOutput={`True
// <class 'bool'>`}
//       />

//       <p>
//         Python has two Boolean values:
//       </p>

//       <div className="boolean-grid">
//         <div className="boolean-card true">
//           <strong>True</strong>
//           <span>Yes / enabled / available</span>
//         </div>

//         <div className="boolean-card false">
//           <strong>False</strong>
//           <span>No / disabled / unavailable</span>
//         </div>
//       </div>

//       <QuestionBox question="What type is True?">
//         <div className="choice-grid">
//           {["int", "str", "bool", "float"].map((item) => (
//             <button
//               key={item}
//               className={answer === item ? "selected" : ""}
//               onClick={() => setAnswer(item)}
//             >
//               {item}
//             </button>
//           ))}
//         </div>

//         {answer === "bool" && (
//           <Feedback>
//             Correct. <strong>bool</strong> represents logical
//             values: True and False.
//           </Feedback>
//         )}
//       </QuestionBox>

//       <CodeEditor
//         initialCode={`is_available = False

// print(is_available)`}
//         expectedOutput={`False`}
//       />
//     </>
//   );
// }

// /* =========================================================
//    LESSON 6
// ========================================================= */

// function Lesson6() {
//   const [answer, setAnswer] = useState(null);

//   return (
//     <>
//       <p>
//         Imagine Nova Mart has a product field called
//         <strong> delivery_date</strong>.
//       </p>

//       <p>
//         A product has not been assigned a delivery date yet.
//       </p>

//       <CodeEditor
//         initialCode={`delivery_date = None

// print(delivery_date)
// print(type(delivery_date))`}
//         expectedOutput={`None
// <class 'NoneType'>`}
//       />

//       <QuestionBox question="Does None mean zero?">
//         <div className="choice-grid">
//           <button
//             className={answer === "yes" ? "selected" : ""}
//             onClick={() => setAnswer("yes")}
//           >
//             Yes
//           </button>

//           <button
//             className={answer === "no" ? "selected" : ""}
//             onClick={() => setAnswer("no")}
//           >
//             No
//           </button>
//         </div>

//         {answer === "no" && (
//           <Feedback>
//             Correct. <strong>None</strong> means there is currently
//             no value here. It is different from 0, False, and
//             an empty string.
//           </Feedback>
//         )}
//       </QuestionBox>

//       <div className="none-comparison">
//         <div>
//           <code>0</code>
//           <span>A number</span>
//         </div>

//         <div>
//           <code>False</code>
//           <span>A Boolean</span>
//         </div>

//         <div>
//           <code>""</code>
//           <span>Empty text</span>
//         </div>

//         <div>
//           <code>None</code>
//           <span>No value</span>
//         </div>
//       </div>
//     </>
//   );
// }

// /* =========================================================
//    LESSON 7
// ========================================================= */

// function Lesson7() {
//   return (
//     <>
//       <p>
//         Python can represent more than just whole and decimal
//         numbers.
//       </p>

//       <div className="numeric-type-grid">
//         <div className="numeric-card">
//           <strong>int</strong>
//           <code>25</code>
//           <span>Whole number</span>
//         </div>

//         <div className="numeric-card">
//           <strong>float</strong>
//           <code>25.5</code>
//           <span>Decimal number</span>
//         </div>

//         <div className="numeric-card">
//           <strong>complex</strong>
//           <code>3 + 4j</code>
//           <span>Complex number</span>
//         </div>
//       </div>

//       <p>
//         Complex numbers are useful in areas such as engineering,
//         physics and signal processing.
//       </p>

//       <CodeEditor
//         initialCode={`signal = 3 + 4j

// print(signal)
// print(type(signal))`}
//         expectedOutput={`(3+4j)
// <class 'complex'>`}
//       />

//       <p>
//         Python also has <strong>bytes</strong>, which represents
//         sequences of bytes.
//       </p>

//       <CodeEditor
//         initialCode={`data = b"ABC"

// print(data)
// print(type(data))`}
//         expectedOutput={`b'ABC'
// <class 'bytes'>`}
//       />

//       <Feedback>
//         You do not need to use every type every day. The important
//         idea is that Python has different ways of representing
//         different kinds of values.
//       </Feedback>
//     </>
//   );
// }

// /* =========================================================
//    LESSON 8
// ========================================================= */

// function Lesson8() {
//   return (
//     <>
//       <p>
//         Python can tell us the type of a value.
//       </p>

//       <CodeEditor
//         initialCode={`a = 100
// b = 25.5
// c = "Laptop"
// d = True
// e = None

// print(type(a))
// print(type(b))
// print(type(c))
// print(type(d))
// print(type(e))`}
//         expectedOutput={`<class 'int'>
// <class 'float'>
// <class 'str'>
// <class 'bool'>
// <class 'NoneType'>`}
//       />

//       <div className="type-table">
//         <div className="type-table-row header">
//           <span>Value</span>
//           <span>Type</span>
//         </div>

//         <div className="type-table-row">
//           <code>100</code>
//           <strong>int</strong>
//         </div>

//         <div className="type-table-row">
//           <code>25.5</code>
//           <strong>float</strong>
//         </div>

//         <div className="type-table-row">
//           <code>"Laptop"</code>
//           <strong>str</strong>
//         </div>

//         <div className="type-table-row">
//           <code>True</code>
//           <strong>bool</strong>
//         </div>

//         <div className="type-table-row">
//           <code>None</code>
//           <strong>NoneType</strong>
//         </div>
//       </div>

//       <Feedback>
//         This is the idea behind a data type: it tells Python what
//         kind of value it is dealing with.
//       </Feedback>
//     </>
//   );
// }

// /* =========================================================
//    LESSON 9
// ========================================================= */

// function Lesson9() {
//   return (
//     <>
//       <p>
//         Sometimes data arrives in the wrong form.
//       </p>

//       <p>
//         Imagine a quantity coming from a form:
//       </p>

//       <CodeEditor
//         initialCode={`quantity = "5"

// print(type(quantity))`}
//         expectedOutput={`<class 'str'>`}
//       />

//       <p>
//         We may need to turn that text into a number.
//       </p>

//       <CodeEditor
//         initialCode={`quantity = "5"

// quantity = int(quantity)

// print(quantity)
// print(type(quantity))`}
//         expectedOutput={`5
// <class 'int'>`}
//       />

//       <p>Python provides conversion functions.</p>

//       <div className="conversion-grid">
//         <div>
//           <code>int()</code>
//           <span>Convert to integer</span>
//         </div>

//         <div>
//           <code>float()</code>
//           <span>Convert to float</span>
//         </div>

//         <div>
//           <code>str()</code>
//           <span>Convert to string</span>
//         </div>

//         <div>
//           <code>bool()</code>
//           <span>Convert to Boolean</span>
//         </div>
//       </div>

//       <CodeEditor
//         initialCode={`price = "1299.50"

// price = float(price)

// print(price)`}
//         expectedOutput={`1299.5`}
//       />
//     </>
//   );
// }

// /* =========================================================
//    LESSON 10
// ========================================================= */

// function Lesson10() {
//   const [answer, setAnswer] = useState(null);

//   return (
//     <>
//       <p>
//         Conversion works only when the original value can be
//         interpreted as the requested type.
//       </p>

//       <CodeEditor
//         initialCode={`value = "25"

// number = int(value)

// print(number)`}
//         expectedOutput={`25`}
//       />

//       <p>
//         But what happens here?
//       </p>

//       <CodeEditor
//         initialCode={`value = "Laptop"

// number = int(value)

// print(number)`}
//         expectedOutput={`ValueError: invalid literal for int()`}
//       />

//       <QuestionBox question="Can Python turn the word 'Laptop' directly into an integer?">
//         <div className="choice-grid">
//           <button
//             className={answer === "yes" ? "selected" : ""}
//             onClick={() => setAnswer("yes")}
//           >
//             Yes
//           </button>

//           <button
//             className={answer === "no" ? "selected" : ""}
//             onClick={() => setAnswer("no")}
//           >
//             No
//           </button>
//         </div>

//         {answer === "no" && (
//           <Feedback>
//             Correct. Python cannot interpret "Laptop" as a valid
//             integer, so <code>int()</code> raises an error.
//           </Feedback>
//         )}

//         {answer === "yes" && (
//           <Feedback>
//             Try again. There is no numeric integer represented by
//             the word "Laptop".
//           </Feedback>
//         )}
//       </QuestionBox>

//       <Feedback>
//         Type conversion is not magic. The original value must be
//         compatible with the target type.
//       </Feedback>
//     </>
//   );
// }

// /* =========================================================
//    LESSON 11
// ========================================================= */

// function Lesson11() {
//   const [answer, setAnswer] = useState(null);

//   return (
//     <>
//       <p>
//         Before using a value, sometimes we need to understand
//         what we actually received.
//       </p>

//       <CodeEditor
//         initialCode={`value = "500"

// print(type(value))`}
//         expectedOutput={`<class 'str'>`}
//       />

//       <QuestionBox question="Which check asks whether value is an integer?">
//         <div className="choice-grid vertical">
//           <button
//             className={
//               answer === "a" ? "selected" : ""
//             }
//             onClick={() => setAnswer("a")}
//           >
//             type(value) == int
//           </button>

//           <button
//             className={
//               answer === "b" ? "selected" : ""
//             }
//             onClick={() => setAnswer("b")}
//           >
//             isinstance(value, int)
//           </button>

//           <button
//             className={
//               answer === "c" ? "selected" : ""
//             }
//             onClick={() => setAnswer("c")}
//           >
//             int(value)
//           </button>
//         </div>

//         {answer === "b" && (
//           <Feedback>
//             Correct. <code>isinstance(value, int)</code> checks
//             whether the value is an integer.
//           </Feedback>
//         )}
//       </QuestionBox>

//       <CodeEditor
//         initialCode={`value = 500

// if isinstance(value, int):
//     print("This is an integer")`}
//         expectedOutput={`This is an integer`}
//       />

//       <Feedback>
//         Type checking becomes especially useful when programs
//         receive data from users, files, APIs and databases.
//       </Feedback>
//     </>
//   );
// }

// /* =========================================================
//    LESSON 12
// ========================================================= */

// function Lesson12() {
//   const [completed, setCompleted] = useState(false);

//   return (
//     <>
//       <div className="challenge-header">
//         <div className="challenge-icon">
//           🧩
//         </div>

//         <div>
//           <div className="challenge-label">
//             FINAL CHALLENGE
//           </div>

//           <h2>Build Product Information</h2>
//         </div>
//       </div>

//       <p>
//         Nova Mart wants to store information about a product.
//       </p>

//       <div className="challenge-data">
//         <div>
//           <span>Product name</span>
//           <strong>Laptop</strong>
//         </div>

//         <div>
//           <span>Price</span>
//           <strong>54999.50</strong>
//         </div>

//         <div>
//           <span>Stock</span>
//           <strong>25</strong>
//         </div>

//         <div>
//           <span>Available</span>
//           <strong>True</strong>
//         </div>

//         <div>
//           <span>Delivery date</span>
//           <strong>None</strong>
//         </div>
//       </div>

//       <p>
//         Create the variables and use <code>type()</code> to inspect
//         them.
//       </p>

//       <CodeEditor
//         initialCode={`product_name = "Laptop"
// price = 54999.50
// stock = 25
// available = True
// delivery_date = None

// print(type(product_name))
// print(type(price))
// print(type(stock))
// print(type(available))
// print(type(delivery_date))`}
//         expectedOutput={`<class 'str'>
// <class 'float'>
// <class 'int'>
// <class 'bool'>
// <class 'NoneType'>`}
//       />

//       <QuestionBox question="Which type belongs to each value?">
//         <div className="type-answer-list">
//           <div>
//             <code>"Laptop"</code>
//             <span>→ str</span>
//           </div>

//           <div>
//             <code>54999.50</code>
//             <span>→ float</span>
//           </div>

//           <div>
//             <code>25</code>
//             <span>→ int</span>
//           </div>

//           <div>
//             <code>True</code>
//             <span>→ bool</span>
//           </div>

//           <div>
//             <code>None</code>
//             <span>→ NoneType</span>
//           </div>
//         </div>
//       </QuestionBox>

//       <div className="final-concept">
//         <div className="final-concept-title">
//           The idea you should remember
//         </div>

//         <div className="final-flow">
//           <div>Value</div>
//           <span>→</span>
//           <div>Type</div>
//           <span>→</span>
//           <div>Python knows how to treat it</div>
//         </div>
//       </div>

//       {!completed ? (
//         <button
//           className="complete-final-btn"
//           onClick={() => setCompleted(true)}
//         >
//           <Check size={17} />
//           Complete Module 3
//         </button>
//       ) : (
//         <div className="module-complete">
//           <Check size={19} />
//           Module 3 Completed
//         </div>
//       )}
//     </>
//   );
// }

// /* =========================================================
//    APP
// ========================================================= */

// export default function App() {
//   const [currentLesson, setCurrentLesson] = useState(1);
//   const [completedLessons, setCompletedLessons] = useState([]);

//   const markComplete = () => {
//     if (!completedLessons.includes(currentLesson)) {
//       setCompletedLessons((prev) => [
//         ...prev,
//         currentLesson,
//       ]);
//     }
//   };

//   const goNext = () => {
//     if (currentLesson < lessons.length) {
//       setCurrentLesson((prev) => prev + 1);
//     }
//   };

//   const goPrevious = () => {
//     if (currentLesson > 1) {
//       setCurrentLesson((prev) => prev - 1);
//     }
//   };

//   const progress =
//     (completedLessons.length / lessons.length) * 100;

//   const isCompleted =
//     completedLessons.includes(currentLesson);

//   const renderLesson = () => {
//     switch (currentLesson) {
//       case 1:
//         return <Lesson1 />;

//       case 2:
//         return <Lesson2 />;

//       case 3:
//         return <Lesson3 />;

//       case 4:
//         return <Lesson4 />;

//       case 5:
//         return <Lesson5 />;

//       case 6:
//         return <Lesson6 />;

//       case 7:
//         return <Lesson7 />;

//       case 8:
//         return <Lesson8 />;

//       case 9:
//         return <Lesson9 />;

//       case 10:
//         return <Lesson10 />;

//       case 11:
//         return <Lesson11 />;

//       case 12:
//         return <Lesson12 />;

//       default:
//         return <Lesson1 />;
//     }
//   };

//   return (
//     <div className="app">
//       <aside className="sidebar">
//         <div className="sidebar-brand">
//           <div className="brand-icon">PY</div>

//           <div>
//             <strong>Python Learning</strong>
//             <span>Module 3</span>
//           </div>
//         </div>

//         <div className="module-info">
//           <div className="module-title">
//             Data Types
//           </div>

//           <div className="progress-info">
//             <span>
//               {completedLessons.length} / {lessons.length}
//             </span>

//             <span>
//               {Math.round(progress)}%
//             </span>
//           </div>

//           <div className="progress-bar">
//             <div
//               className="progress-fill"
//               style={{ width: `${progress}%` }}
//             />
//           </div>
//         </div>

//         <div className="lesson-list">
//           {lessons.map((lesson) => {
//             const completed =
//               completedLessons.includes(lesson.id);

//             const active =
//               currentLesson === lesson.id;

//             return (
//               <button
//                 key={lesson.id}
//                 className={`lesson-item ${
//                   active ? "active" : ""
//                 } ${completed ? "completed" : ""}`}
//                 onClick={() =>
//                   setCurrentLesson(lesson.id)
//                 }
//               >
//                 <div className="lesson-status">
//                   {completed ? (
//                     <Check size={13} />
//                   ) : (
//                     lesson.id
//                   )}
//                 </div>

//                 <span>{lesson.title}</span>
//               </button>
//             );
//           })}
//         </div>

//         <div className="sidebar-bottom">
//           <BookOpen size={16} />
//           <span>Python Fundamentals</span>
//         </div>
//       </aside>

//       <main className="main-content">
//         <div className="topbar">
//           <div>
//             <span className="breadcrumb">
//               Python
//             </span>

//             <span className="breadcrumb-separator">
//               /
//             </span>

//             <span className="breadcrumb-current">
//               Data Types
//             </span>
//           </div>

//           <div className="lesson-counter">
//             Lesson {currentLesson} of {lessons.length}
//           </div>
//         </div>

//         <div className="lesson-container">
//           <LessonWrapper
//             lessonNumber={currentLesson}
//             title={lessons[currentLesson - 1].title}
//             completed={isCompleted}
//             onComplete={markComplete}
//             onPrevious={goPrevious}
//             onNext={goNext}
//             isFirst={currentLesson === 1}
//             isLast={currentLesson === lessons.length}
//           >
//             {renderLesson()}
//           </LessonWrapper>
//         </div>
//       </main>
//     </div>
//   );
// }


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

const lessons = [
  { id: 1, title: "The Shop Has Different Kinds of Values" },
  { id: 2, title: "Numbers Used for Counting" },
  { id: 3, title: "Numbers Used for Money" },
  { id: 4, title: "Text Is Different" },
  { id: 5, title: "True or False" },
  { id: 6, title: "There Is No Value" },
  { id: 7, title: "Different Kinds of Numbers" },
  { id: 8, title: "Python Knows the Difference" },
  { id: 9, title: "Getting a Value from the User" },
  { id: 10, title: "What Did Python Receive?" },
  { id: 11, title: "Turning Text into a Number" },
  { id: 12, title: "When Conversion Fails" },
  { id: 13, title: "Checking Before Using a Value" },
  { id: 14, title: "Final Challenge" },
];

/* =========================================================
   CODE EDITOR
========================================================= */

function CodeEditor({
  initialCode,
  expectedOutput = "",
  explanation,
  onRun,
}) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState("");
  const [hasRun, setHasRun] = useState(false);

  const runCode = () => {
    setHasRun(true);

    if (onRun) {
      onRun(code, setOutput);
    } else {
      setOutput(expectedOutput);
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
          <Code2 size={17} />
          Python
        </div>

        <button
          className="reset-code-btn"
          onClick={resetCode}
        >
          <RotateCcw size={14} />
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
        <Play size={15} />
        Run Code
      </button>

      {hasRun && (
        <div className="output-box">
          <div className="output-header">
            <Terminal size={15} />
            Output
          </div>

          <pre>{output}</pre>
        </div>
      )}

      {explanation && (
        <div className="editor-explanation">
          <Lightbulb size={16} />
          <span>{explanation}</span>
        </div>
      )}
    </div>
  );
}

/* =========================================================
   FEEDBACK
========================================================= */

function Feedback({ children }) {
  return (
    <div className="feedback-box">
      <Lightbulb size={19} />
      <div>{children}</div>
    </div>
  );
}

/* =========================================================
   QUESTION
========================================================= */

function QuestionBox({ question, children }) {
  return (
    <div className="question-box">
      <div className="question-icon">
        <CircleHelp size={20} />
      </div>

      <div className="question-content">
        <div className="question-title">
          {question}
        </div>

        {children}
      </div>
    </div>
  );
}

/* =========================================================
   LESSON WRAPPER
========================================================= */

function LessonWrapper({
  lessonNumber,
  title,
  children,
  completed,
  onComplete,
  onPrevious,
  onNext,
  isFirst,
  isLast,
}) {
  return (
    <div className="lesson-page">
      <div className="lesson-number">
        Lesson {lessonNumber}
      </div>

      <h1>{title}</h1>

      <div className="lesson-content">
        {children}
      </div>

      <div className="lesson-bottom">
        {!completed ? (
          <button
            className="complete-btn"
            onClick={onComplete}
          >
            <Check size={16} />
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
            <ChevronLeft size={17} />
            Previous
          </button>

          <button
            className="nav-btn primary"
            onClick={onNext}
            disabled={isLast}
          >
            Next
            <ChevronRight size={17} />
          </button>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   LESSON 1
========================================================= */

function Lesson1() {
  const [answer, setAnswer] = useState(null);

  return (
    <>
      <p>
        Nova Mart stores information about every product.
      </p>

      <div className="product-data-card">
        <div className="product-row">
          <span>Product</span>
          <strong>Laptop</strong>
        </div>

        <div className="product-row">
          <span>Price</span>
          <strong>55000</strong>
        </div>

        <div className="product-row">
          <span>Quantity</span>
          <strong>4</strong>
        </div>

        <div className="product-row">
          <span>Available</span>
          <strong>True</strong>
        </div>

        <div className="product-row">
          <span>Category</span>
          <strong>Electronics</strong>
        </div>
      </div>

      <QuestionBox question="Are all these values the same kind of thing?">
        <div className="choice-grid">
          <button
            className={
              answer === "yes" ? "selected" : ""
            }
            onClick={() => setAnswer("yes")}
          >
            Yes
          </button>

          <button
            className={
              answer === "no" ? "selected" : ""
            }
            onClick={() => setAnswer("no")}
          >
            No
          </button>
        </div>

        {answer === "no" && (
          <Feedback>
            Exactly. <strong>55000</strong>,
            <strong>4</strong>, <strong>"Laptop"</strong>,
            and <strong>True</strong> represent different
            kinds of values.
          </Feedback>
        )}
      </QuestionBox>

      <p>
        Python needs to know what kind of value it is working
        with.
      </p>

      <CodeEditor
        initialCode={`price = 55000
quantity = 4
product = "Laptop"
available = True

print(type(price))
print(type(product))
print(type(available))`}
        expectedOutput={`<class 'int'>
<class 'str'>
<class 'bool'>`}
      />

      <Feedback>
        Python gives different values different
        <strong> types</strong>.
      </Feedback>
    </>
  );
}

/* =========================================================
   LESSON 2
========================================================= */

function Lesson2() {
  const [answer, setAnswer] = useState(null);

  return (
    <>
      <p>
        A shop needs to count things.
      </p>

      <div className="number-display">
        <span>Products in stock</span>
        <strong>25</strong>
      </div>

      <p>
        There is no decimal part here. It represents a whole
        number.
      </p>

      <CodeEditor
        initialCode={`stock = 25

print(stock)
print(type(stock))`}
        expectedOutput={`25
<class 'int'>`}
      />

      <QuestionBox question="What type does Python give 25?">
        <div className="choice-grid">
          {["str", "float", "int", "bool"].map(
            (item) => (
              <button
                key={item}
                className={
                  answer === item ? "selected" : ""
                }
                onClick={() => setAnswer(item)}
              >
                {item}
              </button>
            )
          )}
        </div>

        {answer === "int" && (
          <Feedback>
            Correct. Whole numbers such as 25, 100 and
            -5 are represented by <strong>int</strong>.
          </Feedback>
        )}

        {answer && answer !== "int" && (
          <Feedback>
            Think about whether 25 contains a decimal
            portion.
          </Feedback>
        )}
      </QuestionBox>

      <div className="type-card">
        <div className="type-name">int</div>

        <div className="type-examples">
          0 &nbsp; 1 &nbsp; 25 &nbsp; 100 &nbsp; -5
        </div>
      </div>
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
        Now look at the price of a product.
      </p>

      <div className="price-display">
        ₹1299.50
      </div>

      <p>
        This value contains a decimal part.
      </p>

      <CodeEditor
        initialCode={`price = 1299.50

print(price)
print(type(price))`}
        expectedOutput={`1299.5
<class 'float'>`}
      />

      <p>
        Python represents decimal numbers using
        <strong> float</strong>.
      </p>

      <div className="type-card">
        <div className="type-name">float</div>

        <div className="type-examples">
          10.5 &nbsp; 99.99 &nbsp; 0.25 &nbsp; -3.5
        </div>
      </div>

      <QuestionBox question="Which one would normally be represented as a float?">
        <div className="choice-grid">
          <button>25</button>
          <button>25.75</button>
          <button>True</button>
          <button>"25.75"</button>
        </div>
      </QuestionBox>

      <Feedback>
        Notice the quotation marks. <code>"25.75"</code> is
        text, not a number.
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
        Nova Mart also stores the name of every product.
      </p>

      <CodeEditor
        initialCode={`product = "Laptop"

print(product)
print(type(product))`}
        expectedOutput={`Laptop
<class 'str'>`}
      />

      <p>
        Python sees <code>"Laptop"</code> as text.
      </p>

      <div className="text-example">
        <div className="text-box">
          "Laptop"
        </div>

        <div className="text-arrow">
          →
        </div>

        <div className="type-box">
          str
        </div>
      </div>

      <QuestionBox question='What happens with "55000"?'>
        <div className="choice-grid">
          <button
            className={
              answer === "number"
                ? "selected"
                : ""
            }
            onClick={() => setAnswer("number")}
          >
            Number
          </button>

          <button
            className={
              answer === "text"
                ? "selected"
                : ""
            }
            onClick={() => setAnswer("text")}
          >
            Text
          </button>
        </div>

        {answer === "text" && (
          <Feedback>
            Correct. Anything inside quotation marks is
            a string value.
          </Feedback>
        )}

        {answer === "number" && (
          <Feedback>
            Look at the quotation marks. They tell Python
            this is text.
          </Feedback>
        )}
      </QuestionBox>

      <CodeEditor
        initialCode={`a = 55000
b = "55000"

print(type(a))
print(type(b))`}
        expectedOutput={`<class 'int'>
<class 'str'>`}
      />

      <Feedback>
        <code>55000</code> and <code>"55000"</code> look
        similar to us, but Python treats them differently.
      </Feedback>
    </>
  );
}

/* =========================================================
   LESSON 5
========================================================= */

function Lesson5() {
  const [answer, setAnswer] = useState(null);

  return (
    <>
      <p>
        A product can either be available or unavailable.
      </p>

      <CodeEditor
        initialCode={`available = True

print(available)
print(type(available))`}
        expectedOutput={`True
<class 'bool'>`}
      />

      <p>
        Python has two Boolean values:
      </p>

      <div className="boolean-grid">
        <div className="boolean-card true">
          <strong>True</strong>
          <span>Yes / enabled / available</span>
        </div>

        <div className="boolean-card false">
          <strong>False</strong>
          <span>No / disabled / unavailable</span>
        </div>
      </div>

      <QuestionBox question="What type is True?">
        <div className="choice-grid">
          {["int", "str", "bool", "float"].map(
            (item) => (
              <button
                key={item}
                className={
                  answer === item
                    ? "selected"
                    : ""
                }
                onClick={() => setAnswer(item)}
              >
                {item}
              </button>
            )
          )}
        </div>

        {answer === "bool" && (
          <Feedback>
            Correct. <strong>bool</strong> represents
            logical values: True and False.
          </Feedback>
        )}
      </QuestionBox>

      <CodeEditor
        initialCode={`is_available = False

print(is_available)`}
        expectedOutput={`False`}
      />
    </>
  );
}

/* =========================================================
   LESSON 6
========================================================= */

function Lesson6() {
  const [answer, setAnswer] = useState(null);

  return (
    <>
      <p>
        Imagine Nova Mart has a field called
        <strong> delivery_date</strong>.
      </p>

      <p>
        A product has not been assigned a delivery date yet.
      </p>

      <CodeEditor
        initialCode={`delivery_date = None

print(delivery_date)
print(type(delivery_date))`}
        expectedOutput={`None
<class 'NoneType'>`}
      />

      <QuestionBox question="Does None mean zero?">
        <div className="choice-grid">
          <button
            className={
              answer === "yes"
                ? "selected"
                : ""
            }
            onClick={() => setAnswer("yes")}
          >
            Yes
          </button>

          <button
            className={
              answer === "no"
                ? "selected"
                : ""
            }
            onClick={() => setAnswer("no")}
          >
            No
          </button>
        </div>

        {answer === "no" && (
          <Feedback>
            Correct. <strong>None</strong> represents the
            absence of a value. It is different from 0,
            False and an empty string.
          </Feedback>
        )}
      </QuestionBox>

      <div className="none-comparison">
        <div>
          <code>0</code>
          <span>A number</span>
        </div>

        <div>
          <code>False</code>
          <span>A Boolean</span>
        </div>

        <div>
          <code>""</code>
          <span>Empty text</span>
        </div>

        <div>
          <code>None</code>
          <span>No value</span>
        </div>
      </div>
    </>
  );
}

/* =========================================================
   LESSON 7
========================================================= */

function Lesson7() {
  return (
    <>
      <p>
        Python can represent more than whole and decimal
        numbers.
      </p>

      <div className="numeric-type-grid">
        <div className="numeric-card">
          <strong>int</strong>
          <code>25</code>
          <span>Whole number</span>
        </div>

        <div className="numeric-card">
          <strong>float</strong>
          <code>25.5</code>
          <span>Decimal number</span>
        </div>

        <div className="numeric-card">
          <strong>complex</strong>
          <code>3 + 4j</code>
          <span>Complex number</span>
        </div>
      </div>

      <p>
        Complex numbers are useful in areas such as
        engineering, physics and signal processing.
      </p>

      <CodeEditor
        initialCode={`signal = 3 + 4j

print(signal)
print(type(signal))`}
        expectedOutput={`(3+4j)
<class 'complex'>`}
      />

      <p>
        Python also has <strong>bytes</strong>, which
        represents sequences of bytes.
      </p>

      <CodeEditor
        initialCode={`data = b"ABC"

print(data)
print(type(data))`}
        expectedOutput={`b'ABC'
<class 'bytes'>`}
      />

      <Feedback>
        These types are less common in beginner programs,
        but you should know they exist.
      </Feedback>
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
        Python can tell us what type a value currently has.
      </p>

      <CodeEditor
        initialCode={`a = 100
b = 25.5
c = "Laptop"
d = True
e = None

print(type(a))
print(type(b))
print(type(c))
print(type(d))
print(type(e))`}
        expectedOutput={`<class 'int'>
<class 'float'>
<class 'str'>
<class 'bool'>
<class 'NoneType'>`}
      />

      <div className="type-table">
        <div className="type-table-row header">
          <span>Value</span>
          <span>Type</span>
        </div>

        <div className="type-table-row">
          <code>100</code>
          <strong>int</strong>
        </div>

        <div className="type-table-row">
          <code>25.5</code>
          <strong>float</strong>
        </div>

        <div className="type-table-row">
          <code>"Laptop"</code>
          <strong>str</strong>
        </div>

        <div className="type-table-row">
          <code>True</code>
          <strong>bool</strong>
        </div>

        <div className="type-table-row">
          <code>None</code>
          <strong>NoneType</strong>
        </div>
      </div>

      <Feedback>
        So far, Python has been working with values already
        written inside our program.
      </Feedback>
    </>
  );
}

/* =========================================================
   LESSON 9
========================================================= */

function Lesson9() {
  const [name, setName] = useState("");

  return (
    <>
      <p>
        Until now, we have written the values ourselves.
      </p>

      <p>
        But a real program needs to collect information from
        the person using it.
      </p>

      <div className="scenario-card">
        <div className="scenario-label">
          NOVA MART
        </div>

        <h3>Customer Checkout</h3>

        <p>
          The cashier needs to enter the customer's name.
        </p>
      </div>

      <CodeEditor
        initialCode={`name = input("Enter customer name: ")

print(name)`}
        expectedOutput={`Enter customer name: Rahul
Rahul`}
        explanation="input() pauses the program and waits for the user to type something."
      />

      <div className="input-flow">
        <div>
          <span>Program</span>
          <strong>input()</strong>
        </div>

        <div className="flow-arrow">
          →
        </div>

        <div>
          <span>User</span>
          <strong>Rahul</strong>
        </div>

        <div className="flow-arrow">
          →
        </div>

        <div>
          <span>Program receives</span>
          <strong>"Rahul"</strong>
        </div>
      </div>

      <div className="live-input-card">
        <label>
          Try entering your name
        </label>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />

        {name && (
          <div className="live-output">
            Hello, {name}
          </div>
        )}
      </div>

      <Feedback>
        <code>input()</code> is used when a program needs
        information from the user.
      </Feedback>
    </>
  );
}

/* =========================================================
   LESSON 10
========================================================= */

function Lesson10() {
  const [answer, setAnswer] = useState(null);

  return (
    <>
      <p>
        Now Nova Mart asks the customer for the quantity.
      </p>

      <CodeEditor
        initialCode={`quantity = input("Enter quantity: ")

print(quantity)
print(type(quantity))`}
        expectedOutput={`Enter quantity: 5
5
<class 'str'>`}
      />

      <QuestionBox question="The user typed 5. Why did Python receive a string?">
        <div className="choice-grid">
          <button
            className={
              answer === "a"
                ? "selected"
                : ""
            }
            onClick={() => setAnswer("a")}
          >
            Because input() collects text
          </button>

          <button
            className={
              answer === "b"
                ? "selected"
                : ""
            }
            onClick={() => setAnswer("b")}
          >
            Because 5 is always text
          </button>

          <button
            className={
              answer === "c"
                ? "selected"
                : ""
            }
            onClick={() => setAnswer("c")}
          >
            Because Python cannot use numbers
          </button>
        </div>

        {answer === "a" && (
          <Feedback>
            Correct. <code>input()</code> returns the user's
            input as a string.
          </Feedback>
        )}
      </QuestionBox>

      <div className="important-box">
        <div className="important-title">
          Remember
        </div>

        <div className="important-flow">
          <div>User types</div>
          <span>→</span>
          <div>input()</div>
          <span>→</span>
          <div>string</div>
        </div>
      </div>

      <p>
        This becomes important when the user enters a number.
      </p>

      <CodeEditor
        initialCode={`quantity = input("Enter quantity: ")

print(quantity + quantity)`}
        expectedOutput={`Enter quantity: 5
55`}
        explanation='Because quantity is text, + joins the two strings instead of performing numeric addition.'
      />

      <Feedback>
        We now have a real reason to convert the value.
      </Feedback>
    </>
  );
}

/* =========================================================
   LESSON 11
========================================================= */

function Lesson11() {
  const [answer, setAnswer] = useState(null);

  return (
    <>
      <p>
        Nova Mart wants to calculate the total price.
      </p>

      <CodeEditor
        initialCode={`price = 1000
quantity = input("Enter quantity: ")

total = price * quantity

print(total)`}
        expectedOutput={`Enter quantity: 5
TypeError: cannot multiply sequence by non-int`}
      />

      <QuestionBox question="What do we need to do with quantity before using it as a number?">
        <div className="choice-grid">
          <button
            className={
              answer === "print"
                ? "selected"
                : ""
            }
            onClick={() => setAnswer("print")}
          >
            print()
          </button>

          <button
            className={
              answer === "int"
                ? "selected"
                : ""
            }
            onClick={() => setAnswer("int")}
          >
            int()
          </button>

          <button
            className={
              answer === "type"
                ? "selected"
                : ""
            }
            onClick={() => setAnswer("type")}
          >
            type()
          </button>
        </div>

        {answer === "int" && (
          <Feedback>
            Correct. The quantity needs to be converted from
            text into an integer.
          </Feedback>
        )}
      </QuestionBox>

      <CodeEditor
        initialCode={`price = 1000
quantity = int(input("Enter quantity: "))

total = price * quantity

print(total)`}
        expectedOutput={`Enter quantity: 5
5000`}
      />

      <p>
        The same idea works with decimal values.
      </p>

      <CodeEditor
        initialCode={`price = float(input("Enter price: "))

print(price)
print(type(price))`}
        expectedOutput={`Enter price: 1299.50
1299.5
<class 'float'>`}
      />

      <div className="conversion-grid">
        <div>
          <code>int()</code>
          <span>Text → whole number</span>
        </div>

        <div>
          <code>float()</code>
          <span>Text → decimal number</span>
        </div>

        <div>
          <code>str()</code>
          <span>Value → text</span>
        </div>

        <div>
          <code>bool()</code>
          <span>Value → Boolean</span>
        </div>
      </div>
    </>
  );
}

/* =========================================================
   LESSON 12
========================================================= */

function Lesson12() {
  const [answer, setAnswer] = useState(null);

  return (
    <>
      <p>
        Conversion works when Python can interpret the original
        value as the requested type.
      </p>

      <CodeEditor
        initialCode={`value = "25"

number = int(value)

print(number)`}
        expectedOutput={`25`}
      />

      <p>
        But consider this:
      </p>

      <CodeEditor
        initialCode={`value = "Laptop"

number = int(value)

print(number)`}
        expectedOutput={`ValueError: invalid literal for int()`}
      />

      <QuestionBox question='Can "Laptop" be directly converted into an integer?'>
        <div className="choice-grid">
          <button
            className={
              answer === "yes"
                ? "selected"
                : ""
            }
            onClick={() => setAnswer("yes")}
          >
            Yes
          </button>

          <button
            className={
              answer === "no"
                ? "selected"
                : ""
            }
            onClick={() => setAnswer("no")}
          >
            No
          </button>
        </div>

        {answer === "no" && (
          <Feedback>
            Correct. <code>"Laptop"</code> does not represent
            an integer, so <code>int()</code> cannot convert it.
          </Feedback>
        )}
      </QuestionBox>

      <div className="conversion-example">
        <div>
          <code>"25"</code>
          <span>✓ Can become int</span>
        </div>

        <div>
          <code>"1299.50"</code>
          <span>✓ Can become float</span>
        </div>

        <div>
          <code>"Laptop"</code>
          <span>✕ Cannot become int</span>
        </div>
      </div>

      <Feedback>
        Conversion is not simply changing the appearance of a
        value. Python must be able to interpret the original
        value.
      </Feedback>
    </>
  );
}

/* =========================================================
   LESSON 13
========================================================= */

function Lesson13() {
  const [answer, setAnswer] = useState(null);

  return (
    <>
      <p>
        Suppose data comes from a user.
      </p>

      <CodeEditor
        initialCode={`value = "500"

print(type(value))`}
        expectedOutput={`<class 'str'>`}
      />

      <p>
        Before using it, we can check what Python actually
        received.
      </p>

      <CodeEditor
        initialCode={`value = 500

if isinstance(value, int):
    print("This is an integer")`}
        expectedOutput={`This is an integer`}
      />

      <QuestionBox question="Which one checks whether value is an integer?">
        <div className="choice-grid vertical">
          <button
            className={
              answer === "a"
                ? "selected"
                : ""
            }
            onClick={() => setAnswer("a")}
          >
            type(value) == int
          </button>

          <button
            className={
              answer === "b"
                ? "selected"
                : ""
            }
            onClick={() => setAnswer("b")}
          >
            isinstance(value, int)
          </button>

          <button
            className={
              answer === "c"
                ? "selected"
                : ""
            }
            onClick={() => setAnswer("c")}
          >
            int(value)
          </button>
        </div>

        {answer === "b" && (
          <Feedback>
            Correct. <code>isinstance()</code> checks whether
            a value belongs to the requested type.
          </Feedback>
        )}
      </QuestionBox>

      <div className="type-check-flow">
        <div>
          <strong>Input</strong>
          <span>"500"</span>
        </div>

        <span>→</span>

        <div>
          <strong>Check</strong>
          <span>type()</span>
        </div>

        <span>→</span>

        <div>
          <strong>Decide</strong>
          <span>Convert?</span>
        </div>
      </div>
    </>
  );
}

/* =========================================================
   LESSON 14
========================================================= */

function Lesson14() {
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

          <h2>Build a Product Checkout</h2>
        </div>
      </div>

      <p>
        Nova Mart wants the program to collect information from
        the customer.
      </p>

      <div className="challenge-data">
        <div>
          <span>Product</span>
          <strong>Laptop</strong>
        </div>

        <div>
          <span>Price</span>
          <strong>54999.50</strong>
        </div>

        <div>
          <span>Quantity</span>
          <strong>2</strong>
        </div>
      </div>

      <p>
        The customer will type the quantity, so remember:
      </p>

      <div className="important-box">
        <div className="important-flow">
          <div>User enters 2</div>
          <span>→</span>
          <div>input()</div>
          <span>→</span>
          <div>"2"</div>
          <span>→</span>
          <div>int()</div>
          <span>→</span>
          <div>2</div>
        </div>
      </div>

      <CodeEditor
        initialCode={`product = "Laptop"
price = 54999.50

quantity = int(input("Enter quantity: "))

total = price * quantity

print("Product:", product)
print("Price:", price)
print("Quantity:", quantity)
print("Total:", total)`}
        expectedOutput={`Enter quantity: 2
Product: Laptop
Price: 54999.5
Quantity: 2
Total: 109999.0`}
      />

      <QuestionBox question="What happened to the user's input?">
        <div className="type-answer-list">
          <div>
            <code>input()</code>
            <span>Collected text</span>
          </div>

          <div>
            <code>int()</code>
            <span>Converted text to integer</span>
          </div>

          <div>
            <code>price * quantity</code>
            <span>Performed numeric calculation</span>
          </div>
        </div>
      </QuestionBox>

      <div className="final-concept">
        <div className="final-concept-title">
          Module 3 Concept Chain
        </div>

        <div className="final-flow">
          <div>Value</div>
          <span>→</span>
          <div>Type</div>
          <span>→</span>
          <div>input()</div>
          <span>→</span>
          <div>Text</div>
          <span>→</span>
          <div>Conversion</div>
        </div>
      </div>

      {!completed ? (
        <button
          className="complete-final-btn"
          onClick={() => setCompleted(true)}
        >
          <Check size={17} />
          Complete Module 3
        </button>
      ) : (
        <div className="module-complete">
          <Check size={19} />
          Module 3 Completed
        </div>
      )}
    </>
  );
}

/* =========================================================
   APP
========================================================= */

export default function App() {
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

      case 14:
        return <Lesson14 />;

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
            <span>Module 3</span>
          </div>
        </div>

        <div className="module-info">
          <div className="module-title">
            Data Types
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
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        </div>

        <div className="lesson-list">
          {lessons.map((lesson) => {
            const completed =
              completedLessons.includes(lesson.id);

            const active =
              currentLesson === lesson.id;

            return (
              <button
                key={lesson.id}
                className={`lesson-item ${
                  active ? "active" : ""
                } ${
                  completed ? "completed" : ""
                }`}
                onClick={() =>
                  setCurrentLesson(lesson.id)
                }
              >
                <div className="lesson-status">
                  {completed ? (
                    <Check size={13} />
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
          <BookOpen size={16} />
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
              Data Types
            </span>
          </div>

          <div className="lesson-counter">
            Lesson {currentLesson} of {lessons.length}
          </div>
        </div>

        <div className="lesson-container">
          <LessonWrapper
            lessonNumber={currentLesson}
            title={
              lessons[currentLesson - 1].title
            }
            completed={isCompleted}
            onComplete={markComplete}
            onPrevious={goPrevious}
            onNext={goNext}
            isFirst={currentLesson === 1}
            isLast={
              currentLesson === lessons.length
            }
          >
            {renderLesson()}
          </LessonWrapper>
        </div>
      </main>
    </div>
  );
}