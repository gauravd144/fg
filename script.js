
const data = {
    "Deep Learning": {
        "Unit 1": [
            {
                "question": "Define deep learning. Explain pros and cons of deep learning.",
                "answer": `Deep learning is a subset of machine learning that utilizes artificial neural networks with multiple layers (hence "deep") to learn and extract patterns from large datasets. These neural networks are composed of interconnected nodes, or neurons, arranged in layers. Each layer processes the data and passes it onto the next layer for further abstraction. Deep learning algorithms iteratively improve their performance by adjusting the weights assigned to connections between neurons, a process known as training, until they can accurately perform tasks like classification, regression, or prediction.Pros of using deep learning:Feature Learning: Deep learning models can automatically learn relevant features from raw data, reducing the need for manual feature engineering, which can be time-consuming and prone to human biases.Highly Accurate: Deep learning algorithms have demonstrated state-of-the-art performance in various tasks such as image recognition, speech recognition, natural language processing, and more.Scalability: Deep learning models can scale with increasing amounts of data and computational resources. More data often leads to better performance, given sufficient computational power for training.Versatility: Deep learning models can be adapted to various types of data and tasks, making them versatile across different domains and applications.Continual Improvement: With ongoing research and development, deep learning techniques continue to advance, leading to improvements in model accuracy and efficiency.Cons of using deep learning:Data Dependency: Deep learning models require large amounts of labeled data for training, and their performance heavily depends on the quality and quantity of the data. Obtaining and labeling large datasets can be expensive and time-consuming.Computational Resources: Training deep learning models often demands significant computational resources, including high-performance GPUs or even specialized hardware like TPUs. This can make deep learning expensive to implement, particularly for smaller organizations or individuals.Black Box Nature: Deep learning models are often considered black boxes because they lack interpretability. It can be challenging to understand why a model makes a particular decision, which can be problematic in applications where interpretability is crucial, such as healthcare or finance.Overfitting: Deep learning models are susceptible to overfitting, where they memorize the training data instead of learning generalizable patterns. Techniques like regularization and dropout are used to mitigate overfitting, but it remains a significant challenge, especially with limited training data.Complexity and Expertise: Building and tuning deep learning models require expertise in neural network architectures, hyperparameter optimization, and computational techniques. Additionally, understanding and debugging deep learning algorithms can be challenging, requiring specialized knowledge and experience`
            },
            {
                "question": "What is the square root of 16?",
                "answer": "The square root of 16 is 4"
            }
        ],
        "Unit 2": [
            {
                "question": "What is 3 x 5?",
                "answer": "3 x 5 = 15"
            },
            {
                "question": "What is 10 - 7?",
                "answer": "10 - 7 = 3"
            }
        ]
    },
    "Science": {
        "Unit 1": [
            {
                "question": "What is the boiling point of water?",
                "answer": "The boiling point of water is 100°C"
            },
            {
                "question": "What is the chemical symbol for water?",
                "answer": "The chemical symbol for water is H2O"
            }
        ],
        "Unit 2": [
            {
                "question": "What is photosynthesis?",
                "answer": "Photosynthesis is the process by which green plants and some other organisms use sunlight to synthesize foods with the help of chlorophyll."
            },
            {
                "question": "What is the Earth's atmosphere made of?",
                "answer": "The Earth's atmosphere is primarily composed of nitrogen (about 78%) and oxygen (about 21%) with trace amounts of other gases."
            }
        ]
    }
};

const subjects = Object.keys(data);

const subjectsList = document.getElementById('subjects');
subjects.forEach(subject => {
    const listItem = document.createElement('li');
    listItem.textContent = subject;
    const unitList = document.createElement('ul');
    for (const unit in data[subject]) {
        if (data[subject].hasOwnProperty(unit)) {
            const unitItem = document.createElement('li');
            unitItem.textContent = unit;
            unitItem.addEventListener('click', () => {
                displayQuestions(subject, unit);
            });
            unitList.appendChild(unitItem);
        }
    }
    listItem.appendChild(unitList);
    subjectsList.appendChild(listItem);
});

function displayQuestions(subject, unit) {
    const questionsDiv = document.getElementById('questions');
    questionsDiv.innerHTML = '';

    const unitQuestions = data[subject][unit];
    unitQuestions.forEach(item => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.textContent = item.question;
        questionDiv.addEventListener('click', () => {
            toggleAnswer(questionDiv);
        });
        questionsDiv.appendChild(questionDiv);

        const answerDiv = document.createElement('div');
        answerDiv.classList.add('answer');
        answerDiv.textContent = item.answer;
        questionsDiv.appendChild(answerDiv);
    });
}

function toggleAnswer(questionDiv) {
    const answerDiv = questionDiv.nextElementSibling;

    if (answerDiv.style.display === 'block') {
        answerDiv.style.display = 'none';
    } else {
        answerDiv.style.display = 'block';
    }
}
// JavaScript code

let sidebarVisible = true; // Keep track of sidebar visibility

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    sidebar.style.display = sidebarVisible ? 'none' : 'block'; // Toggle display property
    content.style.marginLeft = sidebarVisible ? '0' : '250px'; // Adjust content margin
    sidebarVisible = !sidebarVisible; // Update visibility flag
}

// Add an event listener to the toggle button
const toggleButton = document.getElementById('toggle-sidebar-button');
toggleButton.addEventListener('click', toggleSidebar);
