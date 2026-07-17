// Helper function to shuffle array
export const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Helper function to get 50 questions
export const getQuestionSet = (allQuestions, attemptNumber = 0) => {
  const questionsPerExam = 50;
  const windowStart = attemptNumber * 10;
  const windowEnd = Math.min(windowStart + questionsPerExam, allQuestions.length);
  
  let selectedQuestions = allQuestions.slice(windowStart, windowEnd);
  
  if (selectedQuestions.length < questionsPerExam) {
    const remaining = questionsPerExam - selectedQuestions.length;
    selectedQuestions = selectedQuestions.concat(allQuestions.slice(0, remaining));
  }
  
  return shuffleArray(selectedQuestions);
};

// Generate 100 questions for a course
const generateCourseQuestions = (courseName) => {
  const questions = [];
  const baseQuestions = [
    { q: `What is the fundamental concept of ${courseName}?`, opts: ['Option A', 'Option B', 'Option C', 'Option D'], correct: 1 },
    { q: `Which principle applies to ${courseName}?`, opts: ['Principle 1', 'Principle 2', 'Principle 3', 'Principle 4'], correct: 2 },
    { q: `Define the key term in ${courseName}:`, opts: ['Definition A', 'Definition B', 'Definition C', 'Definition D'], correct: 1 },
    { q: `How is ${courseName} applied in practice?`, opts: ['Method A', 'Method B', 'Method C', 'Method D'], correct: 2 },
    { q: `What is important in ${courseName}?`, opts: ['Aspect 1', 'Aspect 2', 'Aspect 3', 'Aspect 4'], correct: 0 },
  ];

  for (let i = 0; i < 100; i++) {
    const base = baseQuestions[i % baseQuestions.length];
    questions.push({
      question: `${base.q} (Q${i + 1})`,
      options: base.opts,
      correct: base.correct,
    });
  }
  return questions;
};

export const examPracticeData = [
  // ACC - Accounting
  { id: 1, code: 'ACC311', title: 'Fundamentals of Auditing', category: 'acc', image: '📊', questions: generateCourseQuestions('Auditing'), totalQuestions: 50 },
  { id: 2, code: 'ACC501', title: 'Business Finance', category: 'acc', image: '📊', questions: generateCourseQuestions('Business Finance'), totalQuestions: 50 },
  
  // BIO - Biology
  { id: 10, code: 'BIO101', title: 'Basic Biology I', category: 'bio', image: '🧬', questions: generateCourseQuestions('Basic Biology I'), totalQuestions: 50 },
  { id: 11, code: 'BIO102', title: 'Basic Biology II', category: 'bio', image: '🧬', questions: generateCourseQuestions('Basic Biology II'), totalQuestions: 50 },
  { id: 12, code: 'BIO201', title: 'Cell Biology', category: 'bio', image: '🧬', questions: generateCourseQuestions('Cell Biology'), totalQuestions: 50 },
  { id: 13, code: 'BIO202', title: 'Biochemistry I', category: 'bio', image: '🧬', questions: generateCourseQuestions('Biochemistry I'), totalQuestions: 50 },
  { id: 14, code: 'BIO203', title: 'Methods in Molecular Biology', category: 'bio', image: '🧬', questions: generateCourseQuestions('Molecular Biology'), totalQuestions: 50 },
  { id: 15, code: 'BIO204', title: 'Principles of Biochemical Engineering', category: 'bio', image: '🧬', questions: generateCourseQuestions('Biochemical Engineering'), totalQuestions: 50 },
  { id: 16, code: 'BIO301', title: 'Essentials of Genetics', category: 'bio', image: '🧬', questions: generateCourseQuestions('Genetics'), totalQuestions: 50 },
  { id: 17, code: 'BIO302', title: 'Molecular Biology', category: 'bio', image: '🧬', questions: generateCourseQuestions('Molecular Biology'), totalQuestions: 50 },
  { id: 18, code: 'BIO303', title: 'Biochemistry II', category: 'bio', image: '🧬', questions: generateCourseQuestions('Biochemistry II'), totalQuestions: 50 },
  { id: 19, code: 'BIO401', title: 'Biostatistics', category: 'bio', image: '🧬', questions: generateCourseQuestions('Biostatistics'), totalQuestions: 50 },
  { id: 20, code: 'BIO502', title: 'Genomics', category: 'bio', image: '🧬', questions: generateCourseQuestions('Genomics'), totalQuestions: 50 },
  { id: 21, code: 'BIO503', title: 'Biological Physics', category: 'bio', image: '🧬', questions: generateCourseQuestions('Biological Physics'), totalQuestions: 50 },
  { id: 22, code: 'BIO504', title: 'Biochemistry I (Theory)', category: 'bio', image: '🧬', questions: generateCourseQuestions('Biochemistry'), totalQuestions: 50 },
  { id: 23, code: 'BIO505', title: 'Essentials of Genetics (Theory)', category: 'bio', image: '🧬', questions: generateCourseQuestions('Genetics'), totalQuestions: 50 },
  { id: 24, code: 'BIO506', title: 'Biochemistry II (Theory)', category: 'bio', image: '🧬', questions: generateCourseQuestions('Biochemistry'), totalQuestions: 50 },
  { id: 25, code: 'BIO732', title: 'Gene Manipulation & Genetic Engineering', category: 'bio', image: '🧬', questions: generateCourseQuestions('Genetic Engineering'), totalQuestions: 50 },
  { id: 26, code: 'BIO734', title: 'Advance Cell Biology', category: 'bio', image: '🧬', questions: generateCourseQuestions('Cell Biology'), totalQuestions: 50 },
  
  // CS - Computer Science
  { id: 50, code: 'CS001', title: 'Computer Proficiency License', category: 'cs', image: '💻', questions: generateCourseQuestions('Computer Proficiency'), totalQuestions: 50 },
  { id: 51, code: 'CS101', title: 'Introduction to Computing', category: 'cs', image: '💻', questions: generateCourseQuestions('Computing'), totalQuestions: 50 },
  { id: 52, code: 'CS201', title: 'Introduction to Programming', category: 'cs', image: '💻', questions: generateCourseQuestions('Programming'), totalQuestions: 50 },
  { id: 53, code: 'CS202', title: 'Fundamentals of Front End Development', category: 'cs', image: '💻', questions: generateCourseQuestions('Front End'), totalQuestions: 50 },
  { id: 54, code: 'CS204', title: 'Cyber Law', category: 'cs', image: '💻', questions: generateCourseQuestions('Cyber Law'), totalQuestions: 50 },
  { id: 55, code: 'CS205', title: 'Information Security', category: 'cs', image: '💻', questions: generateCourseQuestions('Security'), totalQuestions: 50 },
  { id: 56, code: 'CS206', title: 'Introduction to Network Design & Analysis', category: 'cs', image: '💻', questions: generateCourseQuestions('Network Design'), totalQuestions: 50 },
  { id: 57, code: 'CS301', title: 'Data Structures', category: 'cs', image: '💻', questions: generateCourseQuestions('Data Structures'), totalQuestions: 50 },
  { id: 58, code: 'CS302', title: 'Digital Logic and Design', category: 'cs', image: '💻', questions: generateCourseQuestions('Digital Logic'), totalQuestions: 50 },
  { id: 59, code: 'CS304', title: 'Object Oriented Programming', category: 'cs', image: '💻', questions: generateCourseQuestions('OOP'), totalQuestions: 50 },
  { id: 60, code: 'CS310', title: 'Open Source Web Application Development', category: 'cs', image: '💻', questions: generateCourseQuestions('Web Development'), totalQuestions: 50 },
  { id: 61, code: 'CS311', title: 'Introduction to Web Services Development', category: 'cs', image: '💻', questions: generateCourseQuestions('Web Services'), totalQuestions: 50 },
  { id: 62, code: 'CS312', title: 'Database Modeling and Design', category: 'cs', image: '💻', questions: generateCourseQuestions('Database'), totalQuestions: 50 },
  { id: 63, code: 'CS401', title: 'Computer Architecture & Assembly Language', category: 'cs', image: '💻', questions: generateCourseQuestions('Architecture'), totalQuestions: 50 },
  { id: 64, code: 'CS402', title: 'Theory of Automata', category: 'cs', image: '💻', questions: generateCourseQuestions('Automata'), totalQuestions: 50 },
  { id: 65, code: 'CS403', title: 'Database Management System', category: 'cs', image: '💻', questions: generateCourseQuestions('DBMS'), totalQuestions: 50 },
  { id: 66, code: 'CS407', title: 'Routing and Switching', category: 'cs', image: '💻', questions: generateCourseQuestions('Networking'), totalQuestions: 50 },
  { id: 67, code: 'CS408', title: 'Human Computer Interaction', category: 'cs', image: '💻', questions: generateCourseQuestions('HCI'), totalQuestions: 50 },
  { id: 68, code: 'CS411', title: 'Visual Programming', category: 'cs', image: '💻', questions: generateCourseQuestions('Visual Programming'), totalQuestions: 50 },
  { id: 69, code: 'CS432', title: 'Network Modeling and Simulation', category: 'cs', image: '💻', questions: generateCourseQuestions('Network Simulation'), totalQuestions: 50 },
  { id: 70, code: 'CS435', title: 'Cloud Computing', category: 'cs', image: '💻', questions: generateCourseQuestions('Cloud'), totalQuestions: 50 },
  { id: 71, code: 'CS501', title: 'Advanced Computer Architecture', category: 'cs', image: '💻', questions: generateCourseQuestions('Architecture'), totalQuestions: 50 },
  { id: 72, code: 'CS502', title: 'Fundamentals of Algorithms', category: 'cs', image: '💻', questions: generateCourseQuestions('Algorithms'), totalQuestions: 50 },
  { id: 73, code: 'CS504', title: 'Software Engineering I', category: 'cs', image: '💻', questions: generateCourseQuestions('Software Engineering'), totalQuestions: 50 },
  { id: 74, code: 'CS506', title: 'Web Design and Development', category: 'cs', image: '💻', questions: generateCourseQuestions('Web Design'), totalQuestions: 50 },
  { id: 75, code: 'CS507', title: 'Information Systems', category: 'cs', image: '💻', questions: generateCourseQuestions('Information Systems'), totalQuestions: 50 },
  { id: 76, code: 'CS508', title: 'Modern Programming Languages', category: 'cs', image: '💻', questions: generateCourseQuestions('Languages'), totalQuestions: 50 },
  { id: 77, code: 'CS601', title: 'Data Communication', category: 'cs', image: '💻', questions: generateCourseQuestions('Communication'), totalQuestions: 50 },
  { id: 78, code: 'CS602', title: 'Computer Graphics', category: 'cs', image: '💻', questions: generateCourseQuestions('Graphics'), totalQuestions: 50 },
  { id: 79, code: 'CS604', title: 'Operating Systems', category: 'cs', image: '💻', questions: generateCourseQuestions('OS'), totalQuestions: 50 },
  { id: 80, code: 'CS605', title: 'Software Engineering II', category: 'cs', image: '💻', questions: generateCourseQuestions('Software Engineering'), totalQuestions: 50 },
  { id: 81, code: 'CS606', title: 'Compiler Construction', category: 'cs', image: '💻', questions: generateCS606Questions(), totalQuestions: 50 },
  { id: 82, code: 'CS607', title: 'Artificial Intelligence', category: 'cs', image: '💻', questions: generateCourseQuestions('AI'), totalQuestions: 50 },
  { id: 83, code: 'CS609', title: 'System Programming', category: 'cs', image: '💻', questions: generateCourseQuestions('System Programming'), totalQuestions: 50 },
  { id: 84, code: 'CS610', title: 'Computer Networks', category: 'cs', image: '💻', questions: generateCourseQuestions('Networks'), totalQuestions: 50 },
  { id: 85, code: 'CS611', title: 'Software Quality Engineering', category: 'cs', image: '💻', questions: generateCourseQuestions('QA'), totalQuestions: 50 },
  { id: 86, code: 'CS614', title: 'Data Warehousing', category: 'cs', image: '💻', questions: generateCourseQuestions('Data Warehousing'), totalQuestions: 50 },
];


//CS EXAM QUESTIONS SECTION


// CS606 Compiler Construction Questions
const generateCS606Questions = () => {
  return [
    { question: "When encountering an empty cell during LL(1) parsing, it typically indicates a parsing ________.", options: ["Start", "End", "Error", "Dead"], correct: 2 },
    { question: "LR parsing reduces a string to the ______ symbol by inverting productions.", options: ["Start", "First", "Last", "End"], correct: 0 },
    { question: "Which of the following can be an effective way to reduce the LR(1) table size in practice?", options: ["Adding more states to the parsing automaton", "Increasing the number of lookahead symbols", "Refining the grammar rules to eliminate conflicts", "Using a larger data structure for storing the LR(1) table"], correct: 2 },
    { question: "In attribute grammars, an attribute dependency graph is typically represented as a/an:", options: ["Directed cyclic graph", "Directed acyclic graph", "Undirected cyclic graph", "Undirected acyclic graph"], correct: 1 },
    { question: "In the dynamic method of attribute grammar evaluation, when are attributes evaluated or defined?", options: ["After building the parse tree", "Before constructing the dependence graph", "During the topological sort"], correct: 2 },
    { question: "For semantic analysis, why is the ad-hoc methodology preferred over the attribute grammar evaluation?", options: ["It offers greater flexibility and simplicity.", "It guarantees higher parsing accuracy.", "It requires less computational resources.", "It eliminates the need for parsing algorithms"], correct: 0 },
    { question: "What is the purpose of using attributed trees in compiler design?", options: ["To store the source code in a hierarchical structure.", "To generate optimized code.", "To perform type checking and semantic analysis.", "To represent the control flow of a program."], correct: 2 },
    { question: "Smalltalk-80 and Java use byte-codes which are abstract______code.", options: ["Three-address", "Register-transfer", "Stack-machine", "Assembly-language"], correct: 2 },
    { question: "In code, most operations have the form \"x = y op z\".", options: ["One-address", "Two-address", "Three-address", "Four-address"], correct: 2 },
    { question: "How many operands (or sources) are typically involved in a three-address code using quadruples?", options: ["One", "Two", "Three", "Four"], correct: 2 },
    { question: "In the expression \"x = op y\", op is a/an operator.", options: ["Unary", "Binary", "Tertiary", "Quaternary"], correct: 0 },
    { question: "In the expression \"x = p && y\", && is a/an ________ operator.", options: ["Logical", "Relational", "Conditional", "Comparison"], correct: 0 },
    { question: "When does the need for backpatching arise in compiler design?", options: ["When there are unused variables in the code.", "When the code contains a loop without a termination condition.", "When references to symbols or labels are encountered before they are defined.", "When the code uses a complex algorithm that requires patching."], correct: 2 },
    { question: "Which type of instructions often require backpatching in assembly language?", options: ["Arithmetic instructions", "Logical instructions", "Conditional jump instructions", "Data movement instructions"], correct: 2 },
    { question: "The syntax-directed translation statements can be conveniently specified in:", options: ["RE", "NFA", "LEX"], correct: 2 },
    { question: "If the condition \"a < b\" is true, what will happen in the code \"if (a < b) goto 106\"?", options: ["The program will exit.", "The control will transfer to label 106.", "The code block inside the \"if\" statement will be skipped.", "The value of 'a' will be set to the value of 'b'."], correct: 1 },
    { question: "The code generated by a compiler should be efficient both in terms of memory space and ________ time.", options: ["Debug", "Loading", "Compile", "Execution"], correct: 3 },
    { question: "In code generation, how is the cost of instructions commonly measured?", options: ["Memory size in bytes.", "Clock cycles or execution time on the target hardware.", "The number of registers used by each instruction.", "The number of bits in each instruction."], correct: 1 },
    { question: "The entry node in a CFG (i.e., Control Flow Graph) represents:", options: ["The starting point of the program or a specific section of code.", "A conditional statement in the program.", "The exit point of the program.", "A node with multiple outgoing edges."], correct: 0 },
    { question: "Which component of the CFG (i.e., Control Flow Graph) represents the starting point of the program's execution?", options: ["Vertex", "Edge", "Entry", "Node"], correct: 2 },
    { question: "In the context of a register descriptor, what does \"register spilling\" mean?", options: ["Emptying all registers to free up space for new variables.", "Allocating more registers than required to optimize performance.", "Transferring variables from registers to memory due to insufficient register availability.", "Creating a new register descriptor when a program is modified."], correct: 2 },
    { question: "When a variable is not present in a register, where might it be stored based on the register descriptor information?", options: ["It is stored in the instruction cache.", "It is stored in the register file.", "It is spilled to memory.", "It is stored in the stack."], correct: 2 },
    { question: "The key property of a DAG (i.e., Directed Acyclic Graph) is that it contains ________ cycle/s.", options: ["Zero", "One", "Two", "Three"], correct: 0 },
    { question: "What does a common subexpression mean in the context of a DAG (i.e., Directed Acyclic Graph)?", options: ["It refers to a subexpression that appears only once in the DAG.", "It represents a variable that is shared among multiple functions.", "It is a part of the expression that appears multiple times in the DAG.", "It is a subexpression that contains only constants and no variables."], correct: 2 },
    { question: "The LR(1) parsing algorithm uses handle-recognizing _________ to recognize handles and potential handles on the parse stack.", options: ["RE", "NFA", "DFA", "CFG"], correct: 2 },
    { question: "What is the purpose of the augmented grammar in parsing?", options: ["To introduce new terminal symbols into the grammar.", "To remove left-recursion from the grammar.", "To define a unique starting point for parsing.", "To handle conflicts in the parsing process."], correct: 2 },
    { question: "In the Closure procedure, if the symbol immediately to the right of the dot is a non terminal, what rule is applied?", options: ["Shift rule", "Reduce rule", "Closure rule", "Goto rule"], correct: 2 },
    { question: "_________ is used to translate flow-of-control statements in one pass.", options: ["First-Patching", "Back-Patching", "Next-Patching", "Last-Patching"], correct: 1 },
    { question: "The expression \"a = b + c\" is an example of _________ code.", options: ["One-address", "Two-address", "Three-address", "Four-address"], correct: 2 },
    { question: "In the context of three-address code representation, each quadruple has _________ fields.", options: ["Two", "Three", "Four", "Five"], correct: 2 },
    { question: "In a Shift-Reduce parser, handles are identified by comparing the symbols on the stack with the _________ of each production rule.", options: ["Top-hand side", "Left-hand side", "Right-hand side", "Bottom-hand side"], correct: 2 },
    { question: "In a Shift-Reduce parser, the _________ action pops zero or more symbols from the stack and pushes a non-terminal on the stack.", options: ["Goto", "Shift", "Reduce", "Continue"], correct: 2 },
    { question: "What is an intermediate representation (IR) in a compiler?", options: ["It is the final machine code generated by the compiler.", "It is the source code written in a high-level programming language.", "It is an internal form or data structure representing the code being compiled.", "It is a programming language used exclusively by compilers."], correct: 2 },
    { question: "In semantic analysis, why is the ad-hoc methodology preferred over the attribute grammar evaluation?", options: ["It offers greater flexibility and simplicity.", "It guarantees higher parsing accuracy.", "It requires less computational resources.", "It eliminates the need for parsing algorithms."], correct: 0 },
    { question: "Why do compilers use multiple intermediate representations (IRs) during the compilation process?", options: ["To confuse reverse engineers trying to analyze the compiled code.", "To make the compilation process faster by distributing tasks across multiple representations.", "To capture different aspects of the code's structure and semantics at different stages.", "To avoid using an IR altogether and work directly with the source code."], correct: 2 },
    { question: "What is syntax-directed translation?", options: ["The process of converting source code into machine code.", "The process of associating semantic actions with grammar rules.", "The process of generating abstract syntax trees.", "The process of optimizing code during compilation."], correct: 1 },
    { question: "What does the yyparse() function do in a YACC specification file?", options: ["Execute the parsing process", "Print the recognized grammar rules", "Invoke the lexer", "Declare the start symbol"], correct: 0 },
    { question: "Attributes whose values are defined in terms of a node's own attributes, node's siblings and node's parent are called __________ attributes.", options: ["Local", "Inherited", "Synthesized", "Synchronous"], correct: 1 },
    { question: "What is backpatching in computer programming and compiler design?", options: ["A technique to handle backward references in code generation.", "A method to resolve forward references during the later stages of compilation.", "A way to optimize code by patching backward loops.", "A process of updating the compiler's version for better performance."], correct: 1 },
    { question: "If the condition \"a < b\" is true, what will happen in the code \"if (a < b) goto 106\"?", options: ["The program will exit.", "The control will transfer to label 106.", "The code block inside the \"if\" statement will be skipped.", "The value of 'a' will be set to the value of 'b'."], correct: 1 },
    { question: "In the context of backpatching, what is a forward reference?", options: ["A reference to a symbol or label that is defined before its use.", "A reference to a symbol or label that is defined after its use.", "A reference to an external library function.", "A reference to a system call."], correct: 1 },
    { question: "The expression \"a && b\" will evaluate to true only if:", options: ["Both a and b are true", "Both a and b are false", "A is true and b is false", "A is false and b is true"], correct: 0 },
    { question: "What does a common subexpression mean in the context of a DAG (i.e., Directed Acyclic Graph)?", options: ["It refers to a subexpression that appears only once in the DAG.", "It represents a variable that is shared among multiple functions.", "It is a part of the expression that appears multiple times in the DAG.", "It is a subexpression that contains only constants and no variables."], correct: 2 },
    { question: "In compiler construction, why is graph coloring applied to the intermediate representation?", options: ["To detect and remove dead code.", "To determine the control flow of the program.", "To optimize the order of nested loops.", "To allocate CPU registers efficiently for variables."], correct: 3 },
    { question: "In the context of a register descriptor, what does \"register spilling\" mean?", options: ["Emptying all registers to free up space for new variables.", "Allocating more registers than required to optimize performance.", "Transferring variables from registers to memory due to insufficient register availability.", "Creating a new register descriptor when a program is modified."], correct: 2 },
    { question: "The entry node in a CFG (i.e., Control Flow Graph) represents:", options: ["The starting point of the program or a specific section of code.", "A conditional statement in the program.", "The exit point of the program.", "A node with multiple outgoing edges."], correct: 0 },
    { question: "What information does an address descriptor typically contain?", options: ["The variable's initial value.", "The variable's data type (e.g., int, float).", "The memory location or base address of the variable.", "The variable's scope within the program."], correct: 2 },
    { question: "In the context of three-address code, which of the following is an unconditional jump statement?", options: ["L", "goto L", "if x relop y goto L", "if x relop y goto L else M"], correct: 1 },
    { question: "In the expression \"x = op y\", op is a/an ___________ operator.", options: ["Unary", "Binary", "Tertiary", "Quaternary"], correct: 0 },
    { question: "In the Boolean expression \"x = a > b && c == d\", what will be the value of x, if a = 5, b = 7, c = 3, and d = 3?", options: ["True", "False", "5", "7"], correct: 1 },
    { question: "LR parsing ______ a string to the start symbol by inverting productions.", options: ["Reduces", "Shifts", "Adds"], correct: 0 },
    { question: "Reduce action ______ zero or more symbols from the stack.", options: ["Pushes", "Pops", "Both push and pops", "None of the given"], correct: 1 },
    { question: "Attributes whose values are defined in terms of a node's own attributes, node's siblings and node's parent are called _______.", options: ["Inherited attributes", "Physical attributes", "Logical attributes", "Un-synthesized attributes"], correct: 0 },
    { question: "Considering the following grammar: S → a | A A → Aa | a This grammar is _______.", options: ["Ambiguous", "Unambiguous", "LS", "Continuous"], correct: 1 },
    { question: "The _______ considered as part of the IR.", options: ["Symbol table", "Grammar table", "Shift table"], correct: 0 },
    { question: "The following two items A → P · Q B → P · Q can co-exist in an _______ item set.", options: ["LR", "LS", "LT", "PR"], correct: 0 },
    { question: "Yacc contains built-in support for handling ambiguous grammars resulting in shift reduce conflicts. By default these conflicts are solved by performing the _______.", options: ["Shift action", "Reduce action", "Shift and reduce actions", "De-allocation of memory"], correct: 0 },
    { question: "Linear IRs resemble pseudo-code for some _______.", options: ["Automated machine", "Mechanical machines", "Token machines", "Abstract machine"], correct: 3 },
    { question: "Considering the following grammar S → A B A → s | aA B → s | bB FIRST(S) contains _______ elements.", options: ["3", "4", "5", "6"], correct: 2 },
    { question: "A parser with _______ valid items cannot have a shift-reduce conflict.", options: ["No", "One", "Two", "Many"], correct: 1 },
    { question: "In the graph coloring algorithm, if we cannot find a node with fewer than K neighbors, we choose a node to _______ to memory.", options: ["Spill", "Push", "Pop", "Delete"], correct: 0 },
    { question: "Syntax Directed Translation (SDT) is a _______ grammar.", options: ["Context free", "Regular", "Context sensitive", "Unrestricted"], correct: 0 },
    { question: "The parser session ends when the _______ state is reached.", options: ["Start", "Intermediate", "Final", "Accepting"], correct: 3 },
    { question: "An LL(1) parser can handle _______ grammars.", options: ["Unambiguous", "Ambiguous", "Factored", "Left-recursive"], correct: 0 },
    { question: "In standard implementation of tree-structured IR, parent node contains pointers to its _______ nodes.", options: ["Parent", "Sibling", "Children", "Adjacent"], correct: 2 },
    { question: "Type checker checks _______ consistency in program.", options: ["Type", "Format", "Syntax", "Logical"], correct: 0 },
    { question: "Ad-hoc syntax-directed translation standard technique is used to interleave _______ with parsing.", options: ["Execution", "Code generation", "Actions", "Optimization"], correct: 2 },
    { question: "Can a LL(1) parser handle left recursive grammars?", options: ["Yes", "No"], correct: 1 },
    { question: "Synthesized attributes can be evaluated by a _______ traversal of the parse tree.", options: ["Top-down", "Bottom-up", "Left-to-right", "Right-to-left"], correct: 1 },
    { question: "LR(1) parser is _______ powerful than SLR(1) parser.", options: ["More", "Less", "Equally", "None of the given"], correct: 0 },
    { question: "We can get the prefix expression by traversing the syntax tree _______.", options: ["Preorder", "Postorder", "Inorder", "None of the given"], correct: 0 },
    { question: "High-level IRs preserve _______ source program structure.", options: ["High-level", "Low-level", "Intermediate", "Final"], correct: 0 },
    { question: "L in LL(1) stands for _______.", options: ["Left-to-right scanning", "Leftmost derivation", "Right-to-left scanning", "Rightmost derivation"], correct: 0 },
    { question: "Bottom-up parsers use _______ derivation.", options: ["Leftmost", "Rightmost", "Middlemost", "Both leftmost and rightmost"], correct: 1 },
    { question: "There are _______ types of conflicts in LR parsing.", options: ["One", "Two", "Three", "Four"], correct: 1 },
    { question: "Back-end part of the compiler includes _______.", options: ["Instruction selection", "Lexical analysis", "Syntax analysis", "Semantic analysis"], correct: 0 },
    { question: "Grammar is used to pass information to the parser _______.", options: ["Implicitly", "Explicitly", "Directly", "Indirectly"], correct: 0 },
    { question: "There are _______ categories of Intermediate Representations.", options: ["One", "Two", "Three", "Four"], correct: 1 },
    { question: "The output of syntax analysis is _______.", options: ["Token stream", "Parse tree", "Source code", "Machine code"], correct: 1 },
    { question: "The problem of Left-factoring can be resolved by _______ the grammar.", options: ["Factoring", "Rewriting", "Restructuring", "None of the given"], correct: 1 },
    { question: "An ambiguous grammar can never be _______.", options: ["LL(1)", "LR(1)", "LALR(1)", "Context-Free"], correct: 0 },
    { question: "LALR(1) parser stands for _______ look-ahead LR parser.", options: ["Look-ahead", "Logical-ahead", "Linear-ahead", "Local-ahead"], correct: 3 },
    { question: "In bottom-up parsing, 'handle' is found at the _______ of the stack.", options: ["Top", "Bottom", "Middle", "None of the given"], correct: 0 },
    { question: "LR(1) parser stands for Left-to-right scanning, _______ derivation with 1 look-ahead symbol.", options: ["Leftmost", "Rightmost", "Mixed", "Top-down"], correct: 1 },
    { question: "LR(0) items are used to construct _______ parsing tables.", options: ["LR(1)", "SLR(1)", "LALR(1)", "LL(1)"], correct: 1 },
    { question: "The scanning process is called _______ analysis.", options: ["Lexical", "Syntax", "Semantic", "Parsing"], correct: 0 },
    { question: "An standard intermediate representation should be _______ of source language.", options: ["Dependent", "Independent", "Variant", "Reliable"], correct: 1 },
    { question: "The syntax analyzer passes tokens and _______ to the next phases.", options: ["Attributes", "Grammar", "Characters", "Lexemes"], correct: 0 },
    { question: "Left-recursion can be eliminated by _______ the grammar.", options: ["Factoring", "Rewriting", "Analyzing", "Compiling"], correct: 1 },
  ];
};

//cs001
const generateCS001Questions = () => {
  return [
    {question:"cs for ___________ .",options:['chemistry practical','computer science','construction payroll','common plate'], correct:1}
  ];};




export const quizCategories = [
  { id: 'all', name: 'All Courses' },
  { id: 'acc', name: 'ACC - Accounting' },
  { id: 'bio', name: 'BIO - Biology' },
  { id: 'cs', name: 'CS - Computer Science' },
];
