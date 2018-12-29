import Question from "./question";

export default [
  new Question(
    `Management has requested that the development team have a moderator review their newest module of code. 

Which type of review is being asked for?`,
    ["Walkthrough", "Informal", "Inspection", "End User"],
    2
  ),
  new Question(
    `An informal review of a module of code has been completed. The development team has decided to evaluate the module from an end user perspective. 

Which method should be used to determine if the code meets quality standards?`,
    ["Human", "Black Box", "Inspection", "White Box"],
    1
  ),
  new Question(
    `There is a requirement to verify the usability of a product as it is being delivered to ensure overall design and functionality without regard to the internal functioning of the code. 

Which quality method meets this requirement?`,
    [
      "Code inspection",
      "Black box testing",
      "White box testing",
      "Peer reviews"
    ],
    1
  ),
  new Question(
    `QA proposes a formal group meeting where the programmer narrates, statement by statement, the logic of a program as an error detection technique.

Which quality method meets this proposal?`,
    ["Peer review", "Black box testing", "Code inspection", "Grey box testing"],
    2
  ),
  new Question(
    `A program's state changes from what is expected.

Which practice should be applied to find the location of the defect?`,
    ["Backtracking", "Induction", "Deduction", "Error analysis"],
    0
  ),
  new Question(
    `A web developer or QA tester encounters an error. 

What is the best practice to initiate resolution of this error?`,
    [
      "Brute force debugging",
      "Deduction",
      "Reproducing the error",
      "Induction"
    ],
    2
  ),
  new Question(
    `Which action should a developer take after receiving an email from a QA tester stating that the application under test is not working?`,
    [
      "Start to work on each issue in order to fix the application",
      "Begin a debugging process to isolate each issue",
      "Ask to document each issue with details in a bug report",
      "Pass the mail on to the lead developer to decide what to do."
    ],
    2
  ),
  new Question(
    `Which step should be taken first by a developer about a bug that was identified or reported by the QA team?`,
    [
      "Retest the code to see if the error can be reproduced",
      "Ask the QA team to provide the steps that led to that error",
      "Immediately start modifying the code as the developer knows why the error occurrs",
      "Tell the QA team that the code was tested and that errors do not exist"
    ],
    1
  ),
  new Question(
    `Which action should a developer take after the review of a bug report?`,
    [
      "Rewrite the code to meet project style guide",
      "Investigate to see if the code works as designed",
      "Talk directly with the QA engineer",
      "Rewrite the code to correct the error"
    ],
    2
  ),
  new Question(
    `Which action should the QA team lead make when the developer has failed to provide feedback after the bug report was delivered?`,
    [
      "Ask the developer if the bug report was reviewed",
      "Inform the project manager about the situation and ask for advise on how to proceed",
      "Send an email to the developer's manager describing the situation",
      "Inform the end user that the developer is not cooperating"
    ],
    0
  ),
  new Question(
    `During the implementation phase of a project, the developer realizes the need to change part of the project that has already been written and tested.
    
    Which test type should be performed after these changes are made?`,
    ["Unit", "Integration", "Regression", "Usability"],
    2
  ),
  new Question(
    `Which standards and procedures are used for managing change in an evolving software product?`,
    [
      "Confirmation management",
      "Release management",
      "Configuration management",
      "Compatibility management"
    ],
    2
  ),
  new Question(
    `Which test should be used during the requirements phase?`,
    ["Integration", "Module", "System", "Acceptance"],
    3
  ),
  new Question(
    `Why is black box testing considered a useful test design technique?`,
    [
      "It can help reduce the costs of software development by identifying errors",
      "It can aid in stemming test conditions based on analysis of an internal structure",
      "It can help develop test cases based on analysis of a component of code",
      "It can aid in deriving test data based on analysis of the requirement specifications"
    ],
    0
  ),
  new Question(
    `What is a benefit of the code inspection process?`,
    [
      "It provides feedback on the programming choice of algorithms",
      "It offers potential for developing confidence in the code requirements",
      "It reinforces an individual approach to problem resolution",
      "It promotes the development of a personal coding style"
    ],
    0
  ),
  new Question(
    `What is a value of testing?`,
    [
      "To demonstrate the presence of debugging actions",
      "To increase the probability of uncovered defects",
      "To show that a previously present defect has been removed",
      "To prove that software is defect-free"
    ],
    1
  ),
  new Question(
    `What is a design testing technique?`,
    [
      "A process for selecting test cases",
      "A process for determining expected outputs",
      "A way to measure the quality of software",
      "A way to measure in a test plan what has to be done."
    ],
    3
  ),
  new Question(
    `What criterion should be used to decide which testing technique to use?`,
    [
      "How well you know a particular technique",
      "The objective of the test",
      "How appropriate the technique is for testing the application",
      "Whether there is a tool to support the technique"
    ],
    2
  ),
  new Question(
    `What is the purpose of a test completion criterion?`,
    [
      "To know when a specific test has finished its execution",
      "To ensure that the test case specification is complete",
      "To set the criteria used in generating test inputs",
      "To determine when to stop testing"
    ],
    3
  ),
  new Question(
    `Which kind of plan should be in place to proactively face and resolve the risks of the development process?`,
    ["Migration", "Master", "Maintenance", "Mitigation"],
    3
  ),
  new Question(
    `What are the necessary parts of a test case, according to the software testing principles?`,
    [
      "A description of the correct output of the program for a set of input data",
      "A description of the data processing into information",
      "A description of the type of testing technique used",
      "A description of the input data into the program"
    ],
    0
  ),
  new Question(
    `How does a test verify that a program meets requirements?`,
    [
      "It validates conditions that guarantee the absence of all errors",
      "It validates input conditions that produce defined requirements",
      "It validates that the componetns of the system function together",
      "It validates a subset of the programs test case against the requirements"
    ],
    1
  ),
  new Question(
    `What is the definition of functional system testing?`,
    [
      "Testing that the system functions with other systems",
      "Testing that the components that comprise the system function together",
      "Testing the end-to-end functionality of the system as a whole",
      "Testing the system performs functions within the specified response times."
    ],
    2
  ),
  new Question(
    `Which statement describes part of a formal coding review process?`,
    [
      "The programmer narrates, statement by statement the logic of the program",
      "When an error is found, the review team attempts to resolve the error during the process.",
      "Historically common errors are not considered in the review process",
      "The moderator does not need to be a competent programmer"
    ],
    0
  ),
  new Question(
    `Which action describes a realistic verification step?`,
    [
      "Compare the output of the system design with the output of the requirements phase",
      "Compare the input to the system design phase of its input to the program design phase",
      "Compare the results of the successive verification steps",
      "Compare system designs to determine the extent to which they fail"
    ],
    1
  ),
  new Question(
    `Which type of review is used to identify discrepancies from specifications or standards?`,
    ["Technical", "Circulation", "Walkthrough", "Peer"],
    0
  ),
  new Question(
    `Which type of review is recommended when reviewers are geographically separated and teleconferencing is impossible?`,
    ["Buddy", "Circulation", "Walkthrough", "Inspection"],
    1
  ),
  new Question(
    `Which testing approach should increase software quality?`,
    [
      "Reducing test time",
      "Keeping the same test time for all testing phases",
      "Increasing test time",
      "Following well-established procedures and approprate testing tools"
    ],
    3
  ),
  new Question(
    `Which test type validates an expected result from an application?`,
    ["Acceptance", "Performance", "Unit", "System"],
    0
  ),
  new Question(
    `Which test type should be used before releasing the application for commercial use?`,
    ["Alpha", "Beta", "Regression", "Comparison"],
    1
  ),
  new Question(
    `Which test should be used to ensure a module of code meets quality standards?`,
    ["Unit", "Integration", "Regression", "Usability"],
    0
  ),
  new Question(
    `A developer creates a test in which much of the code will be executed.
    
    Which test type does this describe?`,
    ["Black box", "White box", "Unit", "Regression"],
    1
  ),
  new Question(
    `A developer updates some existing software.
    
Which type of test should the developer run to ensure the core functionality of the software still works as expected?`,
    ["Unit", "System", "Regression", "User Acceptance"],
    2
  ),
  new Question(
    `A new application needs to be developed which will use existing databases, application program interfaces (API's), and server infrastructure. The new application will create a new user interface based on the product owners' graphical user interface (GUI) requirements.

Which test method will verify the functionality of the GUI without verifying the underlying code?`,
    ["Black box", "White box", "Usability", "Regression"],
    0
  ),
  new Question(
    `A development team is working on a small project and has decided that they would like to employ an additional test level that could be introduced into a standard V-model after system testing.
    
Which additional testing level should be introduced?`,
    ["Component integration", "Acceptance", "Regression", "System integration"],
    2
  ),
  new Question(
    `The development team is questioned by its end users concerning the benefit of designing tests in the software development process.
    
What is a key benefit of developing tests early in the process?`,
    [
      "It is cheaper than designing tests during the test phases.",
      "It helps prevent defects from being introduced into the code.",
      "Tests designed early are more effective than tests designed later.",
      "It saves time during the testing phase when testers are busy."
    ],
    1
  ),
  new Question(
    `Which testing method should be used to compare a developer's program to the program's initial requirements?`,
    ["System", "Acceptance", "Function", "Module"],
    0
  ),
  new Question(
    `An end user will perform an acceptance test against an application as a final verification.
    
Which development process step is being verified?`,
    ["Objectives", "System design", "Program structure design", "Requirements"],
    3
  ),
  new Question(
    `What is the purpose of a usability test?`,
    [
      "To evaluate a product by testing it with representative users",
      "To evaluate a product using automation test tools",
      "To evaluate a product by trying to find as many issues as possible",
      "To evaluate a product by comparing the functional specs to the functional performance"
    ],
    0
  ),
  new Question(
    `What describes decision/condition coverage testing?`,
    [
      "Exercise the true and false outcomes of each decision at least once",
      "Exercise all decision outcomes only once",
      "Exercise the true and false outcomes of each condition at least once",
      "Exercise all decision outcomes and each condition at least once"
    ],
    3
  ),
  new Question(
    `Which level of coding knowledge is needed to perform black box testing?`,
    ["Extensive", "Very extensive", "Limited", "Very limited"],
    1
  )
];
