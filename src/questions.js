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
    3
  ),
  new Question(
    `True of False: Bugs that are found and fixed early in the process will cost more to fix when compared to finding them later and fixing all the bugs at once.`,
    ["True", "False"],
    1
  ),
  new Question(
    `When is the appropriate time to include the people responsible for quality in the development lifecycle?`,
    [
      "When formal testing begins",
      "When requirements are formulated",
      "As early as possible in the cycle",
      "When coding begins"
    ],
    2
  ),
  new Question(
    `What key best practice brings the development process together in order to meet the deliverable deadline?`,
    [
      "Racing ahead with your eyes focused on the finish line",
      "Having clearly defined goals for every milestone",
      "Making hard decisions regarding the direction of development",
      "Not wasting time on trivial items that have no impact"
    ],
    1
  ),
  new Question(
    `True or False: Process improvement helps software development build and retain product and service quality.`,
    ["True", "False"],
    0
  ),
  new Question(
    `What can be achieved with a process improvement initiative based on the CMMI?`,
    [
      "An approach to monitoring employees",
      "A measureable business result",
      "A sense of when a project is done",
      "A way to evaluate customers"
    ],
    1
  ),
  new Question(
    `True or False: Studies have shown that defects found and fixed in the requirements phase carry the highest cost`,
    ["True", "False"],
    1
  ),
  new Question(
    `Which type of review is considered a walkthrough?`,
    ["Management review", "Peer review", "Progress review", "Milestone review"],
    1
  ),
  new Question(
    `Which of the following is a key principle of testing?`,
    [
      "Testing does not need to be planned",
      "Complete testing is not possible",
      "Testing requires dependence on developers",
      "Formal exit criteria must be defined."
    ],
    1
  ),
  new Question(
    `True or False: System validation is an end-to-end process that ensures that the completed and integrated system will operate as needed in the environment for which it was intended.`,
    ["True", "False"],
    0
  ),
  new Question(
    `Which test type will satisfy the final validation and verification criteria?`,
    [
      "Systems validation",
      "Acceptance testing",
      "Functional testing",
      "Packaging and delivery"
    ],
    1
  ),
  new Question(
    `What is the benefit of building a discrete list of defects and ranking them in order of importance?`,
    [
      "Helping to define the severity of each issue",
      "Creating an opportunity to examine quality goals and how defects affect the milestone schedule",
      "Giving the team the opportunity to voice their concerns and advocate for their own priorities",
      "Allowing for performance issues to be identified and elevated to the top of the list"
    ],
    2
  ),
  new Question(
    `What is a visual definition of how you will prioritize bugs as they are discovered?`,
    [
      "A list of all bugs",
      "A matrix of impacts versus severity",
      "A matrix of severity versus stakeholder concerns.",
      "A PowerPoint presentation"
    ],
    1
  ),
  new Question(
    `True or False: A bug base is a system for keeping track of every bug logged in a database system.`,
    ["True", "False"],
    0
  ),
  new Question(
    `What is the best way to document and keep track of test cases?`,
    [
      "A detailed spreadsheet",
      "A test case management system.",
      "A set of detailed text files.",
      "A bug tracking system."
    ],
    1
  ),
  new Question(
    `True or False: A bug model is based on historical data and planned activities and predicts how many bugs will be found during the project`,
    ["True", "False"],
    1
  ),
  new Question(
    `Which element of a bug record will provide the programmer with a visual representation of the problem?`,
    [
      "The steps to recreate the problem",
      "A screenshot",
      "A description of expected versus actual results",
      "A brief and accurate description"
    ],
    1
  ),
  new Question(
    `How is a solid IT-QA relationship fundamental to business success?`,
    [
      "It finds and fixes bugs before systems are delivered.",
      "It will help deliver compliant business-enabling systems",
      "It provides a usability perspective for the business to understand",
      "It can lower cost by fixing issues early in the process."
    ],
    1
  ),
  new Question(
    `When is a good time to start automation testing?`,
    [
      "When you begin coding, so that the automation tests can be done ahead of time",
      "When the scheduled milestone for automation testing is reached.",
      "When you are confident that you do not want anything to change in the code",
      "At the end of the project, right before the user starts acceptance testing."
    ],
    2
  ),
  new Question(
    "What is the intent of test automation?",
    [
      "To find as many defects as possible",
      "To optimize your process and make testing more efficient.",
      "To test as many pieces of functionality as possible",
      "To automatically record issues to be fixed."
    ],
    1
  ),
  new Question(
    "True or False: The goal of automation is to completely eliminate the need for a human to participate in the testing process.",
    ["True", "False"],
    1
  ),
  new Question(
    "Who should create automated unit tests?",
    [
      "White-box tester",
      "Program developer",
      "QA Engineer",
      "Automation tester"
    ],
    1
  ),
  new Question(
    "True or False: When the testing is focused on how the application behaves at code level, a white-box tester shuld create the tests.",
    ["True", "False"],
    0
  ),
  new Question(
    "What can a developer employ to identify and resolve code quality issues?",
    [
      "Peer reviews",
      "Code-level tests",
      "Unit testing",
      "Bug tracking systems"
    ],
    1
  ),
  new Question(
    "True or False: Testing is the process of executing a program with the intent of finding errors.",
    ["True", "False"],
    0
  ),
  new Question(
    "What makes a test run successful?",
    [
      "A test that did not find any errors",
      "A test that discovers a new error",
      "A test that causes the program to produce the correct result.",
      "A test that demonstrates all functionality of the program."
    ],
    1
  ),
  new Question(
    `What does it mean to raise the reliability of a program?`,
    [
      "To demonstrate that errors are not present.",
      "To find and remove errors.",
      "To show that a program performs its intended functions",
      "To establish confidence that a program does what it is supposed to do."
    ],
    1
  ),
  new Question(
    "What must a black-box tester focus on?",
    [
      "What a program is supposed to do and who it is for.",
      "Expected outputs of the program, but not every input.",
      "How each individual piece of the application works.",
      "Knowledge at the source code level."
    ],
    0
  ),
  new Question(
    "In addition to finding errors, what else would a black-box tester look for when testing a program?",
    [
      "Infrastructure issues.",
      "Data issues.",
      "Usability issues.",
      "Stability issues."
    ],
    2
  ),
  new Question(
    "True or False: In white-box testing, the tester is not concerned about the internal behaviour and structure of a program.",
    ["True", "False"],
    1
  ),
  new Question(
    "Which type of tester focuses exclusively on validating the interactions and behaviors that result in functionality?",
    [
      "White-box tester",
      "Black-box tester",
      "Usability tester",
      "Gray-box tester"
    ],
    0
  ),
  new Question(
    "True or False: Test cases must be written for input conditions that are invalid and unexpected, as well as for those that are valid and expected.",
    ["True", "False"],
    0
  ),
  new Question(
    "Which software testing principle states that a programmer may subconsciously avoid finding errors for fear of retribution from peers, a supervisor, a client, or the owner of the program or system being developed?",
    [
      "A programmer should avoid attempting to test his or her own program.",
      "A programming organization should not test its own programs.",
      "Any testing process should include a thorough inspection of the results of each test.",
      "Do not plan a testing effort under the tacit assumption that no errors will be found."
    ],
    0
  ),
  new Question(
    "True or False: Software development is the process of moving from the conceptual to the concrete",
    ["True", "False"],
    0
  ),
  new Question(
    "Which step in the software development process translates requirements into specific objectives?",
    ["External specification", "Requirements", "Objectives", "System design"],
    2
  ),
  new Question(
    "Which step in the software development process defines the exact represenation of the program to users?",
    [
      "Requirements",
      "External specifications",
      "Program structure design",
      "System design"
    ],
    1
  ),
  new Question(
    "True or False: Requirements translate the program user's needs and specify why the program is needed.",
    ["True", "False"],
    0
  ),
  new Question(
    "Which test will show that a program does not match its external specifications?",
    ["Module test", "Function test", "System test", "Acceptance test"],
    1
  ),
  new Question(
    "Which type of test would reveal that the program as a whole either meets or doesn't meet its objectives?",
    ["Function test", "System test", "Acceptance test", "Integration test"],
    1
  ),
  new Question(
    "True or False: A system test should be performed by the programmer and the organization responsible for developing the program.",
    ["True", "False"],
    1
  ),
  new Question(
    "What type of test compares the program to its initial requirements and the current needs of its end users?",
    ["Function test", "Unit test", "Acceptance test", "Regression test"],
    2
  ),
  new Question(
    "Which test requires the organization that produced the program to create the test cases?",
    ["Function test", "System test", "Integration test", "Installation test"],
    3
  ),
  new Question(
    "What is the key to successful higher-order testing?",
    [
      "Appropriate system testing",
      "Function testing that uncovers errors",
      "Acceptance testing",
      "Consistent and well-planned testing"
    ],
    3
  ),
  new Question(
    "True or False: Debugging by brute force is both efficient and successful.",
    ["True", "False"],
    1
  ),
  new Question(
    "Which of the following is a brute-force debugging technique?",
    [
      "Studying error symptoms",
      "Dumping memory locations",
      "Process of elimination",
      "Backtracking"
    ],
    1
  ),
  new Question(
    "Which debugging method moves from the particulars of a situation to the larger picture?",
    [
      "Brute-force debugging",
      "Debugging by induction",
      "Debugging by deduction",
      "Error-location principles"
    ],
    1
  ),
  new Question(
    "Which debugging method looks at a reverse execution of the program?",
    [
      "Brute-force debugging",
      "Debugging by testing",
      "Debugging by backtracking",
      "Debugging by deduction"
    ],
    2
  ),
  new Question(
    "True or False: The most effective method of debugging involves a mental process.",
    ["True", "False"],
    0
  ),
  new Question(
    "Which of the following is a debugging principle?",
    [
      "Where there is one bug, there is likely to be another",
      "The likelihood of a fix being correct is 100%",
      "Change the object code, not the source code",
      "Fix the symptom, not the error"
    ],
    0
  )
];
